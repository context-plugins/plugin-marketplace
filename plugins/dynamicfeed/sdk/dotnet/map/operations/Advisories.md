<!-- Generated file — do not edit; regenerated with the SDK. -->

# Advisories — operations

Accessor: `client.Advisories` · Source: `src/DynamicFeed/Api/Advisories.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AdvisoriesAdvisoriesGet

- **Signature**: `AdvisoriesAdvisoriesGet(AdvisoriesAdvisoriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `package` ← `Package`, `ecosystem` ← `Ecosystem`, `severity` ← `Severity`, `min_cvss` ← `MinCvss`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<AdvisoriesAdvisoriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AdvisoriesAdvisoriesGetRequest` | `src/DynamicFeed/Requests/Advisories/AdvisoriesAdvisoriesGetRequest.cs` |
| `Q` | `src/DynamicFeed/Models/AnyOf/Q.cs` |
| `Package` | `src/DynamicFeed/Models/AnyOf/Package.cs` |
| `Ecosystem` | `src/DynamicFeed/Models/AnyOf/Ecosystem.cs` |
| `Severity` | `src/DynamicFeed/Models/AnyOf/Severity.cs` |
| `MinCvss` | `src/DynamicFeed/Models/AnyOf/MinCvss.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `AdvisoriesAdvisoriesGetError` | `src/DynamicFeed/Errors/AdvisoriesAdvisoriesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### AdvisoriesCheckAdvisoriesCheckGet

- **Signature**: `AdvisoriesCheckAdvisoriesCheckGet(AdvisoriesCheckAdvisoriesCheckGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Package`
- **Query params (wire ← C#)**: `package` ← `Package`, `version` ← `Version`, `ecosystem` ← `Ecosystem`
- **Returns**: `object`
- **Error**: `ApiException<AdvisoriesCheckAdvisoriesCheckGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AdvisoriesCheckAdvisoriesCheckGetRequest` | `src/DynamicFeed/Requests/Advisories/AdvisoriesCheckAdvisoriesCheckGetRequest.cs` |
| `VersionModel` | `src/DynamicFeed/Models/AnyOf/VersionModel.cs` |
| `Ecosystem1` | `src/DynamicFeed/Models/AnyOf/Ecosystem1.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `AdvisoriesCheckAdvisoriesCheckGetError` | `src/DynamicFeed/Errors/AdvisoriesCheckAdvisoriesCheckGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

