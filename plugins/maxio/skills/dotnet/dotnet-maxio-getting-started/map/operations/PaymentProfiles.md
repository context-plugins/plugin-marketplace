# PaymentProfiles — operations

Accessor: `client.PaymentProfiles` · Source: `Api/PaymentProfiles.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChangeSubscriptionDefaultPaymentProfile
- **HTTP**: `POST /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json` (Production)
- **Notes**: Changes the default payment profile on the subscription to the existing payment profile with the specified ID. You must elect to change the existing payment profile to a new payment profile ID in order to receive a satisfactory response from this endpoint.
- **Signature**: `ChangeSubscriptionDefaultPaymentProfile(int subscriptionId, int paymentProfileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentProfileResponse`
- **Error**: `SdkException<ChangeSubscriptionDefaultPaymentProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ChangeSubscriptionGroupDefaultPaymentProfile
- **HTTP**: `POST /subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json` (Production)
- **Notes**: Changes the default payment profile on the subscription group to the existing payment profile with the specified ID. You must elect to change the existing payment profile to a new payment profile ID in order to receive a satisfactory response from this endpoint. The new payment profile must belong to the subscription group's customer, otherwise you will receive an error.
- **Signature**: `ChangeSubscriptionGroupDefaultPaymentProfile(string uid, int paymentProfileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentProfileResponse`
- **Error**: `SdkException<ChangeSubscriptionGroupDefaultPaymentProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePaymentProfile
- **HTTP**: `POST /payment_profiles.json` (Production)
- **Notes**: Creates a payment profile for a customer. When you create a new payment profile for a customer via the API, it does not automatically make the profile current for any of the customer’s subscriptions. To use the payment profile as the default, you must set it explicitly for the subscription or subscription group. Select an option from the Request Examples drop-down on the right side of the portal to see examples of common scenarios for creating payment profiles. Do not use real card information for testing. See the Sites articles that cover testing your site setup for more details on testing in your sandbox. Note that collecting and sending raw card details in production requires PCI compliance on your end. If your business is not PCI compliant, use Maxio.js (formerly Chargify.js) to collect credit card or bank account information. See the following articles to learn more about subscriptions and payments: Subscriber Payment Details Self Service Pages (Allows credit card updates by Subscriber) Public Signup Pages payment settings Taxes Maxio.js (formerly Chargify.js) Maxio.js with GoCardless - minimal example Maxio.js with GoCardless - full example Maxio.js with Stripe Direct Debit - minimal example Maxio.js with Stripe Direct Debit - full example Maxio.js with Stripe BECS Direct Debit - minimal example Maxio.js with Stripe BECS Direct Debit - full example Full documentation on GoCardless Full documentation on Stripe SEPA Direct Debit Full documentation on Stripe BECS Direct Debit Full documentation on Stripe BACS Direct Debit 3D Secure (3DS) Authentication post-authentication flow When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. See the 3D Secure Post-Authentication Flow article in the product documentation to learn how to manage the redirect flow.
- **Signature**: `CreatePaymentProfile(CreatePaymentProfileRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentProfileResponse`
- **Error**: `SdkException<CreatePaymentProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSubscriptionGroupPaymentProfile
- **HTTP**: `DELETE /subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json` (Production)
- **Notes**: Deletes a Payment Profile belonging to a Subscription Group. Note : If the Payment Profile belongs to multiple Subscription Groups and/or Subscriptions, it will be removed from all of them.
- **Signature**: `DeleteSubscriptionGroupPaymentProfile(string uid, int paymentProfileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSubscriptionsPaymentProfile
- **HTTP**: `DELETE /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json` (Production)
- **Notes**: Deletes a payment profile belonging to the customer on the subscription. If the customer has multiple subscriptions, the payment profile will be removed from all of them. If you delete the default payment profile for a subscription, you will need to specify another payment profile to be the default through the api, or either prompt the user to enter a card in the billing portal or on the self-service page, or visit the Payment Details tab on the subscription in the Admin UI and use the “Add New Credit Card” or “Make Active Payment Method” link, (depending on whether there are other cards present).
- **Signature**: `DeleteSubscriptionsPaymentProfile(int subscriptionId, int paymentProfileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUnusedPaymentProfile
- **HTTP**: `DELETE /payment_profiles/{payment_profile_id}.json` (Production)
- **Notes**: Deletes an unused payment profile. If the payment profile is in use by one or more subscriptions or groups, a 422 and error message will be returned.
- **Signature**: `DeleteUnusedPaymentProfile(int paymentProfileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteUnusedPaymentProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListPaymentProfiles
- **HTTP**: `GET /payment_profiles.json` (Production)
- **Notes**: Lists all active payment profiles for a site, or for one customer within a site. If no payment profiles are found, this endpoint will return an empty array, not a 404.
- **Signature**: `ListPaymentProfiles(int? customerId, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `customerId` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `customer_id` ← `customerId`
- **Returns**: `IReadOnlyList<PaymentProfileResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadOneTimeToken
- **HTTP**: `GET /one_time_tokens/{chargify_token}.json` (Production)
- **Notes**: Returns the one-time token data, including credit card or ACH details, associated with the provided token ID. One Time Tokens aka Advanced Billing Tokens house the credit card or ACH (Authorize.Net or Stripe only) data for a customer. You can use One Time Tokens while creating a subscription or payment profile instead of passing all bank account or credit card data directly to a given API endpoint. To obtain a One Time Token you have to use Chargify.js .
- **Signature**: `ReadOneTimeToken(string chargifyToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetOneTimeTokenRequest`
- **Error**: `SdkException<ReadOneTimeTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadPaymentProfile
- **HTTP**: `GET /payment_profiles/{payment_profile_id}.json` (Production)
- **Notes**: Returns a payment profile identified by its unique ID. Note that a different JSON object will be returned if the card method on file is a bank account. Response for Bank Account Example response for Bank Account: { "payment_profile": { "id": 10089892, "first_name": "Chester", "last_name": "Tester", "created_at": "2025-01-01T00:00:00-05:00", "updated_at": "2025-01-01T00:00:00-05:00", "customer_id": 14543792, "current_vault": "bogus", "vault_token": "0011223344", "billing_address": "456 Juniper Court", "billing_city": "Boulder", "billing_state": "CO", "billing_zip": "80302", "billing_country": "US", "customer_vault_token": null, "billing_address_2": "", "bank_name": "Bank of Kansas City", "masked_bank_routing_number": "XXXX6789", "masked_bank_account_number": "XXXX3344", "bank_account_type": "checking", "bank_account_holder_type": "personal", "payment_type": "bank_account", "site_gateway_setting_id": 1, "gateway_handle": null } }
- **Signature**: `ReadPaymentProfile(int paymentProfileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentProfileResponse`
- **Error**: `SdkException<ReadPaymentProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SendRequestUpdatePaymentEmail
- **HTTP**: `POST /subscriptions/{subscription_id}/request_payment_profiles_update.json` (Production)
- **Notes**: Sends a "request payment update" email to the customer associated with the subscription. If you attempt to send a "request payment update" email more than five times within a 30-minute period, you will receive a `422` response with an error message in the body. This error message will indicate that the request has been rejected due to excessive attempts, and will provide instructions on how to resubmit the request. Additionally, if you attempt to send a "request payment update" email for a subscription that does not exist, you will receive a `404` error response. This error message will indicate that the subscription could not be found, and will provide instructions on how to correct the error and resubmit the request. These error responses are designed to prevent excessive or invalid requests, and to provide clear and helpful information to users who encounter errors during the request process.
- **Signature**: `SendRequestUpdatePaymentEmail(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SendRequestUpdatePaymentEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePaymentProfile
- **HTTP**: `PUT /payment_profiles/{payment_profile_id}.json` (Production)
- **Notes**: Updates a payment profile. Partial Card Updates In the event that you are using the Authorize.net, Stripe, Cybersource, Forte or Braintree Blue payment gateways, you can update just the billing and contact information for a payment method. Note the lack of credit-card related data contained in the JSON payload. In this case, the following JSON is acceptable: { "payment_profile": { "first_name": "Kelly", "last_name": "Test", "billing_address": "789 Juniper Court", "billing_city": "Boulder", "billing_state": "CO", "billing_zip": "80302", "billing_country": "US", "billing_address_2": null } } The result will be that you have updated the billing information for the card, yet retained the original card number data. Specific notes on updating payment profiles Merchants with Authorize.net , Cybersource , Forte , Braintree Blue or Stripe as their payment gateway can update their Customer’s credit cards without passing in the full credit card number and CVV. If you are using Authorize.net , Cybersource , Forte , Braintree Blue or Stripe , Advanced Billing will ignore the credit card number and CVV when processing an update via the API, and attempt a partial update instead. If you wish to change the card number on a payment profile, you will need to create a new payment profile for the given customer. A Payment Profile cannot be updated with the attributes of another type of Payment Profile. For example, if the payment profile you are attempting to update is a credit card, you cannot pass in bank account attributes (like `bank_account_number`), and vice versa. Updating a payment profile directly will not trigger an attempt to capture a past-due balance. If this is the intent, update the card details via the Subscription instead. If you are using Authorize.net or Stripe, you may elect to manually trigger a retry for a past due subscription after a partial update.
- **Signature**: `UpdatePaymentProfile(int paymentProfileId, UpdatePaymentProfileRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentProfileResponse`
- **Error**: `SdkException<UpdatePaymentProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorStringMapResponse1(out ErrorStringMapResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifyBankAccount
- **HTTP**: `PUT /bank_accounts/{bank_account_id}/verification.json` (Production)
- **Notes**: Verifies a bank account. Submit the two small deposit amounts the customer received in their bank account to verify the bank account. (Stripe only)
- **Signature**: `VerifyBankAccount(int bankAccountId, BankAccountVerificationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BankAccountResponse`
- **Error**: `SdkException<VerifyBankAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
