<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payouts — operations

Accessor: `client.Payouts` · Source: `src/Airwallex/Api/Payouts.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePayout

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `CreatePayout(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### GetPayout

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `GetPayout(GetPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPayoutRequest` | `src/Airwallex/Requests/Payouts/GetPayoutRequest.cs` |

