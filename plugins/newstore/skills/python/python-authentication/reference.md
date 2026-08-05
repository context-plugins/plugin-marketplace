# Authentication reference (APIMatic Python)

Full matrix of auth schemes the APIMatic Python generator supports. Credential objects are passed as
kwargs to the `NewstoreapiClient` constructor (or to `Configuration`). Exact credential class names and
kwarg names are generated per-API — confirm from `newstore/newstore_client.py` and `newstore/http/auth/` in
the cloned source.

## Basic auth

```python
from newstore.http.auth.basic_auth import BasicAuthCredentials

client = NewstoreapiClient(
    basic_auth_credentials=BasicAuthCredentials(
        username=os.environ['BASIC_AUTH_USERNAME'],
        password=os.environ['BASIC_AUTH_PASSWORD']
    )
)
```

Sends `Authorization: Basic base64(username:password)`.

## Custom query parameter (API key)

```python
from newstore.http.auth.api_key import ApiKeyCredentials

client = NewstoreapiClient(
    api_key_credentials=ApiKeyCredentials(
        token=os.environ['API_KEY_TOKEN'],
        api_key=os.environ['API_KEY_API_KEY']
    )
)
```

Field-to-wire-parameter mapping is fixed by the generated scheme — check `doc/auth/custom-query-parameter.md`.

## Custom header signature (API key in header)

```python
from newstore.http.auth.api_header import ApiHeaderCredentials

client = NewstoreapiClient(
    api_header_credentials=ApiHeaderCredentials(
        token=os.environ['API_HEADER_TOKEN'],
        api_key=os.environ['API_HEADER_API_KEY']
    )
)
```

## OAuth 2.0 — bearer token

```python
from newstore.http.auth.o_auth_bearer_token import OAuthBearerTokenCredentials

client = NewstoreapiClient(
    o_auth_bearer_token_credentials=OAuthBearerTokenCredentials(
        access_token=os.environ['O_AUTH_BEARER_TOKEN_ACCESS_TOKEN']
    )
)
```

Sends `Authorization: Bearer {access_token}`.

## OAuth 2.0 — client credentials grant (CCG)

Token fetched automatically on first use; refreshed when expired.

```python
from newstore.http.auth.o_auth_ccg import OAuthCCGCredentials

creds = OAuthCCGCredentials(
    o_auth_client_id=os.environ['O_AUTH_CCG_O_AUTH_CLIENT_ID'],
    o_auth_client_secret=os.environ['O_AUTH_CCG_O_AUTH_CLIENT_SECRET'],
    # Optional:
    o_auth_token=load_token_from_database(),          # seed a stored token
    o_auth_on_token_update=save_token_to_database,    # callback on update
    o_auth_token_provider=my_token_provider,          # custom fetch/load logic
    o_auth_clock_skew=30,                             # expiry check slack (seconds)
)
```

`o_auth_token_provider` signature: `(last_token: OAuthToken, auth_manager) -> OAuthToken`

## OAuth 2.0 — authorization code grant (ACG)

Three-legged flow. The SDK does **not** perform the redirect — your application does.

```python
from newstore.http.auth.o_auth_acg import OAuthACGCredentials
from newstore.models.o_auth_scope_newstore_enum import OAuthScope{Pkg}Enum

creds = OAuthACGCredentials(
    o_auth_client_id=os.environ['O_AUTH_ACG_O_AUTH_CLIENT_ID'],
    o_auth_client_secret=os.environ['O_AUTH_ACG_O_AUTH_CLIENT_SECRET'],
    o_auth_redirect_uri=os.environ['O_AUTH_ACG_O_AUTH_REDIRECT_URI'],
    o_auth_scopes=[OAuthScope{Pkg}Enum.READ_SCOPE],   # optional
)
client = NewstoreapiClient(o_auth_acg_credentials=creds)

# 1. Build the authorization URL and send the user there:
auth_url = client.o_auth_acg.get_authorization_url()

# 2. After the redirect returns a `code`, exchange it for a token:
try:
    token = client.o_auth_acg.fetch_token(code)
    new_creds = client.config.o_auth_acg_credentials.clone_with(o_auth_token=token)
    new_config = client.config.clone_with(o_auth_acg_credentials=new_creds)
    client = NewstoreapiClient(config=new_config)
except OAuthProviderException:
    pass  # handle exchange failure

# 3. Refresh when expired:
if client.o_auth_acg.is_token_expired():
    token = client.o_auth_acg.refresh_token()
    new_creds = client.config.o_auth_acg_credentials.clone_with(o_auth_token=token)
    new_config = client.config.clone_with(o_auth_acg_credentials=new_creds)
    client = NewstoreapiClient(config=new_config)
```

Persist the token between sessions: `save_token_to_database(client.config.o_auth_acg_credentials.o_auth_token)`

## OAuth 2.0 — resource owner password credentials grant (ROPCG)

```python
from newstore.http.auth.o_auth_ropcg import OAuthROPCGCredentials

creds = OAuthROPCGCredentials(
    o_auth_client_id=os.environ['O_AUTH_ROPCG_O_AUTH_CLIENT_ID'],
    o_auth_client_secret=os.environ['O_AUTH_ROPCG_O_AUTH_CLIENT_SECRET'],
    o_auth_username=os.environ['O_AUTH_ROPCG_O_AUTH_USERNAME'],
    o_auth_password=os.environ['O_AUTH_ROPCG_O_AUTH_PASSWORD'],
    o_auth_token=load_token_from_database(),   # optional: seed a stored token
)
client = NewstoreapiClient(o_auth_ropcg_credentials=creds)

# Fetch token explicitly if needed:
token = client.o_auth_ropcg.fetch_token()
new_creds = client.config.o_auth_ropcg_credentials.clone_with(o_auth_token=token)
new_config = client.config.clone_with(o_auth_ropcg_credentials=new_creds)
client = NewstoreapiClient(config=new_config)
```

The same `o_auth_on_token_update`, `o_auth_token_provider`, and `o_auth_clock_skew` kwargs apply
as for CCG.

## Combined scheme requirements (AND / OR)

Each operation's doc states its requirement. Configure every scheme the operations you call require —
the client wires AND/OR composition internally:

- **AND** (e.g. `basicAuth AND apiKey AND apiHeader`) — configure all three schemes.
- **OR** (e.g. `OAuthCCG OR OAuthBearerToken`) — configure any one.
- **Nested** (e.g. `CustomAuth OR OAuthBearerToken OR (basicAuth AND apiKey AND apiHeader)`) —
  configure all leaf schemes; the client tries them in order.

## Configuration from environment variables

`Configuration.from_environment()` (and `NewstoreapiClient.from_environment()`) read each credential
field from a scheme-prefixed environment variable. Examples:

```
BASIC_AUTH_USERNAME=...
BASIC_AUTH_PASSWORD=...
API_KEY_TOKEN=...
API_KEY_API_KEY=...
API_HEADER_TOKEN=...
API_HEADER_API_KEY=...
O_AUTH_CCG_O_AUTH_CLIENT_ID=...
O_AUTH_CCG_O_AUTH_CLIENT_SECRET=...
O_AUTH_ACG_O_AUTH_CLIENT_ID=...
O_AUTH_ACG_O_AUTH_REDIRECT_URI=...
O_AUTH_ROPCG_O_AUTH_USERNAME=...
O_AUTH_BEARER_TOKEN_ACCESS_TOKEN=...
```

Grep `from_environment` in `newstore/configuration.py` and each `newstore/http/auth/*.py` for the exact
variable names this SDK reads.

## No auth

If an operation requires no authentication, construct the client with no credential kwargs. Some
SDKs mark no-auth operations as deprecated — heed the deprecation notice.

## Security checklist

- Never hardcode secrets — use `os.environ`, `from_environment()`, or a secret manager.
- Persist OAuth tokens via `o_auth_on_token_update` so refreshes survive restarts; re-seed with
  `clone_with(o_auth_token=load_token_from_database())`.
- Rotate credentials by constructing a new client from `config.clone_with(...)`.
