---
name: ruby-client-initialization
description: Construct and configure an APIMatic-generated Ruby SDK client — Client.new with keyword args (http options + XxxCredentials objects + environment:), Client.from_env for environment-variable construction, choosing an environment via the Environment constants inside Configuration, injecting a custom Faraday::Connection or adapter, clone_with to produce a modified configuration, accessing controllers via snake_case methods on the client, and keeping the client long-lived. Use the moment you call Client.new, build a Configuration, pick an environment, or wire the client into your application — load it even after reading the constructor in the source, since the signature shows keyword args but not the credentials-object pattern, the clone_with update flow, or the lifetime/reuse rules.
---

# Initializing an APIMatic Ruby SDK client

This applies to **any** APIMatic-generated Ruby SDK (APIMATIC v3.0). Replace placeholders with the
real names from the SDK you are using:

- `SpotifyWebAPI` — the root Ruby module (e.g. `MultiAuthSample`, `ApimaticCalculatorByClient`).
- `spotify_web_api` — the gem name from the `.gemspec` (e.g. `multi_auth_sample`).
- `{Resource}` — a controller accessor snake_case name on the client (e.g. `simple_calculator`).

## Shape of the constructor

APIMatic Ruby SDKs expose **one public client class** built entirely with **keyword arguments** — there
are no positional parameters. All HTTP, retry, and credentials options are keyword args on `Client.new`:

```ruby
require 'spotify_web_api'
include SpotifyWebAPI

client = Client.new(
  environment: Environment::PRODUCTION,   # selects the base URL
  timeout: 60,                            # float, seconds
  max_retries: 0,                         # integer; 0 = disabled
  # credentials — see ruby-authentication
  # {scheme}_credentials: {Scheme}Credentials.new(...)
)
```

Alternatively, pass a pre-built `Configuration` object via `config:` to skip per-param kwargs:

```ruby
config = Configuration.new(
  environment: Environment::PRODUCTION,
  timeout: 30,
  o_auth_ccg_credentials: OAuthCCGCredentials.new(
    o_auth_client_id: ENV['CLIENT_ID'],
    o_auth_client_secret: ENV['CLIENT_SECRET']
  )
)
client = Client.new(config: config)
```

When `config:` is supplied all other keyword args are ignored — the `Configuration` object wins.

## Constructor keyword reference

The authoritative list is the `initialize` signature in `lib/spotify_web_api/client.rb`. Common kwargs:

| Keyword | Type | Default | Purpose |
| --- | --- | --- | --- |
| `environment` | `String` (Environment constant) | per-API (e.g. `Environment::PRODUCTION`) | selects the base URL via the `ENVIRONMENTS` hash |
| `connection` | `Faraday::Connection` | `nil` — SDK creates its own | inject a custom Faraday connection (proxy, TLS, test adapter) |
| `adapter` | `Symbol` or `Faraday::Adapter` | `:net_http_persistent` | Faraday adapter |
| `timeout` | `Float` | `60` | connection timeout in seconds |
| `max_retries` | `Integer` | `0` | retry attempts; `0` disables retries |
| `retry_interval` | `Float` | `1` | pause between retries in seconds |
| `backoff_factor` | `Float` | `2` | exponential backoff multiplier |
| `retry_statuses` | `Array<Integer>` | `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` | HTTP statuses that trigger a retry |
| `retry_methods` | `Array<Symbol>` | `%i[get put]` | HTTP methods eligible for retry |
| `http_callback` | `HttpCallBack` | `nil` | pre/post request hooks |
| `{scheme}_credentials` | `{Scheme}Credentials` | `nil` | one per auth scheme the API uses — see **ruby-authentication** |
| `config` | `Configuration` | `nil` | pre-built config object — overrides all other kwargs |

## Configuration from environment variables

`Client.from_env` reads all configuration from environment variables (or a `.env` file loaded with
`dotenv`) and returns a fully constructed client. Use it in deployed environments where you inject
secrets via the environment rather than code:

```ruby
require 'spotify_web_api'
include SpotifyWebAPI

client = Client.from_env
```

Override specific values by passing keyword args — they take precedence over the environment:

```ruby
client = Client.from_env(environment: Environment::PRODUCTION, timeout: 30)
```

`from_env` calls `Configuration.build_default_config_from_env` internally, which reads env vars like
`ENVIRONMENT`, `TIMEOUT`, `MAX_RETRIES`, `BASIC_AUTH_USERNAME`, `O_AUTH_CCG_O_AUTH_CLIENT_ID`, etc.
Confirm the exact variable names in `lib/spotify_web_api/configuration.rb`
(`build_default_config_from_env`) and `lib/spotify_web_api/http/auth/*.rb` (`{Scheme}Credentials.from_env`).

## Choosing the environment / base URL

`Environment` constants are frozen strings defined inside the `Configuration` class:

```ruby
Environment::PRODUCTION   # => 'production'
Environment::TESTING      # => 'testing'
```

The `ENVIRONMENTS` constant in `configuration.rb` maps each environment + server combination to a base
URI template. `get_base_uri` interpolates server-parameter placeholders (e.g. `{port}`, `{suites}`)
into the selected template. Pass the environment constant via `environment:`:

```ruby
client = Client.new(environment: Environment::PRODUCTION)
```

Some SDKs also accept server-scoping parameters (e.g. `port:`, `suites:`) as additional kwargs — check
the `initialize` signature in `client.rb`.

## Injecting a custom Faraday connection

Pass a `Faraday::Connection` via `connection:` to control proxy settings, TLS, middleware, or to use a
test adapter:

```ruby
conn = Faraday.new do |f|
  f.options.timeout = 10
  f.proxy = 'http://proxy.example.com:8080'
  f.adapter :net_http
end

client = Client.new(connection: conn, environment: Environment::PRODUCTION)
```

When `connection:` is supplied the SDK wraps it in `CoreLibrary::FaradayClient` but uses your
connection settings rather than building its own.

## Updating configuration after construction (clone_with)

The client and `Configuration` are effectively immutable after construction. To change credentials or
any option (for example, to attach a fetched OAuth token), call `config.clone_with(...)` to get a new
`Configuration`, then pass it to a new `Client.new(config:)`:

```ruby
# After fetching an OAuth token, attach it:
new_creds = client.config.o_auth_ccg_credentials.clone_with(o_auth_token: fetched_token)
new_config = client.config.clone_with(o_auth_ccg_credentials: new_creds)
client = Client.new(config: new_config)
```

`clone_with` is generated on both `Configuration` and each `{Scheme}Credentials` class — any kwarg
you omit is copied from the original.

## Accessing controllers

Operations are grouped under **snake_case accessor methods** on the client — one per API resource
group. Each accessor is lazy-initialized with `||=`:

```ruby
result = client.{resource}.{operation}(...)
```

For example, `client.simple_calculator` returns a `SimpleCalculatorController` instance. See
`client.rb` for the full list of accessors. Calls are **synchronous** — no async/await. See
**ruby-calling-endpoints** for how to pass arguments and read responses.

OAuth manager accessors (e.g. `client.o_auth_ccg`, `client.o_auth_acg`) are also on the client for
SDKs that use those grant types — they return the auth handler instance used to fetch/refresh tokens.

## Client lifetime and reuse

Construct the client **once** at application startup and reuse it. The Faraday connection pools TCP
sockets; creating a new client per request wastes connections and discards any cached OAuth token.

```ruby
# Application startup:
CLIENT = SpotifyWebAPI::Client.from_env

# In handlers or services:
result = CLIENT.{resource}.{operation}(...)
```

In Rails, create the client in an initializer (`config/initializers/spotify_web_api.rb`) and store it in a
constant. In Rack/Sinatra, store it in a global or thread-safe object at boot time.

## Next

- Configure authentication → **ruby-authentication**
- Make your first call → **ruby-calling-endpoints**
- Tune retries/timeouts/transport → **ruby-configuration-resilience**
