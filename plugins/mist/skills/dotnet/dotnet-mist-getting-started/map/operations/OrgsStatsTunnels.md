# OrgsStatsTunnels — operations

Accessor: `client.OrgsStatsTunnels` · Source: `Api/OrgsStatsTunnels.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgTunnelsStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/tunnels/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Mist Tunnels Stats
- **Signature**: `CountOrgTunnelsStats(Guid orgId, OrgTunnelCountDistinct? distinct, OrgTunnelTypeCount? type, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `type` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgTunnelsStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgTunnelsStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/tunnels/search` (ApiHost (api))
- **Notes**: By default the endpoint returns only `wxtunnel` type stats, to get `wan` type stats you need to specify `type=wan` in the query parameters. Tunnel types: - `wxtunnel` (default) - A WxLan Tunnel (WxTunnel) are used to create a secure connection between Juniper Mist Access Points and third-party VPN concentrators using protocols such as L2TPv3 or dmvpn. - `wan` - A WAN Tunnel is a secure connection between two Gateways, typically used for site-to-site or mesh connectivity. It can be configured with various protocols and encryption methods. If `type` is not specified or `type`==`wxtunnel`, the following parameters are supported: - `mxcluster_id` - the MX cluster ID - `site_id` - the site ID - `wxtunnel_id` - the WX tunnel ID - `ap` - the AP MAC address If `type`==`wan`, the following parameters are supported: - `mac` - the MAC address of the WAN device - `node` - the node ID - `peer_ip` - the peer IP address - `peer_host` - the peer host name - `ip` - the IP address of the WAN device - `tunnel_name` - the name of the tunnel - `protocol` - the protocol used for the tunnel - `auth_algo` - the authentication algorithm used for the tunnel - `encrypt_algo` - the encryption algorithm used for the tunnel - `ike_version` - the IKE version used for the tunnel - `up` - the status of the tunnel (up or down)
- **Signature**: `SearchOrgTunnelsStats(Guid orgId, string? mxclusterId, string? siteId, string? wxtunnelId, string? ap, string? mac, string? node, string? peerIp, string? peerHost, string? ip, string? tunnelName, string? protocol, string? authAlgo, string? encryptAlgo, string? ikeVersion, string? up, TunnelType? type, int? start, int? end, int? limit = 100, string? duration = "5m", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 18 params (`mxclusterId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "5m", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mxcluster_id` ← `mxclusterId`, `site_id` ← `siteId`, `wxtunnel_id` ← `wxtunnelId`, `ap` ← `ap`, `mac` ← `mac`, `node` ← `node`, `peer_ip` ← `peerIp`, `peer_host` ← `peerHost`, `ip` ← `ip`, `tunnel_name` ← `tunnelName`, `protocol` ← `protocol`, `auth_algo` ← `authAlgo`, `encrypt_algo` ← `encryptAlgo`, `ike_version` ← `ikeVersion`, `up` ← `up`, `type` ← `type`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseTunnelSearch`
- **Error**: `SdkException<SearchOrgTunnelsStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
