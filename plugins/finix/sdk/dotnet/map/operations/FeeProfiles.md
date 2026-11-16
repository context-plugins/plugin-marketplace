<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeeProfiles — operations

Accessor: `client.FeeProfiles` · Source: `src/FinixApiReference/Api/FeeProfiles.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFeeProfile

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateFeeProfile(CreateFeeProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FeeProfile`
- **Error**: `ApiException<CreateFeeProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFeeProfileRequest` | `src/FinixApiReference/Requests/FeeProfiles/CreateFeeProfileRequest.cs` |
| `FeeProfilesRequest` | `src/FinixApiReference/Models/AnyOf/FeeProfilesRequest.cs` |
| `FeeProfile` | `src/FinixApiReference/Models/FeeProfile.cs` |
| `CreateFeeProfileError` | `src/FinixApiReference/Errors/CreateFeeProfileError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetFeeProfile

- **Auth**: `options.BasicAuth`
- **Signature**: `GetFeeProfile(GetFeeProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FeeProfileId`
- **Returns**: `FeeProfile`
- **Error**: `ApiException<GetFeeProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFeeProfileRequest` | `src/FinixApiReference/Requests/FeeProfiles/GetFeeProfileRequest.cs` |
| `FeeProfile` | `src/FinixApiReference/Models/FeeProfile.cs` |
| `GetFeeProfileError` | `src/FinixApiReference/Errors/GetFeeProfileError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListFeeProfiles

- **Auth**: `options.BasicAuth`
- **Signature**: `ListFeeProfiles(ListFeeProfilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListFeeProfiles`
- **Error**: `ApiException<ListFeeProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFeeProfilesRequest` | `src/FinixApiReference/Requests/FeeProfiles/ListFeeProfilesRequest.cs` |
| `ListFeeProfiles` | `src/FinixApiReference/Models/ListFeeProfiles.cs` |
| `ListFeeProfilesError` | `src/FinixApiReference/Errors/ListFeeProfilesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

