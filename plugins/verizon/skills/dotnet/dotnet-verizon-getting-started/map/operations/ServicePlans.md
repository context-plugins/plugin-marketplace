# ServicePlans — operations

Accessor: `client.ServicePlans` · Source: `Api/ServicePlans.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListAccountServicePlans
- **HTTP**: `GET /m2m/v1/plans/{aname}` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns a list of all data service plans that are associated with a specified billing account. When you send a request to /devices/actions/activate to activate a line of service you must specify the code for one of the service plans associated with your account.
- **Signature**: `ListAccountServicePlans(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ServicePlan>`
- **Error**: `SdkException<ListAccountServicePlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
