# Records (`ApiErrorResponse` … `TravelData`)

**Exact coverage: `ApiErrorResponse` through `TravelData`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `PazeCheckoutApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `ApiErrorResponse` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string !req`, `TimestampIso8601 (timestampISO8601): DateTimeOffset !req`, `Error (error): ErrorMessage?` | `Models/ApiErrorResponse.cs` |
| `ApiErrorResponseError` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string !req`, `TimestampIso8601 (timestampISO8601): DateTimeOffset !req`, `Error (error): ErrorMessage?` | `Models/ApiErrorResponseError.cs` |
| `ApiResponseMetadata` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string !req`, `TimestampIso8601 (timestampISO8601): DateTimeOffset !req` | `Models/ApiResponseMetadata.cs` |
| `BaseResponse` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string?`, `TimestampIso8601 (timestampISO8601): DateTimeOffset?`, `StatusCode (statusCode): string?`, `StatusText (statusText): string?` | `Models/BaseResponse.cs` |
| `BaseResponseError` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string?`, `TimestampIso8601 (timestampISO8601): DateTimeOffset?`, `StatusCode (statusCode): string?`, `StatusText (statusText): string?` | `Models/BaseResponseError.cs` |
| `CheckoutSessionCompleteRequest` | — | `ClientContext (clientContext): string?`, `Data (data): CompleteSessionData !req` | `Models/CheckoutSessionCompleteRequest.cs` |
| `CheckoutSessionCompleteResponse` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string !req`, `TimestampIso8601 (timestampISO8601): DateTimeOffset !req`, `Data (data): CompleteSessionResponseData?` | `Models/CheckoutSessionCompleteResponse.cs` |
| `CheckoutSessionCreateRequest` | — | `ClientContext (clientContext): string?`, `Data (data): CreateSessionData !req` | `Models/CheckoutSessionCreateRequest.cs` |
| `CheckoutSessionCreateResponse` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string !req`, `TimestampIso8601 (timestampISO8601): DateTimeOffset !req`, `Data (data): CreateSessionResponseData?` | `Models/CheckoutSessionCreateResponse.cs` |
| `CheckoutSessionReviewRequest` | — | `ClientContext (clientContext): string?`, `Data (data): ReviewSessionData !req` | `Models/CheckoutSessionReviewRequest.cs` |
| `CheckoutSessionReviewResponse` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string !req`, `TimestampIso8601 (timestampISO8601): DateTimeOffset !req`, `Data (data): ReviewSessionResponseData?` | `Models/CheckoutSessionReviewResponse.cs` |
| `Client` | — | `Id (id): string !req`, `Name (name): string?`, `ProfileId (profileId): string?` | `Models/Client.cs` |
| `CompleteSessionData` | — | `SessionId (sessionId): string !req`, `Code (code): string !req`, `TransactionType (transactionType): TransactionType !req`, `ProcessingNetwork (processingNetwork): ProcessingNetwork?`, `TransactionOptions (transactionOptions): TransactionOptions?`, `TransactionValue (transactionValue): TransactionValue?`, `EnhancedTransactionData (enhancedTransactionData): EnhancedTransactionData?` | `Models/CompleteSessionData.cs` |
| `CompleteSessionResponseData` | — | `PayloadId (payloadId): string !req`, `SecurePayload (securePayload): string?` | `Models/CompleteSessionResponseData.cs` |
| `Consumer` | — | `FirstName (firstName): string?`, `LastName (lastName): string?`, `FullName (fullName): string !req`, `EmailAddress (emailAddress): string !req`, `MobileNumber (mobileNumber): Phone?` | `Models/Consumer.cs` |
| `CreateSessionData` | — | `Client (client): Client !req`, `SessionId (sessionId): string !req`, `CallbackUrlscheme (callbackURLScheme): string !req`, `Intent (intent): Intent?`, `PhoneNumber (phoneNumber): string?`, `EmailAddress (emailAddress): string?`, `TransactionType (transactionType): TransactionType?`, `TransactionValue (transactionValue): TransactionValue?` | `Models/CreateSessionData.cs` |
| `CreateSessionResponseData` | — | `CanCheckout (canCheckout): bool !req`, `CheckoutUrl (checkoutUrl): string?` | `Models/CreateSessionResponseData.cs` |
| `Data` | — | `Id (id): string?` | `Models/Data.cs` |
| `EcommerceData` | — | `CartContainsGiftCard (cartContainsGiftCard): bool?`, `OrderForPickup (orderForPickup): bool?`, `OrderHighestCost (orderHighestCost): string?`, `OrderQuantity (orderQuantity): string?`, `FinalShippingAddress (finalShippingAddress): ShippingAddress?` | `Models/EcommerceData.cs` |
| `EnhancedTransactionData` | — | `EcomData (ecomData): EcommerceData?`, `TravelData (travelData): TravelData?` | `Models/EnhancedTransactionData.cs` |
| `ErrorDetail` | — | `Reason (reason): string?`, `Source (source): string?`, `Message (message): string?` | `Models/ErrorDetail.cs` |
| `ErrorMessage` | — | `Reason (reason): string !req`, `Message (message): string !req`, `Details (details): IReadOnlyList<ErrorDetail>?` | `Models/ErrorMessage.cs` |
| `Links` | — | `ChangeCard (CHANGE_CARD): string?`, `ChangeShippingAddress (CHANGE_SHIPPING_ADDRESS): string?` | `Models/Links.cs` |
| `MaskedCard` | — | `PanLastFour (panLastFour): string !req`, `PaymentAccountReference (paymentAccountReference): string !req`, `PaymentCardDescriptor (paymentCardDescriptor): string?`, `PaymentCardType (paymentCardType): PaymentCardType?`, `PaymentCardBrand (paymentCardBrand): PaymentCardBrand?` | `Models/MaskedCard.cs` |
| `MerchantAddress` | — | `Line1 (line1): string !req`, `Line2 (line2): string?`, `City (city): string !req`, `State (state): string !req`, `ZipCode (zipCode): string !req` | `Models/MerchantAddress.cs` |
| `MerchantOnboardData` | — | `LegalName (legalName): string !req`, `TradeName (tradeName): string?`, `Url (url): string !req`, `Address (address): MerchantAddress !req`, `Key (key): OnboardMerchantKey !req`, `Profile (profile): IReadOnlyList<MerchantProfile> !req` | `Models/MerchantOnboardData.cs` |
| `MerchantOnboardRequest` | — | `ClientContext (clientContext): string?`, `Data (data): MerchantOnboardData !req` | `Models/MerchantOnboardRequest.cs` |
| `MerchantProfile` | — | `ProfileId (profileId): string?`, `DomainName (domainName): string?`, `MerchantCategoryCode (merchantCategoryCode): string !req` | `Models/MerchantProfile.cs` |
| `MerchantResponse` | — | `ClientContext (clientContext): string?`, `EwSid (ewSID): string?`, `TimestampIso8601 (timestampISO8601): DateTimeOffset?`, `StatusCode (statusCode): string?`, `StatusText (statusText): string?`, `Data (data): Data?` | `Models/MerchantResponse.cs` |
| `OauthTokenRequest` | — | `GrantType (grant_type): GrantType !req`, `ClientAssertion (client_assertion): string !req`, `ClientAssertionType (client_assertion_type): ClientAssertionType !req` | `Models/OauthTokenRequest.cs` |
| `OauthTokenResponse` | — | `AccessToken (access_token): string !req`, `ExpiresIn (expires_in): int !req`, `TokenType (token_type): string !req` | `Models/OauthTokenResponse.cs` |
| `OnboardMerchantKey` | — | `PartnerId (partnerId): string?`, `PartnerKeyAlias (partnerKeyAlias): string?`, `Certificate (certificate): string?`, `KeyAlias (keyAlias): string?`, `KeyExpiry (keyExpiry): DateTimeOffset?` | `Models/OnboardMerchantKey.cs` |
| `Phone` | — | `CountryCode (countryCode): string?`, `PhoneNumber (phoneNumber): string?` | `Models/Phone.cs` |
| `ReviewSessionData` | — | `SessionId (sessionId): string !req`, `Code (code): string !req` | `Models/ReviewSessionData.cs` |
| `ReviewSessionResponseData` | — | `Consumer (consumer): Consumer !req`, `MaskedCard (maskedCard): MaskedCard !req`, `ShippingAddress (shippingAddress): ShippingAddress?`, `Code (code): string !req`, `Links (links): Links?` | `Models/ReviewSessionResponseData.cs` |
| `ShippingAddress` | — | `Line1 (line1): string?`, `City (city): string?`, `State (state): string?`, `Zip (zip): string?`, `CountryCode (countryCode): string?` | `Models/ShippingAddress.cs` |
| `SimpleError` | — | `Error (error): string !req` | `Models/SimpleError.cs` |
| `SimpleErrorError` | — | `Error (error): string !req` | `Models/SimpleErrorError.cs` |
| `TransactionOptions` | — | `MerchantCategoryCode (merchantCategoryCode): string?`, `BillingPreference (billingPreference): BillingPreference?`, `PayloadTypeIndicator (payloadTypeIndicator): PayloadTypeIndicator?` | `Models/TransactionOptions.cs` |
| `TransactionValue` | — | `TransactionCurrency (transactionCurrency): string !req`, `TransactionAmount (transactionAmount): string !req` | `Models/TransactionValue.cs` |
| `TravelData` | — | `PassengerName (passengerName): string?`, `RoundTrip (roundTrip): bool?`, `DepartureDate (departureDate): DateTimeOffset?`, `ReturnDate (returnDate): DateTimeOffset?` | `Models/TravelData.cs` |
