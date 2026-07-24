---
name: python-error-handling
description: Handle errors from an APIMatic-generated Python SDK — APIException base class (with .response_code and .response carrying the raw HttpResponse with .status_code/.text/.headers) raised on every non-2xx, typed subclasses like OAuthProviderException that call unbox() in __init__ to parse body fields, try/except ordering (most-specific first), and transport errors from requests (Timeout, ConnectionError) that are distinct from APIException. Use the moment you write a try/except around a controller call, need the HTTP status code or response body, or want to distinguish a typed API error from a network failure on any APIMatic Python SDK — load it even after reading the raised type in the source, since the type name alone won't tell you that .response_code and .response are the right attributes (not .status_code), that typed subclasses parse their body in __init__ via unbox(), or that requests transport errors bypass APIException entirely.
---

# Error handling for an APIMatic Python SDK

Every controller operation raises on a non-2xx response. The base exception is `APIException` in
`paypalapi/exceptions/api_exception.py`. Transport failures (`requests.exceptions.Timeout`,
`requests.exceptions.ConnectionError`) are distinct and do **not** inherit from `APIException`.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK — confirm exception
> class names from `paypalapi/exceptions/` and operation docstrings.

## APIException — the base class

```python
class APIException(Exception):
    reason: str          # the error message (also the str() of the exception)
    response: HttpResponse   # the raw HttpResponse from the SDK
    response_code: int   # shortcut for response.status_code
```

`HttpResponse` attributes (from `doc/http-response.md`):

| Attribute | Type | Description |
| --- | --- | --- |
| `status_code` | `int` | HTTP status code |
| `reason_phrase` | `str` | HTTP reason phrase |
| `headers` | `dict` | Response headers |
| `text` | `str` | Raw response body as a string |
| `request` | `HttpRequest` | The originating request |

## Basic try/except — catch APIException

For operations with no typed subclass, catch `APIException` and read `.response_code` and
`.response.text`:

```python
from paypalapi.exceptions.api_exception import APIException

try:
    result = client.{resource}.{operation}(...)
except APIException as e:
    print(f'HTTP {e.response_code}: {e.reason}')
    print(e.response.text)           # raw body string
    print(e.response.headers)        # response headers dict

    if e.response_code == 404:
        pass   # resource not found
    elif e.response_code == 429:
        pass   # rate limited
    else:
        raise
```

## Typed subclasses — when the SDK generates one

For status codes the API documents, the generator creates a typed subclass in `paypalapi/exceptions/`.
Each subclass calls `unbox()` in its `__init__` to parse the response body into typed fields:

```python
# OAuthProviderException (from MultiAuth-Sample):
class OAuthProviderException(APIException):
    error: str                    # required — OAuthProviderErrorEnum value
    error_description: str | None # optional
    error_uri: str | None         # optional
    # inherits: response_code, response, reason
```

`unbox()` runs `APIHelper.json_deserialize(self.response.text)` and populates the fields. Optional
fields in typed exceptions may not be set — check with `hasattr`.

Catch the typed subclass first, then fall back to `APIException`:

```python
from paypalapi.exceptions.api_exception import APIException
from paypalapi.exceptions.o_auth_provider_exception import OAuthProviderException

try:
    token = client.o_auth_authorization.request_token(...)
except OAuthProviderException as e:
    # Typed fields parsed from the response body:
    print(f'OAuth error: {e.error}')
    if hasattr(e, 'error_description'):
        print(e.error_description)
    print(f'HTTP {e.response_code}')
except APIException as e:
    # Any other non-2xx (no registered typed class):
    print(f'HTTP {e.response_code}: {e.response.text}')
    raise
```

Always put the most specific `except` clause first — Python resolves them top-down.

To know which typed exception (if any) an operation raises, read its docstring in the controller
file (`paypalapi/controllers/{resource}_controller.py`) or `doc/controllers/*.md`, and check
`paypalapi/exceptions/` for the class.

## Transport and network failures

These are raised by `requests` directly and do **not** inherit from `APIException`:

```python
import requests
from paypalapi.exceptions.api_exception import APIException

try:
    result = client.{resource}.{operation}(...)
except OAuthProviderException as e:
    # typed API error
    raise
except APIException as e:
    # non-2xx — API responded but with an error status
    print(f'API error {e.response_code}: {e.response.text}')
    raise
except requests.exceptions.Timeout:
    # request timed out before a response was received
    raise
except requests.exceptions.ConnectionError:
    # DNS failure, refused connection, dropped connection
    raise
```

The SDK uses `apimatic-requests-client-adapter` wrapping `requests` — confirm by checking
`paypalapi/http/` in the source if you are unsure of the transport library.

## Notes

- Retries for transient status codes happen **before** the exception is raised — but retries are
  **disabled by default** (`max_retries=0`); see **python-configuration-resilience**.
- `response_code` is always correct on `APIException`, even when the body is not JSON.
- `response.text` is always a string (may be empty on responses with no body).
- On OAuth flows, a failed token exchange may raise a specific exception from `paypalapi/exceptions/`
  or a `ValueError` — check the auth handler in `paypalapi/http/auth/` for the exact type.
