<!-- Generated file — do not edit; regenerated with the SDK. -->

# Balances — operations

Accessor: `client.Balances` · Source: `src/Airwallex/Api/Balances.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCurrentBalances

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `GetCurrentBalances(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

