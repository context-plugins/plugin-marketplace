<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payouts — operations

Accessor: `client.Payouts` · Source: `src/Givebutter/Api/Payouts.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PayoutsIndex

- **Auth**: `options.Http`
- **Signature**: `PayoutsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1PayoutsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1PayoutsResponse` | `src/Givebutter/Models/V1PayoutsResponse.cs` |

### PayoutsShow

- **Auth**: `options.Http`
- **Signature**: `PayoutsShow(PayoutsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Payout`
- **Returns**: `PayoutResource`
- **Error**: `ApiException<PayoutsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PayoutsShowRequest` | `src/Givebutter/Requests/Payouts/PayoutsShowRequest.cs` |
| `PayoutResource` | `src/Givebutter/Models/PayoutResource.cs` |
| `PayoutsShowError` | `src/Givebutter/Errors/PayoutsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

