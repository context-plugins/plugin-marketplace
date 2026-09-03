---
name: "python-getting-started"
description: "CoinGecko Demo API Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any CoinGecko Demo API Python SDK contract question or writing any SDK code."
---

# Getting started with the CoinGecko Demo API Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing CoinGecko Demo API Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-coin-gecko` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `coin_gecko_demo_api/` and `pyproject.toml` of the generated package at version `3.0.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | CoinGecko Demo API |
| Distribution name (what you install) | `coin-gecko-demo-api` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `coin_gecko_demo_api` — not the string you install |
| Source repository | https://github.com/context-plugins/coingecko-python-sdk |
| Source branch | `main` |
| Version | `3.0.0` |
| Sync client class | `CoinGeckoDemoApiClient` (alias `Client`) |
| Async client class | `AsyncCoinGeckoDemoApiClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `base_url` · `timeout` (default `30.0`) · `header_auth` · `query_auth`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **API key** in the `x-cg-demo-api-key` header — set `header_auth` · **API key** in the `x_cg_demo_api_key` query parameter — set `query_auth` |
| Environments | **no environment enum** — one `base_url` string, defaulting to `https://api.coingecko.com/api/v3` |
| Base-URL config | `ServerConfig` (`coin_gecko_demo_api/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 61 operations across 11 controllers · 192 models · 3 unions · 28 enums · 0 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

This SDK is not published to a package index, so there is no `pip install` from PyPI for it. Install it from its repository — <https://github.com/context-plugins/coingecko-python-sdk> — into the same environment your project runs in:

```bash
pip install "coin-gecko-demo-api @ git+https://github.com/context-plugins/coingecko-python-sdk.git@main"
```

The generated distribution carries its own `pyproject.toml`, so `pip` builds and installs it exactly like a released package. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at the clone's path, so deleting the clone breaks every import. Once installed, write the imports from the table above: the distribution name you install and the package name you import are not the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from coin_gecko_demo_api import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`coin_gecko_demo_api/__init__.py` exports exactly 5 names beside the `coin_gecko_demo_api.models` subpackage it re-exports:

```python
from coin_gecko_demo_api import (
    AsyncClient,
    AsyncCoinGeckoDemoApiClient,
    Client,
    CoinGeckoDemoApiClient,
    ServerConfig,
)
```

Everything else comes from its own subpackage, and the split matters because each kind of type a caller reaches for lives in a different module:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `coin_gecko_demo_api.models` |
| Enums (and their open `…OrStr` aliases) | `coin_gecko_demo_api.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `coin_gecko_demo_api.core` |
| Per-operation error *unions* | `coin_gecko_demo_api.errors` — *this SDK declares none* |

`coin_gecko_demo_api.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments — there is no environment enum

This SDK has **no environment type and no environment constants**. There is one knob: `base_url`, on `ServerConfig` (`coin_gecko_demo_api/server/server_config.py`), and its default is **`https://api.coingecko.com/api/v3`**:

```python
base_url: str = "https://api.coingecko.com/api/v3"
```

Consequences to state on every contract sheet that touches configuration:

- Omitting `base_url` gives you **`https://api.coingecko.com/api/v3`**, silently. A caller who believes they configured a different host and did not gets that host's behaviour with live credentials.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (two schemes)

An API key sent as the `x-cg-demo-api-key` header, exposed as the client's `header_auth=` keyword taking a plain string.

```python
from coin_gecko_demo_api import Client

client = Client(header_auth="<header_auth>")
```

An API key sent as the `x_cg_demo_api_key` query parameter, exposed as the client's `query_auth=` keyword taking a plain string.

```python
from coin_gecko_demo_api import Client

client = Client(query_auth="<query_auth>")
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.coins` | `Coins` / `AsyncCoins` | 13 | `coins_categories` · `coins_categories_list` · `coins_contract_address` · `coins_id` · `coins_id_history` · `coins_id_market_chart` · … |
| `client.derivatives` | `Derivatives` / `AsyncDerivatives` | 4 | `derivatives_exchanges` · `derivatives_exchanges_id` · `derivatives_exchanges_list` · `derivatives_tickers` |
| `client.entities` | `Entities` / `AsyncEntities` | 2 | `companies_public_treasury` · `entities_list` |
| `client.exchanges` | `Exchanges` / `AsyncExchanges` | 6 | `exchange_rates` · `exchanges` · `exchanges_id` · `exchanges_id_tickers` · `exchanges_id_volume_chart` · `exchanges_list` |
| `client.global_api` | `GlobalApi` / `AsyncGlobalApi` | 2 | `crypto_global` · `global_defi` |
| `client.misc` | `Misc` / `AsyncMisc` | 3 | `asset_platforms_list` · `ping_server` · `token_lists` |
| `client.nfts` | `Nfts` / `AsyncNfts` | 3 | `nfts_contract_address` · `nfts_id` · `nfts_list` |
| `client.onchain` | `Onchain` / `AsyncOnchain` | 20 | `dexes_list` · `latest_pools_list` · `latest_pools_network` · `networks_list` · `onchain_simple_price` · `pool_address` · … |
| `client.public_treasury_api` | `PublicTreasuryApi` / `AsyncPublicTreasuryApi` | 3 | `public_treasury_entity` · `public_treasury_entity_chart` · `public_treasury_transaction_history` |
| `client.search_api` | `SearchApi` / `AsyncSearchApi` | 2 | `search_data` · `trending_search` |
| `client.simple` | `Simple` / `AsyncSimple` | 3 | `simple_price` · `simple_supported_currencies` · `simple_token_price` |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `coin_gecko_demo_api/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `coin_gecko_demo_api/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/coingecko-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/coingecko-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `coin_gecko_demo_api/models/asset_platform.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `coin_gecko_demo_api/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import coin_gecko_demo_api, pathlib; print(pathlib.Path(coin_gecko_demo_api.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/coin_gecko_demo_api` on Windows, `.venv/lib/python3.*/site-packages/coin_gecko_demo_api` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

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

**Read scoped.** These modules carry long design docstrings; `grep -n` for the symbol and read the surrounding lines rather than whole files. Never quote a docstring's design rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, required members with wire aliases, the error union, enum values — into a short **contract sheet** in your plan or working notes, then implement from the sheet. Don't re-open a module per member, and never re-look-up a fact the sheet already carries.
- Recurse into a model's members only where the task actually sets them — a full transitive expansion is hundreds of rows and nobody needs it.
- Trust the interpreter over this page: if a name here ever fails to type-check or import, re-read the module the table above names and report the drift; never patch around it from memory.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant module. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **python-client-initialization** before you write `Client(...)` or `AsyncClient(...)`. (*The signature won't tell you:* the constructor is keyword-only, so nothing can be passed positionally; the client owns an `httpx` connection pool and you **must** `close()` (sync) or `await aclose()` (async) or use it as a context manager; it must be long-lived and module- or app-scoped, never rebuilt per request; the sync and async clients do not mix; and the transport-override keyword differs by client — `custom_http_client` vs `custom_async_http_client`.)
2. **Authentication** — load **python-authentication** before you set credentials. The two schemes are `header_auth=` and `query_auth=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call. (*The signature won't tell you:* every operation splits positional path params (and sometimes the body) from a keyword-only tail after `*`; every keyword-only parameter has a **real** default, so there is no "must pass `None` explicitly" hazard; and the two response modes — raising vs `ApiResult` — behave differently on failure.)
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* `Optional[T]` here is `T | UnsetType`, **not** `typing.Optional` — `None` is not a legal value for it; models are frozen pydantic instances with `…Dict` TypedDict companions; enums are **open** (`…OrStr`), so an unknown wire value passes through as a plain `str` rather than raising; wire aliases differ from Python member names; unknown response fields are **preserved**, not dropped; and serialize via `to_dict`/`to_json`.)
5. **Error handling** — load **python-error-handling** before you write any `try/except`. (*The signature won't tell you:* there is a single `ApiError` type whose `.error` is a **per-operation union**, and a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes; `httpx` transport exceptions reach your boundary unwrapped.)
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — retry/backoff is entirely yours to build or deliberately omit; `timeout` defaults to `30.0` and is a single float that maps onto `httpx`'s timeout semantics rather than bounding the whole call; and there is no logging hook — you wrap the transport seam.)
7. **Testing** — load **python-testing** before you stub the SDK. (*The signature won't tell you:* the seam is the **transport protocol** (`HttpClient`/`AsyncHttpClient` in `core/transport.py`) passed as `custom_http_client`, or `respx` at the `httpx` layer — not the client class; assert on the request the SDK actually built, and cover all four failure kinds, decode failures included.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — which client class, and the reminder that the two do not mix. Plus the `close()`/`aclose()` obligation and where the client is held.
2. **The keyword-only boundary** for each operation: what is positional (path params, sometimes the body) and what sits after `*`. Every keyword-only parameter has a real default, so there is no "must pass `None` explicitly" hazard — say so, so nobody writes defensive `None`s.
3. **Every operation returns a payload** — no operation in this SDK returns `None`, so the `with_raw_response` peer is needed only where the status code itself matters.
4. **Required vs `UNSET`** for every model member the task sets, and the fact that `Optional[T]` here is `T | UnsetType` — **not** `typing.Optional`, so `None` is not a legal value for it.
5. **The `ApiError.error` union** for each operation in scope — no operation in this SDK documents a typed error body, so `.error` is always `RawError`.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares at least one required member on 55 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which host the `base_url` selects**, because omitting it is silently the default.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

