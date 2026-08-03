---
name: python-testing
description: Unit-test code that uses an APIMatic-generated Python SDK — the primary test seam is HttpCallBack (subclass it, implement on_before_request/on_after_response, pass as http_call_back= to capture responses without hitting the network), or stub at the requests transport level with the responses library or unittest.mock.patch on requests.Session.send for true offline tests; assert APIException/.response_code on error paths; set max_retries=0 so stubbed 5xx calls fail fast. Use when writing, mocking, or stubbing tests for calls through an APIMatic Python SDK — load it even after reading the constructor in the source, since the seam alone won't tell you that HttpCallBack is the SDK's own hook point, that the generated HttpResponseCatcher is the canonical pattern, or how to assert the right exception type per operation.
---

# Testing code that uses an APIMatic Python SDK

> `PazecheckoutapiClient` is the SDK's client class — **read the real name** from `paze/paze_client.py`
> (it is derived from the package name, not the API title, so do not guess it from the API name).

The SDK uses `apimatic-requests-client-adapter` wrapping `requests`. Two seams are available:

1. **`HttpCallBack`** — the SDK's own hook: subclass it and pass as `http_call_back=`. Fires on
   every request/response but **does not intercept the HTTP call** — real network traffic still
   happens (useful for integration tests against a running server, not for offline unit tests).
2. **Transport-level stub** — intercept `requests.Session.send` with `responses`, `requests_mock`,
   or `unittest.mock.patch`. No real network traffic; fully offline.

**Match the project's existing test stack.** Check the test files for `pytest` vs `unittest` and
the assertion style already in use. The samples below use `unittest` + `pytest.raises` for
reference; substitute your `paze` and `PazecheckoutapiClient` names.

> `{...}` tokens are placeholders for names from your SDK.

## The HttpCallBack seam — capture responses (integration style)

The generated `HttpResponseCatcher` in `tests/http_response_catcher.py` is the canonical pattern.
Copy or subclass it:

```python
from paze.http.http_call_back import HttpCallBack

class HttpResponseCatcher(HttpCallBack):
    def __init__(self):
        self._response = None

    @property
    def response(self):
        return self._response

    def on_before_request(self, request):
        pass   # optionally inspect/log the outgoing request

    def on_after_response(self, response):
        self._response = response   # captures the HttpResponse
```

Wire it into the client:

```python
from paze.configuration import Configuration, Environment
from paze.paze_client import PazecheckoutapiClient

catcher = HttpResponseCatcher()
config = Configuration(
    environment=Environment.PRODUCTION,
    http_call_back=catcher,
    # auth credentials ...
)
client = PazecheckoutapiClient(config=config)

result = client.{resource}.{operation}(...)
assert catcher.response.status_code == 200
assert result is not None
```

Access the controller's own catcher via `controller.http_call_back` — the generated tests do this:

```python
controller = client.{resource}   # @LazyProperty
response_catcher = controller.http_call_back
result = controller.{operation}(...)
assert response_catcher.response.status_code == 200
assert response_catcher.response.text == 'expected body'
```

## Transport-level stub — offline unit tests

Use the `responses` library (for `requests`-based SDKs) to intercept HTTP at the transport level.
No real network traffic happens; auth credentials can be dummy values.

```python
import responses as rsps_lib
import pytest
from paze.configuration import Configuration, Environment
from paze.paze_client import PazecheckoutapiClient
from paze.exceptions.api_exception import APIException

@rsps_lib.activate
def test_{operation}_success():
    rsps_lib.add(
        method=rsps_lib.GET,
        url=f'{BASE}/{resource_path}',   # BASE = config.get_base_uri()
        json={'access_token': 'abc', 'token_type': 'Bearer'},
        status=200,
    )

    config = Configuration(
        environment=Environment.PRODUCTION,
        max_retries=0,   # disable retries so a stubbed 5xx fails fast
    )
    client = PazecheckoutapiClient(config=config)
    result = client.{resource}.{operation}(...)

    assert result.access_token == 'abc'
    assert result.token_type == 'Bearer'
```

## Alternative — unittest.mock.patch on requests.Session.send

If you prefer not to add the `responses` dependency, patch `requests.Session.send` directly:

```python
import json
from unittest.mock import MagicMock, patch
from paze.configuration import Configuration, Environment
from paze.paze_client import PazecheckoutapiClient
from paze.exceptions.api_exception import APIException

def make_mock_response(status_code, body):
    mock = MagicMock()
    mock.status_code = status_code
    mock.text = json.dumps(body) if isinstance(body, dict) else body
    mock.headers = {}
    mock.reason = 'OK' if status_code < 400 else 'Error'
    return mock

def test_{operation}_success():
    with patch('requests.Session.send') as mock_send:
        mock_send.return_value = make_mock_response(200, {'id': 1, 'name': 'widget'})

        config = Configuration(environment=Environment.PRODUCTION, max_retries=0)
        client = PazecheckoutapiClient(config=config)
        result = client.{resource}.{operation}(...)

        assert result.id == 1

        # Assert the outgoing request:
        prepared_request = mock_send.call_args[0][0]
        assert '/expected/path' in prepared_request.path_url
        assert prepared_request.method == 'GET'
```

## Test an error path

Controller methods raise `APIException` (or a typed subclass) on non-2xx. Assert the specific type
matching the operation — see **python-error-handling** to find the right class.

```python
from paze.exceptions.api_exception import APIException
from paze.exceptions.o_auth_provider_exception import OAuthProviderException

@rsps_lib.activate
def test_{operation}_raises_on_4xx():
    rsps_lib.add(
        method=rsps_lib.POST,
        url=f'{BASE}/{resource_path}',   # BASE = config.get_base_uri()
        json={'error': 'invalid_request', 'error_description': 'bad input'},
        status=400,
    )

    config = Configuration(environment=Environment.PRODUCTION, max_retries=0)
    client = PazecheckoutapiClient(config=config)

    with pytest.raises(OAuthProviderException) as exc_info:
        client.{resource}.{operation}(...)

    assert exc_info.value.response_code == 400
    assert exc_info.value.error == 'invalid_request'
    if hasattr(exc_info.value, 'error_description'):
        assert exc_info.value.error_description == 'bad input'

# When no typed subclass is generated, catch APIException:
@rsps_lib.activate
def test_{operation}_raises_api_exception():
    rsps_lib.add(method=rsps_lib.GET, url=f'{BASE}/{path}',
                 json={'message': 'not found'}, status=404)

    config = Configuration(environment=Environment.PRODUCTION, max_retries=0)
    client = PazecheckoutapiClient(config=config)

    with pytest.raises(APIException) as exc_info:
        client.{resource}.{operation}(...)

    assert exc_info.value.response_code == 404
```

## Assert the outgoing request

With `responses`, inspect `rsps_lib.calls[0].request`:

```python
@rsps_lib.activate
def test_outgoing_request_shape():
    rsps_lib.add(method=rsps_lib.POST, url=f'{BASE}/{path}',
                 json={}, status=200)

    config = Configuration(environment=Environment.PRODUCTION, max_retries=0)
    client = PazecheckoutapiClient(config=config)
    client.{resource}.{operation}(body=...)

    sent = rsps_lib.calls[0].request
    assert sent.method == 'POST'
    assert '/{expected_path}' in sent.url
    sent_body = json.loads(sent.body)
    assert sent_body['required_field'] == 'expected_value'
```

## Notes

- Set `max_retries=0` on the test config so a stubbed `5xx` fails on the first attempt without
  waiting for backoff; see **python-configuration-resilience**.
- To test that retries do fire, register the stub to return `503` then `200` and count calls —
  remember only `GET`/`PUT` are retried by default.
- Auth credentials (`basic_auth_credentials`, etc.) are validated at construction and applied to
  outgoing headers — passing dummy credential objects or `None` is fine when the transport is
  stubbed.
- To look up an operation's exact signature, its parameter names, or a typed exception's
  attributes, read the SDK source `.py` files in the cloned repo — don't rely on the installed
  wheel alone.
- **Get the stub URL from the SDK, not from this page.** Every environment resolves to a real remote
  host — read the `environments` dict in `paze/configuration.py`, or call
  `config.get_base_uri()`, and use that exact prefix in `responses` stubs. No environment resolves to
  `localhost`, so a stub registered against a localhost URL silently never matches and the call
  escapes to the network.
