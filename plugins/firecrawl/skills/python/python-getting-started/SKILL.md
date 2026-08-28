---
name: "python-getting-started"
description: "Firecrawl Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any Firecrawl Python SDK contract question or writing any SDK code."
---

# Getting started with the Firecrawl Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Firecrawl Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-firecrawl` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `firecrawl/` and `pyproject.toml` of the generated package at version `v2`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Firecrawl |
| Distribution name (what you install) | `firecrawl` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `firecrawl` — note the underscores; the two names differ |
| Source repository | https://github.com/context-plugins/firecrawl-python-sdk |
| Source branch | `main` |
| Version | `v2` |
| Sync client class | `FirecrawlClient` (alias `Client`) |
| Async client class | `AsyncFirecrawlClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `base_url` · `timeout` (default `30.0`) · `bearer_auth`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **Bearer** token — set `bearer_auth` |
| Environments | **no environment enum** — one `base_url` string, defaulting to `https://api.firecrawl.dev/v2` |
| Base-URL config | `ServerConfig` (`firecrawl/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 52 operations across 16 controllers · 319 models · 85 enums · 44 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

This SDK is not published to a package index, so there is no `pip install` from PyPI for it. Install it from its repository — <https://github.com/context-plugins/firecrawl-python-sdk> — into the same environment your project runs in:

```bash
pip install "firecrawl @ git+https://github.com/context-plugins/firecrawl-python-sdk.git@main"
```

The generated distribution carries its own `pyproject.toml`, so `pip` builds and installs it exactly like a released package. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at the clone's path, so deleting the clone breaks every import. Once installed, write the imports from the table above: the distribution name you install and the package name you import are not the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from firecrawl import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`firecrawl/__init__.py` exports exactly 5 names:

```python
from firecrawl import (
    AsyncClient,
    AsyncFirecrawlClient,
    Client,
    FirecrawlClient,
    ServerConfig,
)
```

Everything else comes from its own subpackage, and the split matters because the four places a caller reaches for are four different modules:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `firecrawl.models` |
| Enums (and their open `…OrStr` aliases) | `firecrawl.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `firecrawl.core` |
| Per-operation error *unions* | `firecrawl.errors` (`AskSupportAgentErrorBody`, …) |

`firecrawl.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments — there is no environment enum

This SDK has **no environment type and no environment constants**. There is one knob: `base_url`, on `ServerConfig` (`firecrawl/server/server_config.py`), and its default is **`https://api.firecrawl.dev/v2`**:

```python
base_url: str = "https://api.firecrawl.dev/v2"
```

Consequences to state on every contract sheet that touches configuration:

- Omitting `base_url` gives you **`https://api.firecrawl.dev/v2`**, silently. A caller who believes they configured a different host and did not gets that host's behaviour with live credentials.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (one scheme)

A bearer token, exposed as the client's `bearer_auth=` keyword taking a plain string.

```python
from firecrawl import Client

client = Client(bearer_auth="<bearer_auth>")
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.account` | `Account` / `AsyncAccount` | 1 | `get_activity` |
| `client.agent` | `Agent` / `AsyncAgent` | 3 | `cancel_agent` · `get_agent_status` · `start_agent` |
| `client.billing` | `Billing` / `AsyncBilling` | 4 | `get_credit_usage` · `get_historical_credit_usage` · `get_historical_token_usage` · `get_token_usage` |
| `client.crawling` | `Crawling` / `AsyncCrawling` | 6 | `cancel_crawl` · `crawl_params_preview` · `crawl_urls` · `get_active_crawls` · `get_crawl_errors` · `get_crawl_status` |
| `client.developer` | `Developer` / `AsyncDeveloper` | 2 | `developer_search` · `developer_search_post` |
| `client.extraction` | `Extraction` / `AsyncExtraction` | 2 | `extract_data` · `get_extract_status` |
| `client.feedback` | `Feedback` / `AsyncFeedback` | 2 | `submit_endpoint_feedback` · `submit_search_feedback` |
| `client.interact` | `Interact` / `AsyncInteract` | 4 | `create_browser_session` · `delete_browser_session` · `execute_browser_code` · `list_browser_sessions` |
| `client.mapping_api` | `MappingApi` / `AsyncMappingApi` | 1 | `map_urls` |
| `client.miscellaneous` | `Miscellaneous` / `AsyncMiscellaneous` | 1 | `get_queue_status` |
| `client.monitoring` | `Monitoring` / `AsyncMonitoring` | 8 | `create_monitor` · `delete_monitor` · `get_monitor` · `get_monitor_check` · `list_monitor_checks` · `list_monitors` · … |
| `client.research_api` | `ResearchApi` / `AsyncResearchApi` | 3 | `research_get_paper` · `research_related_papers` · `research_search_papers` |
| `client.scraping` | `Scraping` / `AsyncScraping` | 9 | `cancel_batch_scrape` · `get_batch_scrape_errors` · `get_batch_scrape_status` · `get_scrape_status` · `interact_with_scrape_browser_session` · `parse_file` · … |
| `client.search` | `Search` / `AsyncSearch` | 2 | `search_and_scrape` · `submit_search_feedback` |
| `client.support` | `Support` / `AsyncSupport` | 2 | `ask_support_agent` · `search_support_docs` |
| `client.threat_protection` | `ThreatProtection` / `AsyncThreatProtection` | 2 | `get_threat_protection` · `update_threat_protection` |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `firecrawl/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `firecrawl/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/firecrawl-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/firecrawl-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `firecrawl/models/actions.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `firecrawl/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import firecrawl, pathlib; print(pathlib.Path(firecrawl.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/firecrawl` on Windows, `.venv/lib/python3.*/site-packages/firecrawl` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

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
2. **Authentication** — load **python-authentication** before you set credentials. The one scheme is `bearer_auth=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; Load secrets from the environment or a secret store, never hardcode.)
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
5. **The `ApiError.error` union** for each operation in scope — there are **57** typed error bodies in this SDK, so the union is never uniform. Every union is `<Typed> | RawError`:
   1. `BatchScrape500Error1` — 3 operations (`scraping.cancel_batch_scrape` · `scraping.get_batch_scrape_status` · `scraping.scrape_and_extract_from_urls`); distinguishing members *none required*
   2. `Crawl500Error1` — 3 operations (`crawling.cancel_crawl` · `crawling.crawl_urls` · `crawling.get_crawl_status`); distinguishing members *none required*
   3. `FeedbackErrorResponse` — 3 operations (`feedback.submit_endpoint_feedback` · `feedback.submit_search_feedback` · `search.submit_search_feedback`); distinguishing members `feedback_error_code`
   4. `Interact402Error1` — 3 operations (`interact.create_browser_session` · `interact.delete_browser_session` · `interact.list_browser_sessions`); distinguishing members *none required*
   5. `BatchScrape402Error1` — 2 operations (`scraping.get_batch_scrape_status` · `scraping.scrape_and_extract_from_urls`); distinguishing members *none required*
   6. `BatchScrape429Error1` — 2 operations (`scraping.get_batch_scrape_status` · `scraping.scrape_and_extract_from_urls`); distinguishing members *none required*
   7. `Crawl402Error1` — 2 operations (`crawling.crawl_urls` · `crawling.get_crawl_status`); distinguishing members *none required*
   8. `Crawl429Error1` — 2 operations (`crawling.crawl_urls` · `crawling.get_crawl_status`); distinguishing members *none required*
   9. `ScrapeInteract403Error1` — 2 operations (`scraping.interact_with_scrape_browser_session` · `scraping.stop_interactive_scrape_browser_session`); distinguishing members *none required*
   10. `ScrapeInteract404Error1` — 2 operations (`scraping.interact_with_scrape_browser_session` · `scraping.stop_interactive_scrape_browser_session`); distinguishing members *none required*
   11. `SupportProxyErrorResponse` — 2 operations (`support.ask_support_agent` · `support.search_support_docs`); distinguishing members *none required*
   12. `Agent402Error1` — 1 operation (`agent.start_agent`); distinguishing members *none required*
   13. `Agent429Error1` — 1 operation (`agent.start_agent`); distinguishing members *none required*
   14. `BatchScrape404Error1` — 1 operation (`scraping.cancel_batch_scrape`); distinguishing members *none required*
   15. `BatchScrapeErrors402Error1` — 1 operation (`scraping.get_batch_scrape_errors`); distinguishing members *none required*
   16. `BatchScrapeErrors429Error1` — 1 operation (`scraping.get_batch_scrape_errors`); distinguishing members *none required*
   17. `BatchScrapeErrors500Error1` — 1 operation (`scraping.get_batch_scrape_errors`); distinguishing members *none required*
   18. `Crawl404Error1` — 1 operation (`crawling.cancel_crawl`); distinguishing members *none required*
   19. `CrawlActive402Error1` — 1 operation (`crawling.get_active_crawls`); distinguishing members *none required*
   20. `CrawlActive429Error1` — 1 operation (`crawling.get_active_crawls`); distinguishing members *none required*
   21. `CrawlActive500Error1` — 1 operation (`crawling.get_active_crawls`); distinguishing members *none required*
   22. `CrawlErrors402Error1` — 1 operation (`crawling.get_crawl_errors`); distinguishing members *none required*
   23. `CrawlErrors429Error1` — 1 operation (`crawling.get_crawl_errors`); distinguishing members *none required*
   24. `CrawlErrors500Error1` — 1 operation (`crawling.get_crawl_errors`); distinguishing members *none required*
   25. `CrawlParamsPreview400Error1` — 1 operation (`crawling.crawl_params_preview`); distinguishing members *none required*
   26. `CrawlParamsPreview401Error1` — 1 operation (`crawling.crawl_params_preview`); distinguishing members *none required*
   27. `CrawlParamsPreview500Error1` — 1 operation (`crawling.crawl_params_preview`); distinguishing members *none required*
   28. `Extract400Error1` — 1 operation (`extraction.extract_data`); distinguishing members *none required*
   29. `Extract500Error1` — 1 operation (`extraction.extract_data`); distinguishing members *none required*
   30. `InteractExecute402Error1` — 1 operation (`interact.execute_browser_code`); distinguishing members *none required*
   31. `Map402Error1` — 1 operation (`mapping_api.map_urls`); distinguishing members *none required*
   32. `Map429Error1` — 1 operation (`mapping_api.map_urls`); distinguishing members *none required*
   33. `Map500Error1` — 1 operation (`mapping_api.map_urls`); distinguishing members *none required*
   34. `Parse400Error1` — 1 operation (`scraping.parse_file`); distinguishing members *none required*
   35. `Parse402Error1` — 1 operation (`scraping.parse_file`); distinguishing members *none required*
   36. `Parse429Error1` — 1 operation (`scraping.parse_file`); distinguishing members *none required*
   37. `Parse500Error1` — 1 operation (`scraping.parse_file`); distinguishing members *none required*
   38. `Scrape402Error1` — 1 operation (`scraping.scrape_and_extract_from_url`); distinguishing members *none required*
   39. `Scrape402Error21` — 1 operation (`scraping.get_scrape_status`); distinguishing members *none required*
   40. `Scrape429Error1` — 1 operation (`scraping.scrape_and_extract_from_url`); distinguishing members *none required*
   41. `Scrape429Error21` — 1 operation (`scraping.get_scrape_status`); distinguishing members *none required*
   42. `Scrape500Error1` — 1 operation (`scraping.scrape_and_extract_from_url`); distinguishing members *none required*
   43. `Scrape500Error21` — 1 operation (`scraping.get_scrape_status`); distinguishing members *none required*
   44. `ScrapeInteract400Error1` — 1 operation (`scraping.interact_with_scrape_browser_session`); distinguishing members *none required*
   45. `ScrapeInteract402Error1` — 1 operation (`scraping.interact_with_scrape_browser_session`); distinguishing members *none required*
   46. `ScrapeInteract409Error1` — 1 operation (`scraping.interact_with_scrape_browser_session`); distinguishing members *none required*
   47. `ScrapeInteract410Error1` — 1 operation (`scraping.interact_with_scrape_browser_session`); distinguishing members *none required*
   48. `ScrapeInteract429Error1` — 1 operation (`scraping.interact_with_scrape_browser_session`); distinguishing members *none required*
   49. `ScrapeInteract502Error1` — 1 operation (`scraping.interact_with_scrape_browser_session`); distinguishing members *none required*
   50. `Search408Error1` — 1 operation (`search.search_and_scrape`); distinguishing members *none required*
   51. `Search500Error1` — 1 operation (`search.search_and_scrape`); distinguishing members *none required*
   52. `TeamCreditUsage404Error1` — 1 operation (`billing.get_credit_usage`); distinguishing members *none required*
   53. `TeamCreditUsage500Error1` — 1 operation (`billing.get_credit_usage`); distinguishing members *none required*
   54. `TeamCreditUsageHistorical500Error1` — 1 operation (`billing.get_historical_credit_usage`); distinguishing members *none required*
   55. `TeamTokenUsage404Error1` — 1 operation (`billing.get_token_usage`); distinguishing members *none required*
   56. `TeamTokenUsage500Error1` — 1 operation (`billing.get_token_usage`); distinguishing members *none required*
   57. `TeamTokenUsageHistorical500Error1` — 1 operation (`billing.get_historical_token_usage`); distinguishing members *none required*
   58. *(none)* — `account.get_activity` · `agent.cancel_agent` · `agent.get_agent_status` · `developer.developer_search` · `developer.developer_search_post` · `extraction.get_extract_status` · `miscellaneous.get_queue_status` · `monitoring.create_monitor` · `monitoring.delete_monitor` · `monitoring.get_monitor` · `monitoring.get_monitor_check` · `monitoring.list_monitor_checks` · `monitoring.list_monitors` · `monitoring.run_monitor` · `monitoring.update_monitor` · `research_api.research_get_paper` · `research_api.research_related_papers` · `research_api.research_search_papers` · `threat_protection.get_threat_protection` · `threat_protection.update_threat_protection`: no typed arm, so `.error` is always `RawError`
   59. So `isinstance(e.error, BatchScrape500Error1)` matches only 3 of 52 operations.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares at least one required member on 20 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which host the `base_url` selects**, because omitting it is silently the default.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

