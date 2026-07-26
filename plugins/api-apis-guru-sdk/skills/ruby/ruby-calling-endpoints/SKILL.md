---
name: ruby-calling-endpoints
description: Call API operations on an APIMatic-generated Ruby SDK — access a controller via its snake_case method on the client, call the operation method with required positional args or an options hash, build request model objects, pass enum constants (frozen strings), and read the ApiResponse return (.status_code, .headers, .data, .raw_body). Use whenever invoking an endpoint, working out which params are required vs. optional, building a request body, or consuming a response — load it even after reading the controller source, since the signature doesn't tell you whether the method takes positional args or an options hash, or that the return is always an ApiResponse wrapper.
---

# Calling endpoints on an APIMatic Ruby SDK

Operations are **synchronous methods** on a **controller** you get from the client via a snake_case
accessor. Access the controller, then call the operation:

```ruby
result = client.{resource}.{operation}(...)
```

Open `lib/api_apis_guru/client.rb` for the accessor names, then the relevant
`lib/api_apis_guru/controllers/{resource}_controller.rb` for the operation's exact signature.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK — replace them with the
> concrete identifiers from the source. The generated `doc/controllers/*.md` files list every operation
> with its signature and a usage snippet; grep there first.

## Controller access

Controllers are lazy-initialized with `||=` inside the client. Access them via snake_case methods:

```ruby
ctrl = client.{resource}    # e.g. client.simple_calculator
result = ctrl.{operation}(...)

# Or inline:
result = client.{resource}.{operation}(...)
```

The accessor name is the snake_case of the controller class name without the `Controller` suffix
(e.g. `SimpleCalculatorController` → `client.simple_calculator`). Read `client.rb` for the full list.

## Two parameter-passing shapes — check the signature

APIMatic Ruby SDKs generate one of two shapes per operation:

**1. Positional (required) parameters** — when there are a small number of clearly required params they
are positional Ruby arguments:

```ruby
# def create_send_nullable_scalar_type_container_in_body(all_nullable_set_to_null, nullable_scalar_type)
result = client.body_params.create_send_nullable_scalar_type_container_in_body(
  true,
  NullableScalarTypeContainer.new(...)
)
```

**2. An `options` hash** — when params are query-parameters or the method bundles optional and required
together, they arrive in an `options = {}` hash passed by the caller and accessed via string keys:

```ruby
# def get_calculate_by_client(options = {})
#   options['x']  — Float, required
#   options['y']  — Float, required
result = client.simple_calculator.get_calculate_by_client(
  'x' => 222.14,
  'y' => 165.14
)
```

Never assume which shape an operation uses — open the method in the controller source or read
`doc/controllers/{resource}.md`. The key names in the options hash match the API's parameter names
(camelCase or snake_case as generated — confirm in the source).

## Required vs. optional parameters

In the generated source, each parameter is documented with a `Required` or `Optional` tag in the doc
comment. Required parameters that are missing raise an error at the HTTP level (the SDK does not
validate them client-side for positional-style methods). For `options`-hash methods, omitting an
optional key means the parameter is not sent.

## Building request models

For body parameters that are typed models, construct the model class with keyword args:

```ruby
body = ApiApisGuru::{RequestModel}.new(
  field_one: 'value',
  field_two: 42,
  nested: ApiApisGuru::{NestedModel}.new(sub_field: true)
)
result = client.{resource}.{create_operation}(body)
```

Model classes extend `BaseModel` and are in `lib/api_apis_guru/models/`. Field names are defined as
`attr_accessor` declarations — grep the class or read `doc/models/{model}.md` to confirm names and
required vs. optional fields.

## Enums as parameters

Enums are frozen string constants defined in modules under the top-level module. Use the constant
rather than a raw string to avoid typos:

```ruby
# e.g. OperationTypeEnum::SUM  => 'SUM'
result = client.simple_calculator.get_calculate(
  'operation' => OperationTypeEnum::SUM,
  'x' => 2,
  'y' => 3
)
```

Read the enum module in `lib/api_apis_guru/models/{enum}_enum.rb` for the available constants.

## Reading the response

Every operation returns an `ApiResponse` object:

| Property | Type | Use |
| --- | --- | --- |
| `.status_code` | `Integer` | HTTP status code (e.g. `200`) |
| `.reason_phrase` | `String` | HTTP reason phrase |
| `.headers` | `Hash<String, String>` | Response headers |
| `.raw_body` | `String` | Raw response body as a string |
| `.request` | `HttpRequest` | The original request object |
| `.data` | `Object` | Deserialized response data (typed model, primitive, or nil) |

```ruby
begin
  response = client.{resource}.{operation}(...)

  puts response.status_code    # 200
  puts response.headers        # { 'Content-Type' => 'application/json', ... }
  puts response.data           # the deserialized result (typed model or primitive)
rescue APIException => e
  puts e.response_code         # HTTP status
  puts e.message               # error description
end
```

`response.data` is whatever type the operation returns — a model instance, a Float, a String, or nil
for void responses. Read the operation's `@return` doc comment or `doc/controllers/{resource}.md` to
know the exact shape.

## Finding the right method in the SDK source

- Controller accessors are on `Client` in `lib/api_apis_guru/client.rb`.
- Operation methods are in `lib/api_apis_guru/controllers/{resource}_controller.rb`.
- The `doc/controllers/{resource}.md` file lists every method with its parameters, tags (Required/Optional), response type, and a usage snippet — **grep here first**.
- Request/response model classes are in `lib/api_apis_guru/models/`; enum modules end in `_enum.rb`.
- Typed error classes are in `lib/api_apis_guru/exceptions/`.

## Next

- Build request models, enums, union types → **ruby-models**
- Handle APIException and typed errors → **ruby-error-handling**
- Tune retries, timeouts, Faraday connection → **ruby-configuration-resilience**
