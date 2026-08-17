<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401DependentPhoneNumber — operations

Accessor: `client.Api20100401DependentPhoneNumber` · Source: `Api/Api20100401DependentPhoneNumber.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListDependentPhoneNumber

- **Signature**: `ListDependentPhoneNumber(string accountSid, string addressSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDependentPhoneNumberResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListDependentPhoneNumberResponse` | `Models/ListDependentPhoneNumberResponse.cs` |

