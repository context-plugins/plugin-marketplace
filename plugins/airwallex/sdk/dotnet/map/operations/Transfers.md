<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transfers — operations

Accessor: `client.Transfers` · Source: `src/Airwallex/Api/Transfers.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTransfer

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `CreateTransfer(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### GetTransfer

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `GetTransfer(GetTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetTransferRequest` | `src/Airwallex/Requests/Transfers/GetTransferRequest.cs` |

