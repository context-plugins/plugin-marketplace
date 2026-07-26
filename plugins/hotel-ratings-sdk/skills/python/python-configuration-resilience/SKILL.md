---
name: python-configuration-resilience
description: Tune an APIMatic-generated Python SDK client — retry defaults (max_retries=0 off by default; only GET/PUT retried when enabled; configurable retry_statuses and retry_methods), timeout in seconds, custom requests.Session via http_client_instance, Environment enum and get_base_uri for base URL, paginated operations via PagedIterable or manual page params, and request/response logging via HttpCallBack. Use whenever adjusting retries, timeout, the HTTP session, base URL, paging, or logging on any APIMatic Python SDK — load it even after reading the Configuration kwargs in the source, since the kwarg names alone don't tell you that retries are off by default, which methods are retried, how to redirect requests to a mock host, or that HttpCallBack is the logging seam.
---

# Configuration & resilience for an APIMatic Python SDK

All settings are passed as keyword arguments to `Configuration.__init__` (or to `HotelRatingsClient`
directly, which wraps them in a `Configuration` internally). Confirm defaults from
`hotelratings/configuration.py` in the cloned source.

> Throughout, `{...}` tokens are placeholders — replace with concrete names from your SDK.

## Retry configuration — off by default

Retries are **disabled out of the box** (`max_retries` defaults to `0`). Raise it to enable
retries; leave it at `0` in tests so a stubbed 5xx fails immediately.

| Kwarg | Default | Notes |
| --- | --- | --- |
| `max_retries` | `0` | **0 disables retries** — set > 0 to enable |
| `backoff_factor` | `2` | exponential backoff multiplier between attempts |
| `retry_statuses` | `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` | statuses that trigger a retry |
| `retry_methods` | `["GET", "PUT"]` | **only idempotent methods**; POST/DELETE are not retried unless added |

```python
from hotelratings.configuration import Configuration, Environment

config = Configuration(
    environment=Environment.PRODUCTION,
    max_retries=3,
    backoff_factor=2,
    retry_statuses=[429, 500, 502, 503, 504],
    retry_methods=['GET', 'PUT'],
)
```

Add `POST` or `DELETE` to `retry_methods` only when the operation is genuinely idempotent.

The retry mechanism is implemented inside `apimatic-requests-client-adapter` (using `urllib3.Retry`
under the hood). The `backoff_factor` maps to urllib3's backoff: wait time between attempt `n`
and `n+1` is `backoff_factor * (2 ** (n - 1))` seconds.

## Timeout

`timeout` is a per-attempt timeout in **seconds** (not milliseconds, not a total across retries):

```python
config = Configuration(timeout=30)   # 30 s per attempt
```

With `max_retries=3` and `timeout=30`, the worst-case wall time is `3 × 30 s = 90 s` plus backoff
delay. To cap the entire operation, wrap the call in a thread with `threading.Timer`.

## Custom HTTP session

Pass a `requests.Session` to `http_client_instance` when you need custom TLS settings, a shared
connection pool, proxy routing, or transport-level hooks. Set
`override_http_client_configuration=True` to allow the SDK to apply its own `timeout`,
`max_retries`, and `backoff_factor` settings to your session:

```python
import requests
from hotelratings.configuration import Configuration

session = requests.Session()
session.verify = '/path/to/ca-bundle.pem'   # custom TLS CA

config = Configuration(
    http_client_instance=session,
    override_http_client_configuration=True,
    timeout=30,
    max_retries=3,
)
```

When `override_http_client_configuration=False` (the default), the SDK uses your session as-is
without applying its retry/timeout settings.

## Base URL and environment selection

The base URL is derived from the `environment` kwarg (an `Environment` enum member in
`hotelratings/configuration.py`) and any API-specific server parameters (e.g. `port`, `suites`):

```python
from hotelratings.configuration import Configuration, Environment

config = Configuration(
    environment=Environment.PRODUCTION,
    port='443',     # server parameter — per-API, check the source
)
```

To see the URL each environment resolves to, read the `environments` dict in
`hotelratings/configuration.py` and call `config.get_base_uri()` (or
`config.get_base_uri(Server.AUTH)` for alternate server groups). There is no free-form base-URL
string override — to redirect requests to a mock host, inject a custom `requests.Session` whose
transport intercepts and rewrites the host (see **python-testing**).

`Configuration.from_environment()` reads `ENVIRONMENT`, `PORT`, `TIMEOUT`, `MAX_RETRIES`, etc.
from environment variables or a `.env` file — grep `from_environment` in `hotelratings/configuration.py`
for the exact variable names.

## Pagination

When the API marks an operation as paginated the generated controller returns a `PagedIterable`.
Iterate over items directly, or iterate over pages:

```python
# Iterate items (SDK handles page fetching internally):
for item in client.{resource}.{paged_operation}(offset=0, limit=10):
    print(item.id)

# Iterate pages (e.g. OffsetPagedResponse):
for page in client.{resource}.{paged_operation}(offset=0, limit=10).pages():
    print(page.offset)
    for item in page.items():
        print(item.id)
```

Page types (`OffsetPagedResponse`, `CursorPagedResponse`, `LinkPagedResponse`,
`NumberPagedResponse`) live in `hotelratings/pagination/` — inspect that directory for the exact type
your operation returns and its cursor/offset/link attributes.

For operations that are **not** paginated by the SDK (i.e., return a plain list), drive pagination
manually by advancing the page or cursor parameter until the response signals the end:

```python
page = 1
while True:
    items = client.{resource}.list_{items}(page=page, limit=100)
    if not items:
        break
    for item in items:
        process(item)
    page += 1
```

## Logging — HttpCallBack

There is no built-in logging hook separate from `HttpCallBack`. To log or inspect every request
and response, subclass `HttpCallBack` (from `hotelratings/http/http_call_back.py`) and pass an instance
as `http_call_back=`:

```python
import logging
from hotelratings.http.http_call_back import HttpCallBack
from hotelratings.configuration import Configuration
from hotelratings.hotelratings_client import HotelRatingsClient

logger = logging.getLogger(__name__)

class LoggingCallBack(HttpCallBack):
    def on_before_request(self, request):
        logger.debug('--> %s %s', request.http_method, request.query_url)

    def on_after_response(self, response):
        logger.debug('<-- %d', response.status_code)

config = Configuration(
    http_call_back=LoggingCallBack(),
    # other kwargs ...
)
client = HotelRatingsClient(config=config)
```

`HttpCallBack` inherits from `apimatic_core`'s `CoreHttpCallback` and provides two hook methods:
`on_before_request(request: HttpRequest)` and `on_after_response(response: HttpResponse)`. The
generated `HttpResponseCatcher` in `tests/http_response_catcher.py` is the canonical example.

`HttpRequest` attributes include `http_method`, `query_url`, `headers`, and `parameters`.
`HttpResponse` attributes include `status_code`, `reason_phrase`, `headers`, and `text`.

### Verify on the wire (first run of any new integration)

Run `LoggingCallBack` on the first execution of any new call and inspect the output:

1. The **verb** matches the operation's HTTP method.
2. The **URL** has no literal `{placeholder}` left unsubstituted.
3. Each **path segment** holds the value the API expects (e.g. correct enum wire value).
4. The **query params** you set appear in the query string.

Remove or gate the callback behind a log-level check once verified.
