---
name: python-testing
description: Load before writing unit or integration tests (pytest or unittest) for code that calls an APIMatic-generated Python SDK. Covers faking the transport protocol, asserting on the request the SDK built, and covering the error, decode, transport and token-fetch failure paths.
---

# Testing code that uses an APIMatic Python SDK

The client takes a **transport** in its constructor, which is the seam for testing: pass an object
satisfying the SDK's transport protocol, so no real network calls happen. The SDK ships no mocking
helpers and no test doubles — this is standard Python.

**Match the project's existing test stack — don't impose one.** Check the test dependencies and the
existing tests, then mirror both its **test framework** (pytest / `unittest`) and its **assertion
style**: if it uses `unittest`'s `self.assertEqual`, or an assertion library, write assertions that
way rather than switching to bare `assert`. The samples below use pytest + bare `assert` **purely for
reference** — they show the SDK testing seam and *what* to assert, not a mandated framework.
Substitute your own `{Api}Client` and operation names as well.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{Api}Client`, `{Group}`, `{Operation}`, `{root_package}`) — replace it with the concrete
> identifier from the source.

## A reusable stub transport

The transport is a `Protocol`, so a fake needs no base class, no registration and no `Mock` — just
its two methods, `send` and `close`. `send` answers with the response **head**; the body stays on
the stub until something reads it:

```python
import json
from collections.abc import Iterator, Mapping
from dataclasses import dataclass, field
from {root_package}.core import HttpMethod, HttpRequest, HttpResponse

@dataclass
class StubResponse:
    """A canned head, with the body held as chunks until the SDK reads it."""

    status_code: int = 200
    headers: Mapping[str, str] = field(default_factory=dict)
    chunks: list[bytes] = field(default_factory=list)
    method: HttpMethod = "GET"   # what a streamed payload names in its errors, with url
    url: str = "https://api.test/resource"
    closed: bool = False

    def iter_bytes(self, chunk_size: int | None) -> Iterator[bytes]:
        yield from self.chunks
        self.close()          # a drained iteration releases the connection; a partial one does not

    def read(self) -> bytes:
        self.close()          # reading both buffers the body and releases the connection
        return b"".join(self.chunks)

    def close(self) -> None:
        self.closed = True


class StubTransport:
    """Satisfies the SDK's sync transport protocol: send() + close()."""

    def __init__(self, *responses: StubResponse) -> None:
        self._responses = list(responses)
        # Every request, in order — the token fetch appends too, so this is what you count.
        self.requests: list[HttpRequest] = []

    def send(self, request: HttpRequest) -> HttpResponse:
        self.requests.append(request)
        return self._responses.pop(0)

    def close(self) -> None: ...

    @property
    def last_request(self) -> HttpRequest:
        return self.requests[-1]          # IndexError when nothing was sent


def json_response(status: int, body: object) -> StubResponse:
    return StubResponse(
        status_code=status,
        headers={"content-type": "application/json"},   # lowercase keys, per the transport contract
        chunks=[json.dumps(body).encode()],
    )
```

Assert on `StubResponse.closed` to prove the caller consumed the body and released the connection.

`chunks` defaults to empty, so an empty `204` is just `StubResponse(status_code=204)` — which is what
an operation declaring no response body expects (`python-calling-endpoints`).

Wire it in and you have a real client with no network:

```python
def client_returning(*responses: StubResponse) -> tuple[{Api}Client, StubTransport]:
    transport = StubTransport(*responses)
    # retry_options=0 turns off the default retries (see Notes): one stubbed response, one send.
    client = {Api}Client(custom_http_client=transport, retry_options=0, {scheme}=...)
    return client, transport
```

The keyword is `custom_http_client=` on the sync client and `custom_async_http_client=` on the async
one; both constructors are keyword-only, and the credential keyword is named after the scheme the
contract sheet lists. Its value is that scheme's type: a plain `str` for a bearer token or an API key,
the credentials model or dict for basic auth or an OAuth grant (`python-authentication`).

**Do not patch the client's private attributes** (`_raw_client`, `_auth`, …) and do not
`Mock(spec={Api}Client)`. Both couple your tests to internals that change without notice, and a
mocked client cannot catch the mistakes that actually happen — a wrong path parameter, a body that
does not serialize, a header you forgot. Faking the transport exercises the real request-building
pipeline.

### The token request comes first

With a managed-OAuth scheme configured, the token is fetched **lazily on the first authenticated
call**, through the same transport — so the *first* request your stub sees is the `POST` to the token
endpoint, not your operation. Two ways to handle it.

Queue a token response ahead of the operation's, and index from the end:

```python
def token_response() -> StubResponse:
    return json_response(200, {"access_token": "t", "token_type": "Bearer", "expires_in": 3600})

client, transport = client_returning(token_response(), json_response(201, {...}))
...
assert len(transport.requests) == 2
req = transport.last_request          # index from the end, not [0]
```

Or bypass acquisition entirely with a stub token source (`python-authentication`), so the stub
transport only ever sees your operation:

```python
from {root_package}.core import OAuthTokenRefreshable

# {Credentials} is the type inside your client's `{scheme}_token_source` annotation — for example
# `ClientCredentials[{Scope}]` — imported the way the client module imports it.
class StubTokenSource:        # TokenSource and RefreshableTokenSource
    def fetch(self, credentials: {Credentials}) -> OAuthTokenRefreshable:
        return OAuthTokenRefreshable(access_token="t", token_type="Bearer")
    def refresh(self, credentials: {Credentials}, refresh_token: str) -> None: ...  # authorization code needs it

class AsyncStubTokenSource:   # AsyncTokenSource and AsyncRefreshableTokenSource
    async def fetch(self, credentials: {Credentials}) -> OAuthTokenRefreshable:
        return OAuthTokenRefreshable(access_token="t", token_type="Bearer")
    async def refresh(self, credentials: {Credentials}, refresh_token: str) -> None: ...

client = {Api}Client(
    custom_http_client=transport,
    {scheme}={"...": "..."},   # still required: a valid credential for the grant (`python-authentication`)
    {scheme}_token_source=StubTokenSource(),
)
```

The token is **cached on the scheme**, so only the first call fetches one: a test making two calls
against one client sees three requests, not four. Forgetting the token request is the most common way
a first test fails confusingly — the operation's decoder is handed the token body, and you get a
`ResponseDecodeError` (a `ValidationError` about your payload on `__cause__`) rather than anything
mentioning auth. The tests below queue only
the operation's response; for OAuth where the SDK fetches the token itself, put `token_response()` first
(except in the bad-credentials test).

## Test a success path

```python
def test_returns_deserialized_body():
    client, transport = client_returning(json_response(200, {"{wire_field}": "..."}))

    value = client.{Group}.{Operation}(...)

    assert value.{member} == "..."
    assert "/{expected/path}" in transport.last_request.url   # the operation, not the token
```

## Test an error path

Operations raise on non-2xx, and there is exactly **one** exception class — `ApiError`
(`python-error-handling`). You always catch it unparametrized and assert on the arm of its payload
union that the status maps to: the operation's typed error, or `RawError` for a status it does not
document.

**Typed arm:**

```python
import pytest
from {root_package}.core import ApiError
from {root_package}.models import {TypedError}

def test_raises_on_api_error():
    client, transport = client_returning(json_response(422, {"...": "..."}))

    with pytest.raises(ApiError) as exc_info:
        client.{Group}.{Operation}(...)

    e = exc_info.value
    assert e.status_code == 422                    # always present, whichever arm you got
    assert isinstance(e.error, {TypedError})       # narrow before reading fields
    assert e.error.{message_field} == "..."
    assert "/{expected/path}" in transport.last_request.url   # the operation, not the token
```

**`RawError` arm** — a status the operation does not document, which every operation can produce:

```python
from {root_package}.core import RawError

def test_unmapped_status_is_raw():
    client, transport = client_returning(json_response(418, {"whatever": 1}))

    with pytest.raises(ApiError) as exc_info:
        client.{Group}.{Operation}(...)

    assert isinstance(exc_info.value.error, RawError)
    assert exc_info.value.error.status_code == 418
    assert "/{expected/path}" in transport.last_request.url   # the operation, not the token
    # Body on demand: .text() always, .json() only if you know it is JSON (it raises ValueError).
```

**Take each operation's union from its own sheet row** — an error test copied from a sibling
operation can land in the `RawError` branch and pass for the wrong reason, asserting nothing about the
typed body you meant to check.

## Test the result-style (`with_raw_response`) variant

If your code uses the non-raising peer, there is nothing to catch — stub the response and assert on
the returned `Success` / `Failure` (`python-calling-endpoints`):

```python
from {root_package}.core import Failure, Success

def test_raw_response_reports_failure_without_raising():
    client, transport = client_returning(json_response(422, {"...": "..."}))

    result = client.{Group}.with_raw_response.{Operation}(...)

    assert isinstance(result, Failure)
    assert isinstance(result.error, {TypedError})       # the same union as the raising path
    assert result.status_code == 422
    assert "/{expected/path}" in transport.last_request.url   # the operation, not the token
```

Test in this mode when your code reads a header on the *success* path.

## Assert the outgoing request

`assert transport.requests` proves only that something was sent. Assert the things a regression would
actually change:

```python
import json
from {root_package}.core import JsonBody

req = transport.last_request
assert req.method == "POST"
assert req.url.endswith("/{expected/path}")
assert "{query_param}=..." in req.url                    # query is part of the URL string
assert isinstance(req.body, JsonBody)                    # narrow before reading
assert json.loads(req.body.content)["{wire_field}"] == "..."   # JsonBody carries the wire bytes
assert req.headers["authorization"] == "Bearer t"        # lowercase key — see below
assert req.headers["{header}"] == "..."                  # a real default reached the wire
```

**`HttpRequest.headers` keys are lowercased**, at every layer — the API's, the endpoint's, the auth
scheme's and your own `extra_headers` — so assert `req.headers["authorization"]`;
`req.headers["Authorization"]` is a `KeyError`.

**The body is already serialized by the time a transport sees it.** `req.body` is one of `JsonBody`
(`.content`, the compact UTF-8 JSON bytes, and `.media_type`), `FormBody` (`.content`, the
url-encoded bytes), `MultipartBody` (`.parts`, an ordered sequence of `MultipartText` and
`MultipartFile` — **not** a `.fields`/`.files` pair; a text part's `.content` is its UTF-8 bytes, and a
file part's `.content` is the unread descriptor you passed, never bytes), `BinaryBody`
(`.content`, `.media_type`) or `TextBody` (`.content`, `.media_type`, `.charset`). Parse the JSON bytes
with `json.loads` and assert on the result — there is no dumped object to read — and expect **wire
aliases**: a member whose Python name differs from its JSON name is under the JSON name
(`python-models`).

**A list-valued query or form parameter has a per-parameter wire format** — the `SerializationFormat`
on its `Param` in `apis/{controller}.py`: `indexed` (`name[0]=a&name[1]=b`, URL-encoded as
`name%5B0%5D=a`), `unindexed` (`name[]=a&name[]=b`), `plain` (`name=a&name=b`), or `csv` / `tsv` /
`psv` (`name=a,b`). Read it before asserting on `req.url`; `"name=a" in req.url` is the assertion that
fails against an indexed parameter. Path and header arrays always fold to one comma-separated value.

Worth asserting once, somewhere, because they are silent when wrong:

- **The value actually reached the wire.** A misspelled optional member becomes a preserved extra
  field, not an error (`python-models`); only an assertion on the serialized body catches it.
- **Idempotency keys**, on operations that accept one: the same logical operation retried sends the
  *same* value, and two different operations send different ones (`python-configuration-resilience`).
- **Timeout plumbing.** `req.timeout` carries a per-call `request_options={"timeout": ...}` and
  **only** that, so it is `None` on an ordinary call. The client's own `timeout=` never rides the
  request — it configures the SDK's default transport, and with a stub transport it reaches nothing.
- **Bodies that cannot serialize.** A value the SDK cannot dump raises *before* anything is sent, so
  the failure never reaches your stub and `transport.requests` stays empty. Worth one test where it
  applies (`python-models`).

## Cover the failures that are not `ApiError`

Three failure kinds never match `except ApiError` (`python-error-handling`); each is cheap to
simulate.

**A decode failure** raises `ResponseDecodeError` (pydantic's `ValidationError`, or a plain `ValueError`
for a non-JSON body, on `__cause__`) in both response modes — `with_raw_response` does **not** turn it
into a `Failure`:

```python
def test_unreadable_success_body_is_not_reported_as_failure():
    # A real decode failure needs a TYPE mismatch, not an absent member.
    client, transport = client_returning(json_response(200, {"{wire_field}": "not-a-list"}))
    with pytest.raises(ProviderError) as e:
        service.{operation}()
    assert e.value.outcome_unknown                 # unreadable: may have happened, never "failed"
    assert "/{expected/path}" in transport.last_request.url   # the operation, not the token
```

**A truncated 2xx that decodes cleanly.** A response missing an optional member validates fine and
reads back `UNSET` (`python-error-handling`). Only your own guard catches it, so test the guard:

```python
def test_truncated_success_body_is_not_reported_as_success():
    client, transport = client_returning(json_response(200, {}))   # no {wire_field}
    with pytest.raises(ProviderError) as e:
        service.{operation}()
    assert e.value.outcome_unknown                 # unreadable: may have happened, never "failed"
    assert "/{expected/path}" in transport.last_request.url   # the operation, not the token
```

**A connection failure**, which arrives as `SdkConnectionError` with the HTTP library's exception on
`__cause__`. A transport owes that shape, so the stub raises it too: answer any token response you
queue, then raise on the operation's request:

```python
import httpx2
from {root_package}.core import SdkConnectionError, SdkTimeoutError, safe_url

class RaisingTransport(StubTransport):
    """Answers the queued responses, then raises the family's exception for `cause` on the next send."""

    def __init__(self, cause: httpx2.TransportError, *responses: StubResponse) -> None:
        super().__init__(*responses)
        self._cause = cause

    def send(self, request: HttpRequest) -> HttpResponse:
        if self._responses:                        # a queued token response, if any
            return super().send(request)
        self.requests.append(request)
        method, url = request.method, safe_url(request.url)
        if isinstance(self._cause, httpx2.TimeoutException):
            raise SdkTimeoutError(f"{method} {url} timed out", method=method, url=url, timeout=5.0) from self._cause
        raise SdkConnectionError(f"{method} {url} could not be sent: {self._cause}", method=method, url=url) from self._cause


def client_raising(cause: httpx2.TransportError, *responses: StubResponse) -> tuple[{Api}Client, RaisingTransport]:
    # Pass token_response() only for OAuth where the SDK fetches the token itself (no
    # {scheme}_token_source); never for bearer, API key or basic auth.
    transport = RaisingTransport(cause, *responses)
    return {Api}Client(custom_http_client=transport, retry_options=0, {scheme}=...), transport


def test_refused_connection_is_a_known_outcome():
    client, transport = client_raising(httpx2.ConnectError("refused"))        # never sent
    with pytest.raises(ProviderError) as e:
        service.{operation}()
    assert (e.value.status_code, e.value.outcome_unknown) == (502, False)
    assert "/{expected/path}" in transport.last_request.url              # the operation, not the token


def test_read_timeout_is_an_unknown_outcome():
    client, transport = client_raising(httpx2.ReadTimeout("no reply"))        # may have landed
    with pytest.raises(ProviderError) as e:
        service.{operation}()
    assert (e.value.status_code, e.value.outcome_unknown) == (504, True)
    assert "/{expected/path}" in transport.last_request.url              # the operation, not the token
```

Test both inputs and expect **different** values: a test of only one, or two that one assertion
satisfies, cannot tell a never-sent failure from one that may have landed. When the SDK fetches a
token, let the token request through first — a failure *there* means your operation was never sent at
all.

And the one people forget: **bad credentials**. A failed token fetch raises `AuthSchemeError`, with
the token endpoint's `ApiError` on `__cause__` (never the operation's), and it surfaces out of the
operation call. Return an RFC 6749 error body from the **token** request and assert your
configuration error, not a rejection error:

```python
def test_bad_credentials_is_a_config_error():
    client, _ = client_returning(json_response(401, {"error": "invalid_client"}))   # no token_response()
    with pytest.raises(ProviderError) as e:
        service.{operation}()
    assert e.value.status_code == 502              # our credentials: never the caller's 401
```

## Async tests

Same seam, async shape — `async def send`, and `aclose` rather than `close`. The async client reads
the response with `aiter_bytes`, `aread` and `aclose`, so queue an `AsyncStubResponse`, never a
`StubResponse`:

```python
from collections.abc import AsyncIterator
from {root_package}.core import AsyncHttpResponse, HttpMethod, HttpRequest

@dataclass
class AsyncStubResponse:
    status_code: int = 200
    headers: Mapping[str, str] = field(default_factory=dict)
    chunks: list[bytes] = field(default_factory=list)
    method: HttpMethod = "GET"   # what a streamed payload names in its errors, with url
    url: str = "https://api.test/resource"
    closed: bool = False

    async def aiter_bytes(self, chunk_size: int | None) -> AsyncIterator[bytes]:
        for chunk in self.chunks:
            yield chunk
        self.closed = True

    async def aread(self) -> bytes:
        self.closed = True
        return b"".join(self.chunks)

    async def aclose(self) -> None:
        self.closed = True


def async_json_response(status: int, body: object) -> AsyncStubResponse:
    return AsyncStubResponse(
        status_code=status,
        headers={"content-type": "application/json"},
        chunks=[json.dumps(body).encode()],
    )


class StubAsyncTransport:
    def __init__(self, *responses: AsyncStubResponse) -> None:
        self._responses = list(responses)
        self.requests: list[HttpRequest] = []
    async def send(self, request: HttpRequest) -> AsyncHttpResponse:
        self.requests.append(request)
        return self._responses.pop(0)
    async def aclose(self) -> None: ...
    @property
    def last_request(self) -> HttpRequest:
        return self.requests[-1]

@pytest.mark.asyncio
async def test_operation():
    transport = StubAsyncTransport(async_json_response(200, {...}))
    client = Async{Api}Client(custom_async_http_client=transport, retry_options=0, {scheme}=...)
```

Use `pytest-asyncio` or `anyio`, whichever the project already uses. The type checker rejects a sync
stub passed to the async client and vice versa, which is a genuine safety net — do not silence it with
a `# type: ignore`.

## Keeping tests independent of SDK internals

- **Never import from a private module.** Everything you need is re-exported from
  `{root_package}.core`, `.models`, `.models.enums` and `.errors`. An import reaching into the
  runtime's internal layout (`…core.results`, `…core._internal.…`) will break — those modules are
  explicitly free to move behind the facade.
- **Never assert on `str(e)` / `repr(e)`** of an SDK exception or a `RawError`. Both are deliberately
  terse — status and payload type name only, body omitted — and are not a contract. Assert
  `e.status_code` and the narrowed `e.error` fields.
- **Never introspect `model_fields`** to build test data. Construct models explicitly; a test that
  derives its payload from the model's own definition cannot detect a wrong payload.
- **Build fixtures with models, then serialize** — `{request_fixture}().to_dict()` — rather than
  hand-writing wire JSON, so a member rename fails the fixture instead of passing a stale test.
- **Test your own boundary's output** — the `provider_error` mapping in `python-error-handling` — not
  that the SDK raises `ApiError` on a 422, which is the SDK's own tested behaviour.

## Integration tests against a live environment

Keep them separate from unit tests (`-m integration`), skip when credentials are absent, and never
assert on ids or timestamps the provider generates:

```python
@pytest.mark.integration
@pytest.mark.skipif(not os.getenv("{API}_CLIENT_ID"), reason="sandbox credentials not configured")
def test_real_{operation}():
    with {Api}Client({scheme}=..., {server_keyword}={sandbox}, timeout=15.0) as client:
        value = client.{Group}.{Operation}(...)
        assert value.{member}
```

Point them at the sandbox/test environment **explicitly** rather than relying on the default, so the
test states which environment it needs. `{server_keyword}` is `environment=` wherever the client has
one, else `base_url=` or `server_config=`, with the value shaped as the table in
`python-configuration-resilience` shows. Expect flakiness from the provider, not from your code, and
never gate CI on a third party's uptime unless you mean to.

## Notes

- **Retries are on by default**, so a stubbed `429`/`503` on a `GET`, `HEAD`, `PUT` or `OPTIONS` call is
  sent up to four times, with real backoff waits between them. Build test clients with
  `retry_options=0` so one stubbed response is seen exactly once. In a test *about* retrying, set a
  policy with `initial_delay` and `max_jitter` small, queue one response per attempt and count
  `transport.requests`. For the loop to retry a
  *connection* failure the fake must raise `SdkConnectionError` from `{root_package}.core`, as
  `RaisingTransport` does — a bare `httpx2.ConnectError` bypasses the loop and reaches the test,
  unwrapped, on the first attempt
  (`python-configuration-resilience`).
- A stubbed `401` fails one operation and the *next* call re-fetches a token
  (`python-authentication`), so queue another `token_response()` for it.
- Mocking libraries (`unittest.mock`, `pytest-mock`) work too — the protocol is structural, so a
  `Mock()` with `send` and `close` configured satisfies it. The hand-written stub above gives you
  typed captured requests and ordered responses for free.
- **A download** is the same `StubResponse`, wrapped in the `FileResponse` your code sees; give it
  `chunks` if the test drives `iter_bytes`. Making an abandoned download's `ResourceWarning` fail a
  test is in `python-file-handling`.
- **Use the client as a context manager or close it** in tests as in production; a stub's `close()` is
  a no-op, but the habit keeps the test and the real wiring the same shape
  (`python-client-initialization`).
- To look up an operation's signature, its request/response types, or an operation's error union, take
  them from the contract sheet — grounded in the operation's SDK map block, which carries all three —
  not from a reflected view of the installed package, and not from memory.
- Prefer this transport-seam approach over wrapping the SDK in your own protocol unless you need to
  abstract the SDK for other reasons.
