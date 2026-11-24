<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — UiPath (Python)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the module declaring each type; read the shape there. Every name is the emitted spelling, so a wrong one fails at import rather than working silently.

|  |  |
| --- | --- |
| SDK display name | UiPath |
| Root package | `ui_path` |
| Distribution name | `ui-path` |
| Requires | Python 3.10 or later |
| API spec version | `2024.10` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec, and the package version is what `pip show` reports for the installed SDK. If a lookup here fails at import, re-read the module named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `pyproject.toml` — never to the page that carries them. Open them as-is from the SDK root; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

### Synchronous client

```python
from ui_path import UiPathClient

client = UiPathClient(bearer_auth="YOUR_BEARER_TOKEN", api_key_auth="YOUR_API_KEY", environment="production")

# TODO: call endpoints here -- see api-reference.md

client.close()
```

Alternatively, scope it — `with UiPathClient(...) as client:` closes the pool on exit.

### Asynchronous client

```python
from asyncio import run

from ui_path import AsyncUiPathClient


async def main() -> None:
    client = AsyncUiPathClient(bearer_auth="YOUR_BEARER_TOKEN", api_key_auth="YOUR_API_KEY", environment="production")
    # TODO: call endpoints here, awaiting each -- see api-reference.md
    await client.aclose()


run(main())
```

Alternatively, scope it — `async with AsyncUiPathClient(...) as client:` closes the pool on exit.

`AsyncClient` (`ui_path/async_client.py`) mirrors `Client` method for method, each endpoint method a coroutine. It takes the same keywords, except that each client accepts only its own transport and — where the **Async Type** column differs — only its own flavour.

`Client` and `AsyncClient` are aliases of `UiPathClient` and `AsyncUiPathClient` — the names tracebacks and `repr()` show; all four import from the root.

`close()` / `aclose()` closes the transport even when you supplied one via `custom_http_client=` / `custom_async_http_client=`, and a closed client cannot be reused.

Every API group is a property on the client (e.g. `client.alerts`). Every constructor argument is optional and keyword-only. Sources: `ui_path/client.py`, `ui_path/async_client.py`:

| Keyword | Sync Type | Async Type | Default |
| --- | --- | --- | --- |
| `environment` | `Environment` | `Environment` | `"production"` |
| `timeout` | `float` | `float` | `30.0` seconds |
| `server_config` | `ServerConfigOrDict \| None` | `ServerConfigOrDict \| None` | `None` |
| `retry_options` | `int \| RetryOptionsOrDict \| None` | `int \| RetryOptionsOrDict \| None` | `None` |
| `logging_options` | `LoggingOptionsOrDict \| None` | `LoggingOptionsOrDict \| None` | `None` |
| `hooks` | `Sequence[SdkHook] \| SdkHooksDict \| None` | `Sequence[AsyncSdkHook] \| AsyncSdkHooksDict \| None` | `None` |
| `custom_http_client` | `HttpClient \| None` | — | `None` |
| `custom_async_http_client` | — | `AsyncHttpClient \| None` | `None` |
| `bearer_auth` | `str \| None` | `str \| None` | `None` |
| `api_key_auth` | `str \| None` | `str \| None` | `None` |

The types those columns name — where each imports from and, for a credentials dict, its keys:

| Type | Import from | Shape |
| --- | --- | --- |
| `Environment` | `ui_path.server` | `Literal` of the Environments table's names |
| `ServerConfigOrDict` | `ui_path.server` | keys as the Servers & auth tables read |
| `RetryOptionsOrDict` | `ui_path.core` | a retry count, `RetryOptions`, or a dict: `max_retries: int` · `initial_delay: float` · `backoff_factor: float` · `max_delay: float` · `max_jitter: float` · `status_codes_to_retry: frozenset[int]` · `http_methods_to_retry: frozenset[HttpMethod]` |
| `LoggingOptionsOrDict` | `ui_path.core` | `LoggingOptions` or a dict: `log_request_headers: bool` · `log_response_headers: bool` · `log_request_body: bool` · `body_size_limit: int` · `redaction_placeholder: str` · `unmask_headers: AbstractSet[str]` · `mask_headers: AbstractSet[str]` · `mask_keys: AbstractSet[str]` |
| `SdkHook` | `ui_path.core` | protocol — `before_request(request: HttpRequest, context: HookContext) -> HttpRequest` · `after_response(response: HttpResponse, context: HookContext) -> HttpResponse`; subclass it and override either, or pass plain functions as an `SdkHooksDict` |
| `SdkHooksDict` | `ui_path.core` | dict — `on_request`: functions `(HttpRequest, HookContext) -> HttpRequest` · `on_response`: functions `(HttpResponse, HookContext) -> HttpResponse`; both optional, the `on_request` ones run first, any other key is ignored |
| `HttpClient` | `ui_path.core` | protocol — `send(request: HttpRequest) -> HttpResponse` · `close()`; `send` returns once the head has arrived and never reads the body, and raises `SdkConnectionError` (from `core`; `SdkTimeoutError` for a timeout) when no response arrives, as the response's reads do for a body they cannot deliver, naming the call as `request.method` and `safe_url(request.url)` — anything else it raises is never retried |
| `AsyncSdkHook` | `ui_path.core` | protocol — the same two methods as `async def`, taking `AsyncHookContext` and `AsyncHttpResponse`; `async def` functions go in an `AsyncSdkHooksDict` |
| `AsyncSdkHooksDict` | `ui_path.core` | dict — the same two keys, each function `async def`, taking `AsyncHookContext` and, for a response, `AsyncHttpResponse` |
| `AsyncHttpClient` | `ui_path.core` | protocol — `async send(request: HttpRequest) -> AsyncHttpResponse` · `async aclose()`; the same obligation, awaited |

### Retries — on by default

`retry_options` left at `None` applies the default `RetryOptions` policy below, so an unconfigured client **retries**: a request whose method is in `http_methods_to_retry` is sent again when it gets a status in `status_codes_to_retry`, or no response at all, and the last outcome reaches you only once its retries are spent. A body that cannot be re-sent byte for byte — a streamed file upload — is never retried. `retry_options=0` (or `{"max_retries": 0}`) turns retrying off; a bare count sets `max_retries` and leaves every other field at its default.

`RetryOptions` fields (source: `ui_path/core/retries.py`). Pass only the fields you change; each one left out takes its default:

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

A single call overrides two of these through `request_options` (`ui_path/core/request_options.py`): `max_retries` and `status_codes_to_retry`, each merged over the client's policy field by field — `request_options={"max_retries": 0}` turns retrying off for that one call and leaves every other call alone.

### Logging — off by default

Every HTTP exchange is written through the standard `logging` module under the `ui_path` logger, and the SDK configures nothing itself. Set that logger's level to turn it on: INFO writes the request line and a 2xx response line, WARNING a non-2xx response line and each retry, ERROR a call that ends in an exception, and DEBUG the header dumps and the request body that the flags below turn on. Or set `UI_PATH_LOG=info|debug` before the process starts: it sets the level, turns the three flags on for `debug`, and adds a stderr handler only where nothing listens.

`LoggingOptions` fields (source: `ui_path/core/logging.py`). Pass only the fields you change; each one left out takes its default, and a name set you pass replaces its default:

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

A single call is quietened through `request_options` (`ui_path/core/request_options.py`): `log_level`, a `logging` level constant, is a floor below which that call's records are not written; it never turns a dump or the body on. A header value prints `REDACTED` unless its name is on the runtime's safe list, a query value unless its key is a paging name, and a form field whose key is in `mask_keys` always; a JSON body prints as sent; a response body is never logged.

### Hooks — none by default

A hook is caller code run on every attempt of every request, retries included (source: `ui_path/core/hooks.py`). `before_request` runs after authentication and before the request line is logged, and returns the request to send: the one it was given, or a `dataclasses.replace` of it. `after_response` runs after the response line and the 401 check and before the retry decision, and returns the response the call acts on. The client's hooks run first, in order, then the call's.

A single call adds hooks through `request_options` (`ui_path/core/request_options.py`): `hooks`, a list of hooks or an `SdkHooksDict`, appended to the client's and never replacing them. The client keeps the hooks it was given uncopied, so a list changed after construction is read by the next call. On the async client the per-call options are `AsyncRequestOptions`, whose `hooks` are `AsyncSdkHook` or an `AsyncSdkHooksDict`; a hook of the other flavour is a type error, and nothing is checked at run time.

A hook that raises ends the call with that exception, after any open response is closed. The one exception is `SdkConnectionError` raised from `before_request` naming the call, `safe_url(context.url)`: the attempt is retried as a failed send, under the same method and retry-count rules as a transport failure. Raised from `after_response`, it ends the call like any other exception.

---

## Error-handling model (read once — applies to every operation)

Every operation is reached in two response modes:

- **Parsed call.** Returns the decoded payload and raises `ApiError` on an error status, with the decoded body on `.error` and the status on `.status_code`.
- **Raw call.** Reached through `.with_raw_response`; returns `ApiResult` — `Success` or `Failure` — and never raises for an API error. Read `.payload` on a `Success` or `.error` on a `Failure`; both carry `.status_code` and `.headers`.

Everything a call raises derives from `SdkError`, so one `except SdkError` covers any number of calls; every member names the call as `.method` and `.url` and keeps what caused it on `__cause__`. Besides `ApiError`, three members raise in **both** modes: `ResponseDecodeError` for a body its declared type rejects, `SdkConnectionError` for no usable response (`SdkTimeoutError` when it timed out) and `AuthSchemeError` for a credential that could not be applied. `ApiError` and `ResponseDecodeError` are siblings, so `except ApiError` never catches a 2xx that broke its contract.

What `.error` holds is fixed per operation. There are two cases:

- **Case A — typed error.** The operation documents at least one error status, so `ui_path/errors/` declares a union alias over the bodies those statuses map to — `RawError` is always its last arm, for any undocumented status — and `.error` is annotated with that alias. Narrow it with a `match` class pattern or `isinstance`. The operation blocks name the alias and the status each arm maps from.
- **Case B — raw error.** The operation documents no error status; `.error` is `RawError` (`ui_path/core/results.py`): `status_code: int` · `content: bytes` · `text(encoding="utf-8"): str` · `json(): Any`.

Core runtime types (`ui_path/core/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `SdkError` — the root of everything a call raises | `method: HttpMethod` · `url: str` — the path rendered, no query; the cause on `__cause__` | `ui_path/core/exceptions.py` |
| `ApiError` — raised by every parsed call; `.error` is a Case A alias from `ui_path/errors/` or `RawError` | `error: E` · `status_code: int` · `headers: Mapping[str, str]` · `method: HttpMethod` · `url: str` | `ui_path/core/exceptions.py` |
| `ResponseDecodeError` — a body its declared type rejects, in both modes | `status_code: int` · `headers: Mapping[str, str]` · `method` · `url` | `ui_path/core/exceptions.py` |
| `SdkConnectionError` — no usable response, in both modes | `method` · `url`; the HTTP library's exception on `__cause__` | `ui_path/core/exceptions.py` |
| `SdkTimeoutError` — the `SdkConnectionError` that timed out | `timeout: float` · `method` · `url` | `ui_path/core/exceptions.py` |
| `AuthSchemeError` — a credential that could not be applied, in both modes | `scheme_failures: tuple[Exception, ...]` · `method` · `url` | `ui_path/core/exceptions.py` |
| `ApiResult[T, E]` — returned by every raw call; the `Success[T] \| Failure[E]` union | `payload: T` (on `Success`) · `error: E` (on `Failure`) · `status_code: int` · `headers: Mapping[str, str]` · `method: HttpMethod` · `url: str` (all four on either) | `ui_path/core/results.py` |
| `RawError` | `status_code: int` · `content: bytes` · `text(encoding="utf-8"): str` · `json(): Any` | `ui_path/core/results.py` |

Typed error bodies (the arms of a Case A alias) are ordinary models — no special handling. The operation's **Type sources** table gives the module that declares each one; read field names, declared types and JSON aliases there, as for any other model.

```python
try:
    response = client.alerts.list_alerts()
except ApiError as e:
    # Case A — typed error: e.error is ListAlertsErrorBody.
    match e.error:
        case ErrorResponse():
            # Handle 401.
            print(e.status_code, e.error)
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

**Raw (`.with_raw_response`) variants: present on every operation** — the same call returns `ApiResult` instead of raising, with the same body on `Failure.error`. Of **79 operations**, **79 are Case A (typed)** and **0 are Case B (raw)**.

---

## Operations — by controller (32 pages, 79 operations)

Each links to a sub-page with one block per operation, headed by its full accessor path: the HTTP verb and route (for a mock, a raw request or a provider-side log — never reconstruct it from the method name), the sync parsed signature with its required positional parameters, each parameter's role and — where it differs — wire name, both return types, and its error case — **Case A** names the alias and the status each arm maps from, **Case B** names `RawError`. Every block also carries a **Type sources** table — every *generated* type it names, with the module that declares it. A runtime type — a file alias, a date/time or byte converter — is not listed there.

**Each block states what is specific to its operation. Everything below holds for every operation, and blocks never restate it — silence means the default applies.**

| Applies to every operation | Stated where |
| --- | --- |
| **Four spellings, one signature** — the same method name and parameters on `Client` and `AsyncClient`, each also reachable through `.with_raw_response`; the async twin is a coroutine to `await`, with the same return types and error case, and where the **Async Type** column differs, pass the type it names | Getting a client |
| **Parsed raises, raw returns** — `ApiError` versus `ApiResult` | Error-handling model |
| **Case B error is always `RawError`** — also the last arm of every Case A alias, where a block's **Error arms** bullet ends in it | Error-handling model |
| **A trailing `request_options`** — keyword-only and optional, for per-call overrides such as a timeout, extra headers, `max_retries`, `status_codes_to_retry`, `log_level` or `hooks`; every signature ends with it | here (`ui_path/core/request_options.py`), Retries, Logging, Hooks |
| **Each operation names its own server** — this SDK declares several, so every block carries a **Server** bullet with the server's key in `server_config=` | its block |
| **Parameter names are literal** — signatures are generated code verbatim, and everything behind the bare `*` must be passed by name | here |
| **A parameter's wire name is its Python name** — sent as-is on the path, query string, header or body, unless the block's **Params** bullet carries a wire name beside the role | here |

**The operation's behavioural prose lives on the operation itself**, as the method's docstring in the module named at the top of its page, and again in `api-reference.md` with a per-parameter description and a usage sample. Blocks here give you the contract — names, types, shapes, errors. Where an operation's *semantics* decide what you must pass, that is what the docstring settles; read it there rather than filling it in from memory.

Sub-pages chunk per `###` block: each block is self-contained given the table above, and assumes this page is loaded beside it.

| Controller | Class | Ops | Page |
| --- | --- | --- | --- |
| `client.alerts` | `Alerts` / `AsyncAlerts` | 1 | [map/operations/alerts.md](map/operations/alerts.md) |
| `client.app_inventory` | `AppInventory` / `AsyncAppInventory` | 3 | [map/operations/app_inventory.md](map/operations/app_inventory.md) |
| `client.assets` | `Assets` / `AsyncAssets` | 5 | [map/operations/assets.md](map/operations/assets.md) |
| `client.audit_logs` | `AuditLogs` / `AsyncAuditLogs` | 3 | [map/operations/audit_logs.md](map/operations/audit_logs.md) |
| `client.automations` | `Automations` / `AsyncAutomations` | 7 | [map/operations/automations.md](map/operations/automations.md) |
| `client.classification` | `Classification` / `AsyncClassification` | 2 | [map/operations/classification.md](map/operations/classification.md) |
| `client.digitization` | `Digitization` / `AsyncDigitization` | 1 | [map/operations/digitization.md](map/operations/digitization.md) |
| `client.discovery` | `Discovery` / `AsyncDiscovery` | 3 | [map/operations/discovery.md](map/operations/discovery.md) |
| `client.entities` | `Entities` / `AsyncEntities` | 6 | [map/operations/entities.md](map/operations/entities.md) |
| `client.extraction` | `Extraction` / `AsyncExtraction` | 2 | [map/operations/extraction.md](map/operations/extraction.md) |
| `client.folders` | `Folders` / `AsyncFolders` | 1 | [map/operations/folders.md](map/operations/folders.md) |
| `client.groups` | `Groups` / `AsyncGroups` | 3 | [map/operations/groups.md](map/operations/groups.md) |
| `client.jobs` | `Jobs` / `AsyncJobs` | 4 | [map/operations/jobs.md](map/operations/jobs.md) |
| `client.licenses` | `Licenses` / `AsyncLicenses` | 2 | [map/operations/licenses.md](map/operations/licenses.md) |
| `client.machines` | `Machines` / `AsyncMachines` | 1 | [map/operations/machines.md](map/operations/machines.md) |
| `client.packages` | `Packages` / `AsyncPackages` | 1 | [map/operations/packages.md](map/operations/packages.md) |
| `client.pipeline` | `Pipeline` / `AsyncPipeline` | 1 | [map/operations/pipeline.md](map/operations/pipeline.md) |
| `client.processes` | `Processes` / `AsyncProcesses` | 1 | [map/operations/processes.md](map/operations/processes.md) |
| `client.projects` | `Projects` / `AsyncProjects` | 3 | [map/operations/projects.md](map/operations/projects.md) |
| `client.queue_items` | `QueueItems` / `AsyncQueueItems` | 2 | [map/operations/queue_items.md](map/operations/queue_items.md) |
| `client.queues` | `Queues` / `AsyncQueues` | 2 | [map/operations/queues.md](map/operations/queues.md) |
| `client.requirements` | `Requirements` / `AsyncRequirements` | 2 | [map/operations/requirements.md](map/operations/requirements.md) |
| `client.robots` | `Robots` / `AsyncRobots` | 1 | [map/operations/robots.md](map/operations/robots.md) |
| `client.roles` | `Roles` / `AsyncRoles` | 1 | [map/operations/roles.md](map/operations/roles.md) |
| `client.schedules` | `Schedules` / `AsyncSchedules` | 1 | [map/operations/schedules.md](map/operations/schedules.md) |
| `client.storage_buckets` | `StorageBuckets` / `AsyncStorageBuckets` | 1 | [map/operations/storage_buckets.md](map/operations/storage_buckets.md) |
| `client.test_cases` | `TestCases` / `AsyncTestCases` | 3 | [map/operations/test_cases.md](map/operations/test_cases.md) |
| `client.test_executions` | `TestExecutions` / `AsyncTestExecutions` | 1 | [map/operations/test_executions.md](map/operations/test_executions.md) |
| `client.test_sets` | `TestSets` / `AsyncTestSets` | 2 | [map/operations/test_sets.md](map/operations/test_sets.md) |
| `client.users` | `Users` / `AsyncUsers` | 8 | [map/operations/users.md](map/operations/users.md) |
| `client.validation` | `Validation` / `AsyncValidation` | 1 | [map/operations/validation.md](map/operations/validation.md) |
| `client.webhooks_api` | `WebhooksApi` / `AsyncWebhooksApi` | 4 | [map/operations/webhooks_api.md](map/operations/webhooks_api.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `ui_path/models/` declares one type plus its input companion, and every module under `ui_path/errors/` one alias plus the mapper that builds it; no two share a name. Take a type's module from the operation's **Type sources** table. When no retrieved chunk names it, the module is the type name in snake_case under the kind's directory below (`AddQueueItemRequest` ↔ `add_queue_item_request.py`; an error alias drops its `Body` suffix: `AddQueueItemErrorBody` ↔ `add_queue_item_error.py`). Never grep for a type.

| Group | Count | Directory (module = `<type_name>.py`) |
| --- | --- | --- |
| Models (`SdkBaseModel` pydantic classes) | 123 | `ui_path/models/` |
| Enums (`Enum` over `str` / `int`) — Python member names + wire values | 36 | `ui_path/models/enums/` |
| Error aliases (one per Case A operation) | 79 | `ui_path/errors/` |

Conventions: a model is a `SdkBaseModel` (pydantic) class; a field whose wire name differs from its Python name carries it as `Field(alias=…)` (`item_data` ↔ `"itemData"`) — read the alias off the field rather than deriving it. An omittable field is annotated `Optional[T]` and defaults to `UNSET`, and one that may also be explicitly null is `OptionalNullable[T]`; both come from `core` and neither is `typing.Optional` — there is no `None` arm unless the spec declared the property nullable, so passing `None` to the first is a type error rather than a value that serializes.

Every model and enum also has an **input companion**, exported beside it from the same package (`AddQueueItemRequest` ↔ `AddQueueItemRequestDict`). Wherever a signature names the companion you may pass either the model instance or a plain dict with the same keys, whichever reads better at the call site. An enum is a real `Enum` subclass over `str` / `int`; its companion is spelled `<Name>OrStr` or `<Name>OrInt` (`AlertSeverity` ↔ `AlertSeverityOrStr`) and additionally accepts a wire value this SDK version does not know.

Import paths by content type (`from <package> import <Name>`):

| Contents | Import from |
| --- | --- |
| Client (root) | `ui_path` |
| Operation controllers | `ui_path.apis` |
| Models | `ui_path.models` |
| Enums | `ui_path.models.enums` |
| Error aliases | `ui_path.errors` |
| Core runtime (`SdkError`, `ApiError`, `ApiResult`, `RawError`, …) | `ui_path.core` |

---

## Servers & auth

**Bearer token.** Pass `bearer_auth="<token>"`.

**API key (header `Authorization`).** Pass `api_key_auth="<api_key>"`; sent as the `Authorization` request header.

Operation blocks name their scheme in an **Auth** bullet; an operation whose spec declares no scheme carries no such bullet.

- `AND` — every scheme listed must be configured for the call to succeed.
- `OR` — any one of the schemes listed can be used; the first one you configured is the one sent, in the order listed.

A scheme you did not configure is skipped silently rather than raising, and the request is sent anyway — so an authentication failure can mean no credential was sent rather than a bad one.

**Environments.** `environment=` selects the target environment (`ui_path/server/environment.py`):

| Environment | Hosting |
| --- | --- |
| `"production"` *(default)* | UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Data Service, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Platform, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Orchestrator, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Test Manager, UiPath Automation Cloud Automation Hub, UiPath Automation Cloud Document Understanding, UiPath Automation Cloud Orchestrator |
| `"environment2"` | UiPath Automation Cloud Orchestrator |
| `"environment3"` | UiPath Automation Cloud Platform |

**6 servers.** Base-URL templates and override points (`ui_path/server/server_config.py`):

| Server | `"production"` base URL | `"environment2"` base URL | `"environment3"` base URL | Override point |
| --- | --- | --- | --- | --- |
| `default` | `https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_` | `https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_` | `https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_` | `{"default": {"production": {"base_url": …}}}` (and the other environments) |
| `default_ui_path_automation_hub_app_inventory_api` | `https://cloud.uipath.com/{orgName}/{tenantName}/automationhub_/api/v1` | `https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_` | `https://cloud.uipath.com` | `{"default_ui_path_automation_hub_app_inventory_api": {"production": {"base_url": …}}}` (and the other environments) |
| `default_ui_path_platform_management_audit_logs_api` | `https://cloud.uipath.com` | `https://cloud.uipath.com` | `https://cloud.uipath.com` | `{"default_ui_path_platform_management_audit_logs_api": {"production": {"base_url": …}}}` (and the other environments) |
| `default_ui_path_document_understanding_classification_api` | `https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework` | `https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework` | `https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework` | `{"default_ui_path_document_understanding_classification_api": {"production": {"base_url": …}}}` (and the other environments) |
| `default_ui_path_data_service_entities_api` | `https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService` | `https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService` | `https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService` | `{"default_ui_path_data_service_entities_api": {"production": {"base_url": …}}}` (and the other environments) |
| `default_ui_path_test_manager_projects_api` | `https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_` | `https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_` | `https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_` | `{"default_ui_path_test_manager_projects_api": {"production": {"base_url": …}}}` (and the other environments) |

`default` · `"production"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default": {"production": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default": {"production": {"tenant_name": …}}}`.

`default` · `"environment2"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default": {"environment2": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default": {"environment2": {"tenant_name": …}}}`.

`default` · `"environment3"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default": {"environment3": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default": {"environment3": {"tenant_name": …}}}`.

`default_ui_path_automation_hub_app_inventory_api` · `"production"` template variables: `{orgName}` defaults to `"your-org"` — override `{"default_ui_path_automation_hub_app_inventory_api": {"production": {"org_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_automation_hub_app_inventory_api": {"production": {"tenant_name": …}}}`.

`default_ui_path_automation_hub_app_inventory_api` · `"environment2"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_automation_hub_app_inventory_api": {"environment2": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_automation_hub_app_inventory_api": {"environment2": {"tenant_name": …}}}`.

`default_ui_path_document_understanding_classification_api` · `"production"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_document_understanding_classification_api": {"production": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_document_understanding_classification_api": {"production": {"tenant_name": …}}}`.

`default_ui_path_document_understanding_classification_api` · `"environment2"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_document_understanding_classification_api": {"environment2": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_document_understanding_classification_api": {"environment2": {"tenant_name": …}}}`.

`default_ui_path_document_understanding_classification_api` · `"environment3"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_document_understanding_classification_api": {"environment3": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_document_understanding_classification_api": {"environment3": {"tenant_name": …}}}`.

`default_ui_path_data_service_entities_api` · `"production"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_data_service_entities_api": {"production": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_data_service_entities_api": {"production": {"tenant_name": …}}}`.

`default_ui_path_data_service_entities_api` · `"environment2"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_data_service_entities_api": {"environment2": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_data_service_entities_api": {"environment2": {"tenant_name": …}}}`.

`default_ui_path_data_service_entities_api` · `"environment3"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_data_service_entities_api": {"environment3": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_data_service_entities_api": {"environment3": {"tenant_name": …}}}`.

`default_ui_path_test_manager_projects_api` · `"production"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_test_manager_projects_api": {"production": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_test_manager_projects_api": {"production": {"tenant_name": …}}}`.

`default_ui_path_test_manager_projects_api` · `"environment2"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_test_manager_projects_api": {"environment2": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_test_manager_projects_api": {"environment2": {"tenant_name": …}}}`.

`default_ui_path_test_manager_projects_api` · `"environment3"` template variables: `{organizationName}` defaults to `"your-org"` — override `{"default_ui_path_test_manager_projects_api": {"environment3": {"organization_name": …}}}`. `{tenantName}` defaults to `"your-tenant"` — override `{"default_ui_path_test_manager_projects_api": {"environment3": {"tenant_name": …}}}`.

Pick a row with `environment=`, and override any of these by passing `server_config=` a dict nested exactly as the columns above read — `{"default": {"production": {"base_url": …}}}` — with each row's variables sitting beside its `base_url`.

