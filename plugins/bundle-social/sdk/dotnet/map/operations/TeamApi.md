<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamApi — operations

Accessor: `client.TeamApi` · Source: `src/BundleSocial/Api/TeamApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TeamCreateTeam

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TeamCreateTeam(TeamCreateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1TeamResponse1`
- **Error**: `ApiException<TeamCreateTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Team400Error1([NotNullWhen(true)] out ApiV1Team400Error1? value)` [400] · `TryGetApiV1Team401Error1([NotNullWhen(true)] out ApiV1Team401Error1? value)` [401] · `TryGetApiV1Team403Error1([NotNullWhen(true)] out ApiV1Team403Error1? value)` [403] · `TryGetApiV1Team404Error21([NotNullWhen(true)] out ApiV1Team404Error21? value)` [404] · `TryGetApiV1Team429Error1([NotNullWhen(true)] out ApiV1Team429Error1? value)` [429] · `TryGetApiV1Team500Error1([NotNullWhen(true)] out ApiV1Team500Error1? value)` [500] · `TryGetApiV1Team502Error1([NotNullWhen(true)] out ApiV1Team502Error1? value)` [502] · `TryGetApiV1Team503Error1([NotNullWhen(true)] out ApiV1Team503Error1? value)` [503] · `TryGetApiV1Team504Error1([NotNullWhen(true)] out ApiV1Team504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamCreateTeamRequest` | `src/BundleSocial/Requests/TeamApi/TeamCreateTeamRequest.cs` |
| `ApiV1TeamRequest1` | `src/BundleSocial/Models/ApiV1TeamRequest1.cs` |
| `ApiV1TeamResponse1` | `src/BundleSocial/Models/ApiV1TeamResponse1.cs` |
| `TeamCreateTeamError` | `src/BundleSocial/Errors/TeamCreateTeamError.cs` |
| `ApiV1Team400Error1` | `src/BundleSocial/Models/ApiV1Team400Error1.cs` |
| `ApiV1Team401Error1` | `src/BundleSocial/Models/ApiV1Team401Error1.cs` |
| `ApiV1Team403Error1` | `src/BundleSocial/Models/ApiV1Team403Error1.cs` |
| `ApiV1Team404Error21` | `src/BundleSocial/Models/ApiV1Team404Error21.cs` |
| `ApiV1Team429Error1` | `src/BundleSocial/Models/ApiV1Team429Error1.cs` |
| `ApiV1Team500Error1` | `src/BundleSocial/Models/ApiV1Team500Error1.cs` |
| `ApiV1Team502Error1` | `src/BundleSocial/Models/ApiV1Team502Error1.cs` |
| `ApiV1Team503Error1` | `src/BundleSocial/Models/ApiV1Team503Error1.cs` |
| `ApiV1Team504Error1` | `src/BundleSocial/Models/ApiV1Team504Error1.cs` |

### TeamDeleteTeam

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TeamDeleteTeam(TeamDeleteTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TeamResponse1`
- **Error**: `ApiException<TeamDeleteTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Team400Error1([NotNullWhen(true)] out ApiV1Team400Error1? value)` [400] · `TryGetApiV1Team401Error1([NotNullWhen(true)] out ApiV1Team401Error1? value)` [401] · `TryGetApiV1Team403Error1([NotNullWhen(true)] out ApiV1Team403Error1? value)` [403] · `TryGetApiV1Team404Error21([NotNullWhen(true)] out ApiV1Team404Error21? value)` [404] · `TryGetApiV1Team429Error1([NotNullWhen(true)] out ApiV1Team429Error1? value)` [429] · `TryGetApiV1Team500Error1([NotNullWhen(true)] out ApiV1Team500Error1? value)` [500] · `TryGetApiV1Team502Error1([NotNullWhen(true)] out ApiV1Team502Error1? value)` [502] · `TryGetApiV1Team503Error1([NotNullWhen(true)] out ApiV1Team503Error1? value)` [503] · `TryGetApiV1Team504Error1([NotNullWhen(true)] out ApiV1Team504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamDeleteTeamRequest` | `src/BundleSocial/Requests/TeamApi/TeamDeleteTeamRequest.cs` |
| `ApiV1TeamResponse1` | `src/BundleSocial/Models/ApiV1TeamResponse1.cs` |
| `TeamDeleteTeamError` | `src/BundleSocial/Errors/TeamDeleteTeamError.cs` |
| `ApiV1Team400Error1` | `src/BundleSocial/Models/ApiV1Team400Error1.cs` |
| `ApiV1Team401Error1` | `src/BundleSocial/Models/ApiV1Team401Error1.cs` |
| `ApiV1Team403Error1` | `src/BundleSocial/Models/ApiV1Team403Error1.cs` |
| `ApiV1Team404Error21` | `src/BundleSocial/Models/ApiV1Team404Error21.cs` |
| `ApiV1Team429Error1` | `src/BundleSocial/Models/ApiV1Team429Error1.cs` |
| `ApiV1Team500Error1` | `src/BundleSocial/Models/ApiV1Team500Error1.cs` |
| `ApiV1Team502Error1` | `src/BundleSocial/Models/ApiV1Team502Error1.cs` |
| `ApiV1Team503Error1` | `src/BundleSocial/Models/ApiV1Team503Error1.cs` |
| `ApiV1Team504Error1` | `src/BundleSocial/Models/ApiV1Team504Error1.cs` |

### TeamGetList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TeamGetList(TeamGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `offset` ← `Offset`, `limit` ← `Limit`, `search` ← `Search`
- **Returns**: `ApiV1TeamResponse3`
- **Error**: `ApiException<TeamGetListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Team400Error1([NotNullWhen(true)] out ApiV1Team400Error1? value)` [400] · `TryGetApiV1Team401Error1([NotNullWhen(true)] out ApiV1Team401Error1? value)` [401] · `TryGetApiV1Team403Error1([NotNullWhen(true)] out ApiV1Team403Error1? value)` [403] · `TryGetApiV1Team404Error21([NotNullWhen(true)] out ApiV1Team404Error21? value)` [404] · `TryGetApiV1Team429Error1([NotNullWhen(true)] out ApiV1Team429Error1? value)` [429] · `TryGetApiV1Team500Error1([NotNullWhen(true)] out ApiV1Team500Error1? value)` [500] · `TryGetApiV1Team502Error1([NotNullWhen(true)] out ApiV1Team502Error1? value)` [502] · `TryGetApiV1Team503Error1([NotNullWhen(true)] out ApiV1Team503Error1? value)` [503] · `TryGetApiV1Team504Error1([NotNullWhen(true)] out ApiV1Team504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamGetListRequest` | `src/BundleSocial/Requests/TeamApi/TeamGetListRequest.cs` |
| `ApiV1TeamResponse3` | `src/BundleSocial/Models/ApiV1TeamResponse3.cs` |
| `TeamGetListError` | `src/BundleSocial/Errors/TeamGetListError.cs` |
| `ApiV1Team400Error1` | `src/BundleSocial/Models/ApiV1Team400Error1.cs` |
| `ApiV1Team401Error1` | `src/BundleSocial/Models/ApiV1Team401Error1.cs` |
| `ApiV1Team403Error1` | `src/BundleSocial/Models/ApiV1Team403Error1.cs` |
| `ApiV1Team404Error21` | `src/BundleSocial/Models/ApiV1Team404Error21.cs` |
| `ApiV1Team429Error1` | `src/BundleSocial/Models/ApiV1Team429Error1.cs` |
| `ApiV1Team500Error1` | `src/BundleSocial/Models/ApiV1Team500Error1.cs` |
| `ApiV1Team502Error1` | `src/BundleSocial/Models/ApiV1Team502Error1.cs` |
| `ApiV1Team503Error1` | `src/BundleSocial/Models/ApiV1Team503Error1.cs` |
| `ApiV1Team504Error1` | `src/BundleSocial/Models/ApiV1Team504Error1.cs` |

### TeamGetTeam

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TeamGetTeam(TeamGetTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TeamResponse`
- **Error**: `ApiException<TeamGetTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Team400Error1([NotNullWhen(true)] out ApiV1Team400Error1? value)` [400] · `TryGetApiV1Team401Error1([NotNullWhen(true)] out ApiV1Team401Error1? value)` [401] · `TryGetApiV1Team403Error1([NotNullWhen(true)] out ApiV1Team403Error1? value)` [403] · `TryGetApiV1Team404Error1([NotNullWhen(true)] out ApiV1Team404Error1? value)` [404] · `TryGetApiV1Team429Error1([NotNullWhen(true)] out ApiV1Team429Error1? value)` [429] · `TryGetApiV1Team500Error1([NotNullWhen(true)] out ApiV1Team500Error1? value)` [500] · `TryGetApiV1Team502Error1([NotNullWhen(true)] out ApiV1Team502Error1? value)` [502] · `TryGetApiV1Team503Error1([NotNullWhen(true)] out ApiV1Team503Error1? value)` [503] · `TryGetApiV1Team504Error1([NotNullWhen(true)] out ApiV1Team504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamGetTeamRequest` | `src/BundleSocial/Requests/TeamApi/TeamGetTeamRequest.cs` |
| `ApiV1TeamResponse` | `src/BundleSocial/Models/ApiV1TeamResponse.cs` |
| `TeamGetTeamError` | `src/BundleSocial/Errors/TeamGetTeamError.cs` |
| `ApiV1Team400Error1` | `src/BundleSocial/Models/ApiV1Team400Error1.cs` |
| `ApiV1Team401Error1` | `src/BundleSocial/Models/ApiV1Team401Error1.cs` |
| `ApiV1Team403Error1` | `src/BundleSocial/Models/ApiV1Team403Error1.cs` |
| `ApiV1Team404Error1` | `src/BundleSocial/Models/ApiV1Team404Error1.cs` |
| `ApiV1Team429Error1` | `src/BundleSocial/Models/ApiV1Team429Error1.cs` |
| `ApiV1Team500Error1` | `src/BundleSocial/Models/ApiV1Team500Error1.cs` |
| `ApiV1Team502Error1` | `src/BundleSocial/Models/ApiV1Team502Error1.cs` |
| `ApiV1Team503Error1` | `src/BundleSocial/Models/ApiV1Team503Error1.cs` |
| `ApiV1Team504Error1` | `src/BundleSocial/Models/ApiV1Team504Error1.cs` |

### TeamUpdateTeam

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TeamUpdateTeam(TeamUpdateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TeamResponse1`
- **Error**: `ApiException<TeamUpdateTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Team400Error1([NotNullWhen(true)] out ApiV1Team400Error1? value)` [400] · `TryGetApiV1Team401Error1([NotNullWhen(true)] out ApiV1Team401Error1? value)` [401] · `TryGetApiV1Team403Error1([NotNullWhen(true)] out ApiV1Team403Error1? value)` [403] · `TryGetApiV1Team404Error21([NotNullWhen(true)] out ApiV1Team404Error21? value)` [404] · `TryGetApiV1Team429Error1([NotNullWhen(true)] out ApiV1Team429Error1? value)` [429] · `TryGetApiV1Team500Error1([NotNullWhen(true)] out ApiV1Team500Error1? value)` [500] · `TryGetApiV1Team502Error1([NotNullWhen(true)] out ApiV1Team502Error1? value)` [502] · `TryGetApiV1Team503Error1([NotNullWhen(true)] out ApiV1Team503Error1? value)` [503] · `TryGetApiV1Team504Error1([NotNullWhen(true)] out ApiV1Team504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamUpdateTeamRequest` | `src/BundleSocial/Requests/TeamApi/TeamUpdateTeamRequest.cs` |
| `ApiV1TeamRequest` | `src/BundleSocial/Models/ApiV1TeamRequest.cs` |
| `ApiV1TeamResponse1` | `src/BundleSocial/Models/ApiV1TeamResponse1.cs` |
| `TeamUpdateTeamError` | `src/BundleSocial/Errors/TeamUpdateTeamError.cs` |
| `ApiV1Team400Error1` | `src/BundleSocial/Models/ApiV1Team400Error1.cs` |
| `ApiV1Team401Error1` | `src/BundleSocial/Models/ApiV1Team401Error1.cs` |
| `ApiV1Team403Error1` | `src/BundleSocial/Models/ApiV1Team403Error1.cs` |
| `ApiV1Team404Error21` | `src/BundleSocial/Models/ApiV1Team404Error21.cs` |
| `ApiV1Team429Error1` | `src/BundleSocial/Models/ApiV1Team429Error1.cs` |
| `ApiV1Team500Error1` | `src/BundleSocial/Models/ApiV1Team500Error1.cs` |
| `ApiV1Team502Error1` | `src/BundleSocial/Models/ApiV1Team502Error1.cs` |
| `ApiV1Team503Error1` | `src/BundleSocial/Models/ApiV1Team503Error1.cs` |
| `ApiV1Team504Error1` | `src/BundleSocial/Models/ApiV1Team504Error1.cs` |

