<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.Auth` · Source: `src/CarsXe/Api/Auth.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ValidateKey

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `ValidateKey(ValidateKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Query params (wire ← C#)**: `key` ← `Key`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ValidateKeyRequest` | `src/CarsXe/Requests/Auth/ValidateKeyRequest.cs` |

