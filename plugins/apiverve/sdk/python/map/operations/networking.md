<!-- Generated file — do not edit; regenerated with the SDK. -->

# Networking — operations

Accessor: `client.networking` · Source: `api_verve/apis/networking.py` · 14 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.networking.bluetoothlookup

- **Route**: `GET /v1/bluetoothlookup`
- **Auth**: `api_key`
- **Signature**: `def bluetoothlookup(companyid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `companyid`
- **Params**: `companyid` — query
- **Returns (parsed)**: `V1BluetoothlookupResponse`
- **Returns (raw)**: `ApiResult[V1BluetoothlookupResponse, BluetoothlookupErrorBody]`
- **Error**: `BluetoothlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BluetoothlookupResponse` | `api_verve/models/v1_bluetoothlookup_response.py` |
| `BluetoothlookupErrorBody` | `api_verve/errors/bluetoothlookup_error.py` |

### client.networking.botdetector

- **Route**: `GET /v1/botdetector`
- **Auth**: `api_key`
- **Signature**: `def botdetector(ua: str, *, ip: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ua`
- **Params**: `ua` — query · `ip` — query
- **Returns (parsed)**: `V1BotdetectorResponse`
- **Returns (raw)**: `ApiResult[V1BotdetectorResponse, BotdetectorErrorBody]`
- **Error**: `BotdetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BotdetectorResponse` | `api_verve/models/v1_botdetector_response.py` |
| `BotdetectorErrorBody` | `api_verve/errors/botdetector_error.py` |

### client.networking.contentfilter

- **Route**: `POST /v1/contentfilter`
- **Auth**: `api_key`
- **Signature**: `def contentfilter(body: V1ContentfilterRequest | V1ContentfilterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ContentfilterResponse`
- **Returns (raw)**: `ApiResult[V1ContentfilterResponse, ContentfilterErrorBody]`
- **Error**: `ContentfilterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ContentfilterRequest` | `api_verve/models/v1_contentfilter_request.py` |
| `V1ContentfilterRequestDict` | `api_verve/models/v1_contentfilter_request.py` |
| `V1ContentfilterResponse` | `api_verve/models/v1_contentfilter_response.py` |
| `ContentfilterErrorBody` | `api_verve/errors/contentfilter_error.py` |

### client.networking.ipblacklistlookup

- **Route**: `GET /v1/ipblacklistlookup`
- **Auth**: `api_key`
- **Signature**: `def ipblacklistlookup(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `V1IpblacklistlookupResponse`
- **Returns (raw)**: `ApiResult[V1IpblacklistlookupResponse, IpblacklistlookupErrorBody]`
- **Error**: `IpblacklistlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IpblacklistlookupResponse` | `api_verve/models/v1_ipblacklistlookup_response.py` |
| `IpblacklistlookupErrorBody` | `api_verve/errors/ipblacklistlookup_error.py` |

### client.networking.iplookup

- **Route**: `GET /v1/iplookup`
- **Auth**: `api_key`
- **Signature**: `def iplookup(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `V1IplookupResponse`
- **Returns (raw)**: `ApiResult[V1IplookupResponse, IplookupErrorBody]`
- **Error**: `IplookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IplookupResponse` | `api_verve/models/v1_iplookup_response.py` |
| `IplookupErrorBody` | `api_verve/errors/iplookup_error.py` |

### client.networking.macaddresslookup

- **Route**: `GET /v1/macaddresslookup`
- **Auth**: `api_key`
- **Signature**: `def macaddresslookup(mac: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `mac`
- **Params**: `mac` — query
- **Returns (parsed)**: `V1MacaddresslookupResponse`
- **Returns (raw)**: `ApiResult[V1MacaddresslookupResponse, MacaddresslookupErrorBody]`
- **Error**: `MacaddresslookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MacaddresslookupResponse` | `api_verve/models/v1_macaddresslookup_response.py` |
| `MacaddresslookupErrorBody` | `api_verve/errors/macaddresslookup_error.py` |

### client.networking.nameservers

- **Route**: `GET /v1/nameservers`
- **Auth**: `api_key`
- **Signature**: `def nameservers(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1NameserversResponse`
- **Returns (raw)**: `ApiResult[V1NameserversResponse, NameserversErrorBody]`
- **Error**: `NameserversErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NameserversResponse` | `api_verve/models/v1_nameservers_response.py` |
| `NameserversErrorBody` | `api_verve/errors/nameservers_error.py` |

### client.networking.phishingcheck

- **Route**: `POST /v1/phishingcheck`
- **Auth**: `api_key`
- **Signature**: `def phishingcheck(body: V1PhishingcheckRequest | V1PhishingcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1PhishingcheckResponse`
- **Returns (raw)**: `ApiResult[V1PhishingcheckResponse, PhishingcheckErrorBody]`
- **Error**: `PhishingcheckErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PhishingcheckRequest` | `api_verve/models/v1_phishingcheck_request.py` |
| `V1PhishingcheckRequestDict` | `api_verve/models/v1_phishingcheck_request.py` |
| `V1PhishingcheckResponse` | `api_verve/models/v1_phishingcheck_response.py` |
| `PhishingcheckErrorBody` | `api_verve/errors/phishingcheck_error.py` |

### client.networking.pinger

- **Route**: `POST /v1/pinger`
- **Auth**: `api_key`
- **Signature**: `def pinger(body: V1PingerRequest | V1PingerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1PingerResponse`
- **Returns (raw)**: `ApiResult[V1PingerResponse, PingerErrorBody]`
- **Error**: `PingerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PingerRequest` | `api_verve/models/v1_pinger_request.py` |
| `V1PingerRequestDict` | `api_verve/models/v1_pinger_request.py` |
| `V1PingerResponse` | `api_verve/models/v1_pinger_response.py` |
| `PingerErrorBody` | `api_verve/errors/pinger_error.py` |

### client.networking.tldlookup

- **Route**: `GET /v1/tldlookup`
- **Auth**: `api_key`
- **Signature**: `def tldlookup(tld: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `tld`
- **Params**: `tld` — query
- **Returns (parsed)**: `V1TldlookupResponse`
- **Returns (raw)**: `ApiResult[V1TldlookupResponse, TldlookupErrorBody]`
- **Error**: `TldlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TldlookupResponse` | `api_verve/models/v1_tldlookup_response.py` |
| `TldlookupErrorBody` | `api_verve/errors/tldlookup_error.py` |

### client.networking.tlscheck

- **Route**: `GET /v1/tlscheck`
- **Auth**: `api_key`
- **Signature**: `def tlscheck(domain: str, *, port: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query · `port` — query
- **Returns (parsed)**: `V1TlscheckResponse`
- **Returns (raw)**: `ApiResult[V1TlscheckResponse, TlscheckErrorBody]`
- **Error**: `TlscheckErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TlscheckResponse` | `api_verve/models/v1_tlscheck_response.py` |
| `TlscheckErrorBody` | `api_verve/errors/tlscheck_error.py` |

### client.networking.tordetect

- **Route**: `GET /v1/tordetect`
- **Auth**: `api_key`
- **Signature**: `def tordetect(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `V1TordetectResponse`
- **Returns (raw)**: `ApiResult[V1TordetectResponse, TordetectErrorBody]`
- **Error**: `TordetectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TordetectResponse` | `api_verve/models/v1_tordetect_response.py` |
| `TordetectErrorBody` | `api_verve/errors/tordetect_error.py` |

### client.networking.usbvendorlookup

- **Route**: `GET /v1/usbvendorlookup`
- **Auth**: `api_key`
- **Signature**: `def usbvendorlookup(vendorid: str, *, productid: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendorid`
- **Params**: `vendorid` — query · `productid` — query
- **Returns (parsed)**: `V1UsbvendorlookupResponse`
- **Returns (raw)**: `ApiResult[V1UsbvendorlookupResponse, UsbvendorlookupErrorBody]`
- **Error**: `UsbvendorlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UsbvendorlookupResponse` | `api_verve/models/v1_usbvendorlookup_response.py` |
| `UsbvendorlookupErrorBody` | `api_verve/errors/usbvendorlookup_error.py` |

### client.networking.vpndetector

- **Route**: `GET /v1/vpndetector`
- **Auth**: `api_key`
- **Signature**: `def vpndetector(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `V1VpndetectorResponse`
- **Returns (raw)**: `ApiResult[V1VpndetectorResponse, VpndetectorErrorBody]`
- **Error**: `VpndetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1VpndetectorResponse` | `api_verve/models/v1_vpndetector_response.py` |
| `VpndetectorErrorBody` | `api_verve/errors/vpndetector_error.py` |

