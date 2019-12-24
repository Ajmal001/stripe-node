declare namespace Stripe {
  /**
   * The Discount object.
   */
  interface Discount {
    coupon: Coupon;

    customer: string | Customer | null;

    /**
     * If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
     */
    end: number | null;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'discount';

    /**
     * Date that the coupon was applied.
     */
    start: number;

    /**
     * The subscription that this coupon is applied to, if it is applied to a particular subscription.
     */
    subscription: string | null;
  }

  interface DeletedDiscount {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'discount';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }
}