# AlphaAI SDK

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url] [![Python 3.10+][python-badge]][python-url]

The AlphaAI SDK for Python provides access to the AlphaAI REST APIs from Python applications.

> [!TIP]
> **Looking for a specific signature, model, enum, or error type?** This SDK ships a generated
> **[SDK map](sdk-map.md)** -- a lookup index of the SDK's entire Python surface. Consult it before
> scanning the source tree; details under [SDK map](#sdk-map).

Public REST API for AlphAI's relevance-scored, ticker-linked financial news. All endpoints accept `Authorization: Bearer ak_live_…` (issued from your
`/account/api-keys`). Authenticated traffic is metered per account with two
layers — a per-minute burst cap and a per-day volume cap (Free 20/min +
100/day, Basic 60/min + 10,000/day, Pro 150/min + 100,000/day); a request
passes only if both are under budget. The Free tier is for evaluation /
personal non-commercial use; Basic is licensed for internal commercial use;
Pro adds redistribution of the enriched feed. Send all API traffic to
`api.alphai.io`; a key is required on every request. The API is server-side only. It sends no CORS headers, so a cross-origin
call from a browser page fails at the preflight: the `OPTIONS` request is
answered with `403` at the edge and never reaches the API. Keep the key on
your server and expose your own route to the browser; a key embedded in
page code is readable by every visitor and spends your quota. Every keyed response carries `X-RateLimit-Limit`, `X-RateLimit-Remaining`
and `X-RateLimit-Reset`; these report the per-day volume layer (Reset =
epoch seconds of the next 00:00 UTC reset) so you can watch your daily budget
without provoking a 429. A per-minute burst surfaces only as a 429 with a
short `Retry-After`. A 429 body also names your tier, its caps and an
`upgrade` block. A request rejected with 429 does not itself spend quota. The headers reflect origin processing, so a response served from a shared
cache may omit them. On the MCP server (`mcp.alphai.io`) the same two layers meter **tool calls
only** — the connect handshake (`initialize`, `tools/list`, notifications,
keepalives, the SSE stream) is protocol traffic and does not consume your
quota. It carries a separate, far larger ceiling that exists only to stop a
client reconnecting in a loop; hitting it returns a 429 whose body reports
`"window": "transport"`, which means your client is reconnecting too often,
not that you are out of quota. MCP news tools accept `detail="compact"` for headline triage and polling:
`alphai_news_search`, `alphai_ticker_news`, `alphai_insider_news`,
`alphai_trending`, `alphai_actionable_now`, `alphai_macro` and
`alphai_pair_analysis`. Compact items keep identity, source, publication
and ingest times, tickers, category, relevance_score, top-level
actionability and information_novelty, story fields, ownership_form and
search_match. Summary, analysis, images and SEC detail blocks are omitted;
fetch `alphai_article(uid)` for those details. `detail="full"` is the
default and preserves the existing format, including the condensed recent
lists on pair_analysis. Selection, order, cursors, query interpretation
and macro releases are unchanged, so detail can change between pages. This parameter belongs to MCP tools only; REST parameters are unchanged. Interactive MCP clients use a separate OAuth approval flow. Check the
callback host or app scheme and full callback address before approving;
app names are self-declared, not verified by AlphAI. MCP access includes
news, market data and the saved watchlist, plus creating, changing and
disabling the user's own alerts on Basic or Pro (including after an
upgrade). The OAuth scope `tools.read` is not a read-only restriction. Registered callbacks can be reviewed in Account → MCP connections. That account management surface requires website login, not an API key. Disconnect blocks all existing MCP OAuth access and refresh tokens for that
app connection, including its other sessions; work already in progress may
finish. Other connections and API keys are unaffected. Revoking either token
type through the separate MCP host's `/oauth/revoke` has the same effect. Serialize refresh requests and save each replacement token: reuse ends the
connection.

---

## Installation

Add the Python SDK to your project from its folder, with whichever package manager your project uses. Give each tool a path containing a slash, such as `../alpha-ai` — a bare folder name is looked up on PyPI instead, and resolves to whatever project holds that name there:

```bash
pip install <path-to-sdk>
```

```bash
uv add <path-to-sdk>
```

```bash
poetry add <path-to-sdk>
```

---

## Quick Start

### Synchronous client

Construct `AlphaAiClient` with keyword arguments, and call `close()` when you are done. Every argument is optional; the full list is in the [SDK map](sdk-map.md).

```python
from alpha_ai import AlphaAiClient

client = AlphaAiClient(api_key="YOUR_BEARER_TOKEN")

# TODO: call endpoints here -- see api-reference.md

client.close()
```

Alternatively, scope it -- `with AlphaAiClient(...) as client:` closes the pool on exit; see [Best Practices](#best-practices).

`Client` is exported as an alias of `AlphaAiClient`, so `from alpha_ai import Client` also works.

The SDK accepts every model-typed input in two interchangeable spellings, both type-checked: the typed model, or a plain dict with the same keys -- the `OrDict` and `Model | ModelDict` unions in the [SDK map](sdk-map.md). Pick whichever suits the call site: the dict form needs no import, while the model form adds a keyword-checked constructor and editor completion.

### Asynchronous client

`AsyncAlphaAiClient` mirrors `AlphaAiClient` with **identical method names**, and every endpoint method is a coroutine. It takes the same arguments, with some differences -- for example, the transport argument is `custom_async_http_client`.

```python
from asyncio import run

from alpha_ai import AsyncAlphaAiClient


async def main() -> None:
    client = AsyncAlphaAiClient(api_key="YOUR_BEARER_TOKEN")
    # TODO: call endpoints here, awaiting each -- see api-reference.md
    await client.aclose()


run(main())
```

Alternatively, scope it -- `async with AsyncAlphaAiClient(...) as client:` closes the pool on exit. Only the async spelling is `aclose`, matching httpx2; see [Best Practices](#best-practices).

`AsyncClient` is the exported alias. Each client accepts **only** its own transport argument; passing the other's is a `TypeError` at runtime and an error under mypy.

---

## Usage

Two generated references cover the SDK; each answers a different question:

| Reference | For |
| --- | --- |
| **[API Reference](api-reference.md)** | Usage guidance for a single **parsed** operation: `client.<group>.<operation>(...)` returns the typed payload and raises `ApiError` on any non-2xx, with `.error` the typed error body, or `RawError` for a status the operation does not document. |
| **[Raw API Reference](raw-api-reference.md)** | The same for the **raw** variant: `client.<group>.with_raw_response.<operation>(...)` returns `ApiResult[T, E]` and never raises for an API error. |

Both API references carry every one of the 26 operations, with a sync and an async sample and a parameter table each.

## SDK map

This SDK ships a generated **SDK map** -- [`sdk-map.md`](sdk-map.md) -- a deterministic, lookup-oriented table of contents of the SDK's Python surface, generated by APIMatic alongside this SDK.

Consult the map before scanning or grepping the source: it answers call-level contract questions by lookup, and for anything it does not carry -- model shapes, enum values, an endpoint's route or behavioural prose -- it names the one source file to read. How to read the map itself, including the SDK-wide defaults its rows rely on, is stated at the top of [`sdk-map.md`](sdk-map.md).

## Error handling

Everything the SDK raises for a call derives from `SdkError`, which names the call as `method` and `url` (the path, never the query); the underlying exception is `__cause__`. No message carries a response body. The raw variant (`.with_raw_response`) returns an error status as a `Failure` instead of raising `ApiError`; the rest of the family raises in both modes.

```python
from alpha_ai.core import ApiError, SdkConnectionError, SdkError

try:
    response = client.calendar.get_api_calendar(
        from_date="2026-08-07", to_date="2026-08-14", event_key="cpi,nfp,fomc_decision"
    )
except ApiError as e:
    # An error status: the decoded body is e.error.
    print(e.status_code, e.error)
except SdkConnectionError as e:
    # No response, or the body could not be read.
    print(e, repr(e.__cause__))
except SdkError as e:
    # Anything else the SDK raises for a call.
    print(e)
except Exception as e:
    # Not a call failure: input refused before sending (ValueError), a handler you wrote raising, or a bug here.
    print(f"not a call failure: {e!r}")
    raise e
```

| Exception | When | Extra attributes |
| --- | --- | --- |
| `ApiError[E]` | an error status | `error`, `status_code`, `headers` |
| `ResponseDecodeError` | a body that does not match its declared type | `status_code`, `headers` |
| `SdkConnectionError` | the request could not be sent, or the body could not be read |  |
| `SdkTimeoutError` | a `SdkConnectionError` that timed out | `timeout` |
| `AuthSchemeError` | a credential could not be applied | `scheme_failures` |

Your own cancellation is never wrapped, and a value the SDK refuses before sending stays a `ValueError`. Each operation's typed error arms are on its [SDK map](sdk-map.md) page.

## Logging

The SDK logs every HTTP exchange through Python's standard `logging` module, under the `alpha_ai` logger, and configures nothing itself: with no logging set up, nothing is printed unless `ALPHA_AI_LOG` is set. Turn it on as for any library:

```python
import logging

logging.basicConfig()  # your application's handler; the root stays at WARNING
logging.getLogger("alpha_ai").setLevel(logging.INFO)  # the SDK's lines; DEBUG adds the dumps that logging_options turns on
```

Or set one environment variable before the process starts, for a run you cannot edit: `ALPHA_AI_LOG=info` writes the request and response lines, `ALPHA_AI_LOG=debug` adds the request headers, the request body and the response headers. If your application has configured logging, its handlers and format are used; otherwise the SDK writes to stderr.

Choose the detail with `logging_options`, a `LoggingOptions` from `alpha_ai.core`:

```python
from alpha_ai import AlphaAiClient
from alpha_ai.core import LoggingOptions

client = AlphaAiClient(
    logging_options=LoggingOptions(log_request_headers=True, log_response_headers=True, log_request_body=True)
)
```

A plain dict with the same keys is accepted too, as for every model-typed argument (see [Quick Start](#quick-start)): `logging_options={"log_request_headers": True}`.

| Option | Default | Effect |
| --- | --- | --- |
| `log_request_headers` | `False` | Log the sent headers at DEBUG, masked. |
| `log_response_headers` | `False` | Log the received headers at DEBUG, masked. |
| `log_request_body` | `False` | Log the request body at DEBUG: its text when in memory, a description when streamed. |
| `body_size_limit` | `32768` | Bytes of a logged body kept before it is cut. |
| `redaction_placeholder` | `"REDACTED"` | What a hidden value prints as. |
| `unmask_headers` | none | Header names to show although they are not on the safe list. |
| `mask_headers` | none | Header names to hide although they are on the safe list. |
| `mask_keys` | 11 credential names | Query and form keys whose values are always hidden; naming a set replaces the default. |

A single call can be quietened with `request_options={"log_level": logging.WARNING}`: records below that level are not written for that call. It never turns on a record the client's options leave off. Header, query and form values print `REDACTED` unless known safe; a JSON body is printed as sent, so enable `log_request_body` only where its content may be logged; a response body is never logged. The levels and every field are under **Logging** in the SDK map.

## Hooks

A hook is your code run on every attempt of every request. `before_request` gets the request after it is built and authenticated, and returns the request to send. `after_response` gets the response and returns the one the call acts on: the same one, or your own object implementing `HttpResponse`. Subclass `SdkHook` and override either one, or pass plain functions keyed by the event they run on:

```python
from dataclasses import replace

from alpha_ai import AlphaAiClient
from alpha_ai.core import HookContext, HttpRequest, HttpResponse, SdkHook


# new_traceparent() and record() stand for your own tracer and metrics sink.
class Tracing(SdkHook):
    def before_request(self, request: HttpRequest, context: HookContext) -> HttpRequest:
        return replace(request, headers={**request.headers, "traceparent": new_traceparent()})

    def after_response(self, response: HttpResponse, context: HookContext) -> HttpResponse:
        record(context.method, context.url, response.status_code)
        return response


client = AlphaAiClient(hooks=[Tracing()])


# Or plain functions, with nothing to subclass:
def add_tenant(request: HttpRequest, context: HookContext) -> HttpRequest:
    return replace(request, headers={**request.headers, "x-tenant": "acme"})


def print_status(response: HttpResponse, context: HookContext) -> HttpResponse:
    print(context.method, response.status_code)
    return response


client = AlphaAiClient(hooks={"on_request": [add_tenant], "on_response": [print_status]})
```

A single call adds its own the same way, `request_options={"hooks": {"on_request": [add_tenant]}}` or `{"hooks": [Tracing()]}`: they run after the client's, never instead of them.

**Two spellings, one per place.** `hooks` takes a list of hook objects or the `{"on_request": [...], "on_response": [...]}` dict, on the client and in `request_options` alike — not a mix of the two in one place. A hook that keeps state between the request and its response is a class. A key other than those two is a type error, and is ignored at run time.

**When they run.** On every attempt, retries included, after authentication: the client's hooks, then the call's.

**On `AsyncAlphaAiClient`** the same shape is `AsyncSdkHook`, whose methods are `async def` and take an `AsyncHookContext` and an `AsyncHttpResponse`; the dict takes `async def` functions under the same two keys, and a call's hooks go in `AsyncRequestOptions`. A hook of the other client's flavour is a type error, not a run-time check.

**Changing the response.** The retry decision and the result read the response the last hook returns; the log line shows what the server sent. A hook that reads the body must return a response that still carries it, and one that returns a different response must close the original or keep it inside.

## Best Practices

> [!TIP]
> Use a **single `AlphaAiClient` instance** for the lifetime of your application and reuse it across
> all requests. Each instance owns its own connection pool, so an instance per request forfeits
> connection reuse and leaks pools that are never closed.

Match the disposal to the client's lifetime: an application-lifetime client is closed once at shutdown with `close()` / `aclose()`; where the lifetime fits a block, `with AlphaAiClient() as client:` / `async with AsyncAlphaAiClient() as client:` releases it automatically. Both are idempotent, but a closed client is not reusable: the next call raises. The client closes **whatever transport it holds**, including one you supplied via `custom_http_client` / `custom_async_http_client`; if you intend to reuse your own transport across clients, don't hand its lifetime to a `with` block.

**Retries are on by default**: a failed idempotent request — a retryable status or no response at all — is sent again up to three times before the call gives up. Pass `retry_options=0` to turn it off, for instance in a test that stubs an error response; the policy and its defaults are under **Retries** in the SDK map.

## License

This SDK is distributed under the [MIT License][license-url].

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at support@alphai.io.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
[python-url]: https://www.python.org/downloads/
[python-badge]: https://img.shields.io/badge/python-3.10%2B-blue.svg
