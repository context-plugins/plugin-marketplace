---
name: "python-getting-started"
description: "Tesla Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any Tesla Python SDK contract question or writing any SDK code."
---

# Getting started with the Tesla Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Tesla Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-tesla` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `tesla/` and `pyproject.toml` of the generated package at version `1.0.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Tesla |
| Distribution name (what you install) | `tesla` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `tesla` — note the underscores; the two names differ |
| Source repository | https://github.com/context-plugins/tesla-python-sdk |
| Source branch | `main` |
| Version | `1.0.0` |
| Sync client class | `TeslaClient` (alias `Client`) |
| Async client class | `AsyncTeslaClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `environment` · `base_url` · `timeout` (default `30.0`) · `bearer_auth` · `thirdpartytoken_authorization_code` · `thirdpartytoken_client_credentials`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **Bearer** token — set `bearer_auth` · **OAuth 2.0** authorization code — set `thirdpartytoken_authorization_code` · **OAuth 2.0** client credentials — set `thirdpartytoken_client_credentials` |
| Environments | 2 environments selected by `environment` (default `"production"`), overridable with `base_url` |
| Base-URL config | `ServerConfig` (`tesla/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 64 operations across 6 controllers · 84 models · 4 enums · 0 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

This SDK is not published to a package index, so there is no `pip install` from PyPI for it. Install it from its repository — <https://github.com/context-plugins/tesla-python-sdk> — into the same environment your project runs in:

```bash
pip install "tesla @ git+https://github.com/context-plugins/tesla-python-sdk.git@main"
```

The generated distribution carries its own `pyproject.toml`, so `pip` builds and installs it exactly like a released package. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at the clone's path, so deleting the clone breaks every import. Once installed, write the imports from the table above: the distribution name you install and the package name you import are not the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from tesla import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`tesla/__init__.py` exports exactly 6 names:

```python
from tesla import (
    AsyncClient,
    AsyncTeslaClient,
    Client,
    Environment,
    ServerConfig,
    TeslaClient,
)
```

Everything else comes from its own subpackage, and the split matters because the four places a caller reaches for are four different modules:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `tesla.models` |
| Enums (and their open `…OrStr` aliases) | `tesla.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `AuthorizationCodeCredentials` · `ClientCredentials` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `tesla.core` |
| Per-operation error *unions* | `tesla.errors` — *this SDK declares none* |

`tesla.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments

The constructor takes an `environment` keyword — a **string literal alias**, not an enum — followed by `base_url`. The declared environments and the base URL each resolves to:

| `environment=` | Base URL | Hosting |
| --- | --- | --- |
| `"production"` *(default)* | `https://fleet-api.prd.na.vn.cloud.tesla.com` | Production |
| `"environment2"` | `https://auth.tesla.com/oauth2/v3` | Production |

Consequences to state on every contract sheet that touches configuration:

- Omitting `environment` gives you **`"production"`**, silently — it is whatever the description listed first, not necessarily production.
- `base_url` overrides the environment's URL entirely when both are passed.
- The token endpoint is derived from the same base URL (`/token`), so it always follows the environment — you never configure it separately.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (three schemes)

A bearer token, exposed as the client's `bearer_auth=` keyword taking a plain string.

```python
from tesla import Client

client = Client(bearer_auth="<bearer_auth>")
```

OAuth 2.0 authorization code, exposed as the client's `thirdpartytoken_authorization_code=` keyword taking `AuthorizationCodeCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `<base_url>/token`.

```python
from tesla import Client
from tesla.core import AuthorizationCodeCredentials

client = Client(thirdpartytoken_authorization_code=AuthorizationCodeCredentials(client_id="…", client_secret="…", redirect_uri="…"))
client = Client(thirdpartytoken_authorization_code={"client_id": "…", "client_secret": "…", "redirect_uri": "…"})   # equivalent
```

OAuth 2.0 client credentials, exposed as the client's `thirdpartytoken_client_credentials=` keyword taking `ClientCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `<base_url>/token`.

```python
from tesla import Client
from tesla.core import ClientCredentials

client = Client(thirdpartytoken_client_credentials=ClientCredentials(client_id="…", client_secret="…"))
client = Client(thirdpartytoken_client_credentials={"client_id": "…", "client_secret": "…"})   # equivalent
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.charging` | `Charging` / `AsyncCharging` | 3 | `get_charging_history` · `get_charging_invoice` · `get_charging_sessions` |
| `client.energy` | `Energy` / `AsyncEnergy` | 11 | `adjust_site_s_backup_reserve` · `adjust_site_s_off_grid_vehicle_charging_reserve` · `allow_disallow_charging_from_the_grid_and_exporting_energy_to_the_grid` · `get_backup_or_energy_history` · `get_live_site_status` · `get_site_information_assets_settings_features` · … |
| `client.partner` | `Partner` / `AsyncPartner` | 4 | `get_public_key_for_a_domain` · `get_recent_fleet_telemetry_errors` · `get_vins_with_fleet_telemetry_errors` · `register_a_partner_account` |
| `client.user` | `User` / `AsyncUser` | 4 | `get_active_orders_for_a_user` · `get_custom_feature_flags_for_a_user` · `get_summary_of_a_user_s_account` · `get_user_s_region_and_fleet_api_base_url` |
| `client.vehicle_commands` | `VehicleCommands` / `AsyncVehicleCommands` | 21 | `actuatetrunk` · `addchargeschedule` · `addpreconditionschedule` · `adjustmediavolume` · `cancelsoftwareupdate` · `chargemaxrange` · … |
| `client.vehicles` | `Vehicles` / `AsyncVehicles` | 21 | `configure_fleet_telemetry_using_signed_jws_token` · `create_or_update_fleet_telemetry_configuration` · `delete_fleet_telemetry_configuration` · `get_allowed_drivers_for_a_vehicle` · `get_eligible_vehicle_subscriptions` · `get_eligible_vehicle_upgrades` · … |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `tesla/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `tesla/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/tesla-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/tesla-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `tesla/models/actuate_trunk_request.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `tesla/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import tesla, pathlib; print(pathlib.Path(tesla.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/tesla` on Windows, `.venv/lib/python3.*/site-packages/tesla` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

| Question | Module |
| --- | --- |
| An operation's real signature, parameters and return type | `apis/<controller>.py` |
| Client construction, keywords, controller wiring | `client.py`, `async_client.py`, `base_client.py` |
| Timeout default and validation | `base_client.py` (`DEFAULT_TIMEOUT = 30.0`) |
| The request/response pipeline, 401 handling, 2xx-vs-error split | `core/raw_client.py` |
| Exception shape (`ApiError.error`, `.response`, `.status_code`) | `core/exceptions.py` |
| `Success`/`Failure`/`RawError` | `core/results.py` |
| Per-call overrides | `core/request_options.py` |
| `UNSET`, `Optional`, `OptionalNullable` | `core/optionality.py` |
| Model base config, `to_dict`/`to_json` | `core/models.py` |
| A model's members, required vs `UNSET`, wire aliases | `models/<model_name>.py` |
| An enum's members and wire values | `models/enums/` |
| Open-enum coercion | `core/converters/open_enum.py` |
| Date/time wire formats — `Date`, `RFC3339DateTime`, `RFC1123DateTime`, `UnixSecondsDateTime` (`Annotated` aliases over `datetime.date` / `datetime.datetime`; not in the map's Type sources) | `core/converters/date_time.py` |
| Transport protocols (the test seam) | `core/transport.py` |
| httpx adapter, proxy/TLS knobs | `core/httpx_transport.py` |
| Token fetch, credential placement | `core/auth/`, `core/auth/models.py` |
| Base-URL resolution | `server/server_config.py`, `server/server.py` |
| An operation's error mapper (status → schema) | `errors/<operation>_error.py` |

**Read scoped.** These modules carry long design docstrings; `grep -n` for the symbol and read the surrounding lines rather than whole files. Never quote a docstring's design rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, required members with wire aliases, the error union, enum values — into a short **contract sheet** in your plan or working notes, then implement from the sheet. Don't re-open a module per member, and never re-look-up a fact the sheet already carries.
- Recurse into a model's members only where the task actually sets them — a full transitive expansion is hundreds of rows and nobody needs it.
- Trust the interpreter over this page: if a name here ever fails to type-check or import, re-read the module the table above names and report the drift; never patch around it from memory.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant module. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **python-client-initialization** before you write `Client(...)` or `AsyncClient(...)`. (*The signature won't tell you:* the constructor is keyword-only, so nothing can be passed positionally; the client owns an `httpx` connection pool and you **must** `close()` (sync) or `await aclose()` (async) or use it as a context manager; it must be long-lived and module- or app-scoped, never rebuilt per request; the sync and async clients do not mix; and the transport-override keyword differs by client — `custom_http_client` vs `custom_async_http_client`.)
2. **Authentication** — load **python-authentication** before you set credentials. The three schemes are `bearer_auth=`, `thirdpartytoken_authorization_code=` and `thirdpartytoken_client_credentials=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; the token is fetched lazily and cached by the client; and a **failed token fetch** raises something other than what a caller expects and **bypasses the non-raising response mode** entirely. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call. (*The signature won't tell you:* every operation splits positional path params (and sometimes the body) from a keyword-only tail after `*`; every keyword-only parameter has a **real** default, so there is no "must pass `None` explicitly" hazard; **2 operations return `None`**, so `with_raw_response` is the only way to observe their status code; and the two response modes — raising vs `ApiResult` — behave differently on failure.)
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* `Optional[T]` here is `T | UnsetType`, **not** `typing.Optional` — `None` is not a legal value for it; models are frozen pydantic instances with `…Dict` TypedDict companions; enums are **open** (`…OrStr`), so an unknown wire value passes through as a plain `str` rather than raising; wire aliases differ from Python member names; unknown response fields are **preserved**, not dropped; and serialize via `to_dict`/`to_json`.)
5. **Error handling** — load **python-error-handling** before you write any `try/except`. (*The signature won't tell you:* there is a single `ApiError` type whose `.error` is a **per-operation union**, and a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes; `httpx` transport exceptions reach your boundary unwrapped.)
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — retry/backoff is entirely yours to build or deliberately omit; `timeout` defaults to `30.0` and is a single float that maps onto `httpx`'s timeout semantics rather than bounding the whole call; and there is no logging hook — you wrap the transport seam.)
7. **Testing** — load **python-testing** before you stub the SDK. (*The signature won't tell you:* the seam is the **transport protocol** (`HttpClient`/`AsyncHttpClient` in `core/transport.py`) passed as `custom_http_client`, or `respx` at the `httpx` layer — not the client class; assert on the request the SDK actually built, and cover all four failure kinds, decode failures included.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — which client class, and the reminder that the two do not mix. Plus the `close()`/`aclose()` obligation and where the client is held.
2. **The keyword-only boundary** for each operation: what is positional (path params, sometimes the body) and what sits after `*`. Every keyword-only parameter has a real default, so there is no "must pass `None` explicitly" hazard — say so, so nobody writes defensive `None`s.
3. **The 2 operations that return `None`** — `charging.get_charging_invoice` · `vehicles.set_enterprise_payer_roles`. Their raw peers are `ApiResult[None, …]`, so `with_raw_response` is the only way to observe the status code.
4. **Required vs `UNSET`** for every model member the task sets, and the fact that `Optional[T]` here is `T | UnsetType` — **not** `typing.Optional`, so `None` is not a legal value for it.
5. **The `ApiError.error` union** for each operation in scope — no operation in this SDK documents a typed error body, so `.error` is always `RawError`.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares no required member on any return type, so a truncated body decodes without complaint and the hole surfaces later.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which environment the `environment` keyword selects**, because omitting it is silently `"production"` of the 2 declared.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

