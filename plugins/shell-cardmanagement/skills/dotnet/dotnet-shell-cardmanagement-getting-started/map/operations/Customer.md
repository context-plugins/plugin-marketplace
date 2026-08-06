# Customer — operations

Accessor: `client.Customer` · Source: `Api/Customer.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AuditReport
- **HTTP**: `POST /customer-management/v1/auditreport` (OauthServer (api-test))
- **Notes**: This operation allows users to fetch audit data of account or card operations performed by users of a given customer The audit data includes details of below API operations * Order Card * Create Card Group * PIN reminder * Move Cards * Update Card Status * Update Card Group * Auto renew * Bulk card order * Bulk card block * Bulk Card Order (Multi Account) * BCOSummary * BCOMultiAccountSummary * BCBSummary * Mobile Payment Registration * Fund Transfer (Scheduled &amp; Realtime) * Delivery Address Update.
- **Signature**: `AuditReport(string requestId, AuditReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AuditResponse`
- **Error**: `SdkException<AuditReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Customercreatecardgroup
- **HTTP**: `POST /customer-management/v1/createcardgroup` (OauthServer (api-test))
- **Notes**: This API allows creating a new Card Group in the Shell Cards Platform. It will also allow moving of cards (up to 500 cards) into the newly created card-group. Move Card requests are queued after passing the below validations - Given PAN matches with only one card. - Card is allowed to be moved to the Target Card Group and/or Target account requested. - There is no pending Move Card request for the same card in the queue which is submitted on the same date (customerâ€™s local) and is yet to be processed or has been processed successfully
- **Signature**: `Customercreatecardgroup(string requestId, CreateCardGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCardGroupRes`
- **Error**: `SdkException<CustomercreatecardgroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserLoggedinuser
- **HTTP**: `POST /user-management/v1/loggedinuser` (OauthServer (api-test))
- **Notes**: This operation allows querying the user data of the logged in user. This operation should be called only after successful authentication of the end user in client application. This operation will return the user access details such as payers and/or accounts. This operation will also validate that logged in user has access to the requested operation, on failure it will return HasAPIAccess flag as false in the response.
- **Signature**: `UserLoggedinuser(string requestId, LoggedInUserReq body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LoggedInUserRes`
- **Error**: `SdkException<UserLoggedinuserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Cardgroups
- **HTTP**: `POST /customer-management/v1/cardgroups` (OauthServer (api-test))
- **Notes**: This API allows querying the card group details from the Shell Cards Platform. It provides flexible search criteria and supports paging. When the account is not passed in the input and card group type is configured as â€˜Verticalâ€™ in the cards platform, this API will return all card groups from the payer as well as from all the accounts under the payer. When the account is not passed in the input and card group type is configured as â€˜Horizontalâ€™ in cards platform, this API will return all card groups configured directly under the payer.
- **Signature**: `Cardgroups(string requestId, CardGroupReq body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CardGroupRes`
- **Error**: `SdkException<CardgroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Customercardtypev
- **HTTP**: `POST /customer-management/v1/cardtype` (OauthServer (api-test))
- **Notes**: This API provides allows querying the active card types that are associated to the given account. The API returns the card type configurations, purchase categories associated with the card type and the card type restriction limits.
- **Signature**: `Customercardtypev(string requestId, CardTypeReq body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CardTypeRes`
- **Error**: `SdkException<CustomercardtypevError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Customerdetail
- **HTTP**: `POST /customer-management/v1/customer` (OauthServer (api-test))
- **Notes**: This API allows querying the card delivery addresses of a given account from the Shell Cards Platform. Only active delivery addresses will be returned.
- **Signature**: `Customerdetail(string requestId, CustomerReq body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CustomerRes`
- **Error**: `SdkException<CustomerdetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Customerpayers
- **HTTP**: `POST /customer-management/v1/payers` (OauthServer (api-test))
- **Notes**: This API allows querying the payer accounts details from the Shell Cards Platform. It provides flexible search criteria for searching payer information and supports paging. Paging is applicable only when all the payers passed in the input are from the same ColCo. However, paging will be ignored and the API will return all the matching data by merging the data queried from each ColCo when payers passed in the input are from multiple ColCos.
- **Signature**: `Customerpayers(string requestId, PayerReq body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayerRes`
- **Error**: `SdkException<CustomerpayersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Customerupdatecardgroup
- **HTTP**: `POST /customer-management/v1/updatecardgroup` (OauthServer (api-test))
- **Notes**: This API allows updating or removing a Card Group in the Shell Cards Platform. It also allows moving of cards out of a card group or from one card group to another existing card group. The request for updating or removing of the card group, creationg of a new card group (where-applicable) and moving of card into another card group will be queued after passing the basic validations.
- **Signature**: `Customerupdatecardgroup(string requestId, UpdateCardGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateCardGroupRes`
- **Error**: `SdkException<CustomerupdatecardgroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCardAccounts
- **HTTP**: `POST /customer-management/v1/accounts` (OauthServer (api-test))
- **Notes**: This API allows querying the customer account details from the Shell Cards Platform. It provides a flexible search criterion and supports pagination.
- **Signature**: `PostCardAccounts(string requestId, AccountReq body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountRes`
- **Error**: `SdkException<PostCardAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
