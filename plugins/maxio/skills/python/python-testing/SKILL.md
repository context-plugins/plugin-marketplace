---
name: python-testing
description: Testing code that calls an APIMatic-generated Python SDK — which seam to fake (the transport protocol, or respx at the httpx layer), asserting on the request the SDK actually built, covering the error and decode-failure paths, and keeping tests independent of SDK internals. Load before writing tests for the integration layer.
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
the two methods:

```python
import json
from {root_package}.core import HttpRequest, HttpResponse

class StubTransport:
    """Satisfies the SDK's sync transport protocol: send() + close()."""

    def __init__(self, *responses: HttpResponse) -> None:
        self._responses = list(responses)
        # Every request, in order — the token fetch appends too, so this is what you count.
        self.requests: list[HttpRequest] = []

    def send(self, request: HttpRequest) -> HttpResponse:
        self.requests.append(request)
        return self._responses.pop(0)

    def close(self) -> None: ...

    @property
    def last_request(self) -> HttpRequest | None:
        return self.requests[-1] if self.requests else None


def json_response(status: int, body: object) -> HttpResponse:
    return HttpResponse(
        status_code=status,
        headers={"content-type": "application/json"},   # lowercase keys, per the transport contract
        content=json.dumps(body).encode(),
    )
```

`HttpResponse` defaults `content` to `b""` and `request` to `None`, so an empty `204` is just
`HttpResponse(status_code=204, headers={})` — which is what an operation declaring no response body
expects (`python-calling-endpoints`).

Wire it in and you have a real client with no network:

```python
def client_returning(*responses: HttpResponse) -> tuple[{Api}Client, StubTransport]:
    transport = StubTransport(*responses)
    client = {Api}Client(custom_http_client=transport, {scheme}={"...": "..."})
    return client, transport
```

The keyword is `custom_http_client=` on the sync client and `custom_async_http_client=` on the async
one; both constructors are keyword-only, and the credential keyword is named after the scheme the
contract sheet lists.

**Do not patch the client's private attributes** (`_raw_client`, `_auth`, …) and do not
`Mock(spec={Api}Client)`. Both couple your tests to internals the generator is free to change, and a
mocked client cannot catch the mistakes that actually happen — a wrong path parameter, a body that
does not serialize, a header you forgot. Faking the transport exercises the real request-building
pipeline; that is the whole point.

### The token request comes first

With a managed-OAuth scheme configured, the token is fetched **lazily on the first authenticated
call**, through the same transport — so the *first* request your stub sees is the `POST` to the token
endpoint, not your operation. Two ways to handle it.

Queue a token response ahead of the operation's, and index from the end:

```python
def token_response() -> HttpResponse:
    return json_response(200, {"access_token": "t", "token_type": "Bearer", "expires_in": 3600})

client, transport = client_returning(token_response(), json_response(201, {...}))
...
assert len(transport.requests) == 2
req = transport.last_request          # index from the end, not [0]
```

Or bypass acquisition entirely with a stub token source — the generator's supported injection point
(`python-authentication`) — so the stub transport only ever sees your operation:

```python
from {root_package}.core import OAuthToken

class StubTokenSource:
    def fetch(self, credentials) -> OAuthToken:            # async client: `async def fetch`
        return OAuthToken(access_token="t", token_type="Bearer")

client = {Api}Client(
    custom_http_client=transport,
    {scheme}={"...": "..."},                  # still required — the scheme exists only if it is set
    {scheme}_token_source=StubTokenSource(),
)
```

The token is **cached on the scheme**, so only the first call fetches one: a test making two calls
against one client sees three requests, not four. Forgetting the token request is the most common way
a first test fails confusingly — the operation's decoder is handed the token body, and you get a
`ValidationError` about your payload rather than anything mentioning auth.

## Test a success path

```python
def test_returns_deserialized_body():
    client, _ = client_returning(token_response(), json_response(200, {"{wire_field}": "..."}))

    value = client.{Group}.{Operation}(...)

    assert value.{member} == "..."
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
    client, _ = client_returning(token_response(), json_response(422, {"...": "..."}))

    with pytest.raises(ApiError) as exc_info:
        client.{Group}.{Operation}(...)

    e = exc_info.value
    assert e.status_code == 422                    # always present, whichever arm you got
    assert isinstance(e.error, {TypedError})       # narrow before reading fields
    assert e.error.{message_field} == "..."
```

**`RawError` arm** — a status the operation does not document, which every operation can produce:

```python
from {root_package}.core import RawError

def test_unmapped_status_is_raw():
    client, _ = client_returning(token_response(), json_response(418, {"whatever": 1}))

    with pytest.raises(ApiError) as exc_info:
        client.{Group}.{Operation}(...)

    assert isinstance(exc_info.value.error, RawError)
    assert exc_info.value.error.status_code == 418
    # Body on demand: .text() always, .json() only if you know it is JSON (it raises ValueError).
```

**Take the union from the contract sheet per operation.** The typed arm is not one type across the
API, so an error test copied from a sibling operation can pass for the wrong reason — it lands in the
`RawError` branch and asserts nothing about the typed body you meant to check. And never assert on
`str(e)` or `repr(e)`: they render as status plus payload *type name* by design, and are not a stable
contract.

## Test the result-style (`with_raw_response`) variant

If your code uses the non-raising peer (`python-calling-endpoints`), there is nothing to catch — stub
the response and assert on the returned `ApiResult` directly. The split is mechanical: **2xx is
`Success`, everything else is `Failure`**, and both carry `.response`.

```python
from {root_package}.core import Failure, Success

def test_raw_response_reports_failure_without_raising():
    client, _ = client_returning(token_response(), json_response(422, {"...": "..."}))

    result = client.{Group}.with_raw_response.{Operation}(...)

    assert isinstance(result, Failure)
    assert isinstance(result.error, {TypedError})       # the same union as the raising path
    assert result.response.status_code == 422
```

`.response` is the only way to read **response headers**, so this is also the mode to test in when
your code depends on a header on the *success* path (`Success(payload=..., response=...)`).

## Assert the outgoing request

`assert transport.requests` proves only that something was sent. Assert the things a regression would
actually change:

```python
req = transport.last_request
assert req.method == "POST"
assert req.url.endswith("/{expected/path}")
assert "{query_param}=..." in req.url                    # query is part of the URL string
assert req.body.value["{wire_field}"] == "..."           # JsonBody carries the dumped payload
assert req.headers["authorization"] == "Bearer t"        # lowercase key — see below
assert req.headers["{header}"] == "..."                  # a real default reached the wire
```

**`HttpRequest.headers` keys are lowercased, not just the response's.** Every layer — the API's, the
endpoint's, the auth scheme's and your own `extra_headers` — is normalized before the merge, which is
exactly what makes the merge case-insensitive. So `req.headers["Authorization"]` is a `KeyError` and
`req.headers["authorization"]` is the assertion you want. This is the single most common way a first
request assertion fails confusingly. (The defensive `"authorization" in {k.lower() for k in
req.headers}` also works, but there is no case to defend against — assert the lowercase key.)

**The body is already serialized by the time a transport sees it.** `req.body` is one of `JsonBody`
(`.value`, the dumped JSON-safe object), `FormBody` (`.fields`) or `MultipartBody`
(`.fields` / `.files`) — no transport ever serializes anything — so assert on the dumped value
directly rather than re-parsing bytes. Note it uses **wire aliases**, because that is what
serialization produces: if a model's Python name differs from its JSON name, the request body has the
JSON name. Do not "fix" that in the test.

**A list-valued query or form parameter has a per-parameter wire format.** The `Param` the generator
emitted for it in `apis/{controller}.py` carries a `SerializationFormat` — `indexed`
(`name[0]=a&name[1]=b`, URL-encoded as `name%5B0%5D=a`), `unindexed` (`name[]=a&name[]=b`), `plain`
(`name=a&name=b`), or `csv` / `tsv` / `psv` (`name=a,b`). Read it before asserting on `req.url`;
`"name=a" in req.url` is the assertion that fails against an indexed parameter. Path and header
arrays are not configurable — both fold to one comma-separated value.

Worth asserting once, somewhere, because they are silent when wrong:

- **The value actually reached the wire.** Models *preserve* unknown fields rather than rejecting them
  (`python-models`), so a misspelled optional member becomes a preserved extra field instead of an
  error. The only thing that catches it is an assertion on the serialized body.
- **Idempotency keys**, on operations that accept one: the same logical operation retried sends the
  *same* value, and two different operations send different ones (`python-configuration-resilience`).
- **Timeout plumbing.** `req.timeout` reflects a per-call `request_options={"timeout": ...}` and
  **only** that. The client's own `timeout=` never rides the request — it configures the SDK's default
  transport — so `req.timeout is None` on an ordinary call is correct, not a bug. A test that asserts
  the client-level timeout on a captured request is asserting something that was never there; and once
  you supply a stub transport, the client's `timeout=` reaches nothing at all.
- **Bodies that cannot serialize.** A value the SDK cannot dump raises *before* anything is sent, so
  the failure never reaches your stub and `transport.requests` stays empty. Worth one test where it
  applies (`python-models`).

## Cover the failures that are not `ApiError`

Three failure kinds never match `except ApiError`, and code that handles only the raised-`ApiError`
path is the norm (`python-error-handling`). Each is cheap to simulate.

**A decode failure — and it bypasses *both* response modes.** A body that does not deserialize raises
`pydantic.ValidationError` (or a plain `ValueError` for a non-JSON body). `with_raw_response` does
**not** turn it into a `Failure`:

```python
def test_unreadable_success_body_is_not_reported_as_failure():
    # A real decode failure needs a TYPE mismatch, not an absent member.
    client, _ = client_returning(token_response(), json_response(200, {"{wire_field}": "not-a-list"}))
    with pytest.raises(MyProviderUnreadable):
        service.{operation}()
```

**A truncated 2xx that decodes cleanly.** Members are required only where the description marks them
required — often nowhere — so a response missing a member validates fine and reads back `UNSET`. Only
your own guard catches it, so test the guard:

```python
def test_truncated_success_body_is_not_reported_as_success():
    client, _ = client_returning(token_response(), json_response(200, {}))   # no {wire_field}
    with pytest.raises(MyProviderUnreadable):
        service.{operation}()
```

**A transport failure**, which arrives as the HTTP library's own exception, unwrapped — have the stub
raise instead of answering:

```python
def test_transport_failure_is_unknown_outcome():
    class Boom:
        def send(self, request): raise httpx.ConnectError("refused")
        def close(self) -> None: ...
```

And the one people forget: **bad credentials**. A failed token fetch raises `ApiError` too, but its
payload is `OAuthProviderError | RawError` — *not* the operation's union — and it surfaces out of the
operation call. Return an RFC 6749 error body from the **token** request and assert your
configuration error, not a rejection error:

```python
def test_bad_credentials_is_a_config_error():
    client, _ = client_returning(json_response(401, {"error": "invalid_client"}))   # no token_response()
    with pytest.raises(MyProviderConfigError):
        service.{operation}()
```

## Async tests

Same seam, async shape — `async def send`, and `aclose` rather than `close`:

```python
class StubAsyncTransport:
    def __init__(self, *responses): self._responses = list(responses); self.requests = []
    async def send(self, request):
        self.requests.append(request)
        return self._responses.pop(0)
    async def aclose(self) -> None: ...

@pytest.mark.asyncio
async def test_operation():
    client = Async{Api}Client(custom_async_http_client=StubAsyncTransport(...), {scheme}=...)
```

Use `pytest-asyncio` or `anyio`, whichever the project already uses. The type checker rejects a sync
stub passed to the async client and vice versa, which is a genuine safety net — do not silence it with
a `# type: ignore`.

## The alternative: `respx`

Because the SDK's default transport is httpx, `respx` mocks at the HTTP layer and needs no injection —
your production code constructs its client unmodified:

```python
import respx, httpx

@respx.mock
def test_operation():
    respx.post("{base_url}{token_path}").mock(
        return_value=httpx.Response(200, json={"access_token": "t", "token_type": "Bearer"})
    )
    route = respx.post("{base_url}{operation_path}").mock(
        return_value=httpx.Response(201, json={"{wire_field}": "..."})
    )

    service.{operation}()                       # production code, unmodified

    assert route.called
    assert json.loads(route.calls.last.request.content)["{wire_field}"] == "..."
```

Pick one and be consistent. `respx` asserts on real URLs and is closer to the wire; the stub transport
is dependency-free, faster, and keeps working if the SDK ever changes HTTP library. Use `respx` when
you want URL-level matching, the stub when you are unit-testing your own logic. Note `respx` only
works while the default transport is in play — it cannot see a call made through a
`custom_http_client` you supplied.

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
- **Test your own boundary's output, not the SDK's.** The valuable assertions are that a provider 4xx
  becomes your 4xx and a transport failure becomes your 5xx. That the SDK raises `ApiError` on a 422
  is the SDK's own tested behaviour, not yours.

## Integration tests against a live environment

Keep them separate from unit tests (`-m integration`), skip when credentials are absent, and never
assert on ids or timestamps the provider generates:

```python
@pytest.mark.integration
@pytest.mark.skipif(not os.getenv("{API}_CLIENT_ID"), reason="sandbox credentials not configured")
def test_real_{operation}():
    with {Api}Client({scheme}=..., base_url={sandbox_url}, timeout=15.0) as client:
        value = client.{Group}.{Operation}(...)
        assert value.{member}
```

Point them at the sandbox/test environment **explicitly** rather than relying on the default, so the
test states which environment it needs. Expect flakiness from the provider, not from your code, and
never gate CI on a third party's uptime unless you mean to.

## Notes

- **The SDK performs no retries**, so a stubbed `429`/`503` is seen exactly once and your stub's queue
  needs exactly one response for it. If your code adds its own retry layer
  (`python-configuration-resilience`), that is *your* code under test: queue the responses each
  attempt should get and count `transport.requests`.
- **A `401` invalidates the cached token but does not retry the request.** A test that stubs a `401`
  therefore sees one failed operation — and the *next* call in the same test re-fetches a token, so
  queue another `token_response()` for it.
- Mocking libraries (`unittest.mock`, `pytest-mock`) work too — the protocol is structural, so a
  `Mock()` with `send`/`close` configured satisfies it. The hand-written stub above gives you typed
  captured requests and ordered responses for free.
- **Use the client as a context manager or close it** in tests as in production; a stub's `close()` is
  a no-op, but the habit keeps the test and the real wiring the same shape
  (`python-client-initialization`).
- To look up an operation's signature, its request/response types, or an operation's error union, take
  them from the contract sheet — grounded in the operation's SDK map block, which carries all three —
  not from a reflected view of the installed package, and not from memory.
- Prefer this transport-seam approach over wrapping the SDK in your own protocol unless you need to
  abstract the SDK for other reasons.
