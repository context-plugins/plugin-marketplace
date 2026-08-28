---
name: "python-getting-started"
description: "Binance Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any Binance Python SDK contract question or writing any SDK code."
---

# Getting started with the Binance Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Binance Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-binance` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `binance/` and `pyproject.toml` of the generated package at version `1.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Binance |
| Distribution name (what you install) | `binance` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `binance` — note the underscores; the two names differ |
| Source repository | https://github.com/context-plugins/binance-python-sdk |
| Source branch | `main` |
| Version | `1.0` |
| Sync client class | `BinanceClient` (alias `Client`) |
| Async client class | `AsyncBinanceClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `environment` · `base_url` · `timeout` (default `30.0`) · `api_key_auth`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **API key** in the `X-MBX-APIKEY` header — set `api_key_auth` |
| Environments | 2 environments selected by `environment` (default `"production"`), overridable with `base_url` |
| Base-URL config | `ServerConfig` (`binance/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 340 operations across 29 controllers · 537 models · 62 enums · 333 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

This SDK is not published to a package index, so there is no `pip install` from PyPI for it. Install it from its repository — <https://github.com/context-plugins/binance-python-sdk> — into the same environment your project runs in:

```bash
pip install "binance @ git+https://github.com/context-plugins/binance-python-sdk.git@main"
```

The generated distribution carries its own `pyproject.toml`, so `pip` builds and installs it exactly like a released package. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at the clone's path, so deleting the clone breaks every import. Once installed, write the imports from the table above: the distribution name you install and the package name you import are not the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from binance import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`binance/__init__.py` exports exactly 6 names:

```python
from binance import (
    AsyncBinanceClient,
    AsyncClient,
    BinanceClient,
    Client,
    Environment,
    ServerConfig,
)
```

Everything else comes from its own subpackage, and the split matters because the four places a caller reaches for are four different modules:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `binance.models` |
| Enums (and their open `…OrStr` aliases) | `binance.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `binance.core` |
| Per-operation error *unions* | `binance.errors` (`HrTickerPriceChangeStatistics24ErrorBody`, …) |

`binance.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments

The constructor takes an `environment` keyword — a **string literal alias**, not an enum — followed by `base_url`. The declared environments and the base URL each resolves to:

| `environment=` | Base URL | Hosting |
| --- | --- | --- |
| `"production"` *(default)* | `https://api.binance.com` | — |
| `"environment2"` | `https://testnet.binance.vision` | — |

Consequences to state on every contract sheet that touches configuration:

- Omitting `environment` gives you **`"production"`**, silently — it is whatever the description listed first, not necessarily production.
- `base_url` overrides the environment's URL entirely when both are passed.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (one scheme)

An API key sent as the `X-MBX-APIKEY` header, exposed as the client's `api_key_auth=` keyword taking a plain string.

```python
from binance import Client

client = Client(api_key_auth="<api_key_auth>")
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.auto_invest` | `AutoInvest` / `AsyncAutoInvest` | 17 | `change_plan_status` · `get_list_of_plans` · `get_target_asset_roi_data_user_data` · `get_target_asset_list_user_data` · `index_linked_plan_rebalance_details_user_data` · `index_linked_plan_redemption_trade` · … |
| `client.blvt` | `Blvt` / `AsyncBlvt` | 6 | `blvt_info_market_data` · `blvt_user_limit_info_user_data` · `query_subscription_record_user_data` · `redeem_blvt_user_data` · `redemption_record_user_data` · `subscribe_blvt_user_data` |
| `client.c2_c` | `C2C` / `AsyncC2C` | 1 | `get_c2_c_trade_history_user_data` |
| `client.convert` | `Convert` / `AsyncConvert` | 9 | `accept_quote_trade` · `cancel_limit_order_user_data` · `get_convert_trade_history_user_data` · `list_all_convert_pairs` · `order_status_user_data` · `place_limit_order_user_data` · … |
| `client.copy_trading` | `CopyTrading` / `AsyncCopyTrading` | 2 | `get_futures_lead_trader_status_trade` · `get_futures_lead_trading_symbol_whitelist_user_data` |
| `client.crypto_loans` | `CryptoLoans` / `AsyncCryptoLoans` | 21 | `adjust_ltv_flexible_loan_adjust_ltv_trade` · `adjust_ltv_get_flexible_loan_ltv_adjustment_history_user_data` · `borrow_flexible_loan_borrow_trade` · `borrow_get_flexible_loan_borrow_history_user_data` · `borrow_get_flexible_loan_ongoing_orders_user_data` · `check_collateral_repay_rate_user_data` · … |
| `client.dual_investment` | `DualInvestment` / `AsyncDualInvestment` | 5 | `change_auto_compound_status_user_data` · `check_dual_investment_accounts_user_data` · `get_dual_investment_positions_user_data` · `get_dual_investment_product_list_user_data` · `subscribe_dual_investment_products_user_data` |
| `client.fiat` | `Fiat` / `AsyncFiat` | 2 | `fiat_deposit_withdraw_history_user_data` · `fiat_payments_history_user_data` |
| `client.futures` | `Futures` / `AsyncFutures` | 3 | `get_future_account_transaction_history_list_user_data` · `get_future_tick_level_orderbook_historical_data_download_link_user_data` · `new_future_account_transfer_user_data` |
| `client.futures_algo` | `FuturesAlgo` / `AsyncFuturesAlgo` | 6 | `cancel_algo_order_trade` · `query_current_algo_open_orders_user_data` · `query_historical_algo_orders_user_data` · `query_sub_orders_user_data` · `time_weighted_average_price_twap_new_order_trade` · `volume_participation_vp_new_order_trade` |
| `client.gift_card` | `GiftCard` / `AsyncGiftCard` | 6 | `buy_a_binance_code_trade` · `create_a_binance_code_user_data` · `fetch_rsa_public_key_user_data` · `fetch_token_limit_user_data` · `redeem_a_binance_code_user_data` · `verify_a_binance_code_user_data` |
| `client.isolated_margin_stream` | `IsolatedMarginStream` / `AsyncIsolatedMarginStream` | 3 | `close_a_listen_key_user_stream_3` · `generate_a_listen_key_user_stream` · `ping_keep_alive_a_listen_key_user_stream` |
| `client.margin` | `Margin` / `AsyncMargin` | 48 | `adjust_cross_margin_max_leverage_user_data` · `cross_margin_collateral_ratio_market_data` · `disable_isolated_margin_account_trade` · `enable_isolated_margin_account_trade` · `get_all_cross_margin_pairs_market_data` · `get_all_isolated_margin_symbol_user_data` · … |
| `client.margin_stream` | `MarginStream` / `AsyncMarginStream` | 3 | `close_a_listen_key_user_stream_2` · `create_a_listen_key_user_stream_2` · `ping_keep_alive_a_listen_key_user_stream_2` |
| `client.market` | `Market` / `AsyncMarket` | 15 | `hr_ticker_price_change_statistics24` · `check_server_time` · `compressed_aggregate_trades_list` · `current_average_price` · `exchange_information` · `kline_candlestick_data` · … |
| `client.mining` | `Mining` / `AsyncMining` | 13 | `account_list_user_data` · `acquiring_algorithm_market_data` · `acquiring_coin_name_market_data` · `cancel_hashrate_resale_configuration_user_data` · `earnings_list_user_data` · `extra_bonus_list_user_data` · … |
| `client.nft` | `Nft` / `AsyncNft` | 4 | `get_nft_asset_user_data` · `get_nft_deposit_history_user_data` · `get_nft_transaction_history_user_data` · `get_nft_withdraw_history_user_data` |
| `client.pay` | `Pay` / `AsyncPay` | 1 | `get_pay_trade_history_user_data` |
| `client.portfolio_margin` | `PortfolioMargin` / `AsyncPortfolioMargin` | 14 | `bnb_transfer_user_data` · `change_auto_repay_futures_status_user_data` · `fund_auto_collection_user_data` · `fund_collection_by_asset_user_data` · `get_auto_repay_futures_status_user_data` · `get_portfolio_margin_asset_leverage_user_data` · … |
| `client.rebate` | `Rebate` / `AsyncRebate` | 1 | `get_spot_rebate_history_records_user_data` |
| `client.savings` | `Savings` / `AsyncSavings` | 4 | `change_fixed_activity_position_to_daily_position_user_data` · `get_fixed_activity_project_list_user_data` · `get_fixed_activity_project_position_user_data` · `purchase_fixed_activity_project_user_data` |
| `client.simple_earn` | `SimpleEarn` / `AsyncSimpleEarn` | 24 | `get_collateral_record_user_data` · `get_flexible_personal_left_quota_user_data` · `get_flexible_product_position_user_data` · `get_flexible_redemption_record_user_data` · `get_flexible_rewards_history_user_data` · `get_flexible_subscription_preview_user_data` · … |
| `client.spot_algo` | `SpotAlgo` / `AsyncSpotAlgo` | 5 | `cancel_algo_order` · `query_current_algo_open_orders` · `query_historical_algo_orders` · `query_sub_orders` · `time_weighted_average_price_twap_new_order` |
| `client.staking` | `Staking` / `AsyncStaking` | 12 | `eth_staking_account_v2_user_data` · `get_beth_rewards_distribution_history_user_data` · `get_eth_redemption_history_user_data` · `get_eth_staking_history_user_data` · `get_wbeth_rate_history_user_data` · `get_wbeth_rewards_history_user_data` · … |
| `client.stream` | `Stream` / `AsyncStream` | 3 | `close_a_listen_key_user_stream` · `create_a_listen_key_user_stream` · `ping_keep_alive_a_listen_key_user_stream` |
| `client.sub_account_api` | `SubAccountApi` / `AsyncSubAccountApi` | 45 | `create_a_virtual_sub_account_for_master_account` · `delete_ip_list_for_a_sub_account_api_key_for_master_account` · `deposit_assets_into_the_managed_sub_account_for_investor_master_account` · `detail_on_sub_account_s_futures_account_for_master_account` · `detail_on_sub_account_s_futures_account_v2_for_master_account` · `detail_on_sub_account_s_margin_account_for_master_account` · … |
| `client.trade_api` | `TradeApi` / `AsyncTradeApi` | 23 | `account_information_user_data` · `account_trade_list_user_data` · `all_orders_user_data` · `cancel_oco_trade` · `cancel_order_trade` · `cancel_all_open_orders_on_a_symbol_trade` · … |
| `client.vip_loans` | `VipLoans` / `AsyncVipLoans` | 10 | `check_locked_value_of_vip_collateral_account_user_data` · `get_borrow_interest_rate_user_data` · `get_collateral_asset_data_user_data` · `get_loanable_assets_data` · `get_vip_loan_ongoing_orders_user_data` · `get_vip_loan_repayment_history_user_data` · … |
| `client.wallet` | `Wallet` / `AsyncWallet` | 34 | `account_api_trading_status_user_data` · `account_status_user_data` · `account_info_user_data` · `all_coins_information_user_data` · `asset_detail_user_data` · `asset_dividend_record_user_data` · … |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `binance/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `binance/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/binance-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/binance-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `binance/models/account_profit.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `binance/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import binance, pathlib; print(pathlib.Path(binance.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/binance` on Windows, `.venv/lib/python3.*/site-packages/binance` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

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
2. **Authentication** — load **python-authentication** before you set credentials. The one scheme is `api_key_auth=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; Load secrets from the environment or a secret store, never hardcode.)
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
5. **The `ApiError.error` union** for each operation in scope — there is **one** typed error body in this SDK, so the union is never uniform. Every union is `<Typed> | RawError`:
   1. `Error` — 333 operations (`auto_invest.change_plan_status` · `auto_invest.get_list_of_plans` · `auto_invest.get_target_asset_roi_data_user_data` · `auto_invest.get_target_asset_list_user_data` · `auto_invest.index_linked_plan_rebalance_details_user_data` · `auto_invest.index_linked_plan_redemption_trade` · `auto_invest.index_linked_plan_redemption_history_user_data` · `auto_invest.investment_plan_adjustment` · `auto_invest.investment_plan_creation_user_data` · `auto_invest.one_time_transaction_trade` · `auto_invest.query_index_details_user_data` · `auto_invest.query_index_linked_plan_position_details_user_data` · `auto_invest.query_one_time_transaction_status_user_data` · `auto_invest.query_all_source_asset_and_target_asset_user_data` · `auto_invest.query_holding_details_of_the_plan` · `auto_invest.query_source_asset_list_user_data` · `auto_invest.query_subscription_transaction_history` · `blvt.blvt_info_market_data` · `blvt.blvt_user_limit_info_user_data` · `blvt.query_subscription_record_user_data` · `blvt.redeem_blvt_user_data` · `blvt.redemption_record_user_data` · `blvt.subscribe_blvt_user_data` · `c2_c.get_c2_c_trade_history_user_data` · `convert.accept_quote_trade` · `convert.cancel_limit_order_user_data` · `convert.get_convert_trade_history_user_data` · `convert.list_all_convert_pairs` · `convert.order_status_user_data` · `convert.place_limit_order_user_data` · `convert.query_limit_open_orders_user_data` · `convert.query_order_quantity_precision_per_asset_user_data` · `convert.send_quote_request_user_data` · `copy_trading.get_futures_lead_trader_status_trade` · `copy_trading.get_futures_lead_trading_symbol_whitelist_user_data` · `crypto_loans.adjust_ltv_flexible_loan_adjust_ltv_trade` · `crypto_loans.adjust_ltv_get_flexible_loan_ltv_adjustment_history_user_data` · `crypto_loans.borrow_flexible_loan_borrow_trade` · `crypto_loans.borrow_get_flexible_loan_borrow_history_user_data` · `crypto_loans.borrow_get_flexible_loan_ongoing_orders_user_data` · `crypto_loans.check_collateral_repay_rate_user_data` · `crypto_loans.crypto_loan_adjust_ltv_trade` · `crypto_loans.crypto_loan_borrow_trade` · `crypto_loans.crypto_loan_customize_margin_call_trade` · `crypto_loans.crypto_loan_repay_trade` · `crypto_loans.get_collateral_assets_data_user_data` · `crypto_loans.get_crypto_loans_borrow_history_user_data` · `crypto_loans.get_crypto_loans_income_history_user_data` · `crypto_loans.get_flexible_loan_assets_data_user_data` · `crypto_loans.get_flexible_loan_collateral_assets_data_user_data` · `crypto_loans.get_loan_ltv_adjustment_history_user_data` · `crypto_loans.get_loan_ongoing_orders_user_data` · `crypto_loans.get_loan_repayment_history_user_data` · `crypto_loans.get_loanable_assets_data_user_data` · `crypto_loans.repay_flexible_loan_repay_trade` · `crypto_loans.repay_get_flexible_loan_repayment_history_user_data` · `dual_investment.change_auto_compound_status_user_data` · `dual_investment.check_dual_investment_accounts_user_data` · `dual_investment.get_dual_investment_positions_user_data` · `dual_investment.get_dual_investment_product_list_user_data` · `dual_investment.subscribe_dual_investment_products_user_data` · `fiat.fiat_deposit_withdraw_history_user_data` · `fiat.fiat_payments_history_user_data` · `futures.get_future_account_transaction_history_list_user_data` · `futures.get_future_tick_level_orderbook_historical_data_download_link_user_data` · `futures.new_future_account_transfer_user_data` · `futures_algo.cancel_algo_order_trade` · `futures_algo.query_current_algo_open_orders_user_data` · `futures_algo.query_historical_algo_orders_user_data` · `futures_algo.query_sub_orders_user_data` · `futures_algo.time_weighted_average_price_twap_new_order_trade` · `futures_algo.volume_participation_vp_new_order_trade` · `gift_card.buy_a_binance_code_trade` · `gift_card.create_a_binance_code_user_data` · `gift_card.fetch_rsa_public_key_user_data` · `gift_card.fetch_token_limit_user_data` · `gift_card.redeem_a_binance_code_user_data` · `gift_card.verify_a_binance_code_user_data` · `isolated_margin_stream.close_a_listen_key_user_stream_3` · `isolated_margin_stream.ping_keep_alive_a_listen_key_user_stream` · `margin.adjust_cross_margin_max_leverage_user_data` · `margin.cross_margin_collateral_ratio_market_data` · `margin.disable_isolated_margin_account_trade` · `margin.enable_isolated_margin_account_trade` · `margin.get_all_cross_margin_pairs_market_data` · `margin.get_all_isolated_margin_symbol_user_data` · `margin.get_all_margin_assets_market_data` · `margin.get_bnb_burn_status_user_data` · `margin.get_cross_margin_transfer_history_user_data` · `margin.get_force_liquidation_record_user_data` · `margin.get_interest_history_user_data` · `margin.get_small_liability_exchange_coin_list_user_data` · `margin.get_small_liability_exchange_history_user_data` · `margin.get_summary_of_margin_account_user_data` · `margin.get_a_future_hourly_interest_rate_user_data` · `margin.get_cross_or_isolated_margin_capital_flow_user_data` · `margin.get_tokens_or_symbols_delist_schedule_for_cross_margin_and_isolated_margin_market_data` · `margin.margin_account_cancel_oco_trade` · `margin.margin_account_cancel_order_trade` · `margin.margin_account_cancel_all_open_orders_on_a_symbol_trade` · `margin.margin_account_new_oco_trade` · `margin.margin_account_new_oto_trade` · `margin.margin_account_new_otoco_trade` · `margin.margin_account_new_order_trade` · `margin.margin_interest_rate_history_user_data` · `margin.margin_account_borrow_repay_margin` · `margin.margin_manual_liquidation_margin` · `margin.query_cross_margin_account_details_user_data` · `margin.query_cross_margin_fee_data_user_data` · `margin.query_current_margin_order_count_usage_trade` · `margin.query_enabled_isolated_margin_account_limit_user_data` · `margin.query_isolated_margin_account_info_user_data` · `margin.query_isolated_margin_fee_data_user_data` · `margin.query_isolated_margin_tier_data_user_data` · `margin.query_liability_coin_leverage_bracket_in_cross_margin_pro_mode_market_data` · `margin.query_margin_account_s_all_orders_user_data` · `margin.query_margin_account_s_oco_user_data` · `margin.query_margin_account_s_open_oco_user_data` · `margin.query_margin_account_s_open_orders_user_data` · `margin.query_margin_account_s_order_user_data` · `margin.query_margin_account_s_trade_list_user_data` · `margin.query_margin_account_s_all_oco_user_data` · `margin.query_margin_available_inventory_user_data` · `margin.query_margin_price_index_market_data` · `margin.query_max_borrow_user_data` · `margin.query_max_transfer_out_amount_user_data` · `margin.query_borrow_repay_records_in_margin_account_user_data` · `margin.toggle_bnb_burn_on_spot_trade_and_margin_interest_user_data` · `margin_stream.close_a_listen_key_user_stream_2` · `margin_stream.ping_keep_alive_a_listen_key_user_stream_2` · `market.hr_ticker_price_change_statistics24` · `market.compressed_aggregate_trades_list` · `market.current_average_price` · `market.exchange_information` · `market.kline_candlestick_data` · `market.order_book` · `market.recent_trades_list` · `market.rolling_window_price_change_statistics` · `market.symbol_order_book_ticker` · `market.symbol_price_ticker` · `market.trading_day_ticker` · `market.ui_klines` · `mining.account_list_user_data` · `mining.acquiring_algorithm_market_data` · `mining.acquiring_coin_name_market_data` · `mining.cancel_hashrate_resale_configuration_user_data` · `mining.earnings_list_user_data` · `mining.extra_bonus_list_user_data` · `mining.hashrate_resale_details_user_data` · `mining.hashrate_resale_list_user_data` · `mining.hashrate_resale_request_user_data` · `mining.mining_account_earning_user_data` · `mining.request_for_detail_miner_list_user_data` · `mining.request_for_miner_list_user_data` · `mining.statistic_list_user_data` · `nft.get_nft_asset_user_data` · `nft.get_nft_deposit_history_user_data` · `nft.get_nft_transaction_history_user_data` · `nft.get_nft_withdraw_history_user_data` · `pay.get_pay_trade_history_user_data` · `portfolio_margin.bnb_transfer_user_data` · `portfolio_margin.change_auto_repay_futures_status_user_data` · `portfolio_margin.fund_auto_collection_user_data` · `portfolio_margin.fund_collection_by_asset_user_data` · `portfolio_margin.get_auto_repay_futures_status_user_data` · `portfolio_margin.get_portfolio_margin_asset_leverage_user_data` · `portfolio_margin.portfolio_margin_account_user_data` · `portfolio_margin.portfolio_margin_bankruptcy_loan_amount_user_data` · `portfolio_margin.portfolio_margin_bankruptcy_loan_repay_user_data` · `portfolio_margin.portfolio_margin_collateral_rate_market_data` · `portfolio_margin.portfolio_margin_pro_tiered_collateral_rate_user_data` · `portfolio_margin.query_classic_portfolio_margin_negative_balance_interest_history_user_data` · `portfolio_margin.query_portfolio_margin_asset_index_price_market_data` · `portfolio_margin.repay_futures_negative_balance_user_data` · `rebate.get_spot_rebate_history_records_user_data` · `savings.change_fixed_activity_position_to_daily_position_user_data` · `savings.get_fixed_activity_project_list_user_data` · `savings.get_fixed_activity_project_position_user_data` · `savings.purchase_fixed_activity_project_user_data` · `simple_earn.get_collateral_record_user_data` · `simple_earn.get_flexible_personal_left_quota_user_data` · `simple_earn.get_flexible_product_position_user_data` · `simple_earn.get_flexible_redemption_record_user_data` · `simple_earn.get_flexible_rewards_history_user_data` · `simple_earn.get_flexible_subscription_preview_user_data` · `simple_earn.get_flexible_subscription_record_user_data` · `simple_earn.get_locked_personal_left_quota_user_data` · `simple_earn.get_locked_product_position_user_data` · `simple_earn.get_locked_redemption_record_user_data` · `simple_earn.get_locked_rewards_history_user_data` · `simple_earn.get_locked_subscription_preview_user_data` · `simple_earn.get_locked_subscription_record_user_data` · `simple_earn.get_rate_history_user_data` · `simple_earn.get_simple_earn_flexible_product_list_user_data` · `simple_earn.get_simple_earn_locked_product_list_user_data` · `simple_earn.redeem_flexible_product_trade` · `simple_earn.redeem_locked_product_trade` · `simple_earn.set_flexible_auto_subscribe_user_data` · `simple_earn.set_locked_auto_subscribe_user_data` · `simple_earn.set_locked_product_redeem_option_user_data` · `simple_earn.simple_account_user_data` · `simple_earn.subscribe_flexible_product_trade` · `simple_earn.subscribe_locked_product_trade` · `spot_algo.cancel_algo_order` · `spot_algo.query_current_algo_open_orders` · `spot_algo.query_historical_algo_orders` · `spot_algo.query_sub_orders` · `spot_algo.time_weighted_average_price_twap_new_order` · `staking.eth_staking_account_v2_user_data` · `staking.get_beth_rewards_distribution_history_user_data` · `staking.get_eth_redemption_history_user_data` · `staking.get_eth_staking_history_user_data` · `staking.get_wbeth_rate_history_user_data` · `staking.get_wbeth_rewards_history_user_data` · `staking.get_wbeth_unwrap_history_user_data` · `staking.get_wbeth_wrap_history_user_data` · `staking.get_current_eth_staking_quota_user_data` · `staking.redeem_eth_trade` · `staking.subscribe_eth_staking_v2_trade` · `staking.wrap_beth_trade` · `stream.close_a_listen_key_user_stream` · `stream.ping_keep_alive_a_listen_key_user_stream` · `sub_account_api.create_a_virtual_sub_account_for_master_account` · `sub_account_api.delete_ip_list_for_a_sub_account_api_key_for_master_account` · `sub_account_api.deposit_assets_into_the_managed_sub_account_for_investor_master_account` · `sub_account_api.detail_on_sub_account_s_futures_account_for_master_account` · `sub_account_api.detail_on_sub_account_s_futures_account_v2_for_master_account` · `sub_account_api.detail_on_sub_account_s_margin_account_for_master_account` · `sub_account_api.enable_futures_for_sub_account_for_master_account` · `sub_account_api.enable_leverage_token_for_sub_account_for_master_account` · `sub_account_api.enable_margin_for_sub_account_for_master_account` · `sub_account_api.enable_options_for_sub_account_for_master_account_user_data` · `sub_account_api.futures_position_risk_of_sub_account_for_master_account` · `sub_account_api.futures_position_risk_of_sub_account_v2_for_master_account` · `sub_account_api.get_ip_restriction_for_a_sub_account_api_key_for_master_account` · `sub_account_api.get_managed_sub_account_deposit_address_for_investor_master_account` · `sub_account_api.managed_sub_account_asset_details_for_investor_master_account` · `sub_account_api.managed_sub_account_snapshot_for_investor_master_account` · `sub_account_api.margin_transfer_for_sub_account_for_master_account` · `sub_account_api.query_managed_sub_account_transfer_log_for_investor_master_account` · `sub_account_api.query_managed_sub_account_transfer_log_for_trading_team_master_account` · `sub_account_api.query_managed_sub_account_transfer_log_for_trading_team_sub_account_user_data` · `sub_account_api.query_managed_sub_account_futures_asset_details_for_investor_master_account` · `sub_account_api.query_managed_sub_account_list_for_investor` · `sub_account_api.query_managed_sub_account_margin_asset_details_for_investor_master_account` · `sub_account_api.query_sub_account_assets_for_master_account` · `sub_account_api.query_sub_account_list_for_master_account` · `sub_account_api.query_sub_account_transaction_statistics_for_master_account` · `sub_account_api.sub_account_assets_for_master_account` · `sub_account_api.sub_account_deposit_history_for_master_account` · `sub_account_api.sub_account_futures_asset_transfer_for_master_account` · `sub_account_api.sub_account_futures_asset_transfer_history_for_master_account` · `sub_account_api.sub_account_spot_asset_transfer_history_for_master_account` · `sub_account_api.sub_account_spot_assets_summary_for_master_account` · `sub_account_api.sub_account_spot_assets_summary_for_master_account_2` · `sub_account_api.sub_account_transfer_history_for_sub_account` · `sub_account_api.sub_account_s_status_on_margin_futures_for_master_account` · `sub_account_api.summary_of_sub_account_s_futures_account_for_master_account` · `sub_account_api.summary_of_sub_account_s_futures_account_v2_for_master_account` · `sub_account_api.summary_of_sub_account_s_margin_account_for_master_account` · `sub_account_api.transfer_for_sub_account_for_master_account` · `sub_account_api.transfer_to_master_for_sub_account` · `sub_account_api.transfer_to_sub_account_of_same_master_for_sub_account` · `sub_account_api.universal_transfer_for_master_account` · `sub_account_api.universal_transfer_history_for_master_account` · `sub_account_api.update_ip_restriction_for_sub_account_api_key_for_master_account` · `sub_account_api.withdrawl_assets_from_the_managed_sub_account_for_investor_master_account` · `trade_api.account_information_user_data` · `trade_api.account_trade_list_user_data` · `trade_api.all_orders_user_data` · `trade_api.cancel_oco_trade` · `trade_api.cancel_order_trade` · `trade_api.cancel_all_open_orders_on_a_symbol_trade` · `trade_api.cancel_an_existing_order_and_send_a_new_order_trade` · `trade_api.current_open_orders_user_data` · `trade_api.new_order_trade` · `trade_api.new_order_list_oto_trade` · `trade_api.new_order_list_otoco_trade` · `trade_api.new_order_list_oco_trade` · `trade_api.new_order_using_sor_trade` · `trade_api.query_allocations_user_data` · `trade_api.query_commission_rates_user_data` · `trade_api.query_current_order_count_usage_trade` · `trade_api.query_oco_user_data` · `trade_api.query_open_oco_user_data` · `trade_api.query_order_user_data` · `trade_api.query_prevented_matches` · `trade_api.query_all_oco_user_data` · `trade_api.test_new_order_trade` · `trade_api.test_new_order_using_sor_trade` · `vip_loans.check_locked_value_of_vip_collateral_account_user_data` · `vip_loans.get_borrow_interest_rate_user_data` · `vip_loans.get_collateral_asset_data_user_data` · `vip_loans.get_loanable_assets_data` · `vip_loans.get_vip_loan_ongoing_orders_user_data` · `vip_loans.get_vip_loan_repayment_history_user_data` · `vip_loans.query_application_status_user_data` · `vip_loans.vip_loan_borrow` · `vip_loans.vip_loan_renew` · `vip_loans.vip_loan_repay_trade` · `wallet.account_api_trading_status_user_data` · `wallet.account_status_user_data` · `wallet.account_info_user_data` · `wallet.all_coins_information_user_data` · `wallet.asset_detail_user_data` · `wallet.asset_dividend_record_user_data` · `wallet.convert_transfer_user_data` · `wallet.daily_account_snapshot_user_data` · `wallet.deposit_address_supporting_network_user_data` · `wallet.deposit_history_supporting_network_user_data` · `wallet.disable_fast_withdraw_switch_user_data` · `wallet.dust_transfer_user_data` · `wallet.dust_log_user_data` · `wallet.enable_fast_withdraw_switch_user_data` · `wallet.fetch_deposit_address_list_with_network_user_data` · `wallet.fetch_withdraw_address_list_user_data` · `wallet.funding_wallet_user_data` · `wallet.get_api_key_permission_user_data` · `wallet.get_assets_that_can_be_converted_into_bnb_user_data` · `wallet.get_cloud_mining_payment_and_refund_history_user_data` · `wallet.get_symbols_delist_schedule_for_spot_market_data` · `wallet.one_click_arrival_deposit_apply_user_data` · `wallet.query_convert_transfer_user_data` · `wallet.query_user_delegation_history_for_master_account_user_data` · `wallet.query_user_universal_transfer_history_user_data` · `wallet.query_user_wallet_balance_user_data` · `wallet.query_auto_converting_stable_coins_user_data` · `wallet.switch_on_off_busd_and_stable_coins_conversion_user_data_user_data` · `wallet.trade_fee_user_data` · `wallet.user_asset_user_data` · `wallet.user_universal_transfer_user_data` · `wallet.withdraw_user_data` · `wallet.withdraw_history_supporting_network_user_data`); distinguishing members *none required*
   2. *(none)* — `isolated_margin_stream.generate_a_listen_key_user_stream` · `margin_stream.create_a_listen_key_user_stream_2` · `market.check_server_time` · `market.old_trade_lookup` · `market.test_connectivity` · `stream.create_a_listen_key_user_stream` · `wallet.system_status_system`: no typed arm, so `.error` is always `RawError`
   3. So `isinstance(e.error, Error)` matches only 333 of 340 operations.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares at least one required member on 146 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which environment the `environment` keyword selects**, because omitting it is silently `"production"` of the 2 declared.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

