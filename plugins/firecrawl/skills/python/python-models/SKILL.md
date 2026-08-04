---
name: python-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated Python SDK — APIHelper.SKIP as the optional-field sentinel (absent from hasattr if not set), plain class enums with integer or string MEMBER = value attributes and from_value(), oneOf/anyOf union types deserialized via UnionTypeLookUp + validate() (build with the model class directly, let the SDK resolve the variant), polymorphic base classes, collections as plain lists/dicts, date/datetime via APIHelper helpers, and additional_properties for unknown JSON keys. Use when building a request model or reading a response field that is a union, enum, optional, collection, or date — anything that isn't a plain required string/number. Load it even after reading the field's type in the source, since the type alone won't tell you a union is resolved by validate(), that absent optional fields raise AttributeError (not return None), or how enums serialize.
---

# Working with models in an APIMatic Python SDK

Most request/response data are plain Python classes constructed with keyword arguments. This skill
covers the **non-obvious shapes** that trip integrations up. Take the real type and field names from
your SDK source (`firecrawl/models/`).

> Throughout, `{...}` tokens are placeholders for names you take from your SDK. The generated
> `doc/models/*.md` files describe each model's fields and types.

## Optional fields — APIHelper.SKIP sentinel

Optional model fields use `APIHelper.SKIP` as their default argument, not `None`. When `SKIP` is
passed to the constructor, the attribute is **not set** on the instance — so checking
`model.field is None` will raise `AttributeError`. Always use `hasattr`:

```python
from firecrawl.api_helper import APIHelper

# Constructing — omit optional fields or pass APIHelper.SKIP:
token = OAuthToken(
    access_token='abc',
    token_type='Bearer',
    # expires_in is optional — omit it or pass APIHelper.SKIP to exclude from JSON
)

# Reading a response optional field:
if hasattr(token, 'expires_in'):
    print(token.expires_in)

# Required fields (no SKIP default) are always present — safe to access directly:
print(token.access_token)
```

Fields listed in a model's `_optionals` class attribute use `SKIP`. Fields not listed are required
and will always have values set after `from_dictionary()`.

## Enums — plain classes with MEMBER = value

APIMatic Python enums are **not** Python `enum.Enum` subclasses. They are plain classes with
`MEMBER = value` class attributes (integer- or string-valued) and a `from_value()` class method:

```python
# Integer-based enum (e.g. SuiteCodeEnum):
class SuiteCodeEnum(object):
    HEARTS   = 1
    SPADES   = 2
    CLUBS    = 3
    DIAMONDS = 4

# String-based enum (e.g. OAuthProviderErrorEnum):
class OAuthProviderErrorEnum(object):
    INVALID_REQUEST = "invalid_request"
    INVALID_CLIENT  = "invalid_client"
```

Usage:

```python
from firecrawl.models.suite_code_enum import SuiteCodeEnum

# Known constant:
client.{resource}.{operation}(suites=SuiteCodeEnum.HEARTS)

# Convert from a raw value (e.g. parsed from JSON or env var):
suites = SuiteCodeEnum.from_value(os.getenv('SUITES'), default=SuiteCodeEnum.HEARTS)
```

`from_value(value, default=None)` supports integer, string (case-insensitive name or value match),
and returns the default if the value is unrecognized.

## oneOf / anyOf union types — UnionTypeLookUp + validate()

When a field or operation parameter can hold one of several model types, the SDK uses a
`UnionTypeLookUp` registry (in `firecrawl/utilities/union_type_lookup.py`) and each candidate model
implements a `validate(dictionary)` class method.

**Building a union value** — construct the concrete model class directly and pass it:

```python
from firecrawl.models.animal import Cat, Dog

# Cat instance to pass where a OneOf(Cat, Dog) is expected:
value = Cat(
    name='my cat',
    color='yellow white',
    pet_type='Cat',
    kind='small'
)
# Pass value to the operation parameter or model field directly.
```

**Deserializing a union response** — the SDK resolves the correct variant automatically using
`validate()` on each candidate type. You receive the deserialized instance as its concrete class:

```python
result = client.{resource}.{union_operation}(...)
# result is already the correct type (Cat, Dog, etc.) — inspect with isinstance:
if isinstance(result, Cat):
    print(result.name)
elif isinstance(result, Dog):
    print(result.fangs)
```

When the union uses a **discriminator field** (e.g. `kind: "small"` → `Cat`, `kind: "large"` →
`Dog`), `UnionTypeLookUp` wires the discriminator mapping automatically. Without a discriminator,
it tries each variant's `validate()` in order and picks the first match.

For **nested unions** (`OneOf(Deer, OneOf(Lion, Squirrel))`), the outer union is resolved first,
then the inner — the final instance is a concrete model class.

## Polymorphic base classes

When the API defines inheritance (e.g. `Animal` as a base with `Cat` and `Dog` subclasses), the
generated classes share a common base. Construct with the concrete subclass:

```python
from firecrawl.models.animal import Animal, Cat, Dog

cat = Cat(name='my cat', color='yellow', pet_type='Cat', id='c1', kind='small')
# cat is an instance of both Cat and Animal.
```

## from_dictionary / to_dictionary

Model classes provide `from_dictionary(cls, dictionary)` to construct an instance from a raw dict
(typically the deserialized JSON), and `to_dictionary()` to serialize an instance back to a dict
for inspection or logging:

```python
user_dict = {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'}
user = User.from_dictionary(user_dict)
print(user.name)

print(user.to_dictionary())   # {'id': 1, 'name': 'Alice', ...}
```

`from_dictionary` respects `_names` (JSON-key → Python-attribute mapping) and `_optionals` (uses
`SKIP` for absent optional keys).

## Collections — plain lists and dicts

List/array fields are plain Python `list`; maps are plain Python `dict`. Pass them directly:

```python
body.scopes = [OAuthScopeEnum.READ_SCOPE]   # list of enum values
body.metadata = {'region': 'us-east-1'}     # dict
```

A `None` collection is excluded from the JSON. An explicit empty list `[]` or dict `{}` is
serialized (sends `[]` or `{}`).

## Dates and datetimes

The SDK provides three datetime representations — check the model field's type annotation and the
doc to know which applies:

| Wire format | Class | Helper |
| --- | --- | --- |
| RFC 3339 / ISO 8601 (`"2024-06-17T15:30:00Z"`) | `datetime` | `APIHelper.RFC3339DateTime` |
| HTTP-date (`"Mon, 17 Jun 2024 15:30:00 GMT"`) | `datetime` | `APIHelper.HttpDateTime` |
| Unix timestamp (integer seconds) | `datetime` | `APIHelper.UnixDateTime` |

When constructing request models with datetime fields, pass a Python `datetime.datetime` object
and the SDK handles serialization. For response deserialization, the SDK parses the wire string
into a `datetime` automatically. Do not format date strings by hand.

## Additional properties — unknown JSON keys

Models include an `additional_properties` dict that captures JSON keys not listed in `_names`.
Unknown response keys are placed there rather than being silently dropped:

```python
token = OAuthToken.from_dictionary({'access_token': 'abc', 'custom_field': 'xyz'})
print(token.additional_properties)   # {'custom_field': 'xyz'}
```

To send extra keys on a request model, set `additional_properties` before the call (the `_names`
mapping excludes known fields from it automatically).

See [reference.md](reference.md) for a condensed reference on all model shapes.
