---
name: "python-getting-started"
description: "Maxio Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any Maxio Python SDK contract question or writing any SDK code."
---

# Getting started with the Maxio Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Maxio Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-maxio` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `maxio/` and `pyproject.toml` of the generated package at version `1.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Maxio |
| Distribution name (what you install) | `maxio` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `maxio` — the same string you install |
| Source repository | https://github.com/context-plugins/maxio-python-sdk |
| Source branch | `main` |
| Version | `1.0` |
| Sync client class | `MaxioClient` (alias `Client`) |
| Async client class | `AsyncMaxioClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `environment` · `timeout` (default `30.0`) · `server_config` · `retry_options` · `basic_auth`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | HTTP **Basic** — set `basic_auth` |
| Environments | 2 environments (default `"us"`) × 2 named servers, through `server_config` |
| Base-URL config | `ServerConfig` (`maxio/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx2 (>=2.13.1,<3.0.0)` · `certifi (>=2024.7.4)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 268 operations across 37 controllers · 576 models · 97 unions · 113 enums · 184 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

Into the same environment your project runs in, install the distribution from its repository, <https://github.com/context-plugins/maxio-python-sdk> — it is not published to a package index:

```bash
pip install "maxio @ git+https://github.com/context-plugins/maxio-python-sdk.git@main"
python -c "import maxio, pathlib; print(pathlib.Path(maxio.__file__).parent)"
```

**Run the second line too.** A `pip install` that reports success is not proof the SDK is importable where your project runs. If the probe raises `ModuleNotFoundError`, the install went into a different interpreter: re-run it through the one your project uses (`python -m pip install …`) and probe again. If it prints a path whose contents are not this SDK, what you installed is not this distribution.

The distribution carries its own `pyproject.toml`, so `pip` builds and installs it like any released package, copied into site-packages. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at that directory, so deleting the clone breaks every import.

Once the second line prints this SDK's directory, write the imports from the table above: the distribution name you install and the package name you import are the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from maxio import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`maxio/__init__.py` exports exactly 8 names beside the `maxio.models` subpackage it re-exports:

```python
from maxio import (
    AsyncClient,
    AsyncMaxioClient,
    Client,
    Environment,
    MaxioClient,
    ServerConfig,
    ServerConfigDict,
    ServerConfigOrDict,
)
```

Everything else comes from its own subpackage, and the split matters because each kind of type a caller reaches for lives in a different module:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `maxio.models` |
| Enums (and their open `…OrStr`/`…OrInt` aliases) | `maxio.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `BasicAuthCredentials` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `maxio.core` |
| Per-operation error *unions* | `maxio.errors` (`ActivateSubscriptionErrorBody`, …) |

`maxio.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments and servers

The API declares 2 named servers across 2 environments, so the constructor takes `environment` first, then `timeout`, then `server_config: ServerConfigOrDict | None = None`. The environment selects which set of base URLs the config resolves against:

| `environment=` | Hosting |
| --- | --- |
| `"us"` *(default)* | Default Advanced Billing environment hosted in US. Valid for the majority of our customers |
| `"eu"` | Advanced Billing environment hosted in EU. Use only when you requested EU hosting for your AB account |

Each of the 2 servers resolves independently, so a call's host is the pair (server, environment):

| Server field | `"us"` base URL | `"eu"` base URL |
| --- | --- | --- |
| `production` | `https://{site}.chargify.com` | `https://{site}.ebilling.maxio.com` |
| `ebb` | `https://events.chargify.com/{site}` | `https://events.chargify.com/{site}` |

Consequences to state on every contract sheet that touches configuration:

- Omitting `environment` gives you **`"us"`**, silently.
- `server_config` overrides individual server URLs within the selected environment.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (one scheme)

HTTP Basic authentication, exposed as the client's `basic_auth=` keyword taking `BasicAuthCredentials` **or a plain dict**.

```python
from maxio import Client
from maxio.core import BasicAuthCredentials

client = Client(basic_auth=BasicAuthCredentials(username="…", password="…"))
client = Client(basic_auth={"username": "…", "password": "…"})   # equivalent
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.api_exports` | `ApiExports` / `AsyncApiExports` | 9 | `export_invoices` · `export_proforma_invoices` · `export_subscriptions` · `list_exported_invoices` · `list_exported_proforma_invoices` · `list_exported_subscriptions` · … |
| `client.advance_invoice` | `AdvanceInvoice` / `AsyncAdvanceInvoice` | 3 | `issue_advance_invoice` · `read_advance_invoice` · `void_advance_invoice` |
| `client.billing_portal` | `BillingPortal` / `AsyncBillingPortal` | 4 | `enable_billing_portal_for_customer` · `read_billing_portal_link` · `resend_billing_portal_invitation` · `revoke_billing_portal_access` |
| `client.component_features` | `ComponentFeatures` / `AsyncComponentFeatures` | 6 | `create_component_feature` · `list_component_features` · `read_component_feature` · `remove_component_feature` · `restore_component_feature` · `update_component_feature` |
| `client.component_price_points` | `ComponentPricePoints` / `AsyncComponentPricePoints` | 12 | `archive_component_price_point` · `bulk_create_component_price_points` · `clone_component_price_point` · `create_component_price_point` · `create_currency_prices` · `list_all_component_price_points` · … |
| `client.components` | `Components` / `AsyncComponents` | 12 | `archive_component` · `create_event_based_component` · `create_metered_component` · `create_on_off_component` · `create_prepaid_usage_component` · `create_quantity_based_component` · … |
| `client.coupons` | `Coupons` / `AsyncCoupons` | 14 | `archive_coupon` · `create_coupon` · `create_coupon_subcodes` · `create_or_update_coupon_currency_prices` · `delete_coupon_subcode` · `find_coupon` · … |
| `client.custom_fields` | `CustomFields` / `AsyncCustomFields` | 9 | `create_metadata` · `create_metafields` · `delete_metadata` · `delete_metafield` · `list_metadata` · `list_metadata_for_resource_type` · … |
| `client.customers` | `Customers` / `AsyncCustomers` | 7 | `create_customer` · `delete_customer` · `list_customer_subscriptions` · `list_customers` · `read_customer` · `read_customer_by_reference` · … |
| `client.entitlements` | `Entitlements` / `AsyncEntitlements` | 1 | `read_subscription_entitlements` |
| `client.events` | `Events` / `AsyncEvents` | 3 | `list_events` · `list_subscription_events` · `read_events_count` |
| `client.events_based_billing_segments` | `EventsBasedBillingSegments` / `AsyncEventsBasedBillingSegments` | 6 | `bulk_create_segments` · `bulk_update_segments` · `create_segment` · `delete_segment` · `list_segments_for_price_point` · `update_segment` |
| `client.feature_templates` | `FeatureTemplates` / `AsyncFeatureTemplates` | 6 | `archive_feature_template` · `create_feature_template` · `list_feature_templates` · `read_feature_template` · `restore_feature_template` · `update_feature_template` |
| `client.insights` | `Insights` / `AsyncInsights` | 4 | `list_mrr_movements` · `list_mrr_per_subscription` · `read_mrr` · `read_site_stats` |
| `client.invoices` | `Invoices` / `AsyncInvoices` | 19 | `create_invoice` · `delete_invoice` · `issue_invoice` · `list_consolidated_invoice_segments` · `list_credit_notes` · `list_invoice_events` · … |
| `client.offers` | `Offers` / `AsyncOffers` | 5 | `archive_offer` · `create_offer` · `list_offers` · `read_offer` · `unarchive_offer` |
| `client.payment_profiles` | `PaymentProfiles` / `AsyncPaymentProfiles` | 12 | `change_subscription_default_payment_profile` · `change_subscription_group_default_payment_profile` · `create_payment_profile` · `delete_subscription_group_payment_profile` · `delete_subscriptions_payment_profile` · `delete_unused_payment_profile` · … |
| `client.product_families` | `ProductFamilies` / `AsyncProductFamilies` | 4 | `create_product_family` · `list_product_families` · `list_products_for_product_family` · `read_product_family` |
| `client.product_features` | `ProductFeatures` / `AsyncProductFeatures` | 6 | `create_product_feature` · `list_product_features` · `read_product_feature` · `remove_product_feature` · `restore_product_feature` · `update_product_feature` |
| `client.product_price_points` | `ProductPricePoints` / `AsyncProductPricePoints` | 11 | `archive_product_price_point` · `bulk_create_product_price_points` · `create_product_currency_prices` · `create_product_price_point` · `list_all_product_price_points` · `list_product_price_points` · … |
| `client.products` | `Products` / `AsyncProducts` | 6 | `archive_product` · `create_product` · `list_products` · `read_product` · `read_product_by_handle` · `update_product` |
| `client.proforma_invoices` | `ProformaInvoices` / `AsyncProformaInvoices` | 10 | `create_consolidated_proforma_invoice` · `create_proforma_invoice` · `create_signup_proforma_invoice` · `deliver_proforma_invoice` · `list_proforma_invoices` · `list_subscription_group_proforma_invoices` · … |
| `client.reason_codes` | `ReasonCodes` / `AsyncReasonCodes` | 5 | `create_reason_code` · `delete_reason_code` · `list_reason_codes` · `read_reason_code` · `update_reason_code` |
| `client.referral_codes` | `ReferralCodes` / `AsyncReferralCodes` | 1 | `validate_referral_code` |
| `client.sales_commissions` | `SalesCommissions` / `AsyncSalesCommissions` | 3 | `list_sales_commission_settings` · `list_sales_reps` · `read_sales_rep` |
| `client.sites` | `Sites` / `AsyncSites` | 3 | `clear_site` · `list_chargify_js_public_keys` · `read_site` |
| `client.subscription_components` | `SubscriptionComponents` / `AsyncSubscriptionComponents` | 17 | `activate_event_based_component` · `allocate_component` · `allocate_components` · `bulk_record_events` · `bulk_reset_subscription_components_price_points` · `bulk_update_subscription_components_price_points` · … |
| `client.subscription_group_invoice_account` | `SubscriptionGroupInvoiceAccount` / `AsyncSubscriptionGroupInvoiceAccount` | 4 | `create_subscription_group_prepayment` · `deduct_subscription_group_service_credit` · `issue_subscription_group_service_credit` · `list_prepayments_for_subscription_group` |
| `client.subscription_group_status` | `SubscriptionGroupStatus` / `AsyncSubscriptionGroupStatus` | 4 | `cancel_delayed_cancellation_for_group` · `cancel_subscriptions_in_group` · `initiate_delayed_cancellation_for_group` · `reactivate_subscription_group` |
| `client.subscription_groups` | `SubscriptionGroups` / `AsyncSubscriptionGroups` | 9 | `add_subscription_to_group` · `create_subscription_group` · `delete_subscription_group` · `find_subscription_group` · `list_subscription_groups` · `read_subscription_group` · … |
| `client.subscription_invoice_account` | `SubscriptionInvoiceAccount` / `AsyncSubscriptionInvoiceAccount` | 7 | `create_prepayment` · `deduct_service_credit` · `issue_service_credit` · `list_prepayments` · `list_service_credits` · `read_account_balances` · … |
| `client.subscription_notes` | `SubscriptionNotes` / `AsyncSubscriptionNotes` | 5 | `create_subscription_note` · `delete_subscription_note` · `list_subscription_notes` · `read_subscription_note` · `update_subscription_note` |
| `client.subscription_products` | `SubscriptionProducts` / `AsyncSubscriptionProducts` | 2 | `migrate_subscription_product` · `preview_subscription_product_migration` |
| `client.subscription_renewals` | `SubscriptionRenewals` / `AsyncSubscriptionRenewals` | 11 | `cancel_scheduled_renewal_configuration` · `create_scheduled_renewal_configuration` · `create_scheduled_renewal_configuration_item` · `delete_scheduled_renewal_configuration_item` · `list_scheduled_renewal_configurations` · `lock_in_scheduled_renewal_immediately` · … |
| `client.subscription_status` | `SubscriptionStatus` / `AsyncSubscriptionStatus` | 10 | `cancel_delayed_cancellation` · `cancel_dunning` · `cancel_subscription` · `initiate_delayed_cancellation` · `pause_subscription` · `preview_renewal` · … |
| `client.subscriptions` | `Subscriptions` / `AsyncSubscriptions` | 12 | `activate_subscription` · `apply_coupons_to_subscription` · `create_subscription` · `find_subscription` · `list_subscriptions` · `override_subscription` · … |
| `client.webhooks` | `Webhooks` / `AsyncWebhooks` | 6 | `create_endpoint` · `enable_webhooks` · `list_endpoints` · `list_webhooks` · `replay_webhooks` · `update_endpoint` |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `maxio/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every *generated* type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `maxio/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/maxio-python-sdk>, in lockstep with the code the map describes — clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/maxio-python-sdk
```

Confirm the map comes from the release you installed before you read anything out of it: the clone above is pinned to `main`, the branch this SDK is released from — the repository's default branch may carry a different version. A map read from any other release describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `maxio/models/ach_agreement.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `maxio/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import maxio, pathlib; print(pathlib.Path(maxio.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/maxio` on Windows, `.venv/lib/python3.*/site-packages/maxio` elsewhere). **If the package is not installed, install it first** — see *Install* above; until then mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

| Question | Module |
| --- | --- |
| An operation's real signature, parameters and return type | `apis/<controller>.py` |
| Client construction, keywords, controller wiring | `client.py`, `async_client.py`, `base_client.py` |
| Timeout default and validation | `base_client.py` (`DEFAULT_TIMEOUT = 30.0`) |
| The request/response pipeline, 401 handling, 2xx-vs-error split | `core/raw_client.py` |
| Exception shape (`ApiError.error`, `.status_code`, `.headers`) | `core/exceptions.py` |
| `Success`/`Failure`/`RawError` | `core/results.py` |
| Per-call overrides | `core/request_options.py` |
| `UNSET`, `Optional`, `OptionalNullable` | `core/optionality.py` |
| Model base config, `to_dict`/`to_json` | `core/models.py` |
| A model's members, required vs `UNSET`, wire aliases | `models/<model_name>.py` |
| An enum's members and wire values | `models/enums/` |
| Open-enum coercion | `core/converters/open_enum.py` |
| Date/time wire formats — `Date`, `RFC3339DateTime`, `RFC1123DateTime`, `UnixSecondsDateTime` (`Annotated` aliases over `datetime.date` / `datetime.datetime`; not in the map's Type sources) | `core/converters/date_time.py` |
| Transport protocols (the test seam) | `core/transport.py` |
| httpx2 adapter, proxy/TLS knobs | `core/httpx2_transport.py` |
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

1. **Client construction & lifetime** — load **python-client-initialization** before you write `Client(...)` or `AsyncClient(...)`. (*The signature won't tell you:* the constructor is keyword-only, so nothing can be passed positionally; the client owns an `httpx2` connection pool and you **must** `close()` (sync) or `await aclose()` (async) or use it as a context manager; it must be long-lived and module- or app-scoped, never rebuilt per request; the sync and async clients do not mix; and the transport-override keyword differs by client — `custom_http_client` vs `custom_async_http_client`.)
2. **Authentication** — load **python-authentication** before you set credentials. The one scheme is `basic_auth=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call. (*The signature won't tell you:* every operation splits positional path params (and sometimes the body) from a keyword-only tail after `*`; every keyword-only parameter has a **real** default, so there is no "must pass `None` explicitly" hazard; **32 operations return `None`**, so `with_raw_response` is the only way to observe their status code; and the two response modes — raising vs `ApiResult` — behave differently on failure.)
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* `Optional[T]` here is `T | UnsetType`, **not** `typing.Optional` — `None` is not a legal value for it; models are frozen pydantic instances with `…Dict` TypedDict companions; enums are **open** (`…OrStr`/`…OrInt`), so an unknown wire value passes through as a plain `str`/`int` rather than raising; wire aliases differ from Python member names; unknown response fields are **preserved**, not dropped; and serialize via `to_dict`/`to_json`.)
5. **Error handling** — load **python-error-handling** before you write any `try/except`. (*The signature won't tell you:* there is a single `ApiError` type whose `.error` is a **per-operation union**, and a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes; `httpx2` transport exceptions reach your boundary unwrapped.)
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, retries, proxies, TLS, or logging. (*The signature won't tell you:* **retrying is on by default** — `retry_options` takes a count, a `RetryOptions` or its dict, `max_retries` set to `0` turns it off, and one call overrides it through `request_options`; a `401` is never retried; `timeout` defaults to `30.0` and is a single float that maps onto `httpx2`'s timeout semantics, limiting each wait rather than the whole call; and there is no logging hook — you wrap the transport seam.)
7. **Testing** — load **python-testing** before you stub the SDK. (*The signature won't tell you:* the seam is the **transport protocol** (`HttpClient`/`AsyncHttpClient` in `core/transport.py`) passed as `custom_http_client` — not the client class; a fake transport implements `send` and `close`, the two the protocol declares, and `send` answers with the head alone; assert on the request the SDK actually built, and cover all four failure kinds, decode failures included.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — which client class, and the reminder that the two do not mix. Plus the `close()`/`aclose()` obligation and where the client is held.
2. **The keyword-only boundary** for each operation: what is positional (path params, sometimes the body) and what sits after `*`. Every keyword-only parameter has a real default, so there is no "must pass `None` explicitly" hazard — say so, so nobody writes defensive `None`s.
3. **The 32 operations that return `None`** — `component_features.remove_component_feature` · `coupons.delete_coupon_subcode` · `custom_fields.delete_metadata` · `custom_fields.delete_metafield` · `customers.delete_customer` · `events_based_billing_segments.delete_segment` · `feature_templates.archive_feature_template` · `invoices.delete_invoice` · `invoices.send_invoice` · `offers.archive_offer` · `offers.unarchive_offer` · `payment_profiles.delete_subscription_group_payment_profile` · `payment_profiles.delete_subscriptions_payment_profile` · `payment_profiles.delete_unused_payment_profile` · `payment_profiles.send_request_update_payment_email` · `product_features.remove_product_feature` · `proforma_invoices.create_consolidated_proforma_invoice` · `sites.clear_site` · `subscription_components.activate_event_based_component` · `subscription_components.bulk_record_events` · `subscription_components.deactivate_event_based_component` · `subscription_components.delete_prepaid_usage_allocation` · `subscription_components.record_event` · `subscription_components.update_prepaid_usage_allocation_expiration_date` · `subscription_group_status.cancel_delayed_cancellation_for_group` · `subscription_group_status.cancel_subscriptions_in_group` · `subscription_group_status.initiate_delayed_cancellation_for_group` · `subscription_groups.remove_subscription_from_group` · `subscription_invoice_account.deduct_service_credit` · `subscription_notes.delete_subscription_note` · `subscription_renewals.delete_scheduled_renewal_configuration_item` · `subscriptions.override_subscription`. Their raw peers are `ApiResult[None, …]`, so `with_raw_response` is the only way to observe the status code.
4. **Required vs `UNSET`** for every model member the task sets, and the fact that `Optional[T]` here is `T | UnsetType` — **not** `typing.Optional`, so `None` is not a legal value for it.
5. **The `ApiError.error` union** for each operation in scope — there are **32** typed error bodies in this SDK, so the union is never uniform. Every union is `<Typed> | RawError`:
   1. `ErrorListResponse1` — 110 operations (`advance_invoice.issue_advance_invoice` · `billing_portal.enable_billing_portal_for_customer` · `billing_portal.read_billing_portal_link` · `billing_portal.resend_billing_portal_invitation` · `component_features.create_component_feature` · `component_features.list_component_features` · `component_features.read_component_feature` · `component_features.remove_component_feature` · `component_features.restore_component_feature` · `component_features.update_component_feature` · `component_price_points.archive_component_price_point` · `component_price_points.bulk_create_component_price_points` · `component_price_points.clone_component_price_point` · `component_price_points.list_all_component_price_points` · `components.archive_component` · `components.create_event_based_component` · `components.create_metered_component` · `components.create_on_off_component` · `components.create_prepaid_usage_component` · `components.create_quantity_based_component` · `components.update_component` · `components.update_product_family_component` · `coupons.create_coupon` · `coupons.update_coupon` · `entitlements.read_subscription_entitlements` · `feature_templates.archive_feature_template` · `feature_templates.create_feature_template` · `feature_templates.list_feature_templates` · `feature_templates.read_feature_template` · `feature_templates.restore_feature_template` · `feature_templates.update_feature_template` · `invoices.delete_invoice` · `invoices.issue_invoice` · `invoices.preview_customer_information_changes` · `invoices.record_payment_for_invoice` · `invoices.record_payment_for_multiple_invoices` · `invoices.record_payment_for_subscription` · `invoices.refund_invoice` · `invoices.reopen_invoice` · `invoices.send_invoice` · `invoices.update_customer_information` · `invoices.update_invoice` · `invoices.void_invoice` · `offers.list_offers` · `payment_profiles.change_subscription_default_payment_profile` · `payment_profiles.change_subscription_group_default_payment_profile` · `payment_profiles.create_payment_profile` · `payment_profiles.delete_unused_payment_profile` · `payment_profiles.read_one_time_token` · `payment_profiles.send_request_update_payment_email` · `payment_profiles.verify_bank_account` · `product_families.create_product_family` · `product_features.create_product_feature` · `product_features.list_product_features` · `product_features.read_product_feature` · `product_features.remove_product_feature` · `product_features.restore_product_feature` · `product_features.update_product_feature` · `product_price_points.archive_product_price_point` · `product_price_points.list_all_product_price_points` · `products.archive_product` · `products.create_product` · `products.update_product` · `proforma_invoices.create_consolidated_proforma_invoice` · `proforma_invoices.create_proforma_invoice` · `proforma_invoices.deliver_proforma_invoice` · `proforma_invoices.preview_proforma_invoice` · `proforma_invoices.void_proforma_invoice` · `reason_codes.create_reason_code` · `reason_codes.list_reason_codes` · `reason_codes.update_reason_code` · `subscription_components.allocate_component` · `subscription_components.allocate_components` · `subscription_components.create_usage` · `subscription_components.list_allocations` · `subscription_group_invoice_account.create_subscription_group_prepayment` · `subscription_group_invoice_account.deduct_subscription_group_service_credit` · `subscription_group_invoice_account.issue_subscription_group_service_credit` · `subscription_group_status.cancel_delayed_cancellation_for_group` · `subscription_group_status.cancel_subscriptions_in_group` · `subscription_group_status.initiate_delayed_cancellation_for_group` · `subscription_group_status.reactivate_subscription_group` · `subscription_groups.remove_subscription_from_group` · `subscription_invoice_account.list_service_credits` · `subscription_notes.create_subscription_note` · `subscription_notes.list_subscription_notes` · `subscription_notes.update_subscription_note` · `subscription_products.migrate_subscription_product` · `subscription_products.preview_subscription_product_migration` · `subscription_renewals.cancel_scheduled_renewal_configuration` · `subscription_renewals.create_scheduled_renewal_configuration` · `subscription_renewals.create_scheduled_renewal_configuration_item` · `subscription_renewals.delete_scheduled_renewal_configuration_item` · `subscription_renewals.lock_in_scheduled_renewal_immediately` · `subscription_renewals.schedule_scheduled_renewal_lock_in` · `subscription_renewals.unpublish_scheduled_renewal_configuration` · `subscription_renewals.update_scheduled_renewal_configuration` · `subscription_renewals.update_scheduled_renewal_configuration_item` · `subscription_status.cancel_dunning` · `subscription_status.initiate_delayed_cancellation` · `subscription_status.pause_subscription` · `subscription_status.preview_renewal` · `subscription_status.reactivate_subscription` · `subscription_status.resume_subscription` · `subscription_status.retry_subscription` · `subscription_status.update_automatic_subscription_resumption` · `subscriptions.create_subscription` · `subscriptions.update_subscription` · `webhooks.create_endpoint` · `webhooks.update_endpoint`); distinguishing members `errors`
   2. `ErrorArrayMapResponse1` — 12 operations (`component_price_points.create_component_price_point` · `component_price_points.create_currency_prices` · `component_price_points.update_component_price_point` · `component_price_points.update_currency_prices` · `invoices.create_invoice` · `invoices.update_invoice` · `offers.create_offer` · `product_price_points.create_product_currency_prices` · `product_price_points.update_product_currency_prices` · `proforma_invoices.create_signup_proforma_invoice` · `proforma_invoices.preview_signup_proforma_invoice` · `subscriptions.activate_subscription`); distinguishing members *none required*
   3. `SingleErrorResponse1` — 8 operations (`api_exports.export_invoices` · `api_exports.export_proforma_invoices` · `api_exports.export_subscriptions` · `custom_fields.create_metadata` · `custom_fields.create_metafields` · `custom_fields.update_metadata` · `custom_fields.update_metafield` · `subscriptions.override_subscription`); distinguishing members `error`
   4. `Any | None` — 2 operations (`invoices.reopen_invoice` · `invoices.void_invoice`); distinguishing members *none required*
   5. `CustomerErrorResponse1` — 2 operations (`customers.create_customer` · `customers.update_customer`); distinguishing members *none required*
   6. `ErrorStringMapResponse1` — 2 operations (`coupons.create_or_update_coupon_currency_prices` · `payment_profiles.update_payment_profile`); distinguishing members *none required*
   7. `EventBasedBillingSegment1` — 2 operations (`events_based_billing_segments.bulk_create_segments` · `events_based_billing_segments.bulk_update_segments`); distinguishing members `errors`
   8. `EventBasedBillingSegmentErrors1` — 2 operations (`events_based_billing_segments.create_segment` · `events_based_billing_segments.update_segment`); distinguishing members *none required*
   9. `ProformaBadRequestErrorResponse1` — 2 operations (`proforma_invoices.create_signup_proforma_invoice` · `proforma_invoices.preview_signup_proforma_invoice`); distinguishing members *none required*
   10. `SingleStringErrorResponse1` — 2 operations (`coupons.validate_coupon` · `referral_codes.validate_referral_code`); distinguishing members *none required*
   11. `SubscriptionComponentAllocationError1` — 2 operations (`subscription_components.delete_prepaid_usage_allocation` · `subscription_components.update_prepaid_usage_allocation_expiration_date`); distinguishing members *none required*
   12. `str` — 2 operations (`product_families.list_products_for_product_family` · `subscription_invoice_account.refund_prepayment`); distinguishing members *none required*
   13. `CancelSubscriptionErrorResponse` — 1 operation (`subscription_status.cancel_subscription`); distinguishing members *none required*
   14. `ComponentAllocationError1` — 1 operation (`subscription_components.preview_allocations`); distinguishing members *none required*
   15. `ComponentPricePointError1` — 1 operation (`subscription_components.bulk_update_subscription_components_price_points`); distinguishing members *none required*
   16. `CreatePrepaymentErrorResponse` — 1 operation (`subscription_invoice_account.create_prepayment`); distinguishing members *none required*
   17. `DeductServiceCreditErrorResponse` — 1 operation (`subscription_invoice_account.deduct_service_credit`); distinguishing members *none required*
   18. `EventBasedBillingListSegmentsErrors1` — 1 operation (`events_based_billing_segments.list_segments_for_price_point`); distinguishing members *none required*
   19. `IssueServiceCreditErrorResponse` — 1 operation (`subscription_invoice_account.issue_service_credit`); distinguishing members *none required*
   20. `PrepaidConfigurationErrorResponse` — 1 operation (`subscriptions.update_prepaid_subscription_configuration`); distinguishing members *none required*
   21. `ProductPricePointErrorResponse1` — 1 operation (`product_price_points.create_product_price_point`); distinguishing members `errors`
   22. `RefundPrepaymentBaseErrorsResponse1` — 1 operation (`subscription_invoice_account.refund_prepayment`); distinguishing members *none required*
   23. `RefundPrepaymentErrorResponse` — 1 operation (`subscription_invoice_account.refund_prepayment`); distinguishing members *none required*
   24. `SubscriptionAddCouponError1` — 1 operation (`subscriptions.apply_coupons_to_subscription`); distinguishing members *none required*
   25. `SubscriptionGroupCreateErrorResponse1` — 1 operation (`subscription_groups.create_subscription_group`); distinguishing members `errors`
   26. `SubscriptionGroupSignupErrorResponse1` — 1 operation (`subscription_groups.signup_with_subscription_group`); distinguishing members `errors`
   27. `SubscriptionGroupUpdateErrorResponse1` — 1 operation (`subscription_groups.update_subscription_group_members`); distinguishing members *none required*
   28. `SubscriptionRemoveCouponErrors1` — 1 operation (`subscriptions.remove_coupon_from_subscription`); distinguishing members `subscription`
   29. `SubscriptionResponse` — 1 operation (`subscriptions.purge_subscription`); distinguishing members *none required*
   30. `SubscriptionsMrrErrorResponse1` — 1 operation (`insights.list_mrr_per_subscription`); distinguishing members `errors`
   31. `TooManyManagementLinkRequestsError1` — 1 operation (`billing_portal.read_billing_portal_link`); distinguishing members `errors`
   32. `dict[str, Any]` — 1 operation (`product_price_points.bulk_create_product_price_points`); distinguishing members *none required*
   33. *(none)* — `api_exports.list_exported_invoices` · `api_exports.list_exported_proforma_invoices` · `api_exports.list_exported_subscriptions` · `api_exports.read_invoices_export` · `api_exports.read_proforma_invoices_export` · `api_exports.read_subscriptions_export` · `advance_invoice.read_advance_invoice` · `advance_invoice.void_advance_invoice` · `billing_portal.revoke_billing_portal_access` · `component_price_points.list_component_price_points` · `component_price_points.promote_component_price_point_to_default` · `component_price_points.read_component_price_point` · `component_price_points.unarchive_component_price_point` · `components.find_component` · `components.list_components` · `components.list_components_for_product_family` · `components.read_component` · `coupons.archive_coupon` · `coupons.create_coupon_subcodes` · `coupons.delete_coupon_subcode` · `coupons.find_coupon` · `coupons.list_coupon_subcodes` · `coupons.list_coupons` · `coupons.list_coupons_for_product_family` · `coupons.read_coupon` · `coupons.read_coupon_usage` · `coupons.update_coupon_subcodes` · `custom_fields.delete_metadata` · `custom_fields.delete_metafield` · `custom_fields.list_metadata` · `custom_fields.list_metadata_for_resource_type` · `custom_fields.list_metafields` · `customers.delete_customer` · `customers.list_customer_subscriptions` · `customers.list_customers` · `customers.read_customer` · `customers.read_customer_by_reference` · `events.list_events` · `events.list_subscription_events` · `events.read_events_count` · `events_based_billing_segments.delete_segment` · `insights.list_mrr_movements` · `insights.read_mrr` · `insights.read_site_stats` · `invoices.list_consolidated_invoice_segments` · `invoices.list_credit_notes` · `invoices.list_invoice_events` · `invoices.list_invoices` · `invoices.read_credit_note` · `invoices.read_invoice` · `offers.archive_offer` · `offers.read_offer` · `offers.unarchive_offer` · `payment_profiles.delete_subscription_group_payment_profile` · `payment_profiles.delete_subscriptions_payment_profile` · `payment_profiles.list_payment_profiles` · `payment_profiles.read_payment_profile` · `product_families.list_product_families` · `product_families.read_product_family` · `product_price_points.list_product_price_points` · `product_price_points.promote_product_price_point_to_default` · `product_price_points.read_product_price_point` · `product_price_points.unarchive_product_price_point` · `product_price_points.update_product_price_point` · `products.list_products` · `products.read_product` · `products.read_product_by_handle` · `proforma_invoices.list_proforma_invoices` · `proforma_invoices.list_subscription_group_proforma_invoices` · `proforma_invoices.read_proforma_invoice` · `reason_codes.delete_reason_code` · `reason_codes.read_reason_code` · `sales_commissions.list_sales_commission_settings` · `sales_commissions.list_sales_reps` · `sales_commissions.read_sales_rep` · `sites.clear_site` · `sites.list_chargify_js_public_keys` · `sites.read_site` · `subscription_components.activate_event_based_component` · `subscription_components.bulk_record_events` · `subscription_components.bulk_reset_subscription_components_price_points` · `subscription_components.deactivate_event_based_component` · `subscription_components.list_subscription_components` · `subscription_components.list_subscription_components_for_site` · `subscription_components.list_usages` · `subscription_components.read_subscription_component` · `subscription_components.record_event` · `subscription_group_invoice_account.list_prepayments_for_subscription_group` · `subscription_groups.add_subscription_to_group` · `subscription_groups.delete_subscription_group` · `subscription_groups.find_subscription_group` · `subscription_groups.list_subscription_groups` · `subscription_groups.read_subscription_group` · `subscription_invoice_account.list_prepayments` · `subscription_invoice_account.read_account_balances` · `subscription_notes.delete_subscription_note` · `subscription_notes.read_subscription_note` · `subscription_renewals.list_scheduled_renewal_configurations` · `subscription_renewals.read_scheduled_renewal_configuration` · `subscription_status.cancel_delayed_cancellation` · `subscriptions.find_subscription` · `subscriptions.list_subscriptions` · `subscriptions.preview_subscription` · `subscriptions.read_subscription` · `webhooks.enable_webhooks` · `webhooks.list_endpoints` · `webhooks.list_webhooks` · `webhooks.replay_webhooks`: no typed arm, so `.error` is always `RawError`
   34. So `isinstance(e.error, ErrorListResponse1)` matches only 110 of 268 operations.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `execute`'s own docstring. **And that the 2xx path declares at least one required member on 110 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That retrying is on by default** — `retry_options` on the client tunes it, `max_retries` set to `0` turns it off, and `request_options` overrides it per call — so the sheet says whether this integration keeps, tunes or disables it, and for which methods, since a write is repeated only when the policy names its method.
8. **What limits a whole call.** `timeout` limits each wait, not the call, so a reply whose pieces each arrive within it is never cut off. In async code, state the budget and the one place `asyncio.wait_for` enforces it for every call, and what the boundary returns for its `asyncio.TimeoutError`; in sync code, say there is none.
9. **Which environment the `environment` keyword selects**, because omitting it is silently `"us"`.
10. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

