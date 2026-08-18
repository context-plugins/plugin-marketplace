<!-- Generated file — do not edit; regenerated with the SDK. -->

# PciComplianceQuestionnairePage — operations

Accessor: `client.PciComplianceQuestionnairePage` · Source: `Api/PciComplianceQuestionnairePage.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostGetPciQuestionnaireUrl
- **Server group**: `Default19`
- **Signature**: `PostGetPciQuestionnaireUrl(GetPciUrlRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetPciUrlResponse`
- **Error**: `SdkException<PostGetPciQuestionnaireUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetPciUrlRequest` | `Models/GetPciUrlRequest.cs` |
| `GetPciUrlResponse` | `Models/GetPciUrlResponse.cs` |
| `PostGetPciQuestionnaireUrlError` | `Errors/PostGetPciQuestionnaireUrlError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

