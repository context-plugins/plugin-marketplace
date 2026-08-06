# RestrictionApi — operations

Accessor: `client.RestrictionApi` · Source: `Api/RestrictionApi.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApplyRestriction
- **HTTP**: `POST /card-restrictions/v1/update` (OauthServer (api-test))
- **Notes**: The Card Limit and Restriction API is REST-based and employs Basic and ApiKey authentication. The API endpoints accept JSON-encoded request bodies, return JSON-encoded responses and use standard HTTP response codes. All resources are located in the Shell Card Platform. The Shell Card Platform is the overall platform that encompasses all the internal Shell systems used to manage resources. The internal workings of the platform are not important when interacting with the API. However, it is worth noting that the platform uses to communicate with various backend systems and some API calls are processed asynchronously. All endpoints use the `POST` verb for retrieving, updating, creating and deleting resources in the Shell Card Platform. The endpoints that retrieve resources from the Shell Card Platform allow flexible search parameters in the API request body. Important Note - This operation allows setting or updating the restrictions on existing cards. (For up to 3 cards in a single call). All restrictions of the cards are submitted and executed after successful below condition. • The card exists. • Day time restriction cannot be set to restrict the use of a card on all days of the week i.e., the values for all the days in the restriction cannot be set to false. • Either of the usage, daytime, location or product restriction ‘Reset’ is set to ‘True’ or applied on the card. • All the limits in the usage restriction profile for a card is not set to ‘0’/null. • If IsVelocityCeiling is ‘true’, API will validate below condition: Usage restrictions for a card are lower than Customer Card Type level limits, if there are no customer level overrides available then lower than OU card type limits. • In usage restrictions, the limits per transaction should be less than or equal to Daily, Daily should be less than or equal to Weekly, Weekly should be less than or equal to Monthly, Monthly should be less than or equal to Yearly (Annually). Exception being null/blank will be skipped. i.e., Daily value should be less than equal to Monthly value if Weekly value is null/blank. Lifetime limit is not considered for usage restrictions limits validation. • Apply the card type limit to Gateway when a value is NULL in the input. However, if the card type limit is NULL for the same field, then no limit will be applied in Gateway. • If ‘SetDefaultOnVelocityUpdate’ is ‘true’ then the operation will apply customer cardtype or OU level velocity limits on existing cards when restrictions are modified without providing custom values for all fields.
- **Signature**: `ApplyRestriction(string requestId, CardRestrictionReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CardRestrictionRes`
- **Error**: `SdkException<ApplyRestrictionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BundleDetails
- **HTTP**: `POST /card-restrictions/v1/bundledetails` (OauthServer (api-test))
- **Notes**: This API allows to get the details of a specific card bundle. It returns the bundle basic details along with the cards in the bundle and restrictions applied on them.
- **Signature**: `BundleDetails(string requestId, BudleDetailsReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BundleDetails`
- **Error**: `SdkException<BundleDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBundle
- **HTTP**: `POST /card-restrictions/v1/createbundle` (OauthServer (api-test))
- **Notes**: This API enables clients to create a new card bundle and apply restrictions. Supported operations * Create bundle and include mandatory - * Usage, day/time, product and location restrictions * List of cards to add to bundle * Create bundle and include optional identifier of bundle in external system Validation rules The following are the key validation rules with the associated error codes for failed validation- * `7012` - At least one card must be added to the bundle * `7011` - The total number of cards passed in the input must be 500 or less. * `7014` - All the cards passed in the input are part of the selected account. * `7013` - At least one restriction must be applied to the bundle i.e. either of usage, day/time, location or product restriction. * `7005` - Day time restriction cannot be set to restrict the use of a card on all days of the week. * `7000` - Usage restriction of the bundle is not open ended i.e. all the limits within the usage restriction must not be set to 0/null. * `7004` - In the usage restrictions, the limits per transaction should be less than or equal to Daily, Daily should be less than or equal to Weekly, Weekly should be less than or equal to Monthly. Exception being 0/blank will be skipped, i.e. Daily value should be less than equal to Monthly value if Weekly value is 0/blank. * `0007` - Error returned if request parameters fail validation e.g. mandatory check.
- **Signature**: `CreateBundle(string requestId, CreateBundleRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateBundleRes`
- **Error**: `SdkException<CreateBundleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBundle
- **HTTP**: `POST /card-restrictions/v1/deletebundle` (OauthServer (api-test))
- **Notes**: This API enables clients to delete an existing card bundle in the Shell Card Platform. Once the card bundle is deleted the usage and product restrictions of the cards that were present in the bundle will be reset based on the request. Supported operations * Delete card bundle by bundle Id Validation rules The following are the key validation rules with the associated error codes for failed validation- * `7019` - The given card bundle is not available in the Shell Card Platform. * `0007` - Error returned if request parameters fail validation e.g. mandatory check.
- **Signature**: `DeleteBundle(string requestId, DeleteBundleRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DeleteBundleResponse`
- **Error**: `SdkException<DeleteBundleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RestrictionAccount
- **HTTP**: `POST /card-restrictions/v1/account` (OauthServer (api-test))
- **Notes**: This API allows setting or updating the usage restrictions of an existing account. Then validation rules applied for this API. • The account exists. • Day time restriction cannot be set to restrict the use of a card, under the account, on all days of the week. • Either of the usage, daytime or location is either marked for reset or new restriction values provided for the account. • In usage restrictions, the limits per transaction should be less than or equal to Daily, Daily should be less than or equal to Weekly, Weekly should be less than or equal to Monthly. Exception being 0/blank will be skipped, i.e., Daily value should be less than equal to Monthly value if Weekly value is 0/blank.
- **Signature**: `RestrictionAccount(string requestId, AccountRestrictionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountRestrictionRes`
- **Error**: `SdkException<RestrictionAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchAccountLimit
- **HTTP**: `POST /card-restrictions/v1/searchaccountlimit` (OauthServer (api-test))
- **Notes**: This API will allow user to get account level limits for the given account. It returns the velocity limits if its overridden at the account else the values will be null/empty.
- **Signature**: `SearchAccountLimit(string requestId, SearchAccountLimitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SearchAccountLimitRes`
- **Error**: `SdkException<SearchAccountLimitError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchCardRestriction
- **HTTP**: `POST /card-restrictions/v1/search` (OauthServer (api-test))
- **Notes**: This API will allows querying card details including the day/time and product restrictions. Supported operations Search by list of cards or bundle Include card bundle details (optional)
- **Signature**: `SearchCardRestriction(string requestId, SearchCardRestrictionReq1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SearchCardRestrictionRes1`
- **Error**: `SdkException<SearchCardRestrictionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SummaryOfBundles
- **HTTP**: `POST /card-restrictions/v1/summaryofbundles` (OauthServer (api-test))
- **Notes**: This API allows clients to get a summary of card bundles associated with Payer/Account. This API will return the basic bundle details including card and restriction details. Optionally the API will also include a count of cards that are not associated with the bundle but returned by the search criteria. Note - to include count of cards of an account that are not associated with any bundles, in the input parameter SearchCardBundles either pass all the bundles of the account in the list or pass only account with bundle id left blank/null. Supported operations Get summary of bundles by list of bundle Ids
- **Signature**: `SummaryOfBundles(string requestId, SummaryofbundlerRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SummaryofbundleRes`
- **Error**: `SdkException<SummaryOfBundlesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBundle
- **HTTP**: `POST /card-restrictions/v1/updatebundle` (OauthServer (api-test))
- **Notes**: This API enables clients to update an existing card bundle and its associated restrictions. Supported operations * Add new cards to an existing bundle * Remove cards from existing bundle * Update restrictions applied to existing bundle The following are the key validation rules with the associated error codes for failed validation- Validation rules * `9007` - The cards must exist in the cards platform for adding or removing cards. * `7014` - All the cards passed in the input are part of the selected account. * `7018` - All the cards passed in the input are part of the selected bundle. * `7011` - The total number of cards passed in the input must be 500 or less. * `7012` - The action to remove cards should not result in removing all the cards from the bundle. * `7016` - At least one restriction must be modified for â€œUpdateâ€ request action. * `7013` - All restrictions cannot be marked for â€œResetâ€ for â€œUpdateâ€ request action. * `7005` - Day time restriction cannot be set to restrict the use of a card on all days of the week. This validation is applicable for Update request action. * `7000` - Usage restriction of the bundle is not open ended i.e., all the limits within the usage restriction must not be set to 0/null. This validation is applicable for Update request action. * `7004` - In the usage restrictions, the limits per transaction should be less than or equal to Daily, Daily should be less than or equal to Weekly, Weekly should be less than or equal to Monthly. Exception being 0/blank will be skipped, i.e., Daily value should be less than equal to Monthly value if Weekly value is 0/blank. This validation is applicable for Update request action. * `0007` - Error returned if request parameters fail validation e.g. at least one card must be provided in the input.
- **Signature**: `UpdateBundle(string requestId, UpdateBundleRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateBundleRes`
- **Error**: `SdkException<UpdateBundleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
