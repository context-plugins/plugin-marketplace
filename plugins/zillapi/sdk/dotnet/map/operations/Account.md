<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/Zillapi/Api/Account.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMe

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMe(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1MeResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1MeResponse` | `src/Zillapi/Models/V1MeResponse.cs` |

### GetUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetUsage(GetUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `since` ← `Since`, `limit` ← `Limit`
- **Returns**: `V1UsageResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUsageRequest` | `src/Zillapi/Requests/Account/GetUsageRequest.cs` |
| `V1UsageResponse` | `src/Zillapi/Models/V1UsageResponse.cs` |

