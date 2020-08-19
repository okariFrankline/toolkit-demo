module.exports = {
    construct: function(self, options) {
        // push the css
        self.pushAsset('stylesheet', 'vendors/mdi/css/materialdesignicons.min')
        self.pushAsset('stylesheet', 'vendors/feather/feather')
        self.pushAsset('stylesheet', 'vendors/base/vendor.bundle.base')
        self.pushAsset('stylesheet', 'vendors/flag-icon-css/css/flag-icon.min')
        self.pushAsset('stylesheet', 'vendors/font-awesome/css/font-awesome.min')
        self.pushAsset('stylesheet', 'vendors/jquery-bar-rating/fontawesome-stars-o')
        self.pushAsset('stylesheet', 'css/style.css')

        // push the scripts
        self.pushAsset('script', 'vendors/base/vendor.bundle.base')
        self.pushAsset('script', 'js/off-canvas.js')
        self.pushAsset('script', 'js/hoverable-collapse.js')
        self.pushAsset('script', 'js/template.js')
        self.pushAsset('script', 'vendors/jquery-bar-rating/jquery.barrating.min.js')
        self.pushAsset('script', 'js/dashboard.js')

    }
}