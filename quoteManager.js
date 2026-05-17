/**
 * Quote Manager - Handles the persistent state of the quote request
 */
const QuoteManager = {
    storageKey: 'moonj_quote_request',

    /**
     * Get all items in the current quote request
     */
    getItems() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    },

    /**
     * Add a product to the quote request
     */
    addItem(sku, variantIndex, quantity) {
        let items = this.getItems();
        quantity = parseInt(quantity);

        // Check if item with same SKU and variant already exists
        const existingIndex = items.findIndex(item => item.sku === sku && item.variantIndex === variantIndex);

        if (existingIndex > -1) {
            items[existingIndex].quantity += quantity;
        } else {
            items.push({ sku, variantIndex, quantity });
        }

        this.saveItems(items);
        this.updateBadge();
    },

    /**
     * Update quantity of an item
     */
    updateQuantity(sku, variantIndex, quantity) {
        let items = this.getItems();
        const index = items.findIndex(item => item.sku === sku && item.variantIndex === variantIndex);
        
        if (index > -1) {
            items[index].quantity = parseInt(quantity);
            if (items[index].quantity <= 0) {
                items.splice(index, 1);
            }
        }
        
        this.saveItems(items);
        this.updateBadge();
    },

    /**
     * Remove an item
     */
    removeItem(sku, variantIndex) {
        let items = this.getItems();
        items = items.filter(item => !(item.sku === sku && item.variantIndex === variantIndex));
        this.saveItems(items);
        this.updateBadge();
    },

    /**
     * Save items to localStorage
     */
    saveItems(items) {
        localStorage.setItem(this.storageKey, JSON.stringify(items));
    },

    /**
     * Calculate total quantity
     */
    getTotalQuantity() {
        return this.getItems().reduce((total, item) => total + item.quantity, 0);
    },

    /**
     * Update navigation badge if it exists
     */
    updateBadge() {
        const count = this.getItems().length;
        const badges = document.querySelectorAll('.quote-badge');
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-flex' : 'none';
        });
    }
};

// Initialize badge on load
document.addEventListener('DOMContentLoaded', () => QuoteManager.updateBadge());
