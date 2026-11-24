<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProfessionalsAndLicenses — operations

Accessor: `client.ProfessionalsAndLicenses` · Source: `src/CommonElements/Api/ProfessionalsAndLicenses.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### LicensesVerify

- **Auth**: `options.BearerAuth`
- **Signature**: `LicensesVerify(LicensesVerifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `State`
- **Query params (wire ← C#)**: `state` ← `State`, `license_number` ← `LicenseNumber`, `name` ← `Name`, `license_type` ← `LicenseType`, `limit` ← `Limit`
- **Returns**: `ApiV1LicensesVerifyResponse`
- **Error**: `ApiException<LicensesVerifyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LicensesVerifyRequest` | `src/CommonElements/Requests/ProfessionalsAndLicenses/LicensesVerifyRequest.cs` |
| `ApiV1LicensesVerifyResponse` | `src/CommonElements/Models/ApiV1LicensesVerifyResponse.cs` |
| `LicensesVerifyError` | `src/CommonElements/Errors/LicensesVerifyError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ProfessionalsAssociations

- **Auth**: `options.BearerAuth`
- **Signature**: `ProfessionalsAssociations(ProfessionalsAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ProfessionalsAssociationsResponse`
- **Error**: `ApiException<ProfessionalsAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProfessionalsAssociationsRequest` | `src/CommonElements/Requests/ProfessionalsAndLicenses/ProfessionalsAssociationsRequest.cs` |
| `ApiV1ProfessionalsAssociationsResponse` | `src/CommonElements/Models/ApiV1ProfessionalsAssociationsResponse.cs` |
| `ProfessionalsAssociationsError` | `src/CommonElements/Errors/ProfessionalsAssociationsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ProfessionalsDetail

- **Auth**: `options.BearerAuth`
- **Signature**: `ProfessionalsDetail(ProfessionalsDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ProfessionalsResponse`
- **Error**: `ApiException<ProfessionalsDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProfessionalsDetailRequest` | `src/CommonElements/Requests/ProfessionalsAndLicenses/ProfessionalsDetailRequest.cs` |
| `ApiV1ProfessionalsResponse` | `src/CommonElements/Models/ApiV1ProfessionalsResponse.cs` |
| `ProfessionalsDetailError` | `src/CommonElements/Errors/ProfessionalsDetailError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ProfessionalsSearch

- **Auth**: `options.BearerAuth`
- **Signature**: `ProfessionalsSearch(ProfessionalsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `state` ← `State`, `license_type` ← `LicenseType`, `board` ← `Board`, `status` ← `Status`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1ProfessionalsSearchResponse`
- **Error**: `ApiException<ProfessionalsSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProfessionalsSearchRequest` | `src/CommonElements/Requests/ProfessionalsAndLicenses/ProfessionalsSearchRequest.cs` |
| `ApiV1ProfessionalsSearchResponse` | `src/CommonElements/Models/ApiV1ProfessionalsSearchResponse.cs` |
| `ProfessionalsSearchError` | `src/CommonElements/Errors/ProfessionalsSearchError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

