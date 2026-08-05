---
name: python-calling-endpoints
description: Call API operations on an APIMatic-generated Python SDK — access the controller via a @LazyProperty on the client (not a constructor), all parameters are keyword args, optional params default to APIHelper.SKIP (not None), request models are plain classes built with positional or keyword args, the return is a typed model or primitive (not a wrapper), paginated operations return PagedIterable, and status/headers are captured via HttpCallBack. Use whenever invoking an endpoint, building a request, working out which params are required vs optional, or consuming a response from any APIMatic Python SDK — load it even after reading the signature in the source, since it doesn't warn you about the SKIP sentinel, the property-not-constructor controller access, or the PagedIterable return.
---

# Calling endpoints on an APIMatic Python SDK

> `TeslafleetmanagementapiClient` is the SDK's client class — **read the real name** from `tesla/tesla_client.py`
> (it is derived from the package name, not the API title, so do not guess it from the API name).

Operations are **synchronous methods** on a **controller** you get from the client as a
`@LazyProperty`. Access the controller as a property, then call the operation:

```python
result = client.{resource}.{operation}(...)
```

Open `tesla/tesla_client.py` for the controller property names, then the relevant
`tesla/controllers/{resource}_controller.py` for the operation's exact signature.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK — replace them with
> the concrete identifiers from the source. The generated `doc/controllers/*.md` files list every
> operation with its signature and a usage snippet.

## Controller access — property, not constructor

Controllers are `@LazyProperty` properties on `TeslafleetmanagementapiClient`. Access them as attributes:

```python
# Correct — the controller is a property:
result = client.authentication.custom_authentication()
result = client.transaction.fetch_with_offset(offset=0, limit=10)

# Wrong — don't instantiate controllers yourself:
# ctrl = AuthenticationController(...)
```

Each controller is initialized lazily on first access and cached for the client's lifetime.

## Method signature convention

```python
def {operation}(
    self,
    required_param,                    # required — no default
    optional_param=APIHelper.SKIP,     # optional — use SKIP sentinel, not None
) -> {ReturnType}:
```

- **`APIHelper.SKIP`** is the sentinel for optional fields and parameters that are absent. When you
  omit a kwarg that defaults to `SKIP`, it is excluded from the serialized request entirely. Passing
  `None` explicitly may serialize as JSON `null` instead of omitting the field — use `SKIP` or
  omit the kwarg.
- **Return type is the typed model or primitive directly** — not a wrapper object. `{ReturnType}` is
  whatever type the operation returns (a model class, `str`, `int`, `list`, etc.).
- On a non-2xx response the method **raises `APIException`** (or a typed subclass) — see
  **python-error-handling**.

## Passing parameters

All parameters are passed by keyword. Required parameters have no default; optional parameters
default to `APIHelper.SKIP`:

```python
# Required only:
result = client.{resource}.get_{item}(
    item_id='abc123'
)

# Required + optional:
result = client.{resource}.list_{items}(
    status='active',           # required
    page=1,                    # optional — can omit to use the API's default
    limit=50                   # optional — can omit
)
```

## Building request models

Request bodies are plain Python classes built with keyword arguments. Required constructor params
have no default; optional params default to `APIHelper.SKIP`:

```python
from tesla.models.{request_model} import {RequestModel}

body = {RequestModel}(
    required_field='value',         # required — must be provided
    optional_field='value',         # optional — omit or pass SKIP to exclude
)
result = client.{resource}.create_{item}(body=body)
```

Open `tesla/models/{model}.py` to confirm the `_names`, `_optionals`, and constructor args.
The `_names` dict maps Python attribute names to JSON keys; the `_optionals` list names fields that
use `APIHelper.SKIP` as their default.

## Enums as parameters

Enum fields take the generated class's integer or string attribute value. APIMatic Python enums are
plain classes (not Python `Enum` subclasses) with `MEMBER = value` class attributes and a
`from_value()` class method:

```python
from tesla.models.suite_code_enum import SuiteCodeEnum

# Known constant:
client.{resource}.{operation}(suites=SuiteCodeEnum.HEARTS)

# Runtime value — convert with from_value:
suites = SuiteCodeEnum.from_value(server_value, default=SuiteCodeEnum.HEARTS)
```

See **python-models** for full enum representation.

## Reading the response

Operations return a typed model or primitive directly. The exact type varies per operation — open
the controller method to see the return type annotation and the deserializer registered in
`ResponseHandler`:

```python
# Model return:
user = client.authentication.o_auth_authorization_grant()
print(user.id, user.email)

# Primitive return:
text = client.authentication.custom_authentication()  # returns str
```

Response body fields that were optional and absent in the JSON will not have the attribute set on
the model (check with `hasattr(model, 'field')`), because optional fields use `APIHelper.SKIP`.

## Accessing HTTP metadata — HttpCallBack

The controller method itself returns only the deserialized body. To access the raw HTTP status
code, headers, or response text, pass an `HttpCallBack` to the client and inspect it after the
call. The generated `HttpResponseCatcher` (in `tests/http_response_catcher.py`) shows the pattern:

```python
from tesla.http.http_call_back import HttpCallBack

class ResponseCapture(HttpCallBack):
    def on_before_request(self, request):
        pass
    def on_after_response(self, response):
        self.last_response = response

capture = ResponseCapture()
client = TeslafleetmanagementapiClient(http_call_back=capture, ...)
result = client.authentication.custom_authentication()
print(capture.last_response.status_code)
print(capture.last_response.headers)
print(capture.last_response.text)
```

`HttpResponse` attributes: `status_code` (`int`), `reason_phrase` (`str`), `headers` (`dict`),
`text` (`str`), `request` (`HttpRequest`).

## Paginated operations

When the API supports pagination, the generated controller returns a `PagedIterable`. Iterate over
items directly or iterate over pages:

```python
# Iterate over individual items (across all pages):
for transaction in client.transaction.fetch_with_offset(offset=0, limit=10):
    print(transaction.id)

# Iterate over pages (each page is a PagedResponse subclass):
for page in client.transaction.fetch_with_offset(offset=0, limit=10).pages():
    print(page.offset)       # for OffsetPagedResponse
    for item in page.items():
        print(item.id)
```

Page types (`OffsetPagedResponse`, `CursorPagedResponse`, `LinkPagedResponse`,
`NumberPagedResponse`) expose a pagination cursor or next-link and an `items()` method that returns
an iterator over the items on that page. Inspect `tesla/pagination/` in the source.

## Finding the right method

- Controller property names are on `TeslafleetmanagementapiClient` in `tesla/tesla_client.py`.
- Operation method signatures are in `tesla/controllers/{resource}_controller.py`.
- `doc/controllers/*.md` lists every operation with parameters and usage snippets — grep it first.
- Request/response model types are under `tesla/models/`; enum types have `from_value()`.

## Next

- Build complex models, enums, unions → **python-models**
- Errors and status codes → **python-error-handling**
- Pagination, retries, timeouts → **python-configuration-resilience**
