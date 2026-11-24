<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignMembers — operations

Accessor: `client.CampaignMembers` · Source: `src/Givebutter/Api/CampaignMembers.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CampaignsMembersDestroy

- **Auth**: `options.Http`
- **Signature**: `CampaignsMembersDestroy(CampaignsMembersDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `Member`
- **Returns**: `object`
- **Error**: `ApiException<CampaignsMembersDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsMembersDestroyRequest` | `src/Givebutter/Requests/CampaignMembers/CampaignsMembersDestroyRequest.cs` |
| `CampaignsMembersDestroyError` | `src/Givebutter/Errors/CampaignsMembersDestroyError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsMembersIndex

- **Auth**: `options.Http`
- **Signature**: `CampaignsMembersIndex(CampaignsMembersIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `V1CampaignsMembersResponse1`
- **Error**: `ApiException<CampaignsMembersIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsMembersIndexRequest` | `src/Givebutter/Requests/CampaignMembers/CampaignsMembersIndexRequest.cs` |
| `V1CampaignsMembersResponse1` | `src/Givebutter/Models/AnyOf/V1CampaignsMembersResponse1.cs` |
| `CampaignsMembersIndexError` | `src/Givebutter/Errors/CampaignsMembersIndexError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsMembersShow

- **Auth**: `options.Http`
- **Signature**: `CampaignsMembersShow(CampaignsMembersShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `Member`
- **Returns**: `V1CampaignsMembersResponse11`
- **Error**: `ApiException<CampaignsMembersShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsMembersShowRequest` | `src/Givebutter/Requests/CampaignMembers/CampaignsMembersShowRequest.cs` |
| `V1CampaignsMembersResponse11` | `src/Givebutter/Models/AnyOf/V1CampaignsMembersResponse11.cs` |
| `CampaignsMembersShowError` | `src/Givebutter/Errors/CampaignsMembersShowError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

