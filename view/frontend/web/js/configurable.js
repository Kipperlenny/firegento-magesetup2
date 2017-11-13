define([
    'jquery'
], function ($) {
    'use strict';

    return function (target) {
        /**
         * @mod Change the logic so that 'undefined' optionIds are left showing
         */
        target.prototype._displayRegularPriceBlock = function (optionId) {
            if (typeof optionId == 'undefined'
                || this.options.spConfig.optionPrices[optionId].oldPrice.amount
                != this.options.spConfig.optionPrices[optionId].finalPrice.amount
            ) {
                $(this.options.slyOldPriceSelector).show();
            } else {
                $(this.options.slyOldPriceSelector).hide();
            }
        };

        return target;
    };
});
