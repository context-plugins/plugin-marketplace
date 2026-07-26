---
name: ruby-testing
description: Unit-test code that uses an APIMatic-generated Ruby SDK by stubbing the Faraday HTTP layer — the test seam is the Faraday adapter (use faraday-test or WebMock); stub success and error responses, assert the outgoing request URL/method/body, assert APIException (with response_code) on error paths, and keep retries off in tests. Use when writing, stubbing, or verifying tests for calls through an APIMatic Ruby SDK — load it even after reading the controller in the source, since the seam alone won't tell you which library (faraday-test vs. WebMock) matches the project's stack, how to assert response_code on APIException, or why retries must be disabled for deterministic stubs.
---

# Testing code that uses an APIMatic Ruby SDK

The SDK's HTTP transport is `CoreLibrary::FaradayClient` built from `Configuration`. The test seam is
the Faraday layer — replace the real transport with a stub adapter so no real network calls happen. Two
approaches work: the **Faraday test adapter** (built into Faraday, no extra gem) and **WebMock** (stubs
at the Rack/socket level). Check the project's `Gemfile` and existing tests to see which is in use and
mirror it.

> `{...}` tokens are placeholders for per-API names. Match the project's existing test stack.

## Approach A — Faraday test adapter (no extra gem)

Faraday ships a `:test` adapter. Build a `Faraday::Connection` with it and pass it as `connection:` to
the client:

```ruby
require '{gem_name}'

def stub_client(stubs)
  conn = Faraday.new do |f|
    f.adapter :test, stubs
  end
  LocationScore::Client.new(
    connection:  conn,
    max_retries: 0   # disable retries — deterministic test behavior
  )
end

# In a test (Minitest shown; same stubs work in RSpec):
stubs = Faraday::Adapter::Test::Stubs.new

stubs.get('/auth/customAuthentication') do |env|
  [200, { 'Content-Type' => 'text/plain' }, 'ok']
end

client = stub_client(stubs)
result = client.authentication.custom_authentication
assert_equal 'ok', result
stubs.verify_stubbed_calls   # assert no uncalled stubs were left
```

Return `[status_code, headers_hash, body_string]` from each stub block.

### Stubbing an error response

```ruby
stubs.get('/some/endpoint') do |_env|
  [401, { 'Content-Type' => 'application/json' }, '{"error":"invalid_client"}']
end

client = stub_client(stubs)
assert_raises LocationScore::APIException do
  client.{resource_controller}.{operation}(...)
end
```

### Asserting the outgoing request inside the stub

The `env` parameter in the stub block is a `Faraday::Env`. Inspect it to assert method, URL, and body:

```ruby
stubs.post('/resource') do |env|
  body = JSON.parse(env.body)
  assert_equal 'expected_value', body['field']
  assert_equal 'application/json', env.request_headers['Content-Type']
  [201, { 'Content-Type' => 'application/json' }, '{"id":1}']
end
```

## Approach B — WebMock

WebMock stubs at the socket level and works with any Faraday adapter. Add it to the test `Gemfile`:

```ruby
# Gemfile (test group)
gem 'webmock', '~> 3.23'
```

```ruby
# spec/spec_helper.rb or test/test_helper.rb
require 'webmock/rspec'    # or require 'webmock/minitest'
```

WebMock disables all real outbound HTTP by default once required. Reset stubs between tests:

```ruby
# RSpec
config.before(:each) { WebMock.reset! }
```

Build a client pointed at a known base URL and stub that URL:

```ruby
BASE = 'http://localhost:3000'

def build_test_client
  LocationScore::Client.new(
    environment: LocationScore::Environment::TESTING,  # resolves to http://localhost:3000
    max_retries: 0
  )
end

# Stub a success
stub_request(:get, "#{BASE}/auth/customAuthentication")
  .to_return(status: 200, body: 'ok', headers: { 'Content-Type' => 'text/plain' })

client = build_test_client
result = client.authentication.custom_authentication
expect(result).to eq('ok')

# Stub an error
stub_request(:get, "#{BASE}/auth/customAuthentication")
  .to_return(
    status: 401,
    body:   '{"error":"invalid_client"}',
    headers: { 'Content-Type' => 'application/json' }
  )

expect { client.authentication.custom_authentication }
  .to raise_error LocationScore::APIException
```

### Asserting the outgoing request with WebMock

```ruby
# After the call:
expect(WebMock).to have_requested(:post, "#{BASE}/resource")
  .with(
    body:    hash_including('name' => 'Widget'),
    headers: hash_including('Content-Type' => 'application/json')
  )
```

## Asserting APIException attributes

The base exception exposes `response_code` (integer status) and `reason` (string message). Typed
subclasses (in `exceptions/`) add structured body fields:

```ruby
# Base APIException:
rescue LocationScore::APIException => e
  assert_equal 404, e.response_code
  assert_includes e.reason, 'Not Found'

# Typed subclass (e.g. OAuthProviderException):
rescue LocationScore::OAuthProviderException => e
  assert_equal 401, e.response_code
  assert_equal 'invalid_client', e.error
```

In RSpec with `raise_error`:

```ruby
expect { call }.to raise_error(LocationScore::OAuthProviderException) do |e|
  expect(e.response_code).to eq(401)
  expect(e.error).to eq('invalid_client')
end
```

## Testing transport errors

```ruby
# Faraday test adapter — raise an error from the stub:
stubs.get('/path') { raise Faraday::ConnectionFailed, 'getaddrinfo failed' }

assert_raises Faraday::ConnectionFailed do
  client.{resource_controller}.{operation}(...)
end

# WebMock equivalent:
stub_request(:get, url).to_raise(Faraday::ConnectionFailed)
```

## Capturing the request/response via HttpCallBack

The generated `test/` suites don't stub the transport at all — they run against a live test server and
capture what crossed the wire with an `HttpCallBack`. That same hook is a useful, transport-agnostic way
to assert the raw request/response in your own tests (combine it with a stub adapter above):

```ruby
class ResponseCatcher < LocationScore::HttpCallBack
  attr_reader :response
  def on_before_request(request); @request = request; end
  def on_after_response(response); @response = response; end
end

catcher = ResponseCatcher.new
client  = LocationScore::Client.new(connection: conn, max_retries: 0, http_callback: catcher)

client.{resource_controller}.{operation}(...)
assert_equal 200, catcher.response.status_code
assert_equal '{"id":1}', catcher.response.raw_body
```

This mirrors the generated `HttpResponseCatcher` in `test/` (methods `on_before_request` /
`on_after_response`), and lets you assert `status_code` / `raw_body` without inspecting the stub's `env`.

## Key notes

- **Always set `max_retries: 0`** on the test client. A `5xx` stub with retries enabled causes the
  SDK to sleep and repeat calls — tests become slow and fragile. See **ruby-configuration-resilience**.
- **Environment/base URL:** the generated `Environment::TESTING` constant resolves to a localhost URL
  (e.g. `http://localhost:3000`) — use it so your WebMock stubs match. Check `configuration.rb` for
  the exact `ENVIRONMENTS` hash.
- **Typed vs. base errors:** rescue the typed subclass first (`OAuthProviderException`), then the base
  `APIException` — the subclass is an `APIException`, so a base rescue catches it if placed first.
- **Look up controller signatures in the source** — don't guess parameter names from the module cache.
  See `lib/{gem}/controllers/` and `doc/controllers/`.
