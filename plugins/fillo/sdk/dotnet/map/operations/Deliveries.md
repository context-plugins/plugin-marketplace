<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deliveries — operations

Accessor: `client.Deliveries` · Source: `src/Fillo/Api/Deliveries.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFormDeliveries

- **Auth**: `options.BearerAuth`
- **Signature**: `GetFormDeliveries(GetFormDeliveriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `DeliveryHealth`
- **Error**: `ApiException<GetFormDeliveriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFormDeliveriesRequest` | `src/Fillo/Requests/Deliveries/GetFormDeliveriesRequest.cs` |
| `DeliveryHealth` | `src/Fillo/Models/DeliveryHealth.cs` |
| `GetFormDeliveriesError` | `src/Fillo/Errors/GetFormDeliveriesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RedeliverFormResponses

- **Auth**: `options.BearerAuth`
- **Signature**: `RedeliverFormResponses(RedeliverFormResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `ApiV1ManageFormsDeliveriesRedeliverResponse`
- **Error**: `ApiException<RedeliverFormResponsesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RedeliverFormResponsesRequest` | `src/Fillo/Requests/Deliveries/RedeliverFormResponsesRequest.cs` |
| `ApiV1ManageFormsDeliveriesRedeliverRequest` | `src/Fillo/Models/ApiV1ManageFormsDeliveriesRedeliverRequest.cs` |
| `ApiV1ManageFormsDeliveriesRedeliverResponse` | `src/Fillo/Models/ApiV1ManageFormsDeliveriesRedeliverResponse.cs` |
| `RedeliverFormResponsesError` | `src/Fillo/Errors/RedeliverFormResponsesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RetryFormDeliveries

- **Auth**: `options.BearerAuth`
- **Signature**: `RetryFormDeliveries(RetryFormDeliveriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `ApiV1ManageFormsDeliveriesRetryResponse`
- **Error**: `ApiException<RetryFormDeliveriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetryFormDeliveriesRequest` | `src/Fillo/Requests/Deliveries/RetryFormDeliveriesRequest.cs` |
| `ApiV1ManageFormsDeliveriesRetryRequest` | `src/Fillo/Models/ApiV1ManageFormsDeliveriesRetryRequest.cs` |
| `ApiV1ManageFormsDeliveriesRetryResponse` | `src/Fillo/Models/ApiV1ManageFormsDeliveriesRetryResponse.cs` |
| `RetryFormDeliveriesError` | `src/Fillo/Errors/RetryFormDeliveriesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

