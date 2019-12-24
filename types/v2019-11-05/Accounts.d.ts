declare namespace Stripe {
  /**
   * The Account object.
   */
  interface Account {
    /**
     * Optional information related to the business.
     */
    business_profile: Account.BusinessProfile | null;

    /**
     * The business type. Can be `individual` or `company`.
     */
    business_type: string | null;

    capabilities: Account.Capabilities;

    /**
     * Whether the account can create live charges.
     */
    charges_enabled: boolean;

    company: Account.Company;

    /**
     * The account's country.
     */
    country: string;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency: string;

    /**
     * Whether account details have been submitted. Standard accounts cannot receive payouts before this is true.
     */
    details_submitted: boolean;

    /**
     * The primary user's email address.
     */
    email: string | null;

    /**
     * External accounts (bank accounts and debit cards) currently attached to this account
     */
    external_accounts: ApiList<BankAccount | Card>;

    /**
     * Unique identifier for the object.
     */
    id: string;

    individual: Person;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'account';

    /**
     * Whether Stripe can send payouts to this account.
     */
    payouts_enabled: boolean;

    requirements: Account.Requirements;

    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings: Account.Settings | null;

    tos_acceptance: Account.TosAcceptance;

    /**
     * The Stripe account type. Can be `standard`, `express`, or `custom`.
     */
    type: Account.Type;
  }

  namespace Account {
    interface BusinessProfile {
      /**
       * The merchant category code for the account. MCCs are used to classify businesses based on the goods or services they provide.
       */
      mcc?: string | null;

      /**
       * The customer-facing business name.
       */
      name?: string | null;

      /**
       * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
       */
      product_description?: string | null;

      /**
       * A publicly available mailing address for sending support issues to.
       */
      support_address?: Address | null;

      /**
       * A publicly available email address for sending support issues to.
       */
      support_email?: string | null;

      /**
       * A publicly available phone number to call with support issues.
       */
      support_phone?: string | null;

      /**
       * A publicly available website for handling support issues.
       */
      support_url?: string | null;

      /**
       * The business's publicly available website.
       */
      url?: string | null;
    }

    interface Capabilities {
      /**
       * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
       */
      card_issuing?: Capabilities.CardIssuing;

      /**
       * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
       */
      card_payments?: Capabilities.CardPayments;

      /**
       * The status of the legacy payments capability of the account.
       */
      legacy_payments?: Capabilities.LegacyPayments;

      /**
       * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
       */
      transfers?: Capabilities.Transfers;
    }

    namespace Capabilities {
      type CardIssuing = 'active' | 'inactive' | 'pending'

      type CardPayments = 'active' | 'inactive' | 'pending'

      type LegacyPayments = 'active' | 'inactive' | 'pending'

      type Transfers = 'active' | 'inactive' | 'pending'
    }

    interface Company {
      address?: Address;

      /**
       * The Kana variation of the company's primary address (Japan only).
       */
      address_kana?: Company.AddressKana | null;

      /**
       * The Kanji variation of the company's primary address (Japan only).
       */
      address_kanji?: Company.AddressKanji | null;

      /**
       * Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
       */
      directors_provided: boolean;

      /**
       * The company's legal name.
       */
      name?: string | null;

      /**
       * The Kana variation of the company's legal name (Japan only).
       */
      name_kana?: string | null;

      /**
       * The Kanji variation of the company's legal name (Japan only).
       */
      name_kanji?: string | null;

      /**
       * Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that all owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
       */
      owners_provided: boolean;

      /**
       * The company's phone number (used for verification).
       */
      phone?: string | null;

      /**
       * Whether the company's business ID number was provided.
       */
      tax_id_provided?: boolean;

      /**
       * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
       */
      tax_id_registrar?: string;

      /**
       * Whether the company's business VAT number was provided.
       */
      vat_id_provided?: boolean;

      /**
       * Information on the verification state of the company.
       */
      verification?: Company.Verification | null;
    }

    namespace Company {
      interface AddressKana {
        /**
         * City/Ward.
         */
        city?: string | null;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string | null;

        /**
         * Block/Building number.
         */
        line1?: string | null;

        /**
         * Building details.
         */
        line2?: string | null;

        /**
         * Zip/Postal Code.
         */
        postal_code?: string | null;

        /**
         * Prefecture.
         */
        state?: string | null;

        /**
         * Town/cho-me.
         */
        town?: string | null;
      }

      interface AddressKanji {
        /**
         * City/Ward.
         */
        city?: string | null;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string | null;

        /**
         * Block/Building number.
         */
        line1?: string | null;

        /**
         * Building details.
         */
        line2?: string | null;

        /**
         * Zip/Postal Code.
         */
        postal_code?: string | null;

        /**
         * Prefecture.
         */
        state?: string | null;

        /**
         * Town/cho-me.
         */
        town?: string | null;
      }

      interface Verification {
        document: Verification.Document;
      }

      namespace Verification {
        interface Document {
          /**
           * The back of a document returned by a [file upload](#create_file) with a `purpose` value of `additional_verification`.
           */
          back?: string | File | null;

          /**
           * A user-displayable string describing the verification state of this document.
           */
          details?: string | null;

          /**
           * One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document.
           */
          details_code?: string | null;

          /**
           * The front of a document returned by a [file upload](#create_file) with a `purpose` value of `additional_verification`.
           */
          front?: string | File | null;
        }
      }
    }

    interface Requirements {
      /**
       * The date the fields in `currently_due` must be collected by to keep payouts enabled for the account. These fields might block payouts sooner if the next threshold is reached before these fields are collected.
       */
      current_deadline?: number | null;

      /**
       * The fields that need to be collected to keep the account enabled. If not collected by the `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
       */
      currently_due?: Array<string> | null;

      /**
       * If the account is disabled, this string describes why the account can't create charges or receive payouts. Can be `requirements.past_due`, `requirements.pending_verification`, `rejected.fraud`, `rejected.terms_of_service`, `rejected.listed`, `rejected.other`, `listed`, `under_review`, or `other`.
       */
      disabled_reason?: string | null;

      /**
       * The fields that need to be collected assuming all volume thresholds are reached. As they become required, these fields appear in `currently_due` as well, and the `current_deadline` is set.
       */
      eventually_due?: Array<string> | null;

      /**
       * The fields that weren't collected by the `current_deadline`. These fields need to be collected to re-enable the account.
       */
      past_due?: Array<string> | null;

      /**
       * Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
       */
      pending_verification?: Array<string> | null;
    }

    interface Settings {
      branding: Settings.Branding;

      card_payments: Settings.CardPayments;

      dashboard: Settings.Dashboard;

      payments: Settings.Payments;

      payouts?: Settings.Payouts;
    }

    namespace Settings {
      interface Branding {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
         */
        icon?: string | File | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
         */
        logo?: string | File | null;

        /**
         * A CSS hex color value representing the primary branding color for this account
         */
        primary_color?: string | null;
      }

      interface CardPayments {
        decline_on?: CardPayments.DeclineOn;

        /**
         * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
         */
        statement_descriptor_prefix?: string | null;
      }

      namespace CardPayments {
        interface DeclineOn {
          /**
           * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
           */
          avs_failure: boolean;

          /**
           * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
           */
          cvc_failure: boolean;
        }
      }

      interface Dashboard {
        /**
         * The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
         */
        display_name?: string | null;

        /**
         * The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
         */
        timezone?: string | null;
      }

      interface Payments {
        /**
         * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
         */
        statement_descriptor?: string | null;

        /**
         * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only)
         */
        statement_descriptor_kana?: string | null;

        /**
         * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only)
         */
        statement_descriptor_kanji?: string | null;
      }

      interface Payouts {
        /**
         * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See our [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances) documentation for details. Default value is `true` for Express accounts and `false` for Custom accounts.
         */
        debit_negative_balances: boolean;

        schedule: Payouts.Schedule;

        /**
         * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
         */
        statement_descriptor?: string | null;
      }

      namespace Payouts {
        interface Schedule {
          /**
           * The number of days charges for the account will be held before being paid out.
           */
          delay_days: number;

          /**
           * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
           */
          interval: string;

          /**
           * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
           */
          monthly_anchor?: number;

          /**
           * The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.
           */
          weekly_anchor?: string;
        }
      }
    }

    interface TosAcceptance {
      /**
       * The Unix timestamp marking when the Stripe Services Agreement was accepted by the account representative
       */
      date?: number | null;

      /**
       * The IP address from which the Stripe Services Agreement was accepted by the account representative
       */
      ip?: string | null;

      /**
       * The user agent of the browser from which the Stripe Services Agreement was accepted by the account representative
       */
      user_agent?: string | null;
    }

    type Type = 'custom' | 'express' | 'standard'
  }

  interface DeletedAccount {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'account';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * The Capability object.
   */
  interface Capability {
    /**
     * The account for which the capability enables functionality.
     */
    account?: string | Account;

    /**
     * The identifier for the capability.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'capability';

    /**
     * Whether the capability has been requested.
     */
    requested?: boolean;

    /**
     * Time at which the capability was requested. Measured in seconds since the Unix epoch.
     */
    requested_at?: number | null;

    requirements?: Capability.Requirements;

    /**
     * The status of the capability. Can be `active`, `inactive`, `pending`, or `unrequested`.
     */
    status?: Capability.Status;
  }

  namespace Capability {
    interface Requirements {
      /**
       * The date the fields in `currently_due` must be collected by to keep the capability enabled for the account.
       */
      current_deadline?: number | null;

      /**
       * The fields that need to be collected to keep the capability enabled. If not collected by the `current_deadline`, these fields appear in `past_due` as well, and the capability is disabled.
       */
      currently_due: Array<string>;

      /**
       * If the capability is disabled, this string describes why. Possible values are `requirement.fields_needed`, `pending.onboarding`, `pending.review`, `rejected_fraud`, or `rejected.other`.
       */
      disabled_reason?: string | null;

      /**
       * The fields that need to be collected assuming all volume thresholds are reached. As they become required, these fields appear in `currently_due` as well, and the `current_deadline` is set.
       */
      eventually_due: Array<string>;

      /**
       * The fields that weren't collected by the `current_deadline`. These fields need to be collected to enable the capability for the account.
       */
      past_due: Array<string>;

      /**
       * Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
       */
      pending_verification: Array<string>;
    }

    type Status = 'active' | 'disabled' | 'inactive' | 'pending' | 'unrequested'
  }

  /**
   * The ExternalAccount object.
   */
  interface ExternalAccount {}

  /**
   * The LoginLink object.
   */
  interface LoginLink {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'login_link';

    /**
     * The URL for the login link.
     */
    url?: string;
  }

  /**
   * The Person object.
   */
  interface Person {
    /**
     * The account the person is associated with.
     */
    account: string;

    address: Address;

    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana: Person.AddressKana | null;

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji: Person.AddressKanji | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    dob: Person.Dob;

    /**
     * The person's email address.
     */
    email: string | null;

    /**
     * The person's first name.
     */
    first_name: string | null;

    /**
     * The Kana variation of the person's first name (Japan only).
     */
    first_name_kana: string | null;

    /**
     * The Kanji variation of the person's first name (Japan only).
     */
    first_name_kanji: string | null;

    /**
     * The person's gender (International regulations require either "male" or "female").
     */
    gender: string | null;

    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * Whether the person's `id_number` was provided.
     */
    id_number_provided: boolean;

    /**
     * The person's last name.
     */
    last_name: string | null;

    /**
     * The Kana variation of the person's last name (Japan only).
     */
    last_name_kana: string | null;

    /**
     * The Kanji variation of the person's last name (Japan only).
     */
    last_name_kanji: string | null;

    /**
     * The person's maiden name.
     */
    maiden_name: string | null;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'person';

    /**
     * The person's phone number.
     */
    phone: string | null;

    relationship: Person.Relationship;

    /**
     * Information about the requirements for this person, including what information needs to be collected, and by when.
     */
    requirements: Person.Requirements | null;

    /**
     * Whether the last 4 digits of this person's SSN have been provided.
     */
    ssn_last_4_provided: boolean;

    verification: Person.Verification;
  }

  namespace Person {
    interface AddressKana {
      /**
       * City/Ward.
       */
      city?: string | null;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string | null;

      /**
       * Block/Building number.
       */
      line1?: string | null;

      /**
       * Building details.
       */
      line2?: string | null;

      /**
       * Zip/Postal Code.
       */
      postal_code?: string | null;

      /**
       * Prefecture.
       */
      state?: string | null;

      /**
       * Town/cho-me.
       */
      town?: string | null;
    }

    interface AddressKanji {
      /**
       * City/Ward.
       */
      city?: string | null;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string | null;

      /**
       * Block/Building number.
       */
      line1?: string | null;

      /**
       * Building details.
       */
      line2?: string | null;

      /**
       * Zip/Postal Code.
       */
      postal_code?: string | null;

      /**
       * Prefecture.
       */
      state?: string | null;

      /**
       * Town/cho-me.
       */
      town?: string | null;
    }

    interface Dob {
      /**
       * The day of birth, between 1 and 31.
       */
      day?: number | null;

      /**
       * The month of birth, between 1 and 12.
       */
      month?: number | null;

      /**
       * The four-digit year of birth.
       */
      year?: number | null;
    }

    interface Relationship {
      /**
       * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
       */
      director?: boolean | null;

      /**
       * Whether the person has significant responsibility to control, manage, or direct the organization.
       */
      executive?: boolean | null;

      /**
       * Whether the person is an owner of the account's legal entity.
       */
      owner?: boolean | null;

      /**
       * The percent owned by the person of the account's legal entity.
       */
      percent_ownership?: number | null;

      /**
       * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
       */
      representative?: boolean | null;

      /**
       * The person's title (e.g., CEO, Support Engineer).
       */
      title?: string | null;
    }

    interface Requirements {
      /**
       * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
       */
      currently_due: Array<string>;

      /**
       * Fields that need to be collected assuming all volume thresholds are reached. As fields are needed, they are moved to `currently_due` and the account's `current_deadline` is set.
       */
      eventually_due: Array<string>;

      /**
       * Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable payouts for the person's account.
       */
      past_due: Array<string>;

      /**
       * Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
       */
      pending_verification: Array<string>;
    }

    interface Verification {
      /**
       * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
       */
      additional_document?: Verification.AdditionalDocument | null;

      /**
       * A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified".
       */
      details?: string | null;

      /**
       * One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
       */
      details_code?: string | null;

      document?: Verification.Document;

      /**
       * The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`.
       */
      status: string;
    }

    namespace Verification {
      interface AdditionalDocument {
        /**
         * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
         */
        back?: string | File | null;

        /**
         * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
         */
        details?: string | null;

        /**
         * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
         */
        details_code?: string | null;

        /**
         * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
         */
        front?: string | File | null;
      }

      interface Document {
        /**
         * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
         */
        back?: string | File | null;

        /**
         * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
         */
        details?: string | null;

        /**
         * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
         */
        details_code?: string | null;

        /**
         * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
         */
        front?: string | File | null;
      }
    }
  }interface DeletedPerson {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'person';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * With [Connect](https://stripe.com/docs/connect), you can create Stripe accounts for your users.
   * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
   *
   * For Standard accounts, parameters other than country, email, and type
   * are used to prefill the account application that we ask the account holder to complete.
   */
  interface AccountCreateParams {
    /**
     * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
     */
    account_token?: string;

    /**
     * Non-essential business information about the account
     */
    business_profile?: AccountCreateParams.BusinessProfile;

    /**
     * The business type. Can be `individual` or `company`.
     */
    business_type?: string;

    /**
     * Information about the company or business. This field is null unless `business_type` is set to `company`.
     */
    company?: AccountCreateParams.Company;

    /**
     * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created.
     */
    country?: string;

    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency?: string;

    /**
     * The email address of the account holder. For Custom accounts, this is only to make the account easier to identify to you: Stripe will never directly email your users.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A card or bank account to attach to the account. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe.js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation.
     *
     * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the bank account or card creation API.
     */
    external_account?: string;

    /**
     * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
     */
    individual?: AccountCreateParams.Individual;

    /**
     * A set of key-value pairs that you can attach to an `Account` object. This can be useful for storing additional information about the account in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The set of capabilities you want to unlock for this account. Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
     */
    requested_capabilities?: Array<AccountCreateParams.RequestedCapability>;

    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: AccountCreateParams.Settings;

    /**
     * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
     */
    tos_acceptance?: AccountCreateParams.TosAcceptance;

    /**
     * The type of Stripe account to create. Currently must be `custom`, as only [Custom accounts](https://stripe.com/docs/connect/custom-accounts) may be created via the API.
     */
    type?: AccountCreateParams.Type;
  }

  namespace AccountCreateParams {
    interface BusinessProfile {
      /**
       * The merchant category code for the account. MCCs are used to classify businesses based on the goods or services they provide.
       */
      mcc?: string;

      /**
       * The customer-facing business name.
       */
      name?: string;

      /**
       * Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
       */
      product_description?: string;

      /**
       * A publicly available email address for sending support issues to.
       */
      support_email?: string;

      /**
       * A publicly available phone number to call with support issues.
       */
      support_phone?: string;

      /**
       * A publicly available website for handling support issues.
       */
      support_url?: string;

      /**
       * The business's publicly available website.
       */
      url?: string;
    }

    interface Company {
      /**
       * The company's primary address.
       */
      address?: Company.Address;

      /**
       * The Kana variation of the company's primary address (Japan only).
       */
      address_kana?: Company.AddressKana;

      /**
       * The Kanji variation of the company's primary address (Japan only).
       */
      address_kanji?: Company.AddressKanji;

      /**
       * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
       */
      directors_provided?: boolean;

      /**
       * The company's legal name.
       */
      name?: string;

      /**
       * The Kana variation of the company's legal name (Japan only).
       */
      name_kana?: string;

      /**
       * The Kanji variation of the company's legal name (Japan only).
       */
      name_kanji?: string;

      /**
       * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.owner` requirement.
       */
      owners_provided?: boolean;

      /**
       * The company's phone number (used for verification).
       */
      phone?: string;

      /**
       * The business ID number of the company, as appropriate for the company's country. (Examples are an Employer ID Number in the U.S., a Business Number in Canada, or a Company Number in the UK.)
       */
      tax_id?: string;

      /**
       * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
       */
      tax_id_registrar?: string;

      /**
       * The VAT number of the company.
       */
      vat_id?: string;

      /**
       * Information on the verification state of the company.
       */
      verification?: Company.Verification;
    }

    namespace Company {
      interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }

      interface AddressKana {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface AddressKanji {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface Verification {
        /**
         * A document verifying the business.
         */
        document?: Verification.Document;
      }

      namespace Verification {
        interface Document {
          /**
           * The back of a document returned by a [file upload](#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of a document returned by a [file upload](#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          front?: string;
        }
      }
    }

    interface Individual {
      /**
       * The individual's primary address.
       */
      address?: Individual.Address;

      /**
       * The Kana variation of the the individual's primary address (Japan only).
       */
      address_kana?: Individual.AddressKana;

      /**
       * The Kanji variation of the the individual's primary address (Japan only).
       */
      address_kanji?: Individual.AddressKanji;

      /**
       * The individual's date of birth.
       */
      dob?: '' | Individual.Dob;

      email?: string;

      /**
       * The individual's first name.
       */
      first_name?: string;

      /**
       * The Kana variation of the the individual's first name (Japan only).
       */
      first_name_kana?: string;

      /**
       * The Kanji variation of the individual's first name (Japan only).
       */
      first_name_kanji?: string;

      /**
       * The individual's gender (International regulations require either "male" or "female").
       */
      gender?: string;

      /**
       * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
       */
      id_number?: string;

      /**
       * The individual's last name.
       */
      last_name?: string;

      /**
       * The Kana varation of the individual's last name (Japan only).
       */
      last_name_kana?: string;

      /**
       * The Kanji varation of the individual's last name (Japan only).
       */
      last_name_kanji?: string;

      /**
       * The individual's maiden name.
       */
      maiden_name?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The individual's phone number.
       */
      phone?: string;

      /**
       * The last four digits of the individual's Social Security Number (U.S. only).
       */
      ssn_last_4?: string;

      /**
       * The individual's verification document information.
       */
      verification?: Individual.Verification;
    }

    namespace Individual {
      interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }

      interface AddressKana {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface AddressKanji {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number;

        /**
         * The four-digit year of birth.
         */
        year: number;
      }

      interface Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        additional_document?: Verification.AdditionalDocument;

        /**
         * An identifying document, either a passport or local ID card.
         */
        document?: Verification.Document;
      }

      namespace Verification {
        interface AdditionalDocument {
          /**
           * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          front?: string;
        }

        interface Document {
          /**
           * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          front?: string;
        }
      }
    }

    type RequestedCapability =
      | 'card_issuing'
      | 'card_payments'
      | 'legacy_payments'
      | 'transfers'

    interface Settings {
      /**
       * Settings used to apply the account's branding to email receipts, invoices, Checkout, and other products.
       */
      branding?: Settings.Branding;

      /**
       * Settings specific to card charging on the account.
       */
      card_payments?: Settings.CardPayments;

      /**
       * Settings that apply across payment methods for charging on the account.
       */
      payments?: Settings.Payments;

      /**
       * Settings specific to the account's payouts.
       */
      payouts?: Settings.Payouts;
    }

    namespace Settings {
      interface Branding {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
         */
        icon?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
         */
        logo?: string;

        /**
         * A CSS hex color value representing the primary branding color for this account.
         */
        primary_color?: string;
      }

      interface CardPayments {
        /**
         * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
         */
        decline_on?: CardPayments.DeclineOn;

        /**
         * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
         */
        statement_descriptor_prefix?: string;
      }

      namespace CardPayments {
        interface DeclineOn {
          /**
           * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
           */
          avs_failure?: boolean;

          /**
           * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
           */
          cvc_failure?: boolean;
        }
      }

      interface Payments {
        /**
         * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
         */
        statement_descriptor?: string;

        /**
         * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only).
         */
        statement_descriptor_kana?: string;

        /**
         * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only).
         */
        statement_descriptor_kanji?: string;
      }

      interface Payouts {
        /**
         * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances).
         */
        debit_negative_balances?: boolean;

        /**
         * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://stripe.com/docs/connect/bank-transfers#payout-information) documentation.
         */
        schedule?: Payouts.Schedule;

        /**
         * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
         */
        statement_descriptor?: string;
      }

      namespace Payouts {
        interface Schedule {
          /**
           * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter does not apply when the `interval` is `manual`.
           */
          delay_days?: 'minimum' | number;

          /**
           * How frequently available funds are paid out. One of: `daily`, `manual`, `weekly`, or `monthly`. Default is `daily`.
           */
          interval?: Schedule.Interval;

          /**
           * The day of the month when available funds are paid out, specified as a number between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly`.
           */
          monthly_anchor?: number;

          /**
           * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. (required and applicable only if `interval` is `weekly`.)
           */
          weekly_anchor?: Schedule.WeeklyAnchor;
        }

        namespace Schedule {
          type Interval = 'daily' | 'manual' | 'monthly' | 'weekly'

          type WeeklyAnchor =
            | 'friday'
            | 'monday'
            | 'saturday'
            | 'sunday'
            | 'thursday'
            | 'tuesday'
            | 'wednesday'
        }
      }
    }

    interface TosAcceptance {
      /**
       * The Unix timestamp marking when the account representative accepted the Stripe Services Agreement.
       */
      date?: number;

      /**
       * The IP address from which the account representative accepted the Stripe Services Agreement.
       */
      ip?: string;

      /**
       * The user agent of the browser from which the account representative accepted the Stripe Services Agreement.
       */
      user_agent?: string;
    }

    type Type = 'custom' | 'express' | 'standard'
  }

  /**
   * With [Connect](https://stripe.com/docs/connect), you can delete Custom or Express accounts you manage.
   *
   * Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.
   *
   * If you want to delete your own account, use the [data tab in your account settings](https://dashboard.stripe.com/account/data) instead.
   */
  interface AccountDelParams {}

  /**
   * Returns a list of accounts connected to your platform via [Connect](https://stripe.com/docs/connect). If you're not a platform, the list is empty.
   */
  interface AccountListParams {
    created?: number | AccountListParams.Created;

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

  namespace AccountListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }
  }

  /**
   * With [Connect](https://stripe.com/docs/connect), you may flag accounts as suspicious.
   *
   * Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.
   */
  interface AccountRejectParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
     */
    reason: string;
  }

  /**
   * Retrieves the details of an account.
   */
  interface AccountRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates a connected [Express or Custom account](https://stripe.com/docs/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked Custom Only below.) Parameters marked Custom and Express are supported by both account types.
   *
   * To update your own account, use the [Dashboard](https://dashboard.stripe.com/account). Refer to our [Connect](https://stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
   */
  interface AccountUpdateParams {
    /**
     * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
     */
    account_token?: string;

    /**
     * Non-essential business information about the account
     */
    business_profile?: AccountUpdateParams.BusinessProfile;

    /**
     * The business type. Can be `individual` or `company`.
     */
    business_type?: string;

    /**
     * Information about the company or business. This field is null unless `business_type` is set to `company`.
     */
    company?: AccountUpdateParams.Company;

    /**
     * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
     */
    default_currency?: string;

    /**
     * Email address of the account representative. For Standard accounts, this is used to ask them to claim their Stripe account. For Custom accounts, this only makes the account easier to identify to platforms; Stripe does not email the account representative.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A card or bank account to attach to the account. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe.js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation.
     *
     * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the bank account or card creation API.
     */
    external_account?: string;

    /**
     * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
     */
    individual?: AccountUpdateParams.Individual;

    /**
     * A set of key-value pairs that you can attach to an `Account` object. This can be useful for storing additional information about the account in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The set of capabilities you want to unlock for this account. Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
     */
    requested_capabilities?: Array<AccountUpdateParams.RequestedCapability>;

    /**
     * Options for customizing how the account functions within Stripe.
     */
    settings?: AccountUpdateParams.Settings;

    /**
     * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
     */
    tos_acceptance?: AccountUpdateParams.TosAcceptance;
  }

  namespace AccountUpdateParams {
    interface BusinessProfile {
      /**
       * The merchant category code for the account. MCCs are used to classify businesses based on the goods or services they provide.
       */
      mcc?: string;

      /**
       * The customer-facing business name.
       */
      name?: string;

      /**
       * Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
       */
      product_description?: string;

      /**
       * A publicly available email address for sending support issues to.
       */
      support_email?: string;

      /**
       * A publicly available phone number to call with support issues.
       */
      support_phone?: string;

      /**
       * A publicly available website for handling support issues.
       */
      support_url?: string;

      /**
       * The business's publicly available website.
       */
      url?: string;
    }

    interface Company {
      /**
       * The company's primary address.
       */
      address?: Company.Address;

      /**
       * The Kana variation of the company's primary address (Japan only).
       */
      address_kana?: Company.AddressKana;

      /**
       * The Kanji variation of the company's primary address (Japan only).
       */
      address_kanji?: Company.AddressKanji;

      /**
       * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
       */
      directors_provided?: boolean;

      /**
       * The company's legal name.
       */
      name?: string;

      /**
       * The Kana variation of the company's legal name (Japan only).
       */
      name_kana?: string;

      /**
       * The Kanji variation of the company's legal name (Japan only).
       */
      name_kanji?: string;

      /**
       * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.owner` requirement.
       */
      owners_provided?: boolean;

      /**
       * The company's phone number (used for verification).
       */
      phone?: string;

      /**
       * The business ID number of the company, as appropriate for the company's country. (Examples are an Employer ID Number in the U.S., a Business Number in Canada, or a Company Number in the UK.)
       */
      tax_id?: string;

      /**
       * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
       */
      tax_id_registrar?: string;

      /**
       * The VAT number of the company.
       */
      vat_id?: string;

      /**
       * Information on the verification state of the company.
       */
      verification?: Company.Verification;
    }

    namespace Company {
      interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }

      interface AddressKana {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface AddressKanji {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface Verification {
        /**
         * A document verifying the business.
         */
        document?: Verification.Document;
      }

      namespace Verification {
        interface Document {
          /**
           * The back of a document returned by a [file upload](#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of a document returned by a [file upload](#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          front?: string;
        }
      }
    }

    interface Individual {
      /**
       * The individual's primary address.
       */
      address?: Individual.Address;

      /**
       * The Kana variation of the the individual's primary address (Japan only).
       */
      address_kana?: Individual.AddressKana;

      /**
       * The Kanji variation of the the individual's primary address (Japan only).
       */
      address_kanji?: Individual.AddressKanji;

      /**
       * The individual's date of birth.
       */
      dob?: '' | Individual.Dob;

      email?: string;

      /**
       * The individual's first name.
       */
      first_name?: string;

      /**
       * The Kana variation of the the individual's first name (Japan only).
       */
      first_name_kana?: string;

      /**
       * The Kanji variation of the individual's first name (Japan only).
       */
      first_name_kanji?: string;

      /**
       * The individual's gender (International regulations require either "male" or "female").
       */
      gender?: string;

      /**
       * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
       */
      id_number?: string;

      /**
       * The individual's last name.
       */
      last_name?: string;

      /**
       * The Kana varation of the individual's last name (Japan only).
       */
      last_name_kana?: string;

      /**
       * The Kanji varation of the individual's last name (Japan only).
       */
      last_name_kanji?: string;

      /**
       * The individual's maiden name.
       */
      maiden_name?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The individual's phone number.
       */
      phone?: string;

      /**
       * The last four digits of the individual's Social Security Number (U.S. only).
       */
      ssn_last_4?: string;

      /**
       * The individual's verification document information.
       */
      verification?: Individual.Verification;
    }

    namespace Individual {
      interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }

      interface AddressKana {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface AddressKanji {
        /**
         * City or ward.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Block or building number.
         */
        line1?: string;

        /**
         * Building details.
         */
        line2?: string;

        /**
         * Postal code.
         */
        postal_code?: string;

        /**
         * Prefecture.
         */
        state?: string;

        /**
         * Town or cho-me.
         */
        town?: string;
      }

      interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number;

        /**
         * The four-digit year of birth.
         */
        year: number;
      }

      interface Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        additional_document?: Verification.AdditionalDocument;

        /**
         * An identifying document, either a passport or local ID card.
         */
        document?: Verification.Document;
      }

      namespace Verification {
        interface AdditionalDocument {
          /**
           * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          front?: string;
        }

        interface Document {
          /**
           * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
           */
          front?: string;
        }
      }
    }

    type RequestedCapability =
      | 'card_issuing'
      | 'card_payments'
      | 'legacy_payments'
      | 'transfers'

    interface Settings {
      /**
       * Settings used to apply the account's branding to email receipts, invoices, Checkout, and other products.
       */
      branding?: Settings.Branding;

      /**
       * Settings specific to card charging on the account.
       */
      card_payments?: Settings.CardPayments;

      /**
       * Settings that apply across payment methods for charging on the account.
       */
      payments?: Settings.Payments;

      /**
       * Settings specific to the account's payouts.
       */
      payouts?: Settings.Payouts;
    }

    namespace Settings {
      interface Branding {
        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
         */
        icon?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
         */
        logo?: string;

        /**
         * A CSS hex color value representing the primary branding color for this account.
         */
        primary_color?: string;
      }

      interface CardPayments {
        /**
         * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
         */
        decline_on?: CardPayments.DeclineOn;

        /**
         * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
         */
        statement_descriptor_prefix?: string;
      }

      namespace CardPayments {
        interface DeclineOn {
          /**
           * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
           */
          avs_failure?: boolean;

          /**
           * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
           */
          cvc_failure?: boolean;
        }
      }

      interface Payments {
        /**
         * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
         */
        statement_descriptor?: string;

        /**
         * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only).
         */
        statement_descriptor_kana?: string;

        /**
         * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only).
         */
        statement_descriptor_kanji?: string;
      }

      interface Payouts {
        /**
         * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances).
         */
        debit_negative_balances?: boolean;

        /**
         * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://stripe.com/docs/connect/bank-transfers#payout-information) documentation.
         */
        schedule?: Payouts.Schedule;

        /**
         * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
         */
        statement_descriptor?: string;
      }

      namespace Payouts {
        interface Schedule {
          /**
           * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter does not apply when the `interval` is `manual`.
           */
          delay_days?: 'minimum' | number;

          /**
           * How frequently available funds are paid out. One of: `daily`, `manual`, `weekly`, or `monthly`. Default is `daily`.
           */
          interval?: Schedule.Interval;

          /**
           * The day of the month when available funds are paid out, specified as a number between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly`.
           */
          monthly_anchor?: number;

          /**
           * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. (required and applicable only if `interval` is `weekly`.)
           */
          weekly_anchor?: Schedule.WeeklyAnchor;
        }

        namespace Schedule {
          type Interval = 'daily' | 'manual' | 'monthly' | 'weekly'

          type WeeklyAnchor =
            | 'friday'
            | 'monday'
            | 'saturday'
            | 'sunday'
            | 'thursday'
            | 'tuesday'
            | 'wednesday'
        }
      }
    }

    interface TosAcceptance {
      /**
       * The Unix timestamp marking when the account representative accepted the Stripe Services Agreement.
       */
      date?: number;

      /**
       * The IP address from which the account representative accepted the Stripe Services Agreement.
       */
      ip?: string;

      /**
       * The user agent of the browser from which the account representative accepted the Stripe Services Agreement.
       */
      user_agent?: string;
    }
  }

  /**
   * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
   */
  interface AccountListCapabilitiesParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Retrieves information about the specified Account Capability.
   */
  interface AccountRetrieveCapabilityParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing Account Capability.
   */
  interface AccountUpdateCapabilityParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
     */
    requested?: boolean;
  }

  /**
   * Create an external account for a given account.
   */
  interface AccountCreateExternalAccountParams {
    /**
     * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
     */
    default_for_currency?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Please refer to full [documentation](https://stripe.com/docs/api) instead.
     */
    external_account: string;

    /**
     * A set of key-value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Delete a specified external account for a given account.
   */
  interface AccountDeleteExternalAccountParams {}

  /**
   * List external accounts for an account.
   */
  interface AccountListExternalAccountsParams {
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

  /**
   * Retrieve a specified external account for a given account.
   */
  interface AccountRetrieveExternalAccountParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the metadata, account holder name, and account holder type of a bank account belonging to a [Custom account](https://stripe.com/docs/connect/custom-accounts), and optionally sets it as the default for its currency. Other bank account details are not editable by design.
   * You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.
   */
  interface AccountUpdateExternalAccountParams {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name?: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?:
      | ''
      | AccountUpdateExternalAccountParams.AccountHolderType;

    /**
     * City/District/Suburb/Town/Village.
     */
    address_city?: string;

    /**
     * Billing address country, if provided when creating card.
     */
    address_country?: string;

    /**
     * Address line 1 (Street address/PO Box/Company name).
     */
    address_line1?: string;

    /**
     * Address line 2 (Apartment/Suite/Unit/Building).
     */
    address_line2?: string;

    /**
     * State/County/Province/Region.
     */
    address_state?: string;

    /**
     * ZIP or postal code.
     */
    address_zip?: string;

    /**
     * When set to true, this becomes the default external account for its currency.
     */
    default_for_currency?: boolean;

    /**
     * Two digit number representing the card's expiration month.
     */
    exp_month?: string;

    /**
     * Four digit number representing the card's expiration year.
     */
    exp_year?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    metadata?: {
      [key: string]: string;
    };

    /**
     * Cardholder name.
     */
    name?: string;
  }

  namespace AccountUpdateExternalAccountParams {
    type AccountHolderType = 'company' | 'individual'
  }

  /**
   * Creates a single-use login link for an Express account to access their Stripe dashboard.
   *
   * You may only create login links for [Express accounts](https://stripe.com/docs/connect/express-accounts) connected to your platform.
   */
  interface AccountCreateLoginLinkParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Where to redirect the user after they log out of their dashboard.
     */
    redirect_url?: string;
  }

  /**
   * Creates a new person.
   */
  interface AccountCreatePersonParams {
    /**
     * The person's address.
     */
    address?: AccountCreatePersonParams.Address;

    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana?: AccountCreatePersonParams.AddressKana;

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji?: AccountCreatePersonParams.AddressKanji;

    /**
     * The person's date of birth.
     */
    dob?: '' | AccountCreatePersonParams.Dob;

    /**
     * The person's email address.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The person's first name.
     */
    first_name?: string;

    /**
     * The Kana variation of the person's first name (Japan only).
     */
    first_name_kana?: string;

    /**
     * The Kanji variation of the person's first name (Japan only).
     */
    first_name_kanji?: string;

    /**
     * The person's gender (International regulations require either "male" or "female").
     */
    gender?: string;

    /**
     * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
     */
    id_number?: string;

    /**
     * The person's last name.
     */
    last_name?: string;

    /**
     * The Kana variation of the person's last name (Japan only).
     */
    last_name_kana?: string;

    /**
     * The Kanji variation of the person's last name (Japan only).
     */
    last_name_kanji?: string;

    /**
     * The person's maiden name.
     */
    maiden_name?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
     */
    person_token?: string;

    /**
     * The person's phone number.
     */
    phone?: string;

    /**
     * The relationship that this person has with the account's legal entity.
     */
    relationship?: AccountCreatePersonParams.Relationship;

    /**
     * The last 4 digits of the person's social security number.
     */
    ssn_last_4?: string;

    /**
     * The person's verification status.
     */
    verification?: AccountCreatePersonParams.Verification;
  }

  namespace AccountCreatePersonParams {
    interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      line1?: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      line2?: string;

      /**
       * ZIP or postal code.
       */
      postal_code?: string;

      /**
       * State, county, province, or region.
       */
      state?: string;
    }

    interface AddressKana {
      /**
       * City or ward.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Block or building number.
       */
      line1?: string;

      /**
       * Building details.
       */
      line2?: string;

      /**
       * Postal code.
       */
      postal_code?: string;

      /**
       * Prefecture.
       */
      state?: string;

      /**
       * Town or cho-me.
       */
      town?: string;
    }

    interface AddressKanji {
      /**
       * City or ward.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Block or building number.
       */
      line1?: string;

      /**
       * Building details.
       */
      line2?: string;

      /**
       * Postal code.
       */
      postal_code?: string;

      /**
       * Prefecture.
       */
      state?: string;

      /**
       * Town or cho-me.
       */
      town?: string;
    }

    interface Dob {
      /**
       * The day of birth, between 1 and 31.
       */
      day: number;

      /**
       * The month of birth, between 1 and 12.
       */
      month: number;

      /**
       * The four-digit year of birth.
       */
      year: number;
    }

    interface Relationship {
      /**
       * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
       */
      director?: boolean;

      /**
       * Whether the person has significant responsibility to control, manage, or direct the organization.
       */
      executive?: boolean;

      /**
       * Whether the person is an owner of the account's legal entity.
       */
      owner?: boolean;

      /**
       * The percent owned by the person of the account's legal entity.
       */
      percent_ownership?: number | '';

      /**
       * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
       */
      representative?: boolean;

      /**
       * The person's title (e.g., CEO, Support Engineer).
       */
      title?: string;
    }

    interface Verification {
      /**
       * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
       */
      additional_document?: Verification.AdditionalDocument;

      /**
       * An identifying document, either a passport or local ID card.
       */
      document?: Verification.Document;
    }

    namespace Verification {
      interface AdditionalDocument {
        /**
         * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        back?: string;

        /**
         * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        front?: string;
      }

      interface Document {
        /**
         * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        back?: string;

        /**
         * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        front?: string;
      }
    }
  }

  /**
   * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
   */
  interface AccountDeletePersonParams {}

  /**
   * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
   */
  interface AccountListPersonsParams {
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
     * Filters on the list of people returned based on the person's relationship to the account's company.
     */
    relationship?: AccountListPersonsParams.Relationship;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace AccountListPersonsParams {
    interface Relationship {
      /**
       * A filter on the list of people returned based on whether these people are directors of the account's company.
       */
      director?: boolean;

      /**
       * A filter on the list of people returned based on whether these people are executives of the account's company.
       */
      executive?: boolean;

      /**
       * A filter on the list of people returned based on whether these people are owners of the account's company.
       */
      owner?: boolean;

      /**
       * A filter on the list of people returned based on whether these people are the representative of the account's company.
       */
      representative?: boolean;
    }
  }

  /**
   * Retrieves an existing person.
   */
  interface AccountRetrievePersonParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing person.
   */
  interface AccountUpdatePersonParams {
    /**
     * The person's address.
     */
    address?: AccountUpdatePersonParams.Address;

    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana?: AccountUpdatePersonParams.AddressKana;

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji?: AccountUpdatePersonParams.AddressKanji;

    /**
     * The person's date of birth.
     */
    dob?: '' | AccountUpdatePersonParams.Dob;

    /**
     * The person's email address.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The person's first name.
     */
    first_name?: string;

    /**
     * The Kana variation of the person's first name (Japan only).
     */
    first_name_kana?: string;

    /**
     * The Kanji variation of the person's first name (Japan only).
     */
    first_name_kanji?: string;

    /**
     * The person's gender (International regulations require either "male" or "female").
     */
    gender?: string;

    /**
     * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
     */
    id_number?: string;

    /**
     * The person's last name.
     */
    last_name?: string;

    /**
     * The Kana variation of the person's last name (Japan only).
     */
    last_name_kana?: string;

    /**
     * The Kanji variation of the person's last name (Japan only).
     */
    last_name_kanji?: string;

    /**
     * The person's maiden name.
     */
    maiden_name?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
     */
    person_token?: string;

    /**
     * The person's phone number.
     */
    phone?: string;

    /**
     * The relationship that this person has with the account's legal entity.
     */
    relationship?: AccountUpdatePersonParams.Relationship;

    /**
     * The last 4 digits of the person's social security number.
     */
    ssn_last_4?: string;

    /**
     * The person's verification status.
     */
    verification?: AccountUpdatePersonParams.Verification;
  }

  namespace AccountUpdatePersonParams {
    interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      line1?: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      line2?: string;

      /**
       * ZIP or postal code.
       */
      postal_code?: string;

      /**
       * State, county, province, or region.
       */
      state?: string;
    }

    interface AddressKana {
      /**
       * City or ward.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Block or building number.
       */
      line1?: string;

      /**
       * Building details.
       */
      line2?: string;

      /**
       * Postal code.
       */
      postal_code?: string;

      /**
       * Prefecture.
       */
      state?: string;

      /**
       * Town or cho-me.
       */
      town?: string;
    }

    interface AddressKanji {
      /**
       * City or ward.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Block or building number.
       */
      line1?: string;

      /**
       * Building details.
       */
      line2?: string;

      /**
       * Postal code.
       */
      postal_code?: string;

      /**
       * Prefecture.
       */
      state?: string;

      /**
       * Town or cho-me.
       */
      town?: string;
    }

    interface Dob {
      /**
       * The day of birth, between 1 and 31.
       */
      day: number;

      /**
       * The month of birth, between 1 and 12.
       */
      month: number;

      /**
       * The four-digit year of birth.
       */
      year: number;
    }

    interface Relationship {
      /**
       * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
       */
      director?: boolean;

      /**
       * Whether the person has significant responsibility to control, manage, or direct the organization.
       */
      executive?: boolean;

      /**
       * Whether the person is an owner of the account's legal entity.
       */
      owner?: boolean;

      /**
       * The percent owned by the person of the account's legal entity.
       */
      percent_ownership?: number | '';

      /**
       * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
       */
      representative?: boolean;

      /**
       * The person's title (e.g., CEO, Support Engineer).
       */
      title?: string;
    }

    interface Verification {
      /**
       * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
       */
      additional_document?: Verification.AdditionalDocument;

      /**
       * An identifying document, either a passport or local ID card.
       */
      document?: Verification.Document;
    }

    namespace Verification {
      interface AdditionalDocument {
        /**
         * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        back?: string;

        /**
         * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        front?: string;
      }

      interface Document {
        /**
         * The back of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        back?: string;

        /**
         * The front of an ID returned by a [file upload](#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG or PNG format, and less than 10 MB in size.
         */
        front?: string;
      }
    }
  }

  class AccountsResource {
    /**
     * With [Connect](https://stripe.com/docs/connect), you can create Stripe accounts for your users.
     * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
     *
     * For Standard accounts, parameters other than country, email, and type
     * are used to prefill the account application that we ask the account holder to complete.
     */
    create(
      params?: AccountCreateParams,
      options?: RequestOptions
    ): Promise<Account>;

    /**
     * With [Connect](https://stripe.com/docs/connect), you can delete Custom or Express accounts you manage.
     *
     * Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.
     *
     * If you want to delete your own account, use the [data tab in your account settings](https://dashboard.stripe.com/account/data) instead.
     */
    del(
      id: string,
      params?: AccountDelParams,
      options?: RequestOptions
    ): Promise<DeletedAccount>;

    /**
     * Returns a list of accounts connected to your platform via [Connect](https://stripe.com/docs/connect). If you're not a platform, the list is empty.
     */
    list(
      params?: AccountListParams,
      options?: RequestOptions
    ): ApiListPromise<Account>;

    /**
     * With [Connect](https://stripe.com/docs/connect), you may flag accounts as suspicious.
     *
     * Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.
     */
    reject(
      id: string,
      params: AccountRejectParams,
      options?: RequestOptions
    ): Promise<Account>;

    /**
     * Retrieves the details of an account.
     */
    retrieve(
      params?: AccountRetrieveParams,
      options?: RequestOptions
    ): Promise<Account>;

    /**
     * Updates a connected [Express or Custom account](https://stripe.com/docs/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked Custom Only below.) Parameters marked Custom and Express are supported by both account types.
     *
     * To update your own account, use the [Dashboard](https://dashboard.stripe.com/account). Refer to our [Connect](https://stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
     */
    update(
      id: string,
      params?: AccountUpdateParams,
      options?: RequestOptions
    ): Promise<Account>;

    /**
     * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
     */
    listCapabilities(
      id: string,
      params?: AccountListCapabilitiesParams,
      options?: RequestOptions
    ): ApiListPromise<Capability>;

    /**
     * Retrieves information about the specified Account Capability.
     */
    retrieveCapability(
      accountId: string,
      id: string,
      params?: AccountRetrieveCapabilityParams,
      options?: RequestOptions
    ): Promise<Capability>;

    /**
     * Updates an existing Account Capability.
     */
    updateCapability(
      accountId: string,
      id: string,
      params?: AccountUpdateCapabilityParams,
      options?: RequestOptions
    ): Promise<Capability>;

    /**
     * Create an external account for a given account.
     */
    createExternalAccount(
      id: string,
      params: AccountCreateExternalAccountParams,
      options?: RequestOptions
    ): Promise<BankAccount | Card>;

    /**
     * Delete a specified external account for a given account.
     */
    deleteExternalAccount(
      accountId: string,
      id: string,
      params?: AccountDeleteExternalAccountParams,
      options?: RequestOptions
    ): Promise<BankAccount | Card>;

    /**
     * List external accounts for an account.
     */
    listExternalAccounts(
      id: string,
      params?: AccountListExternalAccountsParams,
      options?: RequestOptions
    ): ApiListPromise<BankAccount | Card>;

    /**
     * Retrieve a specified external account for a given account.
     */
    retrieveExternalAccount(
      accountId: string,
      id: string,
      params?: AccountRetrieveExternalAccountParams,
      options?: RequestOptions
    ): Promise<BankAccount | Card>;

    /**
     * Updates the metadata, account holder name, and account holder type of a bank account belonging to a [Custom account](https://stripe.com/docs/connect/custom-accounts), and optionally sets it as the default for its currency. Other bank account details are not editable by design.
     * You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.
     */
    updateExternalAccount(
      accountId: string,
      id: string,
      params?: AccountUpdateExternalAccountParams,
      options?: RequestOptions
    ): Promise<BankAccount | Card>;

    /**
     * Creates a single-use login link for an Express account to access their Stripe dashboard.
     *
     * You may only create login links for [Express accounts](https://stripe.com/docs/connect/express-accounts) connected to your platform.
     */
    createLoginLink(
      id: string,
      params?: AccountCreateLoginLinkParams,
      options?: RequestOptions
    ): Promise<LoginLink>;

    /**
     * Creates a new person.
     */
    createPerson(
      id: string,
      params?: AccountCreatePersonParams,
      options?: RequestOptions
    ): Promise<Person>;

    /**
     * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
     */
    deletePerson(
      accountId: string,
      id: string,
      params?: AccountDeletePersonParams,
      options?: RequestOptions
    ): Promise<DeletedPerson>;

    /**
     * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
     */
    listPersons(
      id: string,
      params?: AccountListPersonsParams,
      options?: RequestOptions
    ): ApiListPromise<Person>;

    /**
     * Retrieves an existing person.
     */
    retrievePerson(
      accountId: string,
      id: string,
      params?: AccountRetrievePersonParams,
      options?: RequestOptions
    ): Promise<Person>;

    /**
     * Updates an existing person.
     */
    updatePerson(
      accountId: string,
      id: string,
      params?: AccountUpdatePersonParams,
      options?: RequestOptions
    ): Promise<Person>;
  }
}