# TermsOfService — operations

Accessor: `client.TermsOfService` · Source: `Api/TermsOfService.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference
- **HTTP**: `GET /legalEntities/{id}/acceptedTermsOfServiceDocument/{termsofserviceacceptancereference}` (Default18 (kyc-test))
- **Notes**: Returns the accepted Terms of Service document for a legal entity. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(string id, string termsofserviceacceptancereference, string? termsOfServiceDocumentFormat, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `termsOfServiceDocumentFormat` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `termsOfServiceDocumentFormat` ← `termsOfServiceDocumentFormat`
- **Returns**: `GetAcceptedTermsOfServiceDocumentResponse`
- **Error**: `SdkException<GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLegalEntitiesIdTermsOfServiceAcceptanceInfos
- **HTTP**: `GET /legalEntities/{id}/termsOfServiceAcceptanceInfos` (Default18 (kyc-test))
- **Notes**: Returns Terms of Service information for a legal entity. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetLegalEntitiesIdTermsOfServiceAcceptanceInfos(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetTermsOfServiceAcceptanceInfosResponse`
- **Error**: `SdkException<GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLegalEntitiesIdTermsOfServiceStatus
- **HTTP**: `GET /legalEntities/{id}/termsOfServiceStatus` (Default18 (kyc-test))
- **Notes**: Returns the required types of Terms of Service that need to be accepted by a legal entity. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetLegalEntitiesIdTermsOfServiceStatus(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CalculateTermsOfServiceStatusResponse`
- **Error**: `SdkException<GetLegalEntitiesIdTermsOfServiceStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid
- **HTTP**: `PATCH /legalEntities/{id}/termsOfService/{termsofservicedocumentid}` (Default18 (kyc-test))
- **Notes**: Accepts Terms of Service. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(string id, string termsofservicedocumentid, AcceptTermsOfServiceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AcceptTermsOfServiceResponse`
- **Error**: `SdkException<PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdTermsOfService
- **HTTP**: `POST /legalEntities/{id}/termsOfService` (Default18 (kyc-test))
- **Notes**: Returns the Terms of Service document for a legal entity. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdTermsOfService(string id, GetTermsOfServiceDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetTermsOfServiceDocumentResponse`
- **Error**: `SdkException<PostLegalEntitiesIdTermsOfServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
