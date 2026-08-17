# PciQuestionnaires — operations

Accessor: `client.PciQuestionnaires` · Source: `Api/PciQuestionnaires.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLegalEntitiesIdPciQuestionnaires
- **HTTP**: `GET /legalEntities/{id}/pciQuestionnaires` (Default18 (kyc-test))
- **Notes**: Get a list of signed PCI questionnaires. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetLegalEntitiesIdPciQuestionnaires(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetPciQuestionnaireInfosResponse`
- **Error**: `SdkException<GetLegalEntitiesIdPciQuestionnairesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLegalEntitiesIdPciQuestionnairesPciid
- **HTTP**: `GET /legalEntities/{id}/pciQuestionnaires/{pciid}` (Default18 (kyc-test))
- **Notes**: Returns the signed PCI questionnaire. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetLegalEntitiesIdPciQuestionnairesPciid(string id, string pciid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetPciQuestionnaireResponse`
- **Error**: `SdkException<GetLegalEntitiesIdPciQuestionnairesPciidError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplates
- **HTTP**: `POST /legalEntities/{id}/pciQuestionnaires/generatePciTemplates` (Default18 (kyc-test))
- **Notes**: Generates the required PCI questionnaires based on the user's salesChannel . Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(string id, GeneratePciDescriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GeneratePciDescriptionResponse`
- **Error**: `SdkException<PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdPciQuestionnairesSignPciTemplates
- **HTTP**: `POST /legalEntities/{id}/pciQuestionnaires/signPciTemplates` (Default18 (kyc-test))
- **Notes**: Signs the required PCI questionnaire. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdPciQuestionnairesSignPciTemplates(string id, PciSigningRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PciSigningResponse`
- **Error**: `SdkException<PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdPciQuestionnairesSigningRequired
- **HTTP**: `POST /legalEntities/{id}/pciQuestionnaires/signingRequired` (Default18 (kyc-test))
- **Notes**: Calculate PCI status of a legal entity. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdPciQuestionnairesSigningRequired(string id, CalculatePciStatusRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CalculatePciStatusResponse`
- **Error**: `SdkException<PostLegalEntitiesIdPciQuestionnairesSigningRequiredError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
