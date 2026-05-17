const products = [
    {
        sku: 'ST_01',
        name: 'Serving Tray',
        category: 'Serving Trays',
        variants: [
            { size: '', upperDia: '10', depth: '2.0', other: '', price: '320', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/ST_01/img.1.png',
        images: ['images/ST_01/img.1.png', 'images/ST_01/img 2.png', 'images/ST_01/Img 3.jpeg']
    },
    {
        sku: 'ST_02',
        name: 'Serving Tray',
        category: 'Serving Trays',
        variants: [
            { size: '', upperDia: '10', depth: '3.0', other: '', price: '320', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/ST_02/Image 1.png',
        images: ['images/ST_02/Image 1.png', 'images/ST_02/Image 2.png', 'images/ST_02/Image 3.png']
    },
    {
        sku: 'ST_03',
        name: 'Serving Tray',
        category: 'Serving Trays',
        variants: [
            { size: '', upperDia: '11', depth: '2.5', other: '', price: '280', notes: 'Available in different colours' }
        ],
        heroImage: 'images/ST_03/Img.1.png',
        images: ['images/ST_03/Img.1.png', 'images/ST_03/img.2.png', 'images/ST_03/img.3.png', 'images/ST_03/img.4.png', 'images/ST_03/img.5.png']
    },
    {
        sku: 'SL_01',
        name: 'Multipurpose Storage Basket / Roti Box',
        category: 'Multipurpose / Roti Baskets',
        variants: [
            { size: 'Small (S)', upperDia: '8', depth: '3.5', other: '', price: '440', notes: 'Available in different colours & sizes' },
            { size: 'Medium (M)', upperDia: '10', depth: '4.5', other: '', price: '480', notes: 'Available in different colours & sizes' },
            { size: 'Large (L)', upperDia: '12', depth: '5.5', other: '', price: '520', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/SL_01/Image_for_ecommerce_202605030047.jpeg',
        images: ['images/SL_01/Image_for_ecommerce_202605030047.jpeg', 'images/SL_01/Generate_image_white_background_202605030049.jpeg', 'images/SL_01/Img 3.png']
    },
    {
        sku: 'SL_02',
        name: 'Multipurpose Storage Basket / Roti Box',
        category: 'Multipurpose / Roti Baskets',
        variants: [
            { size: 'Small (S)', upperDia: '8', depth: '6.5', other: '', price: '400', notes: 'Available in different colours & sizes' },
            { size: 'Medium (M)', upperDia: '10', depth: '7.5', other: '', price: '440', notes: 'Available in different colours & sizes' },
            { size: 'Large (L)', upperDia: '12', depth: '8.5', other: '', price: '480', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/SL_02/img1.jpg',
        images: ['images/SL_02/img1.jpg', 'images/SL_02/img2.jpg', 'images/SL_02/Img 3.png']
    },
    {
        sku: 'SL_05',
        name: 'Multipurpose Storage Basket / Roti Box',
        category: 'Multipurpose / Roti Baskets',
        variants: [
            { size: 'Small (S)', upperDia: '8', depth: '4', other: '', price: '440', notes: 'Available in different colours & sizes' },
            { size: 'Medium (M)', upperDia: '10', depth: '5', other: '', price: '480', notes: 'Available in different colours & sizes' },
            { size: 'Large (L)', upperDia: '12', depth: '6', other: '', price: '520', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/SL_05/Img 1.jpg',
        images: ['images/SL_05/Img 1.jpg', 'images/SL_05/Img 2.jpg', 'images/SL_05/Img 3.png']
    },
    {
        sku: 'SL_06',
        name: 'Multipurpose Basket / Gift Box',
        category: 'Multipurpose / Roti Baskets',
        variants: [
            { size: '', upperDia: '10', depth: '6.0', other: '', price: '440', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/SL_06/img 1.jpeg',
        images: ['images/SL_06/img 1.jpeg', 'images/SL_06/img 2.jpeg']
    },
    {
        sku: 'SL_07',
        name: 'Multipurpose Storage Basket / Roti Box',
        category: 'Multipurpose / Roti Baskets',
        variants: [
            { size: 'Small (S)', upperDia: '8', depth: '6.5', other: '', price: '440', notes: 'Available in different colours & sizes' },
            { size: 'Medium (M)', upperDia: '10', depth: '7.5', other: '', price: '480', notes: 'Available in different colours & sizes' },
            { size: 'Large (L)', upperDia: '12', depth: '8.5', other: '', price: '520', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/SL_07/Image_for_ecommerce_background_202605030055.jpeg',
        images: ['images/SL_07/Image_for_ecommerce_background_202605030055.jpeg', 'images/SL_07/Img 2.jpg']
    },
    {
        sku: 'SL_08',
        name: 'Multipurpose Storage Basket',
        category: 'Multipurpose / Roti Baskets',
        variants: [
            { size: 'Small (S)', upperDia: '8', depth: '3.5', other: '', price: '440', notes: 'With handle & lid; available in different colours & sizes' },
            { size: 'Medium (M)', upperDia: '10', depth: '4.5', other: '', price: '480', notes: 'With handle & lid; available in different colours & sizes' },
            { size: 'Large (L)', upperDia: '12', depth: '5.5', other: 'With handle & lid; available in different colours & sizes' }
        ],
        heroImage: 'images/SL_08/Generate_image_white_background_202605030058.jpeg',
        images: ['images/SL_08/Generate_image_white_background_202605030058.jpeg', 'images/SL_08/3Wy7W.jpg', 'images/SL_08/DXUd8.jpg']
    },
    {
        sku: 'SL_09',
        name: 'Large Laundry Basket',
        category: 'Laundry & Storage',
        variants: [
            { size: '', upperDia: '11', depth: '12.0', other: 'Base: 9"', price: '1200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/SL_09/yqQGN.jpg',
        images: ['images/SL_09/yqQGN.jpg', 'images/SL_09/JYCxC.jpg']
    },
    {
        sku: 'SL_10',
        name: 'Multipurpose Storage Basket / Roti Box',
        category: 'Multipurpose / Roti Baskets',
        variants: [
            { size: 'Small (S)', upperDia: '8', depth: '6.5', other: '', price: '440', notes: 'Available in different colours & sizes' },
            { size: 'Medium (M)', upperDia: '10', depth: '7.5', other: '', price: '480', notes: 'Available in different colours & sizes' },
            { size: 'Large (L)', upperDia: '12', depth: '8.5', other: '', price: '520', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/SL_10/Regenerate_image_white_backgroun…_202605030105.jpeg',
        images: ['images/SL_10/Regenerate_image_white_backgroun…_202605030105.jpeg', 'images/SL_10/Regenerate_image_white_backgroun…_202605030107.jpeg', 'images/SL_10/Gemini_Generated_Image_66e7ct66e7ct66e7.png', 'images/SL_10/Gemini_Generated_Image_srp3w2srp3w2srp3 (1).png']
    },
    {
        sku: 'TC_01',
        name: 'Cup Coaster (Set of 6 with holder)',
        category: 'Tea Coasters',
        variants: [
            { size: '', upperDia: '3.5', depth: '0.5', other: '', price: '360', notes: 'Includes woven holder basket; available in different colours' }
        ],
        heroImage: 'images/TC_01/Gemini_Generated_Image_dza1lsdza1lsdza1.png',
        images: ['images/TC_01/Gemini_Generated_Image_dza1lsdza1lsdza1.png', 'images/TC_01/Gemini_Generated_Image_u769m8u769m8u769.png']
    },
    {
        sku: 'BK_02',
        name: 'Plain Fruit Basket',
        category: 'Fruit Baskets',
        variants: [
            { size: '', upperDia: '10', depth: '6.0', other: '', price: '280', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/BK_02/Image 1.jpg',
        images: ['images/BK_02/Image 1.jpg', 'images/BK_02/img 2.png', 'images/BK_02/img 3.jpg', 'images/BK_02/img 4.jpg']
    },
    {
        sku: 'BK_03',
        name: 'Plain Fruit Basket',
        category: 'Fruit Baskets',
        variants: [
            { size: '', upperDia: '10', depth: '6.0', other: '', price: '280', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/BK_03/Img.1.jpg',
        images: ['images/BK_03/Img.1.jpg', 'images/BK_03/Img.2.jpg', 'images/BK_03/Img 3.jpg']
    },
    {
        sku: 'BK_04',
        name: 'Fruit Basket',
        category: 'Fruit Baskets',
        variants: [
            { size: '', upperDia: '10', depth: '5.2', other: '', price: '280', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/BK_04/Img 1.jpg',
        images: ['images/BK_04/Img 1.jpg', 'images/BK_04/img 2.jpg', 'images/BK_04/img 3.jpg']
    },
    {
        sku: 'BK_05',
        name: 'Fruit Basket',
        category: 'Fruit Baskets',
        variants: [
            { size: '', upperDia: '10', depth: '4.5', other: '', price: '280', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/BK_05/img. 1.jpg',
        images: ['images/BK_05/img. 1.jpg', 'images/BK_05/img. 2.png', 'images/BK_05/img. 3.png']
    },
    {
        sku: 'DK_02',
        name: 'Stationery / Pen Stand',
        category: 'Desk Organiser',
        variants: [
            { size: '', upperDia: '5', depth: '3.5', other: '', price: '200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/DK_02/imge 1.jpeg',
        images: ['images/DK_02/imge 1.jpeg', 'images/DK_02/Img 2.png']
    },
    {
        sku: 'DK_03',
        name: 'Stationery / Pen Stand',
        category: 'Desk Organiser',
        variants: [
            { size: '', upperDia: '4', depth: '5.0', other: '', price: '200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/DK_03/Img_1.png_202605030017.jpeg',
        images: ['images/DK_03/Img_1.png_202605030017.jpeg', 'images/DK_03/Img_1.png_202605030018.jpeg', 'images/DK_03/Img 3.png']
    },
    {
        sku: 'LB_01',
        name: 'Small Laundry Basket',
        category: 'Laundry & Storage',
        variants: [
            { size: '', upperDia: '11', depth: '10.0', other: 'Base: 9"', price: '1200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/LB_01/img258.jpg',
        images: ['images/LB_01/img258.jpg', 'images/LB_01/img259.jpg']
    },
    {
        sku: 'LB_02',
        name: 'Large Laundry Basket',
        category: 'Laundry & Storage',
        variants: [
            { size: '', upperDia: '16', depth: '15.0', other: 'Base: 14"', price: '1200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/LB_02/img266.jpg',
        images: ['images/LB_02/img266.jpg', 'images/LB_02/img267.jpg']
    },
    {
        sku: 'LB_03',
        name: 'Container (with Lid)',
        category: 'Laundry & Storage',
        variants: [
            { size: 'Medium (M)', upperDia: '14', depth: '14', other: '14" × 14"', price: '1200', notes: 'Available in different colours & sizes' },
            { size: 'Large (L)', upperDia: '16', depth: '16', other: '16" × 16"', price: '1200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/LB_03/img246.jpg',
        images: ['images/LB_03/img246.jpg', 'images/LB_03/img247.jpg']
    },
    {
        sku: 'LB_04',
        name: 'Large Laundry Basket',
        category: 'Laundry & Storage',
        variants: [
            { size: '', upperDia: '16', depth: '15.0', other: 'Base: 14"', price: '1200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/LB_04/FDB7t.jpg',
        images: ['images/LB_04/FDB7t.jpg', 'images/LB_04/Gemini_Generated_Image_41z4uq41z4uq41z4 (1).png']
    },
    {
        sku: 'LB_05',
        name: 'Medium Laundry Basket',
        category: 'Laundry & Storage',
        variants: [
            { size: '', upperDia: '14', depth: '13.0', other: 'Base: 12"', price: '1200', notes: 'Available in different colours & sizes' }
        ],
        heroImage: 'images/LB_05/img262.jpg',
        images: ['images/LB_05/img262.jpg', 'images/LB_05/img263.jpg']
    }
];

const collections = [
    {
        id: 'tabletop',
        name: 'Tabletop Collection',
        description: 'Perfect for dining and serving, featuring trays and coasters.',
        image: 'images/Content Images/img280.jpg',
        skus: ['ST_01', 'ST_03', 'TC_01']
    },
    {
        id: 'kitchen-roti',
        name: 'Kitchen & Roti Basket Set',
        description: 'Our signature roti boxes and multipurpose baskets for a sustainable kitchen.',
        image: 'images/Content Images/img281.jpg',
        skus: ['SL_01', 'SL_05', 'SL_07']
    },
    {
        id: 'laundry-storage',
        name: 'Laundry & Storage Set',
        description: 'Large and medium baskets for organizing your home with natural fibers.',
        image: 'images/Content Images/img282.jpg',
        skus: ['SL_09', 'LB_02', 'LB_03']
    },
    {
        id: 'gift-hamper',
        name: 'Gift Hamper Bases Pack',
        description: 'Versatile baskets that serve as beautiful bases for gifting.',
        image: 'images/Content Images/img283.jpg',
        skus: ['BK_02', 'BK_04', 'SL_06']
    }
];

// =============================================================================
// GALLERY CONFIGURATION
// =============================================================================
// To add/remove images: just add or remove filenames from the 'images' array below.
// The 'folder' path is relative to 'images/Content Images/'
// 'type' can be: 'images' or 'videos'
// 'videoSrc' is only needed for video sections (points to actual video file or YouTube embed)
// =============================================================================

const gallerySections = [
    {
        id: 'artisan-life',
        title: 'Artisan Life',
        subtitle: 'Meet the skilled women behind every weave',
        folder: 'image-gallery/artisan-life',
        type: 'images',
        display: 'grid' // grid, carousel, masonry
    },
    {
        id: 'craft-process',
        title: 'The Crafting Process',
        subtitle: 'From riverbank to finished product',
        folder: 'image-gallery/process',
        type: 'images',
        display: 'carousel'
    },
    {
        id: 'product-showcase',
        title: 'Product Showcase',
        subtitle: 'Our handcrafted collection in detail',
        folder: 'image-gallery/product-showcase',
        type: 'images',
        display: 'carousel'
    },
    {
        id: 'lifestyle',
        title: 'Lifestyle',
        subtitle: 'Moonj products in modern homes',
        folder: 'image-gallery/lifestyle',
        type: 'images',
        display: 'carousel'
    }
    // {
    //     id: 'promo-videos',
    //     title: 'Promo Videos',
    //     subtitle: 'Watch our story come to life',
    //     folder: 'video-gallery/promos',
    //     type: 'videos',
    //     display: 'carousel',
    //     thumbnailFolder: 'video-gallery/promos' // same as folder for thumbnails
    // }
];

// Individual images for each section - add/remove filenames as needed
const galleryImages = {
    'artisan-life': [
        'Kiran Devi.jpg',
        'Rama Prajapati.jpg',
        'Sabina Khatoon.jpg',
        'Kunti Devi.jpg',
        'Anshika Pandey.jpg',
        'Aaradhya Singh.jpg',
        'img275.jpg'
    ],
    'craft-process': [
        'img40.jpg',
        'img56.jpg',
        'img57.jpg',
        'img58.jpg'
    ],
    'product-showcase': [
        'Img 1.png',
        'Img 2.png',
        'Img 3.png',
        'Img 4.png',
        'Img 5.png',
        'Img 6.png',
        'Img 7.jpeg',
        'Img 8.png',
        'Img 9.png'
    ],
    'lifestyle': [
        'img275.jpg',
        'img280-1.jpg',
        'img282-1.jpg',
        'img283-1.jpg',
        'img59.jpg'
    ]
};

// Video thumbnails and sources
const galleryVideos = {
'promo-videos': [
        {
            thumbnail: 'img281.jpg',
            videoSrc: 'https://www.youtube.com/embed/example',
            title: 'MoonjCraft Story'
        },
        {
            thumbnail: 'img282.jpg',
            videoSrc: 'https://www.youtube.com/embed/example2',
            title: 'Artisan Stories'
        },
        {
            thumbnail: 'img283.jpg',
            videoSrc: 'https://www.youtube.com/embed/example3',
            title: 'Crafting Process'
        }
    ]
};

// Testimonials - Add/remove testimonial data here
const testimonials = [
    {
        quote: "We carry MoonjCraft in our sustainable home store in Amsterdam. Our customers love the authenticity — the product is honest, the story is real, and the quality holds up. We've reordered three times already.",
        name: "Eva Brouwer",
        title: "International Buyer, Amsterdam",
        avatar: "Eva Brouwer.jpg"
    },
    {
        quote: "I ordered a set of Moonj baskets for my home and I keep getting compliments. The craft is beautiful and knowing the story behind them makes them even more special. Truly authentic Indian craft.",
        name: "Priya Mehta",
        title: "Customer, Mumbai",
        avatar: "Priya Mehta.jpg"
    },
    {
        quote: "The quality of MoonjCraft products exceeded our expectations. Each piece is a work of art that reflects the rich heritage of Indian craftsmanship. Our clients absolutely love them.",
        name: "Sarah Chen",
        title: "Store Owner, Singapore",
        avatar: "Sarah Chen.jpg"
    },
    {
        quote: "Working with MoonjCraft has been a wonderful experience. Their commitment to quality and the artisan community shines through in every product we receive.",
        name: "Michael Torres",
        title: "Wholesale Partner, USA",
        avatar: "Michael Torres.jpg"
    }
];

// Helper function to get images for a section
function getGalleryImages(sectionId) {
    return galleryImages[sectionId] || [];
}

// Helper function to get videos for a section
function getGalleryVideos(sectionId) {
    return galleryVideos[sectionId] || [];
}

// =============================================================================
// LEGACY GALLERY SUPPORT (for homepage carousel)
// =============================================================================

// Gallery Images - For homepage carousel only
const legacyGalleryImages = [
    'lifestyle/img275.jpg',
    'lifestyle/img280-1.jpg',
    'process/img282-1.jpg',
    'lifestyle/img283-1.jpg',
    'product-showcase/img40.jpg',
    'product-showcase/img42.jpg',
    'product-showcase/img45-1.jpg',
    'product-showcase/img45.jpg'
];

// Video Thumbnails - For homepage carousel only
const legacyVideoThumbnails = [
    'promos/img281.jpg',
    'promos/img282.jpg',
    'promos/img283.jpg'
];

// Legacy function for homepage gallery
function generateGalleryHTML() {
    const imageTrack = document.querySelector('.gallery-images-track');
    const videoTrack = document.querySelector('.gallery-video-track');

    if (imageTrack) {
        imageTrack.innerHTML = legacyGalleryImages.map(img =>
            `<div class="gallery-image-item"><img src="images/Content Images/${img}" alt="Gallery Image"></div>`
        ).join('');
    }

    if (videoTrack) {
        videoTrack.innerHTML = legacyVideoThumbnails.map(img =>
            `<div class="gallery-video-item">
                <img src="images/Content Images/${img}" alt="Video">
                <div class="video-overlay">
                    <div class="play-btn">▶</div>
                </div>
            </div>`
        ).join('');
    }
}

// Function to generate Testimonials HTML
function generateTestimonialsHTML() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    
    if (testimonialTrack) {
        testimonialTrack.innerHTML = testimonials.map(t => 
            `<div class="testimonial-card">
                <div class="testimonial-author">
                    <div class="testimonial-avatar">
                        <img src="images/Content Images/testimonial/${t.avatar}" alt="${t.name}">
                    </div>
                    <div class="testimonial-info">
                        <h4>${t.name}</h4>
                        <p>${t.title}</p>
                    </div>
                </div>
                <div class="testimonial-quote">"${t.quote}"</div>
            </div>`
        ).join('');
    }
}
