---
name: python-authentication
description: Configure authentication on an APIMatic-generated Python SDK client — each scheme is a {Scheme}Credentials object constructed with per-scheme kwargs and passed as a keyword arg to the StaxfattmerchantapiClient constructor; covers Basic, custom header/query API key, OAuth 2 bearer token, OAuth 2 CCG (automatic token fetch/refresh + on_token_update callback + token_provider), OAuth 2 ACG (redirect flow + fetch_token/refresh_token), OAuth 2 ROPCG, and secrets-from-env. Use the moment you set credentials on any APIMatic Python SDK — load it even after reading the config kwargs in the source, since the kwarg name alone doesn't tell you when the token is fetched, how to persist it across restarts, or that token re-attachment requires clone_with.
---

# Authenticating an APIMatic Python SDK client

> `StaxfattmerchantapiClient` is the SDK's client class — **read the real name** from `staxfattmerchantapi/staxfattmerchantapi_client.py`
> (it is derived from the package name, not the API title, so do not guess it from the API name).

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as
a **`{Scheme}Credentials` object** that you construct with per-scheme kwargs and pass to the client
constructor (or `Configuration`) as a named keyword argument.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK. Replace them with the
> concrete identifiers from the source. Confirm available schemes from the kwargs on
> `staxfattmerchantapi/staxfattmerchantapi_client.py` and from `doc/auth/*.md`.

To see which schemes a specific SDK accepts, read the credential kwargs in the client constructor
(`staxfattmerchantapi/staxfattmerchantapi_client.py`) — those are the source of truth. Each scheme's credentials class lives
under `staxfattmerchantapi/http/auth/` and has its own `from_environment()` class method.

## Basic auth

```python
from staxfattmerchantapi.http.auth.basic_auth import BasicAuthCredentials
from staxfattmerchantapi.staxfattmerchantapi_client import StaxfattmerchantapiClient

client = StaxfattmerchantapiClient(
    basic_auth_credentials=BasicAuthCredentials(
        username=os.environ['BASIC_AUTH_USERNAME'],
        password=os.environ['BASIC_AUTH_PASSWORD']
    )
)
```

Sends `Authorization: Basic base64(username:password)` on every request that requires it.

## Custom query parameter (API key)

```python
from staxfattmerchantapi.http.auth.api_key import ApiKeyCredentials

client = StaxfattmerchantapiClient(
    api_key_credentials=ApiKeyCredentials(
        token=os.environ['API_KEY_TOKEN'],
        api_key=os.environ['API_KEY_API_KEY']
    )
)
```

The wire names and placement (query parameters) are fixed by the generated scheme — check
`doc/auth/custom-query-parameter.md` for the exact field-to-parameter mapping.

## Custom header signature (API key in header)

```python
from staxfattmerchantapi.http.auth.api_header import ApiHeaderCredentials

client = StaxfattmerchantapiClient(
    api_header_credentials=ApiHeaderCredentials(
        token=os.environ['API_HEADER_TOKEN'],
        api_key=os.environ['API_HEADER_API_KEY']
    )
)
```

## OAuth 2.0 — bearer token (static token, no grant flow)

When you already hold a token:

```python
from staxfattmerchantapi.http.auth.o_auth_bearer_token import OAuthBearerTokenCredentials

client = StaxfattmerchantapiClient(
    o_auth_bearer_token_credentials=OAuthBearerTokenCredentials(
        access_token=os.environ['O_AUTH_BEARER_TOKEN_ACCESS_TOKEN']
    )
)
```

Sends `Authorization: Bearer {access_token}` on every request that requires this scheme.

## OAuth 2.0 — client credentials grant (CCG)

The SDK fetches and caches the token **automatically** the first time an endpoint requiring this
scheme is called, and refreshes it when it is expired (using a configurable clock skew):

```python
from staxfattmerchantapi.http.auth.o_auth_ccg import OAuthCCGCredentials

client = StaxfattmerchantapiClient(
    o_auth_ccg_credentials=OAuthCCGCredentials(
        o_auth_client_id=os.environ['O_AUTH_CCG_O_AUTH_CLIENT_ID'],
        o_auth_client_secret=os.environ['O_AUTH_CCG_O_AUTH_CLIENT_SECRET']
    )
)
```

### Token persistence — on_token_update callback

To store the token whenever it is updated (e.g. after an automatic refresh):

```python
OAuthCCGCredentials(
    o_auth_client_id='...',
    o_auth_client_secret='...',
    o_auth_on_token_update=lambda token: save_token_to_database(token)
)
```

### Custom token provider — skip the initial fetch

To seed a stored token and avoid the initial fetch (re-use a previously stored token):

```python
def my_token_provider(last_token, auth_manager):
    token = load_token_from_database()
    if token is None:
        token = auth_manager.fetch_token()
    return token

OAuthCCGCredentials(
    o_auth_client_id='...',
    o_auth_client_secret='...',
    o_auth_token_provider=my_token_provider
)
```

The provider receives the last known token and the auth manager; call `auth_manager.fetch_token()`
to mint a fresh one.

## More schemes — see reference.md

For OAuth 2.0 **authorization code grant** (ACG — redirect flow with `get_authorization_url`,
`fetch_token`, `refresh_token`), **resource owner password credentials grant** (ROPCG), **token
re-attachment via `clone_with`**, combined **AND/OR** scheme requirements, environment-variable
configuration, and no-auth, see [reference.md](reference.md).

## Notes

- A given SDK exports only the credentials types for the schemes its API uses — kwarg names are
  generated per-API (hence the `{...}` placeholders above).
- Set credentials **at construction time** — the client and its auth managers are initialized in
  `__init__`. To rotate credentials later (e.g. after fetching an OAuth token), use
  `config.clone_with(...)` to produce a new `Configuration` and construct a new client.
- An endpoint may require **several schemes** (`AND`) or **any of** several (`OR`). Configure every
  scheme the operations you call require — the per-operation requirement is in `doc/controllers/*.md`.
- **Keep secrets out of source.** Load credentials from environment variables or `from_environment()`.
