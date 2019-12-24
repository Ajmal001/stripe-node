declare namespace Stripe {
  /**
   * The SourceTransaction object.
   */
  interface SourceTransaction {
    ach_credit_transfer?: {
      /**
       * Customer data associated with the transfer.
       */
      customer_data?: string;

      /**
       * Bank account fingerprint associated with the transfer.
       */
      fingerprint?: string;

      /**
       * Last 4 digits of the account number associated with the transfer.
       */
      last4?: string;

      /**
       * Routing number associated with the transfer.
       */
      routing_number?: string;
    };

    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
     */
    amount?: number;

    chf_credit_transfer?: {
      /**
       * Reference associated with the transfer.
       */
      reference?: string;

      /**
       * Sender's country address.
       */
      sender_address_country?: string;

      /**
       * Sender's line 1 address.
       */
      sender_address_line1?: string;

      /**
       * Sender's bank account IBAN.
       */
      sender_iban?: string;

      /**
       * Sender's name.
       */
      sender_name?: string;
    };

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    gbp_credit_transfer?: {
      /**
       * Bank account fingerprint associated with the transfer.
       */
      fingerprint?: string;

      /**
       * Last 4 digits of account number associated with the transfer.
       */
      last4?: string;

      /**
       * Sender entered arbitrary information about the transfer.
       */
      reference?: string;

      /**
       * Sender name associated with the transfer.
       */
      sender_name?: string;

      /**
       * Sort code associated with the transfer.
       */
      sort_code?: string;
    };

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'source_transaction';

    paper_check?: {
      /**
       * String unix time for the available date.
       */
      available_at?: string;

      /**
       * Invoice ID associated with the paper check.
       */
      invoices?: string;
    };

    sepa_credit_transfer?: {
      /**
       * Reference associated with the transfer.
       */
      reference?: string;

      /**
       * Sender's bank account IBAN.
       */
      sender_iban?: string;

      /**
       * Sender's name.
       */
      sender_name?: string;
    };

    /**
     * The ID of the source this transaction is attached to.
     */
    source?: string;

    /**
     * The status of the transaction, one of `succeeded`, `pending`, or `failed`.
     */
    status?: string;

    /**
     * The type of source this transaction is attached to.
     */
    type?:
      | 'ach_credit_transfer'
      | 'ach_debit'
      | 'alipay'
      | 'bancontact'
      | 'card'
      | 'card_present'
      | 'eps'
      | 'giropay'
      | 'ideal'
      | 'klarna'
      | 'multibanco'
      | 'p24'
      | 'sepa_debit'
      | 'sofort'
      | 'three_d_secure'
      | 'wechat';
  }
}