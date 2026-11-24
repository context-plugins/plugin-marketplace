<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dev — operations

Accessor: `client.dev` · Source: `dynamic_feed/apis/dev.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dev.dns_ep_dns_get

- **Route**: `GET /dns`
- **Signature**: `def dns_ep_dns_get(name: str, *, type_: str | None = "A", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query · `type_` — query `type` · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DnsEpDnsGetErrorBody]`
- **Error**: `DnsEpDnsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DnsEpDnsGetErrorBody` | `dynamic_feed/errors/dns_ep_dns_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.dev.github_releases_ep_github_releases_get

- **Route**: `GET /github-releases`
- **Signature**: `def github_releases_ep_github_releases_get(repo: str, *, limit: int | None = 5, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo`
- **Params**: `repo` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GithubReleasesEpGithubReleasesGetErrorBody]`
- **Error**: `GithubReleasesEpGithubReleasesGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GithubReleasesEpGithubReleasesGetErrorBody` | `dynamic_feed/errors/github_releases_ep_github_releases_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.dev.hacker_news_ep_hacker_news_get

- **Route**: `GET /hacker-news`
- **Signature**: `def hacker_news_ep_hacker_news_get(*, query: str | None = "", kind: str | None = "top", limit: int | None = 10, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `query` — query · `kind` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, HackerNewsEpHackerNewsGetErrorBody]`
- **Error**: `HackerNewsEpHackerNewsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HackerNewsEpHackerNewsGetErrorBody` | `dynamic_feed/errors/hacker_news_ep_hacker_news_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

