---
name: ruby-configuration-resilience
description: Tune an APIMatic-generated Ruby SDK — retry defaults (max_retries 0 by default, only GET/PUT retried, statuses 408/413/429/500/502/503/504/521/522/524, exponential backoff), timeout (60 s default), adapter selection, custom Faraday connection, environment/base-URL selection via Environment + get_base_uri, proxy settings, and request/response observability via http_callback (HttpCallBack). Use whenever adjusting retries, timeouts, the Faraday adapter, base URL, proxy, or logging on any APIMatic Ruby SDK — load it even after reading Configuration in the source, since the constructor defaults don't explain that retries are off by default, that only GET/PUT are retried, or how HttpCallBack fits in.
---

# Configuration and resilience for an APIMatic Ruby SDK

All tuning happens through the `Configuration` class (or directly on `Client.new` — the client
forwards every kwarg to `Configuration`). Build `Configuration` explicitly when you want to share one
config across multiple clients; otherwise pass kwargs directly.

> `{...}` tokens are placeholders for per-API names. Generator-fixed defaults are stated concretely.

## Retry configuration — off by default

Retries are **disabled by default** (`max_retries: 0`). Enable them by setting `max_retries > 0`.

```ruby
client = Notion::Client.new(
  max_retries:    3,
  retry_interval: 1,      # base wait in seconds
  backoff_factor: 2,      # exponential multiplier
  retry_statuses: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
  retry_methods:  %i[get put]   # only idempotent methods by default
)
```

| Parameter | Default | Notes |
| --- | --- | --- |
| `max_retries` | `0` | **0 disables retries** — raise to enable |
| `retry_interval` | `1` | Base seconds between attempts |
| `backoff_factor` | `2` | Multiplier applied each retry |
| `retry_statuses` | `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` | Statuses that trigger retry |
| `retry_methods` | `%i[get put]` | Only `GET`/`PUT` by default — `POST`/`DELETE` not retried |

Add `POST` to `retry_methods` only when the endpoint is genuinely idempotent. Retries fire **before**
the exception surfaces to your code — the exception you rescue is from the final attempt.

## Timeout

```ruby
client = Notion::Client.new(timeout: 30)  # seconds per attempt; default 60
```

`timeout` is a per-attempt budget. With `max_retries: 3` and `timeout: 30`, worst-case wall time is
`4 × 30 = 120` seconds.

## Faraday adapter

The SDK uses Faraday internally with `CoreLibrary::FaradayClient`. The adapter defaults to
`:net_http_persistent`. You can change it:

```ruby
client = Notion::Client.new(adapter: :net_http)
```

Pass a custom `Faraday::Connection` via `connection:` when you need full control (middleware stack,
proxy, custom SSL):

```ruby
conn = Faraday.new do |f|
  f.response :logger, Logger.new($stdout), headers: true, bodies: false
  f.adapter  Faraday.default_adapter
end
client = Notion::Client.new(connection: conn)
```

## Environment and base URL

The base URL is derived from the `environment` enum constant and server template in
`Configuration::ENVIRONMENTS`:

```ruby
# Use a named environment (the generated constants are per-API):
client = Notion::Client.new(environment: Environment::PRODUCTION)
client = Notion::Client.new(environment: Environment::TESTING)
```

The URL template may include server parameters (e.g. `port`, `sub_url`) that you can also set:

```ruby
client = Notion::Client.new(
  environment: Environment::PRODUCTION,
  port: '443'
)
```

`get_base_uri(server)` on the configuration object returns the resolved URL — useful for debugging.

There is no free-form `base_url` override in the generated `Configuration` API; to target a mock server
during testing, change the environment whose host you control or inject a custom Faraday `connection:` that
rewrites the host (see **ruby-testing**).

## Proxy settings

Pass proxy configuration via `ProxySettings`:

```ruby
proxy = Notion::ProxySettings.new(
  address:  'http://proxy.example.com',
  port:     8080,
  username: 'user',        # optional
  password: 'pass'         # optional
)
client = Notion::Client.new(proxy_settings: proxy)
```

Or load from environment variables — the generated `ProxySettings.from_env` reads `PROXY_ADDRESS`,
`PROXY_PORT`, `PROXY_USERNAME`, and `PROXY_PASSWORD`:

```ruby
proxy = Notion::ProxySettings.from_env
client = Notion::Client.new(proxy_settings: proxy)
```

## HttpCallBack — observability hook

`HttpCallBack` (extending `CoreLibrary::HttpCallback`) lets you intercept every request and response
without replacing the transport:

```ruby
class LogCallback < Notion::HttpCallBack
  # Called before the request goes out (see the generated HttpResponseCatcher in test/):
  def on_before_request(request)
    puts "--> #{request.http_method} #{request.query_url}"
  end

  # Called after the response comes back:
  def on_after_response(response)
    puts "<-- #{response.status_code}"
  end
end

client = Notion::Client.new(http_callback: LogCallback.new)
```

Override `on_before_request(request)` / `on_after_response(response)` (the exact method names the
generated `HttpResponseCatcher` in `test/` implements). Access the callback on any controller via
`controller.http_call_back`. Use this to log, trace, or record raw request/response pairs for
debugging — it fires on every call regardless of retry state.

## Environment-variable–based initialization

The generated `Client.from_env` class method reads all configuration from environment variables and
returns a ready client:

```ruby
client = Notion::Client.from_env
# Overrides take precedence over env vars:
client = Notion::Client.from_env(timeout: 30, max_retries: 3)
```

Key env vars (exact names match the generated `.env` example in `doc/`):

```
ENVIRONMENT=production
TIMEOUT=60
MAX_RETRIES=0
RETRY_INTERVAL=1
BACKOFF_FACTOR=2
RETRY_STATUSES=408,413,429,500
RETRY_METHODS=GET,PUT
PROXY_ADDRESS=http://proxy.example.com
PROXY_PORT=8080
```

## Pagination

The generator does **not** emit automatic pagination iterators. Drive pagination manually with the
operation's page/cursor parameters:

```ruby
# Offset/page-based
page = 1
loop do
  resp = client.{resource_controller}.{list_operation}(page: page, per_page: 100)
  items = resp  # or resp.data depending on the operation's return type
  break if items.empty?
  items.each { |it| process(it) }
  page += 1
end

# Cursor-based
cursor = nil
loop do
  resp = client.{resource_controller}.{list_operation}(after: cursor, limit: 100)
  break if resp.empty?
  resp.each { |it| process(it) }
  cursor = resp.last.id  # or the next_cursor field from the response model
end
```

The exact parameter name and the next-page field are per-API — read the controller method and response
model in `doc/controllers/` and `doc/models/`.

## Notes

- **clone_with** — `Configuration` has a `clone_with(**overrides)` method that returns a new
  configuration with selected fields replaced; useful for creating per-request configuration variants.
- Retries are **off by default** — if tests hang on a `5xx` stub, verify `max_retries: 0` on the test
  client (see **ruby-testing**).
