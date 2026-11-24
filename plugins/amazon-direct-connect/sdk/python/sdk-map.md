<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — AWS Direct Connect (Python)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the module declaring each type; read the shape there. Every name is the emitted spelling, so a wrong one fails at import rather than working silently.

|  |  |
| --- | --- |
| SDK display name | AWS Direct Connect |
| Root package | `aws_direct_connect` |
| Distribution name | `aws-direct-connect` |
| Requires | Python 3.10 or later |
| API spec version | `2012-10-25` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec, and the package version is what `pip show` reports for the installed SDK. If a lookup here fails at import, re-read the module named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `pyproject.toml` — never to the page that carries them. Open them as-is from the SDK root; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

### Synchronous client

```python
from aws_direct_connect import AwsDirectConnectClient

client = AwsDirectConnectClient(sigv4="YOUR_API_KEY")

# TODO: call endpoints here -- see api-reference.md

client.close()
```

Alternatively, scope it — `with AwsDirectConnectClient(...) as client:` closes the pool on exit.

### Asynchronous client

```python
from asyncio import run

from aws_direct_connect import AsyncAwsDirectConnectClient


async def main() -> None:
    client = AsyncAwsDirectConnectClient(sigv4="YOUR_API_KEY")
    # TODO: call endpoints here, awaiting each -- see api-reference.md
    await client.aclose()


run(main())
```

Alternatively, scope it — `async with AsyncAwsDirectConnectClient(...) as client:` closes the pool on exit.

`AsyncClient` (`aws_direct_connect/async_client.py`) mirrors `Client` method for method, each endpoint method a coroutine. It takes the same keywords, except that each client accepts only its own transport and — where the **Async Type** column differs — only its own flavour.

`Client` and `AsyncClient` are aliases of `AwsDirectConnectClient` and `AsyncAwsDirectConnectClient` — the names tracebacks and `repr()` show; all four import from the root.

`close()` / `aclose()` closes the transport even when you supplied one via `custom_http_client=` / `custom_async_http_client=`, and a closed client cannot be reused.

Every API group is a property on the client (e.g. `client.aws_direct_connect`). Every constructor argument is optional and keyword-only. Sources: `aws_direct_connect/client.py`, `aws_direct_connect/async_client.py`:

| Keyword | Sync Type | Async Type | Default |
| --- | --- | --- | --- |
| `base_url` | `str \| None` | `str \| None` | `None` |
| `timeout` | `float` | `float` | `30.0` seconds |
| `retry_options` | `int \| RetryOptionsOrDict \| None` | `int \| RetryOptionsOrDict \| None` | `None` |
| `logging_options` | `LoggingOptionsOrDict \| None` | `LoggingOptionsOrDict \| None` | `None` |
| `hooks` | `Sequence[SdkHook] \| SdkHooksDict \| None` | `Sequence[AsyncSdkHook] \| AsyncSdkHooksDict \| None` | `None` |
| `custom_http_client` | `HttpClient \| None` | — | `None` |
| `custom_async_http_client` | — | `AsyncHttpClient \| None` | `None` |
| `sigv4` | `str \| None` | `str \| None` | `None` |

The types those columns name — where each imports from and, for a credentials dict, its keys:

| Type | Import from | Shape |
| --- | --- | --- |
| `RetryOptionsOrDict` | `aws_direct_connect.core` | a retry count, `RetryOptions`, or a dict: `max_retries: int` · `initial_delay: float` · `backoff_factor: float` · `max_delay: float` · `max_jitter: float` · `status_codes_to_retry: frozenset[int]` · `http_methods_to_retry: frozenset[HttpMethod]` |
| `LoggingOptionsOrDict` | `aws_direct_connect.core` | `LoggingOptions` or a dict: `log_request_headers: bool` · `log_response_headers: bool` · `log_request_body: bool` · `body_size_limit: int` · `redaction_placeholder: str` · `unmask_headers: AbstractSet[str]` · `mask_headers: AbstractSet[str]` · `mask_keys: AbstractSet[str]` |
| `SdkHook` | `aws_direct_connect.core` | protocol — `before_request(request: HttpRequest, context: HookContext) -> HttpRequest` · `after_response(response: HttpResponse, context: HookContext) -> HttpResponse`; subclass it and override either, or pass plain functions as an `SdkHooksDict` |
| `SdkHooksDict` | `aws_direct_connect.core` | dict — `on_request`: functions `(HttpRequest, HookContext) -> HttpRequest` · `on_response`: functions `(HttpResponse, HookContext) -> HttpResponse`; both optional, the `on_request` ones run first, any other key is ignored |
| `HttpClient` | `aws_direct_connect.core` | protocol — `send(request: HttpRequest) -> HttpResponse` · `close()`; `send` returns once the head has arrived and never reads the body, and raises `SdkConnectionError` (from `core`; `SdkTimeoutError` for a timeout) when no response arrives, as the response's reads do for a body they cannot deliver, naming the call as `request.method` and `safe_url(request.url)` — anything else it raises is never retried |
| `AsyncSdkHook` | `aws_direct_connect.core` | protocol — the same two methods as `async def`, taking `AsyncHookContext` and `AsyncHttpResponse`; `async def` functions go in an `AsyncSdkHooksDict` |
| `AsyncSdkHooksDict` | `aws_direct_connect.core` | dict — the same two keys, each function `async def`, taking `AsyncHookContext` and, for a response, `AsyncHttpResponse` |
| `AsyncHttpClient` | `aws_direct_connect.core` | protocol — `async send(request: HttpRequest) -> AsyncHttpResponse` · `async aclose()`; the same obligation, awaited |

### Retries — on by default

`retry_options` left at `None` applies the default `RetryOptions` policy below, so an unconfigured client **retries**: a request whose method is in `http_methods_to_retry` is sent again when it gets a status in `status_codes_to_retry`, or no response at all, and the last outcome reaches you only once its retries are spent. A body that cannot be re-sent byte for byte — a streamed file upload — is never retried. `retry_options=0` (or `{"max_retries": 0}`) turns retrying off; a bare count sets `max_retries` and leaves every other field at its default.

`RetryOptions` fields (source: `aws_direct_connect/core/retries.py`). Pass only the fields you change; each one left out takes its default:

| Field | Type | Default |
| --- | --- | --- |
| `max_retries` | `int` | `3` |
| `initial_delay` | `float` (seconds) | `1.0` |
| `backoff_factor` | `float` | `2.0` |
| `max_delay` | `float` (seconds) | `60.0` |
| `max_jitter` | `float` (seconds) | `0.5` |
| `status_codes_to_retry` | `frozenset[int]` | `frozenset({408, 429, 500, 502, 503, 504})` |
| `http_methods_to_retry` | `frozenset[HttpMethod]` | `frozenset({"GET", "HEAD", "PUT", "OPTIONS"})` |

The wait before retry *n* is `initial_delay × backoff_factor^(n−1)` plus up to `max_jitter` of random delay, the sum capped at `max_delay`; a `Retry-After` header replaces it, trimmed to `max_delay`.

A single call overrides two of these through `request_options` (`aws_direct_connect/core/request_options.py`): `max_retries` and `status_codes_to_retry`, each merged over the client's policy field by field — `request_options={"max_retries": 0}` turns retrying off for that one call and leaves every other call alone.

### Logging — off by default

Every HTTP exchange is written through the standard `logging` module under the `aws_direct_connect` logger, and the SDK configures nothing itself. Set that logger's level to turn it on: INFO writes the request line and a 2xx response line, WARNING a non-2xx response line and each retry, ERROR a call that ends in an exception, and DEBUG the header dumps and the request body that the flags below turn on. Or set `AWS_DIRECT_CONNECT_LOG=info|debug` before the process starts: it sets the level, turns the three flags on for `debug`, and adds a stderr handler only where nothing listens.

`LoggingOptions` fields (source: `aws_direct_connect/core/logging.py`). Pass only the fields you change; each one left out takes its default, and a name set you pass replaces its default:

| Field | Type | Default |
| --- | --- | --- |
| `log_request_headers` | `bool` | `False` |
| `log_response_headers` | `bool` | `False` |
| `log_request_body` | `bool` | `False` |
| `body_size_limit` | `int` (bytes) | `32768` |
| `redaction_placeholder` | `str` | `"REDACTED"` |
| `unmask_headers` | `AbstractSet[str]` | `frozenset()` |
| `mask_headers` | `AbstractSet[str]` | `frozenset()` |
| `mask_keys` | `AbstractSet[str]` | `frozenset({"sig", "signature", "access_token", "apikey", "api_key", "client_secret", "password", "refresh_token", "code", "assertion", "client_assertion"})` |

A single call is quietened through `request_options` (`aws_direct_connect/core/request_options.py`): `log_level`, a `logging` level constant, is a floor below which that call's records are not written; it never turns a dump or the body on. A header value prints `REDACTED` unless its name is on the runtime's safe list, a query value unless its key is a paging name, and a form field whose key is in `mask_keys` always; a JSON body prints as sent; a response body is never logged.

### Hooks — none by default

A hook is caller code run on every attempt of every request, retries included (source: `aws_direct_connect/core/hooks.py`). `before_request` runs after authentication and before the request line is logged, and returns the request to send: the one it was given, or a `dataclasses.replace` of it. `after_response` runs after the response line and the 401 check and before the retry decision, and returns the response the call acts on. The client's hooks run first, in order, then the call's.

A single call adds hooks through `request_options` (`aws_direct_connect/core/request_options.py`): `hooks`, a list of hooks or an `SdkHooksDict`, appended to the client's and never replacing them. The client keeps the hooks it was given uncopied, so a list changed after construction is read by the next call. On the async client the per-call options are `AsyncRequestOptions`, whose `hooks` are `AsyncSdkHook` or an `AsyncSdkHooksDict`; a hook of the other flavour is a type error, and nothing is checked at run time.

A hook that raises ends the call with that exception, after any open response is closed. The one exception is `SdkConnectionError` raised from `before_request` naming the call, `safe_url(context.url)`: the attempt is retried as a failed send, under the same method and retry-count rules as a transport failure. Raised from `after_response`, it ends the call like any other exception.

---

## Error-handling model (read once — applies to every operation)

Every operation is reached in two response modes:

- **Parsed call.** Returns the decoded payload and raises `ApiError` on an error status, with the decoded body on `.error` and the status on `.status_code`.
- **Raw call.** Reached through `.with_raw_response`; returns `ApiResult` — `Success` or `Failure` — and never raises for an API error. Read `.payload` on a `Success` or `.error` on a `Failure`; both carry `.status_code` and `.headers`.

Everything a call raises derives from `SdkError`, so one `except SdkError` covers any number of calls; every member names the call as `.method` and `.url` and keeps what caused it on `__cause__`. Besides `ApiError`, three members raise in **both** modes: `ResponseDecodeError` for a body its declared type rejects, `SdkConnectionError` for no usable response (`SdkTimeoutError` when it timed out) and `AuthSchemeError` for a credential that could not be applied. `ApiError` and `ResponseDecodeError` are siblings, so `except ApiError` never catches a 2xx that broke its contract.

What `.error` holds is fixed per operation. There are two cases:

- **Case A — typed error.** The operation documents at least one error status, so `aws_direct_connect/errors/` declares a union alias over the bodies those statuses map to — `RawError` is always its last arm, for any undocumented status — and `.error` is annotated with that alias. Narrow it with a `match` class pattern or `isinstance`. The operation blocks name the alias and the status each arm maps from.
- **Case B — raw error.** The operation documents no error status; `.error` is `RawError` (`aws_direct_connect/core/results.py`): `status_code: int` · `content: bytes` · `text(encoding="utf-8"): str` · `json(): Any`.

Core runtime types (`aws_direct_connect/core/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `SdkError` — the root of everything a call raises | `method: HttpMethod` · `url: str` — the path rendered, no query; the cause on `__cause__` | `aws_direct_connect/core/exceptions.py` |
| `ApiError` — raised by every parsed call; `.error` is a Case A alias from `aws_direct_connect/errors/` or `RawError` | `error: E` · `status_code: int` · `headers: Mapping[str, str]` · `method: HttpMethod` · `url: str` | `aws_direct_connect/core/exceptions.py` |
| `ResponseDecodeError` — a body its declared type rejects, in both modes | `status_code: int` · `headers: Mapping[str, str]` · `method` · `url` | `aws_direct_connect/core/exceptions.py` |
| `SdkConnectionError` — no usable response, in both modes | `method` · `url`; the HTTP library's exception on `__cause__` | `aws_direct_connect/core/exceptions.py` |
| `SdkTimeoutError` — the `SdkConnectionError` that timed out | `timeout: float` · `method` · `url` | `aws_direct_connect/core/exceptions.py` |
| `AuthSchemeError` — a credential that could not be applied, in both modes | `scheme_failures: tuple[Exception, ...]` · `method` · `url` | `aws_direct_connect/core/exceptions.py` |
| `ApiResult[T, E]` — returned by every raw call; the `Success[T] \| Failure[E]` union | `payload: T` (on `Success`) · `error: E` (on `Failure`) · `status_code: int` · `headers: Mapping[str, str]` · `method: HttpMethod` · `url: str` (all four on either) | `aws_direct_connect/core/results.py` |
| `RawError` | `status_code: int` · `content: bytes` · `text(encoding="utf-8"): str` · `json(): Any` | `aws_direct_connect/core/results.py` |

Typed error bodies (the arms of a Case A alias) are ordinary models — no special handling. The operation's **Type sources** table gives the module that declares each one; read field names, declared types and JSON aliases there, as for any other model.

```python
try:
    client.aws_direct_connect.accept_direct_connect_gateway_association_proposal(
        XAmzTarget.OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL
    )
except ApiError as e:
    # Case A — typed error: e.error is AcceptDirectConnectGatewayAssociationProposalErrorBody.
    match e.error:
        case RawError():
            # Any other error status.
            print(e.status_code, e.error.text())
except ResponseDecodeError as e:
    # Body rejected by its declared type.
    print(f"{e.status_code}: undecodable body ({type(e.__cause__).__name__})")
except SdkTimeoutError as e:
    # No response, body or next event in time.
    print(f"{e.method} {e.url} timed out after {e.timeout} s")
except SdkConnectionError as e:
    # Refused, dropped, or cut off mid-body.
    print(f"{e.method} {e.url} could not connect: {e.__cause__!r}")
except AuthSchemeError as e:
    # A credential could not be applied; one failure per scheme tried.
    for failure in e.scheme_failures:
        print(f"{e.method} {e.url} unauthenticated: {failure}")
except SdkError as e:
    # A member added later.
    print(e)
except Exception as e:
    # Not a call failure: input refused before sending (ValueError), a handler you wrote raising, or a bug here.
    print(f"not a call failure: {e!r}")
    raise e
```

**Raw (`.with_raw_response`) variants: present on every operation** — the same call returns `ApiResult` instead of raising, with the same body on `Failure.error`. Of **83 operations**, **83 are Case A (typed)** and **0 are Case B (raw)**.

---

## Operations — by controller (3 pages, 83 operations)

Each links to a sub-page with one block per operation, headed by its full accessor path: the HTTP verb and route (for a mock, a raw request or a provider-side log — never reconstruct it from the method name), the sync parsed signature with its required positional parameters, each parameter's role and — where it differs — wire name, both return types, and its error case — **Case A** names the alias and the status each arm maps from, **Case B** names `RawError`. Every block also carries a **Type sources** table — every *generated* type it names, with the module that declares it. A runtime type — a file alias, a date/time or byte converter — is not listed there.

**Each block states what is specific to its operation. Everything below holds for every operation, and blocks never restate it — silence means the default applies.**

| Applies to every operation | Stated where |
| --- | --- |
| **Four spellings, one signature** — the same method name and parameters on `Client` and `AsyncClient`, each also reachable through `.with_raw_response`; the async twin is a coroutine to `await`, with the same return types and error case, and where the **Async Type** column differs, pass the type it names | Getting a client |
| **Parsed raises, raw returns** — `ApiError` versus `ApiResult` | Error-handling model |
| **Case B error is always `RawError`** — also the last arm of every Case A alias, where a block's **Error arms** bullet ends in it | Error-handling model |
| **A trailing `request_options`** — keyword-only and optional, for per-call overrides such as a timeout, extra headers, `max_retries`, `status_codes_to_retry`, `log_level` or `hooks`; every signature ends with it | here (`aws_direct_connect/core/request_options.py`), Retries, Logging, Hooks |
| **Base URL `https://directconnect.{region}.amazonaws.com`** — this SDK's only server; override it with `base_url="https://…"` | Servers & auth |
| **Parameter names are literal** — signatures are generated code verbatim, and everything behind the bare `*` must be passed by name | here |
| **A parameter's wire name is its Python name** — sent as-is on the path, query string, header or body, unless the block's **Params** bullet carries a wire name beside the role | here |

**The operation's behavioural prose lives on the operation itself**, as the method's docstring in the module named at the top of its page, and again in `api-reference.md` with a per-parameter description and a usage sample. Blocks here give you the contract — names, types, shapes, errors. Where an operation's *semantics* decide what you must pass, that is what the docstring settles; read it there rather than filling it in from memory.

Sub-pages chunk per `###` block: each block is self-contained given the table above, and assumes this page is loaded beside it.

| Controller | Class | Ops | Page |
| --- | --- | --- | --- |
| `client.aws_direct_connect` | `AwsDirectConnect` / `AsyncAwsDirectConnect` | 63 | [map/operations/aws_direct_connect.md](map/operations/aws_direct_connect.md) |
| `client.operations` | `Operations` / `AsyncOperations` | 15 | [map/operations/operations.md](map/operations/operations.md) |
| `client.resiliency_group_api` | `ResiliencyGroupApi` / `AsyncResiliencyGroupApi` | 5 | [map/operations/resiliency_group_api.md](map/operations/resiliency_group_api.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `aws_direct_connect/models/` declares one type plus its input companion, and every module under `aws_direct_connect/errors/` one alias plus the mapper that builds it; no two share a name. Take a type's module from the operation's **Type sources** table. When no retrieved chunk names it, the module is the type name in snake_case under the kind's directory below (`AcceptDirectConnectGatewayAssociationProposalRequest` ↔ `accept_direct_connect_gateway_association_proposal_request.py`; an error alias drops its `Body` suffix: `AcceptDirectConnectGatewayAssociationProposalErrorBody` ↔ `accept_direct_connect_gateway_association_proposal_error.py`). Never grep for a type.

| Group | Count | Directory (module = `<type_name>.py`) |
| --- | --- | --- |
| Models (`SdkBaseModel` pydantic classes) | 161 | `aws_direct_connect/models/` |
| Enums (`Enum` over `str`) — Python member names + wire values | 119 | `aws_direct_connect/models/enums/` |
| Error aliases (one per Case A operation) | 83 | `aws_direct_connect/errors/` |

Conventions: a model is a `SdkBaseModel` (pydantic) class; a field whose wire name differs from its Python name carries it as `Field(alias=…)` (`direct_connect_gateway_id` ↔ `"directConnectGatewayId"`) — read the alias off the field rather than deriving it. An omittable field is annotated `Optional[T]` and defaults to `UNSET`, and one that may also be explicitly null is `OptionalNullable[T]`; both come from `core` and neither is `typing.Optional` — there is no `None` arm unless the spec declared the property nullable, so passing `None` to the first is a type error rather than a value that serializes.

Every model and enum also has an **input companion**, exported beside it from the same package (`AcceptDirectConnectGatewayAssociationProposalRequest` ↔ `AcceptDirectConnectGatewayAssociationProposalRequestDict`). Wherever a signature names the companion you may pass either the model instance or a plain dict with the same keys, whichever reads better at the call site. An enum is a real `Enum` subclass over `str`; its companion is spelled `<Name>OrStr` or `<Name>OrInt` (`AddressFamily` ↔ `AddressFamilyOrStr`) and additionally accepts a wire value this SDK version does not know.

Import paths by content type (`from <package> import <Name>`):

| Contents | Import from |
| --- | --- |
| Client (root) | `aws_direct_connect` |
| Operation controllers | `aws_direct_connect.apis` |
| Models | `aws_direct_connect.models` |
| Enums | `aws_direct_connect.models.enums` |
| Error aliases | `aws_direct_connect.errors` |
| Core runtime (`SdkError`, `ApiError`, `ApiResult`, `RawError`, …) | `aws_direct_connect.core` |

---

## Servers & auth

**API key (header `Authorization`).** Pass `sigv4="<api_key>"`; sent as the `Authorization` request header.

Operation blocks name their scheme in an **Auth** bullet; an operation whose spec declares no scheme carries no such bullet.

- `AND` — every scheme listed must be configured for the call to succeed.
- `OR` — any one of the schemes listed can be used; the first one you configured is the one sent, in the order listed.

A scheme you did not configure is skipped silently rather than raising, and the request is sent anyway — so an authentication failure can mean no credential was sent rather than a bad one.

**One environment, one server** (`aws_direct_connect/server/server_config.py`). The spec declares a single environment, so no `environment` keyword exists; the base URL and its override point:

| Base URL | Override point |
| --- | --- |
| `https://directconnect.{region}.amazonaws.com` | `base_url="https://…"` |

Template template variables: `{region}` defaults to `"us-east-1"` — override the whole URL with `base_url="https://…"`.

