<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommitmentManager — operations

Accessor: `client.CommitmentManager` · Source: `src/DoiT/Api/CommitmentManager.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCommitment

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCommitment(GetCommitmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CommitmentExternal`
- **Error**: `ApiException<GetCommitmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCommitmentRequest` | `src/DoiT/Requests/CommitmentManager/GetCommitmentRequest.cs` |
| `CommitmentExternal` | `src/DoiT/Models/CommitmentExternal.cs` |
| `GetCommitmentError` | `src/DoiT/Errors/GetCommitmentError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCommitments

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCommitments(ListCommitmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`
- **Returns**: `CommitmentExternalList`
- **Error**: `ApiException<ListCommitmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCommitmentsRequest` | `src/DoiT/Requests/CommitmentManager/ListCommitmentsRequest.cs` |
| `SortByDoiTCommitmentManagerApi` | `src/DoiT/Models/Enums/SortByDoiTCommitmentManagerApi.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `CommitmentExternalList` | `src/DoiT/Models/CommitmentExternalList.cs` |
| `ListCommitmentsError` | `src/DoiT/Errors/ListCommitmentsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

