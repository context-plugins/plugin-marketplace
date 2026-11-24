<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceRequestApi — operations

Accessor: `client.ServiceRequestApi` · Source: `src/HealthGorilla/Api/ServiceRequestApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateServiceRequest

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateServiceRequest(CreateServiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ServiceRequest`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateServiceRequest` | `src/HealthGorilla/Requests/ServiceRequestApi/CreateServiceRequest.cs` |
| `ServiceRequest` | `src/HealthGorilla/Models/ServiceRequest.cs` |

### ReadServiceRequest

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadServiceRequest(ReadServiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ServiceRequest`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReadServiceRequest` | `src/HealthGorilla/Requests/ServiceRequestApi/ReadServiceRequest.cs` |
| `ServiceRequest` | `src/HealthGorilla/Models/ServiceRequest.cs` |

### SearchServiceRequests

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchServiceRequests(SearchServiceRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `patient` ← `Patient`, `status` ← `Status`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchServiceRequestsRequest` | `src/HealthGorilla/Requests/ServiceRequestApi/SearchServiceRequestsRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

