# Nordic Financial News SDK

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url] [![Python 3.10+][python-badge]][python-url]

The Nordic Financial News SDK for Python provides access to the Nordic Financial News REST APIs from Python applications.

> [!TIP]
> **Looking for a specific signature, model, enum, or error type?** This SDK ships a generated
> **[SDK map](sdk-map.md)** -- a lookup index of the SDK's entire Python surface. Consult it before
> scanning the source tree; details under [SDK map](#sdk-map).

REST API for Nordic financial news. Each article is summarized in English (headline, short summary, and key points) with the original-language article linked via `article_url`. The full article body stays at the source. ## Authentication
All endpoints require Bearer token authentication using an API key. Include the API key in the Authorization header:
```
Authorization: Bearer YOUR_API_KEY
```

## Rate Limiting
Rate limits apply per account, shared across every API key on that account — not per
individual key:
- **Free**: 100 requests/hour
- **Plus**: 100 requests/hour
- **Pro**: 5,000 requests/hour

On Free and Plus, MCP tool calls have their own hourly and monthly allowance and do not
count toward these REST limits. On Pro, REST requests and MCP tool calls share one allowance. Rate limit information is included in response headers:
- `X-RateLimit-Limit`: Maximum requests per hour
- `X-RateLimit-Remaining`: Requests remaining
- `X-RateLimit-Reset`: Seconds until limit resets
- `X-RateLimit-Policy`: Human-readable rate limit policy (e.g. `5000 per hour; fixed window`)

A single client IP is additionally capped at 300 requests per 5-minute window, so
reaching your account's full hourly allowance requires spreading requests across more
than one source IP. The `/health` endpoint is exempt from rate limiting and does not return rate limit headers. ## Monthly Usage Limits
Free and Plus accounts have a fixed monthly allowance that resets at the start of each
calendar month, shared across every API key on the account:
- **Free**: 100 requests/month
- **Plus**: 100 requests/month

Responses on these plans include:
- `X-Monthly-Limit`: Maximum requests for the current month
- `X-Monthly-Remaining`: Requests remaining this month
- `X-Monthly-Reset`: ISO 8601 timestamp when the allowance resets

When the allowance is exceeded, the API returns `429 Too Many Requests` with a `Retry-After` header. Pro has no hard limit. It includes 25,000 requests per billing cycle, with usage-based
pricing beyond that, so requests are never blocked. Responses on Pro include:
- `X-Monthly-Usage`: Requests used in the current billing cycle
- `X-Monthly-Reset`: ISO 8601 timestamp when the current billing cycle ends

A Pro billing cycle follows your subscription's billing period, which begins on the
date you subscribed and is not necessarily a calendar month. Usage is counted by day,
so the first day of a billing cycle is counted in full. ## Caching
Every list and single-resource endpoint returns an `ETag`. Most also return
`Last-Modified` (on lists, when the page is not empty); `GET /stories/{id}` and the
Events endpoints do not. Send the ETag back as `If-None-Match`, or the date as
`If-Modified-Since`, to receive `304 Not Modified` when nothing has changed. A 304
has no body and does not count against the monthly request allowance. `GET /events`, `GET /events/{id}` and `GET /companies/{identifier}/events` return an
`ETag` but no `Last-Modified`, so revalidate those routes with `If-None-Match`. An
event's visible company and story membership, and its live article count, all change
without moving its `updated_at`, so a date-based validator would report "not
modified" across a change the `ETag` catches. Some requests are never cached and return `Cache-Control: no-cache, no-store` with
no `ETag`: full-text search (`q`), `updated_after` sync requests, and `GET /search`. The `ETag` reflects the response as served, not only record timestamps. On articles
and stories, including the company-scoped routes, and on `GET /calendar_events`, it
changes when a plan limit alters the visible set, and on stories when a story's
visible article set changes. A changed `ETag` does not necessarily mean a record was
updated. On the Events endpoints the `ETag` additionally covers each event's visible
company and story ids and its live article count, none of which move the event's
`updated_at`. ## Pagination
List endpoints support cursor-based pagination.

---

## Installation

Add the Python SDK to your project from its folder, with whichever package manager your project uses. Give each tool a path containing a slash, such as `../nordic-financial-news` — a bare folder name is looked up on PyPI instead, and resolves to whatever project holds that name there:

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

Construct `NordicFinancialNewsClient` with keyword arguments, and call `close()` when you are done. Every argument is optional; the full list is in the [SDK map](sdk-map.md).

```python
from nordic_financial_news import NordicFinancialNewsClient

client = NordicFinancialNewsClient(bearer_auth="YOUR_BEARER_TOKEN")

# TODO: call endpoints here -- see api-reference.md

client.close()
```

Alternatively, scope it -- `with NordicFinancialNewsClient(...) as client:` closes the pool on exit; see [Best Practices](#best-practices).

`Client` is exported as an alias of `NordicFinancialNewsClient`, so `from nordic_financial_news import Client` also works.

The SDK accepts every model-typed input in two interchangeable spellings, both type-checked: the typed model, or a plain dict with the same keys -- the `OrDict` and `Model | ModelDict` unions in the [SDK map](sdk-map.md). Pick whichever suits the call site: the dict form needs no import, while the model form adds a keyword-checked constructor and editor completion.

### Asynchronous client

`AsyncNordicFinancialNewsClient` mirrors `NordicFinancialNewsClient` with **identical method names**, and every endpoint method is a coroutine. It takes the same arguments, with some differences -- for example, the transport argument is `custom_async_http_client`.

```python
from asyncio import run

from nordic_financial_news import AsyncNordicFinancialNewsClient


async def main() -> None:
    client = AsyncNordicFinancialNewsClient(bearer_auth="YOUR_BEARER_TOKEN")
    # TODO: call endpoints here, awaiting each -- see api-reference.md
    await client.aclose()


run(main())
```

Alternatively, scope it -- `async with AsyncNordicFinancialNewsClient(...) as client:` closes the pool on exit. Only the async spelling is `aclose`, matching httpx2; see [Best Practices](#best-practices).

`AsyncClient` is the exported alias. Each client accepts **only** its own transport argument; passing the other's is a `TypeError` at runtime and an error under mypy.

---

## Usage

Two generated references cover the SDK; each answers a different question:

| Reference | For |
| --- | --- |
| **[API Reference](api-reference.md)** | Usage guidance for a single **parsed** operation: `client.<group>.<operation>(...)` returns the typed payload and raises `ApiError` on any non-2xx, with `.error` the typed error body, or `RawError` for a status the operation does not document. |
| **[Raw API Reference](raw-api-reference.md)** | The same for the **raw** variant: `client.<group>.with_raw_response.<operation>(...)` returns `ApiResult[T, E]` and never raises for an API error. |

Both API references carry every one of the 30 operations, with a sync and an async sample and a parameter table each.

## SDK map

This SDK ships a generated **SDK map** -- [`sdk-map.md`](sdk-map.md) -- a deterministic, lookup-oriented table of contents of the SDK's Python surface, generated by APIMatic alongside this SDK.

Consult the map before scanning or grepping the source: it answers call-level contract questions by lookup, and for anything it does not carry -- model shapes, enum values, an endpoint's route or behavioural prose -- it names the one source file to read. How to read the map itself, including the SDK-wide defaults its rows rely on, is stated at the top of [`sdk-map.md`](sdk-map.md).

## Error handling

Everything the SDK raises for a call derives from `SdkError`, which names the call as `method` and `url` (the path, never the query); the underlying exception is `__cause__`. No message carries a response body. The raw variant (`.with_raw_response`) returns an error status as a `Failure` instead of raising `ApiError`; the rest of the family raises in both modes.

```python
from nordic_financial_news.core import ApiError, SdkConnectionError, SdkError

try:
    response = client.articles_api.get_api_v1_articles(
        limit=25,
        fields="id,title,published_at",
        updated_after="2024-01-01T00:00:00Z",
        q="Volvo earnings",
        sort=Sort.LATEST,
        mode=Mode.SEMANTIC,
        country="SE",
        category="cat_earnings1",
        sources="abc123def456,ghi789jkl012",
        source_type="stock_exchange",
        ticker="VOLV-B",
        company="cmpny1234567",
        exchange="XSTO,XCSE",
        market="SE",
        domicile="SE",
        index="OMXS30",
        sector="Industrials",
        content_type="news,analysis",
        published_after="2024-06-01T00:00:00Z",
        published_before="2024-12-31T23:59:59Z",
        listed="true",
        watchlist="wl_8fk2a1b3c4d5",
        primary_only=True,
        include_peripheral=True,
        ids="k3n9x2m7p4q1,b8v5c2z6w1r3",
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

The SDK logs every HTTP exchange through Python's standard `logging` module, under the `nordic_financial_news` logger, and configures nothing itself: with no logging set up, nothing is printed unless `NORDIC_FINANCIAL_NEWS_LOG` is set. Turn it on as for any library:

```python
import logging

logging.basicConfig()  # your application's handler; the root stays at WARNING
logging.getLogger("nordic_financial_news").setLevel(logging.INFO)  # the SDK's lines; DEBUG adds the dumps that logging_options turns on
```

Or set one environment variable before the process starts, for a run you cannot edit: `NORDIC_FINANCIAL_NEWS_LOG=info` writes the request and response lines, `NORDIC_FINANCIAL_NEWS_LOG=debug` adds the request headers, the request body and the response headers. If your application has configured logging, its handlers and format are used; otherwise the SDK writes to stderr.

Choose the detail with `logging_options`, a `LoggingOptions` from `nordic_financial_news.core`:

```python
from nordic_financial_news import NordicFinancialNewsClient
from nordic_financial_news.core import LoggingOptions

client = NordicFinancialNewsClient(
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

from nordic_financial_news import NordicFinancialNewsClient
from nordic_financial_news.core import HookContext, HttpRequest, HttpResponse, SdkHook


# new_traceparent() and record() stand for your own tracer and metrics sink.
class Tracing(SdkHook):
    def before_request(self, request: HttpRequest, context: HookContext) -> HttpRequest:
        return replace(request, headers={**request.headers, "traceparent": new_traceparent()})

    def after_response(self, response: HttpResponse, context: HookContext) -> HttpResponse:
        record(context.method, context.url, response.status_code)
        return response


client = NordicFinancialNewsClient(hooks=[Tracing()])


# Or plain functions, with nothing to subclass:
def add_tenant(request: HttpRequest, context: HookContext) -> HttpRequest:
    return replace(request, headers={**request.headers, "x-tenant": "acme"})


def print_status(response: HttpResponse, context: HookContext) -> HttpResponse:
    print(context.method, response.status_code)
    return response


client = NordicFinancialNewsClient(hooks={"on_request": [add_tenant], "on_response": [print_status]})
```

A single call adds its own the same way, `request_options={"hooks": {"on_request": [add_tenant]}}` or `{"hooks": [Tracing()]}`: they run after the client's, never instead of them.

**Two spellings, one per place.** `hooks` takes a list of hook objects or the `{"on_request": [...], "on_response": [...]}` dict, on the client and in `request_options` alike — not a mix of the two in one place. A hook that keeps state between the request and its response is a class. A key other than those two is a type error, and is ignored at run time.

**When they run.** On every attempt, retries included, after authentication: the client's hooks, then the call's.

**On `AsyncNordicFinancialNewsClient`** the same shape is `AsyncSdkHook`, whose methods are `async def` and take an `AsyncHookContext` and an `AsyncHttpResponse`; the dict takes `async def` functions under the same two keys, and a call's hooks go in `AsyncRequestOptions`. A hook of the other client's flavour is a type error, not a run-time check.

**Changing the response.** The retry decision and the result read the response the last hook returns; the log line shows what the server sent. A hook that reads the body must return a response that still carries it, and one that returns a different response must close the original or keep it inside.

## Best Practices

> [!TIP]
> Use a **single `NordicFinancialNewsClient` instance** for the lifetime of your application and reuse it across
> all requests. Each instance owns its own connection pool, so an instance per request forfeits
> connection reuse and leaks pools that are never closed.

Match the disposal to the client's lifetime: an application-lifetime client is closed once at shutdown with `close()` / `aclose()`; where the lifetime fits a block, `with NordicFinancialNewsClient() as client:` / `async with AsyncNordicFinancialNewsClient() as client:` releases it automatically. Both are idempotent, but a closed client is not reusable: the next call raises. The client closes **whatever transport it holds**, including one you supplied via `custom_http_client` / `custom_async_http_client`; if you intend to reuse your own transport across clients, don't hand its lifetime to a `with` block.

**Retries are on by default**: a failed idempotent request — a retryable status or no response at all — is sent again up to three times before the call gives up. Pass `retry_options=0` to turn it off, for instance in a test that stubs an error response; the policy and its defaults are under **Retries** in the SDK map.

## License

This SDK is distributed under the [MIT License][license-url].

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at hello@nordicfinancialnews.com.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
[python-url]: https://www.python.org/downloads/
[python-badge]: https://img.shields.io/badge/python-3.10%2B-blue.svg
