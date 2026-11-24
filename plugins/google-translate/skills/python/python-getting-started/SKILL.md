---
name: "python-getting-started"
description: "Load before answering any Google Translate Python SDK question or writing Python code against the SDK (Python only). The SDK's lookup layer: install, imports, environments and base URL, auth, the SDK map (`sdk-map.md` + `map/operations/`) and how to read it, and the module that owns each fact the map leaves to the source."
---

# Getting started with the Google Translate Python SDK

> **Lookup layer** for Google Translate Python SDK code: ground every contract fact here, in the SDK map and in the source modules they name — never in recall — and carry those facts onto a contract sheet before you implement. `python-integrate-google-translate` holds the workflow around it.

This page owns the SDK's *identity and surface* (install, imports, controllers, which module owns which fact). The API-agnostic companion skills own *usage* — `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`; load each at its step (see **Integration workflow**) and confirm names against the installed package.

## SDK identity

| Fact | Value |
| --- | --- |
| API | Google Translate |
| Distribution name (what you install) | `google-translate` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `google_translate` — not the string you install |
| SDK source | `sdk/python/` inside this plugin — generated with it, nothing to clone |
| Version | `v3` — re-verify this page after a version bump |
| Sync client class | `GoogleTranslateClient` (alias `Client`) |
| Async client class | `AsyncGoogleTranslateClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `server_config` · `timeout` (default `30.0`) · `retry_options` · `logging_options` · `hooks` · `api_key` · `oauth2` · `oauth2_token_source`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ) |
| Auth | **API key** in the `key` query parameter — set `api_key` · **OAuth 2.0** authorization code — set `oauth2` |
| Environments | one environment; 3 named servers configured through `server_config` |
| Base-URL config | `ServerConfig` (`google_translate/server/server_config.py`) |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx2 (>=2.13.1,<3.0.0)` · `certifi (>=2024.7.4)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed` — **a type error against this SDK is a real contract violation, not noise** |
| Surface | 51 operations, all directly on the client — no controller groups; the map's single page is `map/operations/client.md` · 108 models · 0 unions · 0 enums · 51 per-operation error unions |

## Install — from the copy in this plugin

Into the same environment your project runs in, install the distribution from the copy inside this plugin, at `sdk/python/` relative to the plugin root (the directory holding `skills/`) — it is not published to a package index:

```bash
pip install <plugin-root>/sdk/python/
python -c "import google_translate, pathlib; print(pathlib.Path(google_translate.__file__).parent)"
```

**Run the second line too.** A `pip install` that reports success is not proof the SDK is importable where your project runs. If the probe raises `ModuleNotFoundError`, the install went into a different interpreter: re-run it through the one your project uses (`python -m pip install …`) and probe again. If it prints a path whose contents are not this SDK, what you installed is not this distribution.

Install it as a package, into site-packages. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from the plugin's copy — an editable install points at that directory, so the next regeneration of this plugin, which replaces that directory wholesale, breaks every import.

## Imports — the package splits its surface across three modules

Python does not re-export child modules transitively, so `from google_translate import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`google_translate/__init__.py` exports exactly 7 names beside the `google_translate.models` subpackage it re-exports:

```python
from google_translate import (
    AsyncClient,
    AsyncGoogleTranslateClient,
    Client,
    GoogleTranslateClient,
    ServerConfig,
    ServerConfigDict,
    ServerConfigOrDict,
)
```

Everything else comes from its own subpackage:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `google_translate.models` |
| `SdkError` · `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `AuthorizationCodeCredentials` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `google_translate.core` |
| Per-operation error *unions* | `google_translate.errors` (`TranslateProjectsDetectLanguageErrorBody`, …) |

`google_translate.core` re-exports its whole public surface, so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Servers — one config object, several servers

This SDK has 3 named servers and a single environment, so the constructor takes `server_config: ServerConfigOrDict | None = None` rather than a bare `base_url`. Each server is a field on that config:

| Server field | Base URL |
| --- | --- |
| `default` | `https://translation.googleapis.com` |
| `auth_server` | `https://accounts.google.com/o/oauth2` |
| `access_token_server` | `https://oauth2.googleapis.com` |

Consequences to state on every contract sheet that touches configuration:

- Omitting `server_config` falls through to the config's own defaults rather than writing `None` over them.
- The token endpoint (`/token`) resolves against the `access_token_server` server rather than a client-wide base URL, so `server_config` is what moves token traffic.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (two schemes)

An API key sent as the `key` query parameter, exposed as the client's `api_key=` keyword taking a plain string.

```python
from google_translate import Client

client = Client(api_key="<api_key>")
```

OAuth 2.0 authorization code, exposed as the client's `oauth2=` keyword taking `AuthorizationCodeCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `/token` on the `access_token_server` server.

```python
from google_translate import Client
from google_translate.core import AuthorizationCodeCredentials

def prompt(url: str) -> str:
    return input(f"Open {url}, then paste the code: ")

client = Client(oauth2=AuthorizationCodeCredentials(client_id="…", client_secret="…", redirect_uri="…", prompt_for_authorization_code=prompt))
client = Client(oauth2={"client_id": "…", "client_secret": "…", "redirect_uri": "…", "prompt_for_authorization_code": prompt})   # equivalent
```

**Every credentials keyword is optional** — omit it and requests go out unauthenticated, with nothing failing at construction; `python-authentication` covers how to catch that, and what a *failed token fetch* raises.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `google_translate/` source directory, and these two entries:

- **`sdk-map.md`** — the index: constructor keywords, the error model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and links to the operations pages.
- **`map/operations/<controller>.md`** — one `###` block per operation: verb and route, signature, parameter roles and wire names, both return types, error arms with the status each maps from, and a **Type sources** table naming the module of every *generated* type it mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `google_translate/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, which **ships in this plugin** at `sdk/python/`, beside the source the installed package was built from, in lockstep with the code the map describes — there is nothing to clone.

Confirm the map comes from the release you installed before you read anything out of it: the copy in this plugin was generated in the same pass as these skills; if the plugin has been updated since you installed, re-run `pip install --force-reinstall --no-deps <plugin-root>/sdk/python/` so the installed package matches it. A map read from any other release describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `google_translate/models/adaptive_mt_dataset.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — an operation's signature, route, parameter roles and return types, the client's constructor keywords, the `timeout` default, the members of `ApiError` / `Success` / `Failure` / `RawError`, each operation's error union with the status each arm maps from, base-URL and auth wiring, and which module declares a type are all answered there; don't open a module for them. Open the one module the map names only for what it leaves out: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**Meaning is not on the map.** When what to pass depends on semantics — values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter selects — read the operation's docstring in `google_translate/apis/<controller>.py` (or `client.py` where operations sit on the client) and its entry in `api-reference.md` at the SDK root before writing the sheet row, and record what you found — even for a value you think you know.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

For everything the map leaves out, and the full body behind a map row, read the one module that owns the fact **inside the installed package** — locate it with the probe from *Install*. Failing that, it is under the project's environment (`.venv/Lib/site-packages/google_translate` on Windows, `.venv/lib/python3.*/site-packages/google_translate` elsewhere). **If the package is not installed, install it first** — see *Install* above; until then mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

| Question | Module |
| --- | --- |
| An operation's real signature, parameters and return type | `client.py` |
| Client construction, keywords, controller wiring | `client.py`, `async_client.py`, `base_client.py` |
| Timeout default and validation | `base_client.py` (`DEFAULT_TIMEOUT = 30.0`) |
| The request/response pipeline, 401 handling, 2xx-vs-error split | `core/raw_client.py` |
| Exception family (`SdkError` and its members; `ApiError.error`, `.status_code`, `.headers`) | `core/exceptions.py` |
| `Success`/`Failure`/`RawError` | `core/results.py` |
| Per-call overrides | `core/request_options.py` |
| Request and response hooks | `core/hooks.py` |
| Logging options, levels and masking | `core/logging.py` |
| `UNSET`, `Optional`, `OptionalNullable` | `core/optionality.py` |
| Model base config, `to_dict`/`to_json` | `core/models.py` |
| A model's members, required vs `UNSET`, wire aliases | `models/<model_name>.py` |
| Date/time wire formats — `Date`, `RFC3339DateTime`, `RFC1123DateTime`, `UnixSecondsDateTime` (`Annotated` aliases over `datetime.date` / `datetime.datetime`; not in the map's Type sources) | `core/converters/date_time.py` |
| Transport protocols (the test seam) | `core/transport.py` |
| httpx2 adapter, proxy/TLS knobs | `core/httpx2_transport.py` |
| Token fetch, credential placement | `core/auth/`, `core/auth/models.py` |
| Base-URL resolution | `server/server_config.py`, `server/server.py` |
| An operation's error mapper (status → schema) | `errors/<operation>_error.py` |

**Read scoped.** These modules carry long design docstrings; `grep -n` for the symbol and read the surrounding lines rather than whole files. Never quote a docstring's design rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, required members with wire aliases, the error union, enum values — onto the contract sheet, then implement from it; never re-open a module for a fact the sheet carries.
- Expand a model's members only where the task sets them.
- If a name here fails to type-check or import, re-read the module the table names and report the drift; never patch around it from memory.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant module; it owns the traps the signature hides. A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **python-client-initialization** before you write `Client(...)` or `AsyncClient(...)`.
2. **Authentication** — load **python-authentication** before you set credentials.
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call.
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. A model's extras for unknown fields are read through `additional_properties`, a spec property of that name becomes `additional_properties_value`, and a model whose schema says `additionalProperties: false` refuses every extra — confirm it in the model's file.
5. **Error handling** — load **python-error-handling** before you write any `try/except`.
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, retries, proxies, TLS, or logging.
7. **Testing** — load **python-testing** before you stub the SDK.

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — the client class, where it is held, and its `close()`/`aclose()`.
2. **The keyword-only boundary** for each operation: what is positional (each required parameter without a fixed value, path → query → header → body) and what sits after `*`. Every keyword-only parameter has a real default, so write no defensive `None`s.
3. **Every operation returns a payload** — no operation in this SDK returns `None`, so the `with_raw_response` peer is needed only where the status code itself matters.
4. **Required vs `UNSET`** for every model member the task sets.
5. **The `ApiError.error` union** for each operation in scope, copied from the **Error arms** bullet of its block in `map/operations/` — this SDK has **1 typed error body** across 51 operations, so never assume an arm is shared. Every union ends in `RawError`; an operation with no typed arm is `RawError` alone.
6. **That a decode failure raises `ResponseDecodeError`, not `ApiError`, in both response modes. And that the 2xx path declares no required member on any return type, so a truncated body decodes without complaint and the hole surfaces later.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **Retries are on by default** — the sheet says whether this integration keeps, tunes (`retry_options`) or disables them (`max_retries` set to `0`), and for which methods; a write is retried only when the policy names its method.
8. **Whether logging is on, and how loud** — the sheet says whether this integration raises the `google_translate` logger, which `logging_options` dumps it turns on — a JSON body is logged as sent — and any per-call `log_level`.
9. **What limits a whole call.** `timeout` limits only each wait (`python-configuration-resilience`). In async code, state the budget and the one place `asyncio.wait_for` enforces it for every call, and what the boundary returns for its `asyncio.TimeoutError`; in sync code, say there is none.
10. **Which server each call resolves against**, set through `server_config`.
11. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

