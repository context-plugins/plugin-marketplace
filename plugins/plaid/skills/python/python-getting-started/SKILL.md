---
name: "python-getting-started"
description: "The Plaid API Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any The Plaid API Python SDK contract question or writing any SDK code."
---

# Getting started with the The Plaid API Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing The Plaid API Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-the-plaid-api` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `the_plaid_api/` and `pyproject.toml` of the generated package at version `0.1.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | The Plaid API |
| Distribution name (what you install) | `the-plaid-api` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `the_plaid_api` — not the string you install |
| Source repository | https://github.com/context-plugins/plaid-python-sdk |
| Source branch | `main` |
| Version | `0.1.0` |
| Sync client class | `ThePlaidApiClient` (alias `Client`) |
| Async client class | `AsyncThePlaidApiClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `environment` · `timeout` (default `30.0`) · `server_config` · `client_id` · `secret` · `plaid_version` · `oauth2` · `oauth2_token_source`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **API key** in the `PLAID-CLIENT-ID` header — set `client_id` · **API key** in the `PLAID-SECRET` header — set `secret` · **API key** in the `Plaid-Version` header — set `plaid_version` · **OAuth 2.0** client credentials — set `oauth2` |
| Environments | 2 environments (default `"production"`) × 2 named servers, through `server_config` |
| Base-URL config | `ServerConfig` (`the_plaid_api/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 335 operations, all directly on the client — no controller groups; the map's single page is `map/operations/client.md` · 1750 models · 0 unions · 354 enums · 1 per-operation error union |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

This SDK is not published to a package index, so there is no `pip install` from PyPI for it. Install it from its repository — <https://github.com/context-plugins/plaid-python-sdk> — into the same environment your project runs in:

```bash
pip install "the-plaid-api @ git+https://github.com/context-plugins/plaid-python-sdk.git@main"
```

The generated distribution carries its own `pyproject.toml`, so `pip` builds and installs it exactly like a released package. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at the clone's path, so deleting the clone breaks every import. Once installed, write the imports from the table above: the distribution name you install and the package name you import are not the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from the_plaid_api import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`the_plaid_api/__init__.py` exports exactly 8 names beside the `the_plaid_api.models` subpackage it re-exports:

```python
from the_plaid_api import (
    AsyncClient,
    AsyncThePlaidApiClient,
    Client,
    Environment,
    ServerConfig,
    ServerConfigDict,
    ServerConfigOrDict,
    ThePlaidApiClient,
)
```

Everything else comes from its own subpackage, and the split matters because each kind of type a caller reaches for lives in a different module:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `the_plaid_api.models` |
| Enums (and their open `…OrStr` aliases) | `the_plaid_api.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `ClientCredentials` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `the_plaid_api.core` |
| Per-operation error *unions* | `the_plaid_api.errors` (`SandboxTransactionsCreateErrorBody`, …) |

`the_plaid_api.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments and servers

The API declares 2 named servers across 2 environments, so the constructor takes `environment` first, then `timeout`, then `server_config: ServerConfigOrDict | None = None`. The environment selects which set of base URLs the config resolves against:

| `environment=` | Hosting |
| --- | --- |
| `"production"` *(default)* | Production |
| `"environment2"` | Sandbox |

Each of the 2 servers resolves independently, so a call's host is the pair (server, environment):

| Server field | `"production"` base URL | `"environment2"` base URL |
| --- | --- | --- |
| `default` | `https://production.plaid.com` | `https://sandbox.plaid.com` |
| `access_token_server` | `https://api.plaid.com/oauth2/apiv2` | `https://api.plaid.com/oauth2/apiv2` |

Consequences to state on every contract sheet that touches configuration:

- Omitting `environment` gives you **`"production"`**, silently.
- `server_config` overrides individual server URLs within the selected environment.
- The token endpoint (`/token`) resolves against the `access_token_server` server rather than a client-wide base URL, so `server_config` is what moves token traffic, and it follows `environment` with that server.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (four schemes)

An API key sent as the `PLAID-CLIENT-ID` header, exposed as the client's `client_id=` keyword taking a plain string.

```python
from the_plaid_api import Client

client = Client(client_id="<client_id>")
```

An API key sent as the `PLAID-SECRET` header, exposed as the client's `secret=` keyword taking a plain string.

```python
from the_plaid_api import Client

client = Client(secret="<secret>")
```

An API key sent as the `Plaid-Version` header, exposed as the client's `plaid_version=` keyword taking a plain string.

```python
from the_plaid_api import Client

client = Client(plaid_version="<plaid_version>")
```

OAuth 2.0 client credentials, exposed as the client's `oauth2=` keyword taking `ClientCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `/token` on the `access_token_server` server.

```python
from the_plaid_api import Client
from the_plaid_api.core import ClientCredentials

client = Client(oauth2=ClientCredentials(client_id="…", client_secret="…"))
client = Client(oauth2={"client_id": "…", "client_secret": "…"})   # equivalent
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `the_plaid_api/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `the_plaid_api/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/plaid-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/plaid-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `the_plaid_api/models/aamvaanalysis.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `the_plaid_api/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import the_plaid_api, pathlib; print(pathlib.Path(the_plaid_api.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/the_plaid_api` on Windows, `.venv/lib/python3.*/site-packages/the_plaid_api` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

| Question | Module |
| --- | --- |
| An operation's real signature, parameters and return type | `client.py` |
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
2. **Authentication** — load **python-authentication** before you set credentials. The four schemes are `client_id=`, `secret=`, `plaid_version=` and `oauth2=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; the token is fetched lazily and cached by the client; and a **failed token fetch** raises something other than what a caller expects and **bypasses the non-raising response mode** entirely. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call. (*The signature won't tell you:* every operation splits positional path params (and sometimes the body) from a keyword-only tail after `*`; every keyword-only parameter has a **real** default, so there is no "must pass `None` explicitly" hazard; **11 operations return `None`**, so `with_raw_response` is the only way to observe their status code; and the two response modes — raising vs `ApiResult` — behave differently on failure.)
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* `Optional[T]` here is `T | UnsetType`, **not** `typing.Optional` — `None` is not a legal value for it; models are frozen pydantic instances with `…Dict` TypedDict companions; enums are **open** (`…OrStr`), so an unknown wire value passes through as a plain `str` rather than raising; wire aliases differ from Python member names; unknown response fields are **preserved**, not dropped; and serialize via `to_dict`/`to_json`.)
5. **Error handling** — load **python-error-handling** before you write any `try/except`. (*The signature won't tell you:* there is a single `ApiError` type whose `.error` is a **per-operation union**, and a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes; `httpx` transport exceptions reach your boundary unwrapped.)
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — retry/backoff is entirely yours to build or deliberately omit; `timeout` defaults to `30.0` and is a single float that maps onto `httpx`'s timeout semantics rather than bounding the whole call; and there is no logging hook — you wrap the transport seam.)
7. **Testing** — load **python-testing** before you stub the SDK. (*The signature won't tell you:* the seam is the **transport protocol** (`HttpClient`/`AsyncHttpClient` in `core/transport.py`) passed as `custom_http_client`, or `respx` at the `httpx` layer — not the client class; assert on the request the SDK actually built, and cover all four failure kinds, decode failures included.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — which client class, and the reminder that the two do not mix. Plus the `close()`/`aclose()` obligation and where the client is held.
2. **The keyword-only boundary** for each operation: what is positional (path params, sometimes the body) and what sits after `*`. Every keyword-only parameter has a real default, so there is no "must pass `None` explicitly" hazard — say so, so nobody writes defensive `None`s.
3. **The 11 operations that return `None`** — `asset_report_audit_copy_pdf_get` · `asset_report_pdf_get` · `consumer_report_pdf_get` · `cra_check_report_pdf_get` · `cra_check_report_verification_pdf_get` · `credit_bank_income_pdf_get` · `credit_relay_pdf_get` · `fdx_consents_revoke` · `fdx_notifications` · `income_verification_documents_download` · `statements_download`. Their raw peers are `ApiResult[None, …]`, so `with_raw_response` is the only way to observe the status code.
4. **Required vs `UNSET`** for every model member the task sets, and the fact that `Optional[T]` here is `T | UnsetType` — **not** `typing.Optional`, so `None` is not a legal value for it.
5. **The `ApiError.error` union** for each operation in scope — there is **one** typed error body in this SDK, so the union is never uniform. Every union is `<Typed> | RawError`:
   1. `Error | None` — 1 operation (`sandbox_transactions_create`); distinguishing members *none required*
   2. *(none)* — `accounts_balance_get` · `accounts_get` · `application_get` · `asset_report_audit_copy_create` · `asset_report_audit_copy_get` · `asset_report_audit_copy_pdf_get` · `asset_report_audit_copy_remove` · `asset_report_create` · `asset_report_filter` · `asset_report_get` · `asset_report_pdf_get` · `asset_report_refresh` · `asset_report_remove` · `auth_get` · `auth_verify` · `bank_transfer_balance_get` · `bank_transfer_cancel` · `bank_transfer_create` · `bank_transfer_event_list` · `bank_transfer_event_sync` · `bank_transfer_get` · `bank_transfer_list` · `bank_transfer_migrate_account` · `bank_transfer_sweep_get` · `bank_transfer_sweep_list` · `beacon_account_risk_evaluate` · `beacon_duplicate_get` · `beacon_report_create` · `beacon_report_get` · `beacon_report_list` · `beacon_report_syndication_get` · `beacon_report_syndication_list` · `beacon_user_account_insights_get` · `beacon_user_create` · `beacon_user_get` · `beacon_user_history_list` · `beacon_user_review` · `beacon_user_update` · `beta_ewa_report_v1_get` · `beta_partner_customer_v1_create` · `beta_partner_customer_v1_enable` · `beta_partner_customer_v1_get` · `beta_partner_customer_v1_update` · `business_verification_create` · `business_verification_get` · `cashflow_report_get` · `cashflow_report_insights_get` · `cashflow_report_refresh` · `cashflow_report_transactions_get` · `categories_get` · `consent_events_get` · `consumer_report_pdf_get` · `cra_check_report_base_report_get` · `cra_check_report_cashflow_insights_get` · `cra_check_report_create` · `cra_check_report_income_insights_get` · `cra_check_report_lend_score_get` · `cra_check_report_network_insights_get` · `cra_check_report_partner_insights_get` · `cra_check_report_pdf_get` · `cra_check_report_verification_get` · `cra_check_report_verification_pdf_get` · `cra_credit_profile_report_get` · `cra_loans_applications_register` · `cra_loans_register` · `cra_loans_unregister` · `cra_loans_update` · `cra_monitoring_insights_get` · `cra_monitoring_insights_subscribe` · `cra_monitoring_insights_unsubscribe` · `cra_partner_insights_get` · `cra_report_get` · `create_payment_token` · `credit_asset_report_freddie_mac_get` · `credit_audit_copy_token_create` · `credit_audit_copy_token_update` · `credit_bank_employment_get` · `credit_bank_income_get` · `credit_bank_income_pdf_get` · `credit_bank_income_refresh` · `credit_bank_income_webhook_update` · `credit_bank_statements_uploads_get` · `credit_employment_get` · `credit_freddie_mac_reports_get` · `credit_payroll_income_get` · `credit_payroll_income_parsing_config_update` · `credit_payroll_income_precheck` · `credit_payroll_income_refresh` · `credit_payroll_income_risk_signals_get` · `credit_relay_create` · `credit_relay_get` · `credit_relay_pdf_get` · `credit_relay_refresh` · `credit_relay_remove` · `credit_report_audit_copy_remove` · `credit_sessions_get` · `dashboard_user_get` · `dashboard_user_list` · `employers_search` · `employment_verification_get` · `fdx_consents_get` · `fdx_consents_list` · `fdx_consents_revocation_get` · `fdx_consents_revoke` · `fdx_notifications` · `get_recipient` · `get_recipients` · `identity_documents_uploads_get` · `identity_get` · `identity_match` · `identity_refresh` · `identity_verification_autofill_create` · `identity_verification_create` · `identity_verification_get` · `identity_verification_list` · `identity_verification_retry` · `income_verification_create` · `income_verification_documents_download` · `income_verification_paystubs_get` · `income_verification_precheck` · `income_verification_taxforms_get` · `institutions_get` · `institutions_get_by_id` · `institutions_search` · `investments_auth_get` · `investments_holdings_get` · `investments_refresh` · `investments_transactions_get` · `issues_get` · `issues_search` · `issues_subscribe` · `item_access_token_invalidate` · `item_activity_list` · `item_application_list` · `item_application_scopes_update` · `item_application_unlink` · `item_create_public_token` · `item_get` · `item_import` · `item_products_terminate` · `item_public_token_exchange` · `item_remove` · `item_webhook_update` · `liabilities_get` · `link_delivery_create` · `link_delivery_get` · `link_oauth_correlation_id_exchange` · `link_token_create` · `link_token_get` · `network_status_get` · `oauth_introspect` · `oauth_revoke` · `oauth_token` · `partner_customer_create` · `partner_customer_enable` · `partner_customer_get` · `partner_customer_oauth_institutions_get` · `partner_customer_remove` · `payment_initiation_consent_create` · `payment_initiation_consent_get` · `payment_initiation_consent_payment_execute` · `payment_initiation_consent_revoke` · `payment_initiation_payment_create` · `payment_initiation_payment_get` · `payment_initiation_payment_list` · `payment_initiation_payment_reverse` · `payment_initiation_recipient_create` · `payment_initiation_recipient_get` · `payment_initiation_recipient_list` · `payment_profile_create` · `payment_profile_get` · `payment_profile_remove` · `processor_account_get` · `processor_apex_processor_token_create` · `processor_auth_get` · `processor_balance_get` · `processor_bank_transfer_create` · `processor_identity_get` · `processor_identity_match` · `processor_investments_auth_get` · `processor_investments_holdings_get` · `processor_investments_transactions_get` · `processor_liabilities_get` · `processor_signal_decision_report` · `processor_signal_evaluate` · `processor_signal_prepare` · `processor_signal_return_report` · `processor_stripe_bank_account_token_create` · `processor_token_create` · `processor_token_permissions_get` · `processor_token_permissions_set` · `processor_token_webhook_update` · `processor_transactions_get` · `processor_transactions_recurring_get` · `processor_transactions_refresh` · `processor_transactions_sync` · `profile_network_status_get` · `protect_compute` · `protect_event_get` · `protect_event_send` · `protect_report_create` · `protect_user_insights_get` · `sandbox_bank_income_fire_webhook` · `sandbox_bank_transfer_fire_webhook` · `sandbox_bank_transfer_simulate` · `sandbox_cra_cashflow_updates_update` · `sandbox_fdx_consent_seed` · `sandbox_income_fire_webhook` · `sandbox_item_application_seed` · `sandbox_item_fire_webhook` · `sandbox_item_reset_login` · `sandbox_item_set_verification_status` · `sandbox_oauth_select_accounts` · `sandbox_payment_profile_reset_login` · `sandbox_payment_simulate` · `sandbox_processor_token_create` · `sandbox_public_token_create` · `sandbox_transfer_fire_webhook` · `sandbox_transfer_ledger_deposit_simulate` · `sandbox_transfer_ledger_simulate_available` · `sandbox_transfer_ledger_withdraw_simulate` · `sandbox_transfer_refund_simulate` · `sandbox_transfer_repayment_simulate` · `sandbox_transfer_simulate` · `sandbox_transfer_sweep_simulate` · `sandbox_transfer_test_clock_advance` · `sandbox_transfer_test_clock_create` · `sandbox_transfer_test_clock_get` · `sandbox_transfer_test_clock_list` · `sandbox_user_reset_login` · `session_token_create` · `signal_decision_report` · `signal_evaluate` · `signal_prepare` · `signal_return_report` · `signal_schedule` · `statements_download` · `statements_list` · `statements_refresh` · `transactions_enhance` · `transactions_enrich` · `transactions_get` · `transactions_recurring_get` · `transactions_refresh` · `transactions_rules_create` · `transactions_rules_list` · `transactions_rules_remove` · `transactions_sync` · `transactions_user_insights_get` · `transfer_authorization_cancel` · `transfer_authorization_create` · `transfer_balance_get` · `transfer_cancel` · `transfer_capabilities_get` · `transfer_configuration_get` · `transfer_create` · `transfer_diligence_document_upload` · `transfer_diligence_submit` · `transfer_event_list` · `transfer_event_sync` · `transfer_get` · `transfer_intent_create` · `transfer_intent_get` · `transfer_ledger_deposit` · `transfer_ledger_distribute` · `transfer_ledger_event_list` · `transfer_ledger_get` · `transfer_ledger_withdraw` · `transfer_list` · `transfer_metrics_get` · `transfer_migrate_account` · `transfer_originator_create` · `transfer_originator_funding_account_create` · `transfer_originator_funding_account_update` · `transfer_originator_get` · `transfer_originator_list` · `transfer_platform_originator_create` · `transfer_platform_person_create` · `transfer_platform_requirement_submit` · `transfer_questionnaire_create` · `transfer_recurring_cancel` · `transfer_recurring_create` · `transfer_recurring_get` · `transfer_recurring_list` · `transfer_refund_cancel` · `transfer_refund_create` · `transfer_refund_get` · `transfer_repayment_list` · `transfer_repayment_return_list` · `transfer_return_recover` · `transfer_sweep_get` · `transfer_sweep_list` · `user_account_session_event_send` · `user_account_session_get` · `user_create` · `user_financial_data_refresh` · `user_get` · `user_identity_remove` · `user_items_associate` · `user_items_get` · `user_items_remove` · `user_products_terminate` · `user_remove` · `user_third_party_token_create` · `user_third_party_token_remove` · `user_transactions_refresh` · `user_update` · `wallet_create` · `wallet_get` · `wallet_list` · `wallet_transaction_execute` · `wallet_transaction_get` · `wallet_transaction_list` · `watchlist_screening_entity_create` · `watchlist_screening_entity_get` · `watchlist_screening_entity_history_list` · `watchlist_screening_entity_hit_list` · `watchlist_screening_entity_list` · `watchlist_screening_entity_program_get` · `watchlist_screening_entity_program_list` · `watchlist_screening_entity_review_create` · `watchlist_screening_entity_review_list` · `watchlist_screening_entity_update` · `watchlist_screening_individual_create` · `watchlist_screening_individual_get` · `watchlist_screening_individual_history_list` · `watchlist_screening_individual_hit_list` · `watchlist_screening_individual_list` · `watchlist_screening_individual_program_get` · `watchlist_screening_individual_program_list` · `watchlist_screening_individual_review_create` · `watchlist_screening_individual_review_list` · `watchlist_screening_individual_update` · `webhook_verification_key_get`: no typed arm, so `.error` is always `RawError`
   3. So `isinstance(e.error, Error | None)` matches only 1 of 335 operations.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares at least one required member on 307 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which environment the `environment` keyword selects**, because omitting it is silently `"production"`.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

