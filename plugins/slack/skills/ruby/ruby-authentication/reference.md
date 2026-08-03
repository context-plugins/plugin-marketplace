# Ruby authentication — full reference

Companion to **ruby-authentication**. Covers the OAuth grant flows that need extra steps, token
persistence, AND/OR combined scheme requirements, environment-variable configuration, and no-auth.
Confirm every name against `lib/slack/client.rb`, `lib/slack/configuration.rb`, the
`lib/slack/http/auth/*.rb` files, and `doc/auth/*.md` in the cloned source.

## How credentials are wired (recap)

Each scheme is a typed data class (e.g. `OAuthCCGCredentials`) built with keyword args and passed as
a named kwarg to `Client.new` (e.g. `o_auth_ccg_credentials:`). The client stores it on
`@config` (accessible via `client.config.{scheme}_credentials`). Every credentials class provides:

- `initialize(**kwargs)` — raises `ArgumentError` for any required field that is nil.
- `self.from_env` — reads the scheme's fields from standardized env vars; returns `nil` if all are nil.
- `clone_with(**overrides)` — returns a modified copy; unspecified fields carry over from the original.

The client is effectively immutable after construction. To change credentials, call
`credentials.clone_with(...)` then `config.clone_with(...)` and rebuild:

```ruby
new_creds = client.config.o_auth_ccg_credentials.clone_with(o_auth_token: token)
new_config = client.config.clone_with(o_auth_ccg_credentials: new_creds)
client = Client.new(config: new_config)
```

## Scheme matrix

| Scheme | Credentials class | Required fields | Optional fields |
| --- | --- | --- | --- |
| Basic auth | `BasicAuthCredentials` | `username:`, `password:` | — |
| Custom query parameter | `ApiKeyCredentials` | `token:`, `api_key:` | — |
| Custom header signature | `ApiHeaderCredentials` | `token:`, `api_key:` | — |
| OAuth 2 bearer token | `OAuthBearerTokenCredentials` | `access_token:` | — |
| OAuth 2 CCG | `OAuthCCGCredentials` | `o_auth_client_id:`, `o_auth_client_secret:` | `o_auth_token:`, `o_auth_token_provider:`, `o_auth_on_token_update:`, `o_auth_clock_skew:` |
| OAuth 2 ACG | `OAuthACGCredentials` | `o_auth_client_id:`, `o_auth_client_secret:`, `o_auth_redirect_uri:` | `o_auth_token:`, `o_auth_scopes:` |
| OAuth 2 ROPCG | `OAuthROPCGCredentials` | `o_auth_client_id:`, `o_auth_client_secret:`, `o_auth_username:`, `o_auth_password:` | `o_auth_token:` |

Field names and count are per-API — confirm in the credentials class `initialize` signature.

## OAuth 2.0 — client credentials grant (CCG)

```ruby
client = Client.new(
  o_auth_ccg_credentials: OAuthCCGCredentials.new(
    o_auth_client_id: ENV.fetch('O_AUTH_CCG_O_AUTH_CLIENT_ID'),
    o_auth_client_secret: ENV.fetch('O_AUTH_CCG_O_AUTH_CLIENT_SECRET')
  )
)
```

The token is fetched automatically on first use and refreshed when it nears expiry. Optional fields on
`OAuthCCGCredentials`:

| Field | Purpose |
| --- | --- |
| `o_auth_token:` | seed a previously stored `OAuthToken` (skips the initial fetch) |
| `o_auth_token_provider:` | a `Proc` called with `(current_token, auth_manager)` when a token is needed — fetch or load from storage yourself |
| `o_auth_on_token_update:` | a `Proc` called with the new `OAuthToken` whenever the SDK updates the token — use it to persist the token |
| `o_auth_clock_skew:` | integer seconds of clock skew when evaluating token expiry (default `0`) |

Persistence pattern:

```ruby
creds = OAuthCCGCredentials.new(
  o_auth_client_id: ENV.fetch('O_AUTH_CCG_O_AUTH_CLIENT_ID'),
  o_auth_client_secret: ENV.fetch('O_AUTH_CCG_O_AUTH_CLIENT_SECRET'),
  o_auth_token: load_token_from_db,          # nil if none stored
  o_auth_on_token_update: ->(token) { save_token_to_db(token) }
)
client = Client.new(o_auth_ccg_credentials: creds)
```

To eagerly fetch the token before any API call, access the manager and call `fetch_token`:

```ruby
token = client.o_auth_ccg.fetch_token
```

## OAuth 2.0 — authorization code grant (ACG)

ACG is a redirect flow: send the user to an authorization URL, receive a `code`, exchange it for a
token. The SDK does **not** perform the redirect.

```ruby
# Step 1: Construct the client with ACG credentials (no token yet)
client = Client.new(
  o_auth_acg_credentials: OAuthACGCredentials.new(
    o_auth_client_id: ENV.fetch('O_AUTH_ACG_O_AUTH_CLIENT_ID'),
    o_auth_client_secret: ENV.fetch('O_AUTH_ACG_O_AUTH_CLIENT_SECRET'),
    o_auth_redirect_uri: ENV.fetch('O_AUTH_ACG_O_AUTH_REDIRECT_URI'),
    o_auth_scopes: [OAuthScopeOAuthACGEnum::READ_SCOPE]   # enum values per-API
  )
)

# Step 2: Build the authorization URL and redirect the user there
auth_url = client.o_auth_acg.get_authorization_url

# Step 3: After the callback returns `code`, exchange it for a token
begin
  token = client.o_auth_acg.fetch_token(auth_code)
  new_creds = client.config.o_auth_acg_credentials.clone_with(o_auth_token: token)
  new_config = client.config.clone_with(o_auth_acg_credentials: new_creds)
  client = Client.new(config: new_config)
rescue OAuthProviderException => e
  # handle OAuth error
rescue APIException => e
  # handle generic API error
end
```

Refreshing an expired ACG token:

```ruby
if client.o_auth_acg.token_expired?(client.config.o_auth_acg_credentials.o_auth_token)
  token = client.o_auth_acg.refresh_token
  new_creds = client.config.o_auth_acg_credentials.clone_with(o_auth_token: token)
  client = Client.new(config: client.config.clone_with(o_auth_acg_credentials: new_creds))
end
```

Persist and restore the ACG token:

```ruby
# Persist after fetch:
save_token_to_db(client.config.o_auth_acg_credentials.o_auth_token)

# Restore on next startup:
token = load_token_from_db
new_creds = OAuthACGCredentials.new(
  o_auth_client_id: ENV.fetch('O_AUTH_ACG_O_AUTH_CLIENT_ID'),
  o_auth_client_secret: ENV.fetch('O_AUTH_ACG_O_AUTH_CLIENT_SECRET'),
  o_auth_redirect_uri: ENV.fetch('O_AUTH_ACG_O_AUTH_REDIRECT_URI'),
  o_auth_token: token
)
client = Client.new(o_auth_acg_credentials: new_creds)
```

## OAuth 2.0 — resource owner password credentials grant (ROPCG)

```ruby
client = Client.new(
  o_auth_ropcg_credentials: OAuthROPCGCredentials.new(
    o_auth_client_id: ENV.fetch('O_AUTH_ROPCG_O_AUTH_CLIENT_ID'),
    o_auth_client_secret: ENV.fetch('O_AUTH_ROPCG_O_AUTH_CLIENT_SECRET'),
    o_auth_username: ENV.fetch('O_AUTH_ROPCG_O_AUTH_USERNAME'),
    o_auth_password: ENV.fetch('O_AUTH_ROPCG_O_AUTH_PASSWORD')
  )
)
```

The SDK does not auto-fetch the token on first use for ROPCG — call `fetch_token` explicitly before
making API calls, then attach the token via `clone_with`:

```ruby
token = client.o_auth_ropcg.fetch_token
new_creds = client.config.o_auth_ropcg_credentials.clone_with(o_auth_token: token)
client = Client.new(config: client.config.clone_with(o_auth_ropcg_credentials: new_creds))
```

`OAuthROPCGCredentials` also accepts `o_auth_token:` to seed a stored token.

## OAuth 2.0 — bearer token

When you already hold an access token with no grant flow:

```ruby
client = Client.new(
  o_auth_bearer_token_credentials: OAuthBearerTokenCredentials.new(
    access_token: ENV.fetch('O_AUTH_BEARER_TOKEN_ACCESS_TOKEN')
  )
)
```

Sends `Authorization: Bearer <token>`. No fetch or refresh is performed.

## Combined AND / OR requirements

The per-operation authentication requirement is stated in `doc/controllers/*.md` under an
**Authentication** heading. Three cases:

- **`A AND B`** — configure **all** listed schemes.
- **`A OR B`** — configure **any one**; the SDK applies whichever it has.
- **Nested**, e.g. `CustomAuth OR OAuthBearerToken OR (basicAuth AND apiKey AND apiHeader)` — configure
  the full set of any branch you want to satisfy.

Configuring multiple schemes at once:

```ruby
client = Client.new(
  basic_auth_credentials: BasicAuthCredentials.new(
    username: ENV.fetch('BASIC_AUTH_USERNAME'),
    password: ENV.fetch('BASIC_AUTH_PASSWORD')
  ),
  api_key_credentials: ApiKeyCredentials.new(
    token: ENV.fetch('API_KEY_TOKEN'),
    api_key: ENV.fetch('API_KEY_API_KEY')
  ),
  api_header_credentials: ApiHeaderCredentials.new(
    token: ENV.fetch('API_HEADER_TOKEN'),
    api_key: ENV.fetch('API_HEADER_API_KEY')
  )
)
```

## Configuration from environment variables

`Client.from_env` (available on SDKs generated with APIMATIC v3.0) reads all credentials from
standardized env vars and returns a ready-to-use client. Each credentials class also exposes
`{Scheme}Credentials.from_env` which returns `nil` if all its env vars are unset.

Standard env-var names (confirm exact names in the source):

| Scheme | Env vars |
| --- | --- |
| Basic auth | `BASIC_AUTH_USERNAME`, `BASIC_AUTH_PASSWORD` |
| Custom query param | `API_KEY_TOKEN`, `API_KEY_API_KEY` |
| Custom header | `API_HEADER_TOKEN`, `API_HEADER_API_KEY` |
| OAuth CCG | `O_AUTH_CCG_O_AUTH_CLIENT_ID`, `O_AUTH_CCG_O_AUTH_CLIENT_SECRET`, `O_AUTH_CCG_O_AUTH_CLOCK_SKEW` |
| OAuth ACG | `O_AUTH_ACG_O_AUTH_CLIENT_ID`, `O_AUTH_ACG_O_AUTH_CLIENT_SECRET`, `O_AUTH_ACG_O_AUTH_REDIRECT_URI`, `O_AUTH_ACG_O_AUTH_SCOPES` |
| OAuth ROPCG | `O_AUTH_ROPCG_O_AUTH_CLIENT_ID`, `O_AUTH_ROPCG_O_AUTH_CLIENT_SECRET`, `O_AUTH_ROPCG_O_AUTH_USERNAME`, `O_AUTH_ROPCG_O_AUTH_PASSWORD` |
| OAuth bearer | `O_AUTH_BEARER_TOKEN_ACCESS_TOKEN` |
| General | `ENVIRONMENT`, `TIMEOUT`, `MAX_RETRIES`, `RETRY_INTERVAL`, `BACKOFF_FACTOR`, `RETRY_STATUSES`, `RETRY_METHODS` |

Load a `.env` file first with `require 'dotenv/load'` (add `gem 'dotenv'` to the Gemfile) if you want
`from_env` to pick up a file-based configuration in development.

## No auth

If the API (or a specific operation) requires no authentication, construct the client without any
credentials kwargs. Some SDKs mark no-auth operations as deprecated — heed the warning in the source.

## Security checklist

- Never hardcode secrets — use `ENV.fetch(...)`, `Client.from_env`, or a secrets manager.
- Persist OAuth tokens via `o_auth_on_token_update:` so refreshes survive restarts; re-seed with `o_auth_token:`.
- Treat the client as immutable; rotate credentials by calling `clone_with` and rebuilding — do not mutate.
