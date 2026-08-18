<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `Api/Account.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetActivity

- **Signature**: `GetActivity(Endpoint1? endpoint, string? cursor, int? limit = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `endpoint` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = `50`
- **Query params (wire ← C#)**: `endpoint` ← `endpoint`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `TeamActivityResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Endpoint1` | `Models/Enums/Endpoint1.cs` |
| `TeamActivityResponse` | `Models/TeamActivityResponse.cs` |

