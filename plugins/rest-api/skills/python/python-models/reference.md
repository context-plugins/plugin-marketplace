# Models reference (APIMatic Python)

Condensed reference for the model shapes in **python-models**. Confirm exact names in
`restapi/models/` and `restapi/api_helper.py`.

## Constructor args + optional sentinel

Required constructor args have no default; optional args default to `APIHelper.SKIP`. A field
whose value is `SKIP` is **not set** on the instance at all — `hasattr` is the only safe check.

```python
from restapi.models.o_auth_token import OAuthToken
from restapi.api_helper import APIHelper

# Construct:
token = OAuthToken(
    access_token='abc',     # required — no default
    token_type='Bearer',    # required — no default
    expires_in=3600,        # optional — omit or pass APIHelper.SKIP to exclude from JSON
    # scope omitted → not set on instance
)

# Read optional field safely:
if hasattr(token, 'expires_in'):
    print(token.expires_in)   # present

# Required fields are always present:
print(token.access_token)
```

Fields listed in `_optionals` use `SKIP`; unlisted fields are required and always present after
`from_dictionary()`.

## from_dictionary / to_dictionary

`from_dictionary(cls, dictionary)` constructs a model from a raw dict (deserialized JSON).
There is no `to_dictionary()` instance method — use `APIHelper.to_dictionary(model)` to serialize
a model back to a dict:

```python
from restapi.api_helper import APIHelper

# Deserialize (used internally by the SDK; also callable directly):
token = OAuthToken.from_dictionary({
    'access_token': 'abc',
    'token_type': 'Bearer',
    'expires_in': 3600,
})

# Serialize to dict (for logging or inspection):
d = APIHelper.to_dictionary(token)
# {'access_token': 'abc', 'token_type': 'Bearer', 'expires_in': 3600}
```

`from_dictionary` respects `_names` (Python attr → JSON key) and `_optionals` (absent optional
keys become `SKIP`, not set on instance). Required fields that are absent in the dict become
`None`.

## Enums — plain classes with MEMBER = value

APIMatic Python enums are **not** `enum.Enum` subclasses. They are plain classes with `MEMBER =
value` class attributes (integer- or string-valued) and a `from_value()` class method.

```python
# Integer enum (e.g. SuiteCodeEnum):
class SuiteCodeEnum(object):
    HEARTS   = 1
    SPADES   = 2
    CLUBS    = 3
    DIAMONDS = 4

# String enum (e.g. OAuthProviderErrorEnum):
class OAuthProviderErrorEnum(object):
    INVALID_REQUEST = "invalid_request"
    INVALID_CLIENT  = "invalid_client"
```

Usage:

```python
from restapi.models.suite_code_enum import SuiteCodeEnum

body.suites = SuiteCodeEnum.HEARTS                           # known constant (int 1)
body.suites = SuiteCodeEnum.from_value('spades', default=SuiteCodeEnum.HEARTS)  # from string
body.suites = SuiteCodeEnum.from_value(server_int_value)     # from integer
```

`from_value(value, default=None)` matches by exact int value or case-insensitive name/value
string; returns `default` if unrecognized. The raw integer or string **is** the wire value — the
serializer sends the value directly (e.g. `1` or `"invalid_request"`).

## oneOf / anyOf — UnionTypeLookUp + validate()

Fields holding one of several model types are resolved by `UnionTypeLookUp` and each candidate's
`validate()` classmethod. The SDK resolves the union **automatically** on deserialization; you
receive the concrete instance directly.

**Build a union value** — construct the concrete model class and pass it directly to the operation
or field. Do not call `validate()` yourself on the outbound side.

```python
from restapi.models.animal import Cat

cat = Cat(
    name='Whiskers',
    color='orange',
    pet_type='Cat',
)
# Pass `cat` wherever a OneOf(Cat, Dog) is expected.
```

**Read a union response** — `isinstance` distinguishes the resolved variant:

```python
result = client.{resource}.{union_operation}(...)
if isinstance(result, Cat):
    print(result.name)
elif isinstance(result, Dog):
    print(result.fangs)
```

**With discriminator** — `UnionTypeLookUp` maps a discriminator field value to the correct variant
automatically (e.g. `"pet_type": "Cat"` → `Cat.from_dictionary(...)`). The `validate()` method
on each candidate checks required fields to confirm the match.

**Without discriminator** — the SDK tries each `validate()` in declaration order and uses the
first match.

**Nested unions** (`OneOf(Deer, OneOf(Lion, Squirrel))`) — the outer is resolved first, then the
inner; you still get a single concrete model.

**anyOf** — a value may match more than one variant; the SDK resolves and returns the first
successful deserialization. Check with `isinstance`.

## Polymorphic base classes

When the API uses inheritance (e.g. `Animal` with `Cat` and `Dog` subclasses), model files define
both the base and concrete classes. `Animal.from_dictionary()` reads the discriminator field
(`pet_type`) and delegates to `Cat.from_dictionary` or `Dog.from_dictionary` as appropriate.

```python
from restapi.models.animal import Animal, Cat, Dog

cat = Cat(name='Whiskers', color='orange', pet_type='Cat', id=APIHelper.SKIP)
assert isinstance(cat, Animal)   # Cat IS-A Animal

# from_dictionary dispatches on discriminator:
animal = Animal.from_dictionary({'pet_type': 'Cat', 'name': 'Whiskers', 'color': 'orange'})
assert isinstance(animal, Cat)
```

## Collections

List fields are plain Python `list`; map fields are plain Python `dict`. Pass them directly.

| Value | Serialized |
| --- | --- |
| `None` | field omitted from JSON |
| `[]` | `[]` (empty array) |
| `{}` | `{}` (empty object) |

```python
body.scopes = ['read', 'write']               # list[str]
body.meta   = {'region': 'us-east-1'}         # dict[str, str]
```

## Dates and datetimes via APIHelper

The SDK provides three datetime formats — check the model field's type annotation to know which
applies. Pass `datetime.datetime` objects; the SDK handles serialization.

| Wire format | Helper class |
| --- | --- |
| RFC 3339 / ISO 8601 (`"2024-06-17T15:30:00Z"`) | `APIHelper.RFC3339DateTime` |
| HTTP-date (`"Mon, 17 Jun 2024 15:30:00 GMT"`) | `APIHelper.HttpDateTime` |
| Unix timestamp (integer seconds since epoch) | `APIHelper.UnixDateTime` |

```python
import datetime
from restapi.api_helper import APIHelper

dt = datetime.datetime(2024, 6, 17, 15, 30, 0, tzinfo=datetime.timezone.utc)

# If the field uses RFC 3339:
body.created_at = APIHelper.RFC3339DateTime(dt)

# Parsing a wire string into datetime:
dt2 = APIHelper.RFC3339DateTime.from_value("2024-06-17T15:30:00Z")
```

Do not format date strings manually. Confirm which helper applies by reading the model field's
`_names` mapping and the `doc/models/*.md` or `doc/rfc3339-date-time.md` /
`doc/http-date-time.md` / `doc/unix-date-time.md` docs.

## Additional properties — unknown JSON keys

Models with an `additional_properties` attribute capture JSON keys not listed in `_names`. Unknown
response keys land there rather than being silently dropped.

```python
from restapi.models.o_auth_token import OAuthToken

token = OAuthToken.from_dictionary({
    'access_token': 'abc',
    'token_type': 'Bearer',
    'custom_field': 'xyz',         # not in _names
})
print(token.additional_properties)   # {'custom_field': 'xyz'}
```

To send extra keys on a request model, populate `additional_properties` before the call. The
serializer emits known fields from `_names` plus anything in `additional_properties`. Not every
model has `additional_properties` — check the constructor signature; if the arg is absent, unknown
keys are dropped on deserialization.
