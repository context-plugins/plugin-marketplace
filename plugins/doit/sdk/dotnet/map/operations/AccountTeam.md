<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountTeam — operations

Accessor: `client.AccountTeam` · Source: `src/DoiT/Api/AccountTeam.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAccountTeam

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAccountTeam(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CustomersV1AccountTeamResponse`
- **Error**: `ApiException<ListAccountTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CustomersV1AccountTeamResponse` | `src/DoiT/Models/CustomersV1AccountTeamResponse.cs` |
| `ListAccountTeamError` | `src/DoiT/Errors/ListAccountTeamError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

