---
name: ruby-error-handling
description: Handle errors from an APIMatic-generated Ruby SDK — APIException (extending CoreLibrary::ApiException) is the base for all HTTP errors, with @response_code (integer status) and @reason (string message) exposed via to_s/inspect; typed subclasses in exceptions/ call super(reason, response) then unbox the JSON body via APIHelper.json_deserialize to add structured fields; transport errors are Faraday exceptions outside the APIException hierarchy. Use the moment you rescue an SDK error, need the HTTP status code or parsed body, or want to distinguish a typed OAuth error from a generic 4xx. Load it even after reading the exception class in the source, since @response_code and @reason are inherited from CoreLibrary::ApiException and not visible in the generated wrapper file — you won't find their definitions there.
---

# Error handling for an APIMatic Ruby SDK

All HTTP-level errors from the SDK raise an `APIException` (or a typed subclass). Transport
failures (network unreachable, timeout) raise Faraday exceptions — a separate hierarchy.

> `{...}` tokens are placeholders for per-API names. The generated `exceptions/` directory
> contains the concrete classes.

## The base exception: `APIException`

`APIException` extends `CoreLibrary::ApiException`. The two attributes you need are inherited
from the core library and visible in `to_s`/`inspect`:

| Attribute | Type | Description |
|---|---|---|
| `@response_code` | `Integer` | HTTP status code (e.g. `404`, `422`) |
| `@reason` | `String` | Reason phrase / error message |

There is no public `response_body` accessor on the base class — the raw body is available on
the `HttpResponse` object stored internally. For structured body data, use a typed subclass (see
below) or deserialize `e.response.raw_body` manually.

```ruby
begin
  result = client.{resource_controller}.{operation}(...)
rescue MaxioAdvancedBilling::APIException => e
  puts "HTTP #{e.response_code}"   # e.g. 404
  puts e.reason                    # e.g. "Not Found"
end
```

The `GLOBAL_ERRORS` block in `BaseController` wires `APIException` as the default for any
undocumented non-2xx status (`'default'` key), so any unregistered error code raises the base
class.

## Typed subclass exceptions

Typed errors live in `exceptions/` and inherit from `APIException`. They are generated for
specific status codes the API documents. Their constructor calls:

```ruby
def initialize(reason, response)
  super(reason, response)
  hash = APIHelper.json_deserialize(@response.raw_body)
  unbox(hash)
end
```

`unbox` extracts typed fields from the parsed JSON body (similar to a model's `from_hash`):

```ruby
# OAuthProviderException — raised on 400/401 from OAuth endpoints
begin
  client.o_auth_authorization.request_token(...)
rescue MaxioAdvancedBilling::OAuthProviderException => e
  puts e.response_code          # HTTP status
  puts e.error                  # OAuthProviderErrorEnum value, e.g. "invalid_client"
  puts e.error_description      # human-readable detail (optional field)
rescue MaxioAdvancedBilling::APIException => e
  puts "Generic error #{e.response_code}: #{e.reason}"
end
```

**Rule:** rescue typed subclasses first (more specific), then fall back to the base
`APIException`. A subclass is an `APIException`, so the base rescue catches everything if placed
first.

## Checking the status code

Branch on `e.response_code` when no typed subclass exists for a status:

```ruby
begin
  result = client.{resource_controller}.{operation}(...)
rescue MaxioAdvancedBilling::APIException => e
  case e.response_code
  when 400
    warn "Bad request: #{e.reason}"
  when 401, 403
    raise "Auth error #{e.response_code}"
  when 404
    return nil
  when 429
    sleep(5) && retry
  when 500..599
    raise "Server error #{e.response_code}"
  else
    raise e
  end
end
```

## Parsing the raw response body

The raw body is on `e.response.raw_body` (a `String`). For typed subclasses, fields are already
parsed into attributes by `unbox`. For the base class:

```ruby
rescue MaxioAdvancedBilling::APIException => e
  begin
    body = APIHelper.json_deserialize(e.response.raw_body)
    message = body&.dig('error', 'message') || e.reason
  rescue
    message = e.reason
  end
  warn "API error: #{message}"
end
```

## Transport errors — Faraday exceptions

Network-level failures do not produce an `HttpResponse` and never raise `APIException`. They
surface as Faraday exceptions from the underlying `FaradayClient`:

```ruby
begin
  result = client.{resource_controller}.{operation}(...)
rescue MaxioAdvancedBilling::APIException => e
  # HTTP error — response was received
rescue Faraday::ConnectionFailed => e
  warn "Network unreachable: #{e.message}"
rescue Faraday::TimeoutError => e
  warn "Request timed out: #{e.message}"
end
```

The SDK uses `CoreLibrary::FaradayClient` internally; Faraday's standard error hierarchy applies.
Retries (when enabled) fire **before** the exception bubbles up — see **ruby-configuration-resilience**.

## Exception hierarchy

```
StandardError
  └── CoreLibrary::ApiException
        └── MaxioAdvancedBilling::APIException          ← base for all HTTP errors
              └── MaxioAdvancedBilling::{OperationError}  ← typed, if generated (in exceptions/)

Faraday::Error                                  ← transport errors — separate hierarchy
  ├── Faraday::ConnectionFailed
  └── Faraday::TimeoutError
```

Typed subclasses are generated per-operation or per-resource. Check `exceptions/` for the full list
and `controllers/` for which status codes wire them: each operation's response handler registers them
with `.local_error('400', '...message...', MaxioAdvancedBilling::{OperationError})`, and any status without a
registered `local_error` falls through to the `'default'` entry in `BaseController::GLOBAL_ERRORS`
(an `ErrorCase` whose `exception_type` is the base `APIException`).

## Notes

- `e.response_code` is an integer — compare with integer literals (`== 404`), not strings.
- `e.reason` is the HTTP reason phrase from the wire, not a parsed error field — for structured
  errors, check a typed subclass or deserialize `e.response.raw_body`.
- Retrying on `429`/`5xx` is handled automatically when `max_retries > 0` — see
  **ruby-configuration-resilience** before writing manual retry loops.
