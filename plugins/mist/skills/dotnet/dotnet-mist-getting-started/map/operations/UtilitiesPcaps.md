# UtilitiesPcaps — operations

Accessor: `client.UtilitiesPcaps` · Source: `Api/UtilitiesPcaps.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgCapturingStatus
- **HTTP**: `GET /api/v1/orgs/{org_id}/pcaps/capture` (ApiHost (api))
- **Notes**: Get Org Capturing status
- **Signature**: `GetOrgCapturingStatus(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponsePcapStatus`
- **Error**: `SdkException<GetOrgCapturingStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteCapturingStatus
- **HTTP**: `GET /api/v1/sites/{site_id}/pcaps/capture` (ApiHost (api))
- **Notes**: Get Capturing status
- **Signature**: `GetSiteCapturingStatus(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponsePcapStatus`
- **Error**: `SdkException<GetSiteCapturingStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgPacketCaptures
- **HTTP**: `GET /api/v1/orgs/{org_id}/pcaps` (ApiHost (api))
- **Notes**: Get List of Org Packet Captures
- **Signature**: `ListOrgPacketCaptures(Guid orgId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponsePcapSearch`
- **Error**: `SdkException<ListOrgPacketCapturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSitePacketCaptures
- **HTTP**: `GET /api/v1/sites/{site_id}/pcaps` (ApiHost (api))
- **Notes**: Get List of Site Packet Captures
- **Signature**: `ListSitePacketCaptures(Guid siteId, string? clientMac, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clientMac` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `client_mac` ← `clientMac`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponsePcapSearch`
- **Error**: `SdkException<ListSitePacketCapturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### StartOrgPacketCapture
- **HTTP**: `POST /api/v1/orgs/{org_id}/pcaps/capture` (ApiHost (api))
- **Notes**: Initiate a Packet Capture NOTE : For packet captures of org level Mist Edges only. Use Start Site Packet Capture for site level Mist Edges. The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/pcaps" } ``` Response (Wireless/RadioTap) ```json { "event": "data" "channel": "/orgs/67970e46-4e12-11e6-9188-0242ac110007/pcaps" "data": { "capture_id": "f039b1b4-a23e-48b2-906a-0da40524de73", "pcap_dict": { "dst_mac": "68:ec:c5:09:2e:87", "src_mac": "8c:3b:ad:e0:47:40", "vlan": 1, "src_ip": "34.224.147.117", "dst_ip": "192.168.1.55", "dst_port": 51635, "src_port": 443, "protocol": "TCP", "mxedge_id": "00000000-0000-0000-1000-001122334455", "direction": "tx", "timestamp": 1652247615, "length": 159.0, "interface": "port0", "info": "1652247616.007409 IP ec2-34-224-147-117.compute-1.amazonaws.com.https &gt; ip-192-168-1-55.ec2.internal.51635: Flags [P.], seq 2192123968:2192124057, ack 4035166782, win 12, options [nop,nop,TS val 597467050 ecr 740580660], length 89\\n", }, "pcap_raw": "1MOyoQIABAAAAAAAAAAAAP//AAABAAAAQEx7YhMzAACfAAAAnwAAAGjsxQkuh4w7reBHQIEAAAEIAEUAAI1bLEAAKAZ/CiLgk3XAqAE3AbvJs4KpKEDwg8I+gBgADFf9AAABAQgKI5yfqiwkXTQXAwMAVKY5JopoKQrVEn0/3ld4YntctGEH/rTZuwtCvzSncFw71QJveJi9uxHs57KC8w9Apph3YvXJrmWg7M37+o+YV0KH/xmr626s5Bkhb3QhKOu+NoNEmA==\" } }
- **Signature**: `StartOrgPacketCapture(Guid orgId, CaptureOrg? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponsePcapStart`
- **Error**: `SdkException<StartOrgPacketCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartSitePacketCapture
- **HTTP**: `POST /api/v1/sites/{site_id}/pcaps/capture` (ApiHost (api))
- **Notes**: Initiate a Site Packet Capture The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/pcaps" } ``` Response (MxEdge) ```json { "event": "data" "channel": "/sites/{site_id}/pcaps" "data": { "capture_id": "6b1be4fb-b239-44d9-9d3b-cb1ff3af1721", "lost_messages": 0 "pcap_dict": { "channel_frequency": 2412, "channel": "1", "datarate": "1.0 Mbps", "rssi": -75, "dst": "78:bd:bc:ca:0b:0a", "src": "18:b8:1f:4c:91:c0", "bssid": "18:b8:1f:4c:91:c0", "frame_type": "Management", "frame_subtype": "Probe Response", "proto": "802.11", "ap_mac": "d4:20:b0:81:99:2e", "direction": "tx", "timestamp": 1652246543, "length": 416.0, "interface": "radiotap", "info": "1652246544.467733 1683216786us tsft 1.0 Mb/s 2412 MHz 11g -75dBm signal -82dBm noise antenna 0 Probe Response (ATTKmsWiVS) [1.0* 2.0* 5.5* 11.0* 18.0 24.0 36.0 54.0 Mbit] CH: 2, PRIVACY\\n", }, "pcap_raw": "1MOyoQIABAAAAAAAAAAAAP//AAABAAAAEEh7Yh5VBwCgAQAAoAEAAAAAKwBvCADAAQAAAIw7reCS2VNkAAAAABACbAmABLWuAAEAEBgAAwACAABQADoBeL28ygsKGLgfTJHAGLgfTJHAcIZ2WDlBJQAAAGQAERUACkFUVEttc1dpVlMBCIKEi5YkMEhsAwECBwZVUyABCx4gAQAjAhkAKgEEMgQMEhhgMBQBAAAPrAQBAAAPrAQBAAAPrAIMAAsFAQAbAABGBTIIAQAALRqtCR////8AAAAAAAAAAAAAAAAAAAAAAAAAAD0WAggVAAAAAAAAAAAAAAAAAAAAAAAAAH8IBAAIAAAAAEDdkwBQ8gQQSgABEBBEAAECEDsAAQMQRwAQn2481frn3KT+uGod2ERx+RAhAAtBcnJpcywgSW5jLhAjAApCR1cyMTAtNzAwECQACkJHVzIxMC03MDAQQgAKQkdXMjEwLTcwMBBUAAgABgBQ8gQAARARAA5BcnJpcyBXaXJlbGVzcxAIAAIgCBA8AAEBEEkABgA3KgABIN0JABAYAgEQHAAA3RgAUPICAQGEAAOkAAAnpAAAQkNeAGIyLwAzjakr" } Response (Wired) { "event": "data" "channel": "/sites/67970e46-4e12-11e6-9188-0242ac110007/pcaps" "data": { "capture_id": "f039b1b4-a23e-48b2-906a-0da40524de73", "pcap_dict": { "dst_mac": "68:ec:c5:09:2e:87", "src_mac": "8c:3b:ad:e0:47:40", "vlan": 1, "src_ip": "34.224.147.117", "dst_ip": "192.168.1.55", "dst_port": 51635, "src_port": 443, "proto": "TCP", "ap_mac": "d4:20:b0:81:99:2e", "direction": "tx", "timestamp": 1652247615, "length": 159.0, "interface": "wired", "info": "1652247616.007409 IP ec2-34-224-147-117.compute-1.amazonaws.com.https &gt; ip-192-168-1-55.ec2.internal.51635: Flags [P.], seq 2192123968:2192124057, ack 4035166782, win 12, options [nop,nop,TS val 597467050 ecr 740580660], length 89\\n", }, "pcap_raw": "1MOyoQIABAAAAAAAAAAAAP//AAABAAAAQEx7YhMzAACfAAAAnwAAAGjsxQkuh4w7reBHQIEAAAEIAEUAAI1bLEAAKAZ/CiLgk3XAqAE3AbvJs4KpKEDwg8I+gBgADFf9AAABAQgKI5yfqiwkXTQXAwMAVKY5JopoKQrVEn0/3ld4YntctGEH/rTZuwtCvzSncFw71QJveJi9uxHs57KC8w9Apph3YvXJrmWg7M37+o+YV0KH/xmr626s5Bkhb3QhKOu+NoNEmA==" } } Stop Response (Wired/Wireless) { "event": "data" "channel": "/sites/67970e46-4e12-11e6-9188-0242ac110007/pcaps" "data": { "capture_id": "a2f7374d-6a70-41fd-8a3f-71e42573baaf", "lost_messages": 0, "pcap_dict": null } }
- **Signature**: `StartSitePacketCapture(Guid siteId, CaptureSite? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponsePcapStart`
- **Error**: `SdkException<StartSitePacketCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StopOrgPacketCapture
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/pcaps/capture` (ApiHost (api))
- **Notes**: Stop current Org capture
- **Signature**: `StopOrgPacketCapture(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StopOrgPacketCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StopSitePacketCapture
- **HTTP**: `DELETE /api/v1/sites/{site_id}/pcaps/capture` (ApiHost (api))
- **Notes**: Stop current capture
- **Signature**: `StopSitePacketCapture(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StopSitePacketCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSitePacketCapture
- **HTTP**: `PUT /api/v1/sites/{site_id}/pcaps/{pcap_id}` (ApiHost (api))
- **Notes**: Update or add notes to a completed packet capture
- **Signature**: `UpdateSitePacketCapture(Guid siteId, Guid pcapId, NotesString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateSitePacketCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
