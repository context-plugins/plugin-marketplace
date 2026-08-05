# WirelessNetworkPerformance — operations

Accessor: `client.WirelessNetworkPerformance` · Source: `Api/WirelessNetworkPerformance.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeviceExperience30DaysHistory
- **HTTP**: `POST /m2m/v1/intelligence/device-experience/history/30-days` (HyperPreciseCredentials (thingspace))
- **Notes**: A report of a specific device's service scores over a 30 day period.
- **Signature**: `DeviceExperience30DaysHistory(GetDeviceExperienceScoreHistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WnprequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceExperienceBulkLatest
- **HTTP**: `POST /m2m/v1/intelligence/device-experience/bulk/latest` (HyperPreciseCredentials (thingspace))
- **Notes**: Run a report to view the latest device experience score for specific devices.
- **Signature**: `DeviceExperienceBulkLatest(GetDeviceExperienceScoreBulkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WnprequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Domestic4Gand5GnationwideNetworkCoverage
- **HTTP**: `POST /m2m/v1/intelligence/wireless-coverage` (HyperPreciseCredentials (thingspace))
- **Notes**: Run a report for FWA Address qualification or to determine network types available and available coverage. Network types covered include: CAT-M, NB-IOT, LTE, LTE-AWS, 5GNW, MMWAVE and C-BAND.
- **Signature**: `Domestic4Gand5GnationwideNetworkCoverage(M2MV1IntelligenceWirelessCoverageRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WnprequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NearRealTimeNetworkConditions
- **HTTP**: `POST /m2m/v1/intelligence/network-conditions` (HyperPreciseCredentials (thingspace))
- **Notes**: WNP Query for current network condition.
- **Signature**: `NearRealTimeNetworkConditions(GetNetworkConditionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WnprequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SiteProximity
- **HTTP**: `POST /m2m/v1/intelligence/site-proximity/action/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Identify the direction and general distance of nearby cell sites and the technology supported by the equipment.
- **Signature**: `SiteProximity(GetNetworkConditionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WnprequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
