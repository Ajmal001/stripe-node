declare namespace Stripe {
  namespace Radar {
    /**
     * The EarlyFraudWarning object.
     */
    interface EarlyFraudWarning {
      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'radar.early_fraud_warning';

      /**
       * An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
       */
      actionable?: boolean;

      /**
       * ID of the charge this early fraud warning is for, optionally expanded.
       */
      charge?: string | Charge;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
       */
      fraud_type?: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;
    }

    interface EarlyFraudWarningRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface EarlyFraudWarningListParams {
      /**
       * Only return early fraud warnings for the charge specified by this charge ID.
       */
      charge?: string;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;
    }

    class EarlyFraudWarningsResource {
      /**
       * Retrieves the details of an early fraud warning that has previously been created.
       *
       * Please refer to the [early fraud warning](https://stripe.com/docs/api#early_fraud_warning_object) object reference for more details.
       */
      retrieve(
        id: string,
        params?: EarlyFraudWarningRetrieveParams,
        options?: RequestOptions
      ): Promise<Radar.EarlyFraudWarning>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Radar.EarlyFraudWarning>;

      /**
       * Returns a list of early fraud warnings.
       */
      list(
        params?: EarlyFraudWarningListParams,
        options?: RequestOptions
      ): ApiListPromise<Radar.EarlyFraudWarning>;
      list(options?: RequestOptions): ApiListPromise<Radar.EarlyFraudWarning>;
    }
  }
}