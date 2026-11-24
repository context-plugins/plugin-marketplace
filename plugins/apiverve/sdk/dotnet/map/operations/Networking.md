<!-- Generated file — do not edit; regenerated with the SDK. -->

# Networking — operations

Accessor: `client.Networking` · Source: `src/ApiVerve/Api/Networking.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Bluetoothlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Bluetoothlookup(BluetoothlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Companyid`
- **Query params (wire ← C#)**: `companyid` ← `Companyid`
- **Returns**: `V1BluetoothlookupResponse`
- **Error**: `ApiException<BluetoothlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BluetoothlookupRequest` | `src/ApiVerve/Requests/Networking/BluetoothlookupRequest.cs` |
| `V1BluetoothlookupResponse` | `src/ApiVerve/Models/V1BluetoothlookupResponse.cs` |
| `BluetoothlookupError` | `src/ApiVerve/Errors/BluetoothlookupError.cs` |

### Botdetector

- **Auth**: `options.ApiKey`
- **Signature**: `Botdetector(BotdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ua`
- **Query params (wire ← C#)**: `ua` ← `Ua`, `ip` ← `Ip`
- **Returns**: `V1BotdetectorResponse`
- **Error**: `ApiException<BotdetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BotdetectorRequest` | `src/ApiVerve/Requests/Networking/BotdetectorRequest.cs` |
| `V1BotdetectorResponse` | `src/ApiVerve/Models/V1BotdetectorResponse.cs` |
| `BotdetectorError` | `src/ApiVerve/Errors/BotdetectorError.cs` |

### Contentfilter

- **Auth**: `options.ApiKey`
- **Signature**: `Contentfilter(ContentfilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ContentfilterResponse`
- **Error**: `ApiException<ContentfilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContentfilterRequest` | `src/ApiVerve/Requests/Networking/ContentfilterRequest.cs` |
| `V1ContentfilterRequest` | `src/ApiVerve/Models/V1ContentfilterRequest.cs` |
| `V1ContentfilterResponse` | `src/ApiVerve/Models/V1ContentfilterResponse.cs` |
| `ContentfilterError` | `src/ApiVerve/Errors/ContentfilterError.cs` |

### Ipblacklistlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Ipblacklistlookup(IpblacklistlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `V1IpblacklistlookupResponse`
- **Error**: `ApiException<IpblacklistlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IpblacklistlookupRequest` | `src/ApiVerve/Requests/Networking/IpblacklistlookupRequest.cs` |
| `V1IpblacklistlookupResponse` | `src/ApiVerve/Models/V1IpblacklistlookupResponse.cs` |
| `IpblacklistlookupError` | `src/ApiVerve/Errors/IpblacklistlookupError.cs` |

### Iplookup

- **Auth**: `options.ApiKey`
- **Signature**: `Iplookup(IplookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `V1IplookupResponse`
- **Error**: `ApiException<IplookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IplookupRequest` | `src/ApiVerve/Requests/Networking/IplookupRequest.cs` |
| `V1IplookupResponse` | `src/ApiVerve/Models/V1IplookupResponse.cs` |
| `IplookupError` | `src/ApiVerve/Errors/IplookupError.cs` |

### Macaddresslookup

- **Auth**: `options.ApiKey`
- **Signature**: `Macaddresslookup(MacaddresslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Mac`
- **Query params (wire ← C#)**: `mac` ← `Mac`
- **Returns**: `V1MacaddresslookupResponse`
- **Error**: `ApiException<MacaddresslookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MacaddresslookupRequest` | `src/ApiVerve/Requests/Networking/MacaddresslookupRequest.cs` |
| `V1MacaddresslookupResponse` | `src/ApiVerve/Models/V1MacaddresslookupResponse.cs` |
| `MacaddresslookupError` | `src/ApiVerve/Errors/MacaddresslookupError.cs` |

### Nameservers

- **Auth**: `options.ApiKey`
- **Signature**: `Nameservers(NameserversRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1NameserversResponse`
- **Error**: `ApiException<NameserversError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NameserversRequest` | `src/ApiVerve/Requests/Networking/NameserversRequest.cs` |
| `V1NameserversResponse` | `src/ApiVerve/Models/V1NameserversResponse.cs` |
| `NameserversError` | `src/ApiVerve/Errors/NameserversError.cs` |

### Phishingcheck

- **Auth**: `options.ApiKey`
- **Signature**: `Phishingcheck(PhishingcheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1PhishingcheckResponse`
- **Error**: `ApiException<PhishingcheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PhishingcheckRequest` | `src/ApiVerve/Requests/Networking/PhishingcheckRequest.cs` |
| `V1PhishingcheckRequest` | `src/ApiVerve/Models/V1PhishingcheckRequest.cs` |
| `V1PhishingcheckResponse` | `src/ApiVerve/Models/V1PhishingcheckResponse.cs` |
| `PhishingcheckError` | `src/ApiVerve/Errors/PhishingcheckError.cs` |

### Pinger

- **Auth**: `options.ApiKey`
- **Signature**: `Pinger(PingerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1PingerResponse`
- **Error**: `ApiException<PingerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PingerRequest` | `src/ApiVerve/Requests/Networking/PingerRequest.cs` |
| `V1PingerRequest` | `src/ApiVerve/Models/V1PingerRequest.cs` |
| `V1PingerResponse` | `src/ApiVerve/Models/V1PingerResponse.cs` |
| `PingerError` | `src/ApiVerve/Errors/PingerError.cs` |

### Tldlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Tldlookup(TldlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Tld`
- **Query params (wire ← C#)**: `tld` ← `Tld`
- **Returns**: `V1TldlookupResponse`
- **Error**: `ApiException<TldlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TldlookupRequest` | `src/ApiVerve/Requests/Networking/TldlookupRequest.cs` |
| `V1TldlookupResponse` | `src/ApiVerve/Models/V1TldlookupResponse.cs` |
| `TldlookupError` | `src/ApiVerve/Errors/TldlookupError.cs` |

### Tlscheck

- **Auth**: `options.ApiKey`
- **Signature**: `Tlscheck(TlscheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `port` ← `Port`
- **Returns**: `V1TlscheckResponse`
- **Error**: `ApiException<TlscheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TlscheckRequest` | `src/ApiVerve/Requests/Networking/TlscheckRequest.cs` |
| `V1TlscheckResponse` | `src/ApiVerve/Models/V1TlscheckResponse.cs` |
| `TlscheckError` | `src/ApiVerve/Errors/TlscheckError.cs` |

### Tordetect

- **Auth**: `options.ApiKey`
- **Signature**: `Tordetect(TordetectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `V1TordetectResponse`
- **Error**: `ApiException<TordetectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TordetectRequest` | `src/ApiVerve/Requests/Networking/TordetectRequest.cs` |
| `V1TordetectResponse` | `src/ApiVerve/Models/V1TordetectResponse.cs` |
| `TordetectError` | `src/ApiVerve/Errors/TordetectError.cs` |

### Usbvendorlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Usbvendorlookup(UsbvendorlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vendorid`
- **Query params (wire ← C#)**: `vendorid` ← `Vendorid`, `productid` ← `Productid`
- **Returns**: `V1UsbvendorlookupResponse`
- **Error**: `ApiException<UsbvendorlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsbvendorlookupRequest` | `src/ApiVerve/Requests/Networking/UsbvendorlookupRequest.cs` |
| `V1UsbvendorlookupResponse` | `src/ApiVerve/Models/V1UsbvendorlookupResponse.cs` |
| `UsbvendorlookupError` | `src/ApiVerve/Errors/UsbvendorlookupError.cs` |

### Vpndetector

- **Auth**: `options.ApiKey`
- **Signature**: `Vpndetector(VpndetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `V1VpndetectorResponse`
- **Error**: `ApiException<VpndetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VpndetectorRequest` | `src/ApiVerve/Requests/Networking/VpndetectorRequest.cs` |
| `V1VpndetectorResponse` | `src/ApiVerve/Models/V1VpndetectorResponse.cs` |
| `VpndetectorError` | `src/ApiVerve/Errors/VpndetectorError.cs` |

