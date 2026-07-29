---
name: ruby-models
description: Construct and read APIMatic-generated Ruby SDK model classes — positional constructors with the SKIP sentinel for optional fields, from_hash/to_hash round-trip, class-level names/optionals/nullables, enums as class constants (integer or string values), oneOf/anyOf unions deserialized via APIHelper.deserialize_union_type + UnionTypeLookUp, discriminator-driven polymorphism with discriminators hash, arrays/hash collections, DateTime fields via DateTimeHelper (from_rfc3339/from_unix/from_rfc1123), and additional_properties passthrough. Use when constructing a request model, reading a response field typed as a union or enum, or tracing how from_hash populates a nested model. Load it even after reading the model class in the source, since the positional constructor order, SKIP sentinel semantics, and union deserialization path are non-obvious from the field list alone.
---

# Working with models in an APIMatic Ruby SDK

Every named schema produces a Ruby class under the SDK module. This skill covers the
**non-obvious patterns** — constructors, optional/nullable fields, enums, oneOf/anyOf unions,
polymorphism, and dates. Take the real class names from your SDK's `lib/{gem}/models/`.

> `{...}` tokens are placeholders for per-API names. Generator-fixed conventions are stated
> concretely.

## Constructor — positional arguments with a SKIP sentinel

Models are not keyword-argument structs. The generated `initialize` takes **positional arguments**
in the same order as declared. Optional fields default to the private `SKIP` sentinel; required
fields default to `nil`.

```ruby
# OAuthToken: access_token and token_type are required (nil default);
# expires_in, scope, expiry, refresh_token are optional (SKIP default)
token = OAuthToken.new(
  'my-access-token',   # required
  'Bearer',            # required
  3600,                # optional — pass value to include it
  'read write'         # optional
  # expiry and refresh_token are omitted — SKIP keeps them absent
)
```

An attribute set to `SKIP` is **never assigned**; the instance variable is never set, so
`to_hash` omits that key entirely — distinct from setting the field to `nil`.

Read attributes through `attr_accessor` readers:

```ruby
puts token.access_token   # "my-access-token"
puts token.expires_in     # 3600, or raises NoMethodError if never set
```

## from_hash — deserialization from a Hash

The class method `from_hash(hash)` is the deserialization entry point. Pass a `Hash` with
string keys (as returned by `JSON.parse`). Returns `nil` if hash is `nil`.

```ruby
raw = JSON.parse(response_body)
token = OAuthToken.from_hash(raw)
```

Required keys missing from the hash become `nil`; optional keys missing from the hash remain
unset (SKIP). Any extra hash keys not listed in `self.names` are collected into
`additional_properties`.

## to_hash — serialization back to a Hash

`to_hash` serializes the model to a `Hash` suitable for `JSON.generate`. Optional fields that
were never set (SKIP) are omitted. Nullable fields that are `nil` are serialized as `null`.
Nested `BaseModel` values are recursively converted with their own `to_hash`.

```ruby
hash = token.to_hash
# => { "access_token" => "...", "token_type" => "Bearer", "expires_in" => 3600 }
json = token.to_json   # delegates to to_hash internally
```

## Class-level metadata — names, optionals, nullables

Every model class exposes three class methods used by `from_hash`/`to_hash`:

- `self.names` — Hash mapping Ruby attribute names (`String`) to JSON key names; allows
  differing wire keys (e.g. `'one_of_kind' => 'One Of kind'`).
- `self.optionals` — Array of Ruby attribute name strings whose absence from the hash is
  acceptable (SKIP sentinel used).
- `self.nullables` — Array of Ruby attribute name strings that may be explicitly `null`.

You do not call these directly; they drive the SDK's serialization logic.

## Enums — class constants (integer or string values)

Enums are Ruby classes with a frozen-array constant and individual named constants. They are
**not** modules of string constants:

```ruby
# Integer enum (SuiteCodeEnum::HEARTS == 1)
class SuiteCodeEnum
  HEARTS   = 1
  SPADES   = 2
  CLUBS    = 3
  DIAMONDS = 4
end

# Usage
suites: SuiteCodeEnum::HEARTS
```

String-value enums use the same pattern with string constants. The class also provides
`validate(value)` and `from_value(value, default)` helpers, but you always pass the constant
directly when constructing a model or client.

```ruby
client = Client.new(suites: SuiteCodeEnum::HEARTS)
```

## oneOf / anyOf unions — APIHelper.deserialize_union_type + UnionTypeLookUp

Fields typed as `oneOf` or `anyOf` are deserialized by calling
`APIHelper.deserialize_union_type(union_type, raw_value)`, where `union_type` is retrieved
from the generated `UnionTypeLookUp` registry by key.

```ruby
# Inside Animal.from_hash:
friend = APIHelper.deserialize_union_type(
  UnionTypeLookUp.get(:OneOfLionDeerType3),
  hash['friend']
)
```

`UnionTypeLookUp` maps symbolic keys to `OneOf.new([LeafType.new(Lion, ...), LeafType.new(Deer, ...)])` 
or `AnyOf.new([...])` definitions from `CoreLibrary`. The deserialized value is the concrete
Ruby object (e.g. a `Lion` or `Deer` instance) — check its class to branch:

```ruby
case animal.friend
when Lion   then puts "lion: #{animal.friend.weight}"
when Deer   then puts "deer: #{animal.friend.id}"
end
```

For **primitive unions** (`String | Integer`), the value is returned as-is (Ruby already has
the right type); no model instantiation occurs.

When **constructing** a request with a union field, pass the concrete object directly — the
model's `to_hash` routes it through `to_union_type_{name}` automatically:

```ruby
animal = Animal.new('Animal', 42, Lion.new('id1', '100 kg', 'hunter', 'northener'))
```

## Discriminator-driven polymorphism

Base classes with a discriminator field (e.g. `pet_type`) implement `self.discriminators`
returning a hash from discriminator value strings to concrete subclasses. `from_hash` checks
this first and delegates to the subclass:

```ruby
# Animal.from_hash routes to Cat.from_hash when hash['pet_type'] == 'Cat'
obj = Animal.from_hash({ 'pet_type' => 'Cat', 'name' => 'Whiskers', 'color' => 'white' })
obj.is_a?(Cat)  # => true
```

Subclasses inherit the base `initialize` args and call `super` for inherited fields. The
subclass's own `names` merges with the parent using `super().merge(@_hash)`.

## Collections — Array and Hash fields

Array fields contain typed model instances or scalars. Hash fields use string keys.
`to_hash` recursively calls `to_hash` on any `BaseModel` element:

```ruby
# Array of nested models
request = BatchRequest.new([
  Item.new('a', 1),
  Item.new('b', 2)
])

# Hash of scalars
config = Config.new({ 'mode' => 'fast', 'limit' => '100' })
```

A `nil` array/hash on an optional field is omitted from the serialized output (SKIP behavior).

## Dates — DateTimeHelper

Date and time fields are represented as Ruby `DateTime` objects. The SDK provides
`DateTimeHelper` (extending `CoreLibrary::DateTimeHelper`) with format-specific converters:

| Method | Purpose |
|---|---|
| `DateTimeHelper.from_rfc3339(str)` | Parse RFC 3339 string → `DateTime` |
| `DateTimeHelper.from_rfc1123(str)` | Parse RFC 1123 string → `DateTime` |
| `DateTimeHelper.from_unix(str)` | Parse Unix timestamp string → `DateTime` |
| `DateTimeHelper.to_rfc3339(dt)` | `DateTime` → RFC 3339 string |
| `DateTimeHelper.to_rfc1123(dt)` | `DateTime` → RFC 1123 string |
| `DateTimeHelper.to_unix(dt)` | `DateTime` → Unix timestamp string |

Array/map variants (`to_rfc3339_array`, `to_rfc3339_map`, etc.) handle collections.

The wire format for each field is fixed by the spec — the generator picks the right
`DateTimeHelper` method inside `from_hash`/`to_hash`. When constructing a model, pass a
`DateTime` value; the SDK serializes it to the correct wire format automatically.

## Additional properties — unknown JSON keys preserved

Unknown JSON keys (not listed in `self.names`) are collected into `additional_properties` by
`from_hash`:

```ruby
additional_properties = hash.reject { |k, _| names.value?(k) }
```

They are passed as the last constructor argument and stored as instance variables. `to_hash`
merges them back into the output (checked for conflicts with declared fields first).

```ruby
user.get_additional_properties   # => { :custom_field => "value" }
```

See [reference.md](reference.md) for a condensed summary of all shapes.
