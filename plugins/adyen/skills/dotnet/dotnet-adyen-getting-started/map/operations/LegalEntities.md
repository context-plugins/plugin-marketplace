# LegalEntities — operations

Accessor: `client.LegalEntities` · Source: `Api/LegalEntities.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLegalEntitiesId
- **HTTP**: `GET /legalEntities/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns a legal entity. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetLegalEntitiesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LegalEntity3`
- **Error**: `SdkException<GetLegalEntitiesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLegalEntitiesIdBusinessLines
- **HTTP**: `GET /legalEntities/{id}/businessLines` (Default (balanceplatform-api-test))
- **Notes**: Returns the business lines owned by a legal entity. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetLegalEntitiesIdBusinessLines(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BusinessLines`
- **Error**: `SdkException<GetLegalEntitiesIdBusinessLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchLegalEntitiesId
- **HTTP**: `PATCH /legalEntities/{id}` (Default (balanceplatform-api-test))
- **Notes**: Updates a legal entity. &gt;To change the legal entity type, include only the new `type` in your request. If you need to update information for the legal entity, make a separate request. To update the `entityAssociations` array, you need to replace the entire array.For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PatchLegalEntitiesId(string id, string? xRequestedVerificationCode, LegalEntityInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LegalEntity3`
- **Error**: `SdkException<PatchLegalEntitiesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntities
- **HTTP**: `POST /legalEntities` (Default (balanceplatform-api-test))
- **Notes**: Creates a legal entity. This resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntities(string? xRequestedVerificationCode, LegalEntityInfoRequiredType? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LegalEntity3`
- **Error**: `SdkException<PostLegalEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdCheckVerificationErrors
- **HTTP**: `POST /legalEntities/{id}/checkVerificationErrors` (Default (balanceplatform-api-test))
- **Notes**: Returns the verification errors for a legal entity and its supporting entities. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdCheckVerificationErrors(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerificationErrors`
- **Error**: `SdkException<PostLegalEntitiesIdCheckVerificationErrorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdConfirmDataReview
- **HTTP**: `POST /legalEntities/{id}/confirmDataReview` (Default (balanceplatform-api-test))
- **Notes**: Confirms that your user has reviewed the data for the legal entity specified in the path. Call this endpoint to inform Adyen that your user reviewed and verified that the data is up-to-date. The endpoint returns the timestamp of when Adyen received the request. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdConfirmDataReview(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DataReviewConfirmationResponse`
- **Error**: `SdkException<PostLegalEntitiesIdConfirmDataReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdRequestPeriodicReview
- **HTTP**: `POST /legalEntities/{id}/requestPeriodicReview` (Default (balanceplatform-api-test))
- **Notes**: Requests a periodic data review for the legal entity of the user specified in the path.
- **Signature**: `PostLegalEntitiesIdRequestPeriodicReview(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
