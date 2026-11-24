<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesThreatFeed — operations

Accessor: `client.databases_threat_feed` · Source: `whois_freaks/apis/databases_threat_feed.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.databases_threat_feed.download_threat_feed_malware

- **Route**: `GET /v3.4/download/threat-feed/malware`
- **Auth**: `api_key_auth`
- **Signature**: `def download_threat_feed_malware(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.databases_threat_feed.download_threat_feed_malware_sample

- **Route**: `GET /v3.4/download/threat-feed/malware/sample`
- **Auth**: `api_key_auth`
- **Signature**: `def download_threat_feed_malware_sample(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.databases_threat_feed.download_threat_feed_phishing

- **Route**: `GET /v3.4/download/threat-feed/phishing`
- **Auth**: `api_key_auth`
- **Signature**: `def download_threat_feed_phishing(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.databases_threat_feed.download_threat_feed_phishing_sample

- **Route**: `GET /v3.4/download/threat-feed/phishing/sample`
- **Auth**: `api_key_auth`
- **Signature**: `def download_threat_feed_phishing_sample(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.databases_threat_feed.download_threat_feed_spam

- **Route**: `GET /v3.4/download/threat-feed/spam`
- **Auth**: `api_key_auth`
- **Signature**: `def download_threat_feed_spam(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.databases_threat_feed.download_threat_feed_spam_sample

- **Route**: `GET /v3.4/download/threat-feed/spam/sample`
- **Auth**: `api_key_auth`
- **Signature**: `def download_threat_feed_spam_sample(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

