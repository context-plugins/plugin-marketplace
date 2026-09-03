---
name: python-models
description: Working with models in an APIMatic-generated Python SDK — pydantic models and their TypedDict companions, required members vs the UNSET sentinel, why Optional here is not typing.Optional, open enums, union aliases and discriminators, collections, wire aliases, frozen instances, unknown-field preservation, and serializing with to_dict/to_json. Load before constructing request payloads or mapping SDK models onto your own types.
---

# Working with models in an APIMatic Python SDK

Most request/response data are **immutable pydantic v2 models** built with keyword arguments (covered
in `python-calling-endpoints`). This skill covers the **non-obvious model shapes** that trip
integrations up. The patterns are generic across APIMatic Python SDKs; take the real type and member
names from the contract sheet — the SDK map's **Type sources** table names the module declaring each
type, and the members themselves are read there, since the map carries no shapes — never from a
REPL poke at the installed package.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{root_package}`, `{Model}`, `{RequestType}`, `{Enum}`, `{Union}`, `{Variant}`) — replace it with the
> concrete identifier from the source.

## The base every model shares

Domain models subclass a generated base (`{root_package}.core.SdkBaseModel`) with a deliberate
configuration. It is **static generator code, identical in every APIMatic Python SDK**, and four of its
choices change how you write code:

| Config | What it means for you |
|---|---|
| `frozen=True` | Instances are immutable — assigning to a field raises. Use `model_copy(update={...})` to derive a changed copy. |
| `extra="allow"` | **Unknown fields are preserved, not dropped** — see below. |
| `validate_by_name` + `validate_by_alias` | Input is accepted under **either** the Python name or the wire alias. |
| `serialize_by_alias` | Output uses the **wire alias** by default. |

`frozen` blocks rebinding an attribute; it does **not** deep-freeze. A `list` or `dict` field's
contents remain mutable in place, so `model.{list_field}.append(...)` may well succeed and is still a
bug — treat the whole graph as read-only.

## Required vs optional: `UNSET`, and the `Optional` that is not `typing.Optional`

```python
class {RequestType}(SdkBaseModel):
    {required_field}: {Enum}OrStr                      # required
    {required_list}: list[{Model}]                     # required
    {optional_field}: Optional[{Model}] = UNSET        # optional
    {nullable_field}: OptionalNullable[str] = UNSET    # optional *and* nullable
```

- A **bare annotation** is required. Omit it and pydantic raises `ValidationError` at construction —
  which is the good case: the failure is at the point of the mistake, not at the API.
- **`Optional[T] = UNSET` is optional.** Leave it out entirely and the key is omitted from the JSON.

**`Optional` here means `T | UnsetType` — present or absent, with no `None` arm.** It is *not*
`typing.Optional[T]` (`T | None`), and the difference is the arm that matters: a field the spec does
not declare nullable must not be able to reach the wire as `null`. So:

```python
{RequestType}({required_field}="...", {required_list}=[...], {optional_field}=None)   # ✗ type error, and rejected
{RequestType}({required_field}="...", {required_list}=[...])                          # ✓ omitted
```

Never "clear" an optional field by passing `None`. Omit it, or pass `UNSET` explicitly if you are
building the kwargs dynamically.

A field annotated **`OptionalNullable[T]`** (`T | None | UnsetType`) is the three-state case: omitted,
explicitly `null`, or a value. The generator emits it for exactly the properties the spec declared both
optional *and* nullable. There, `None` *is* meaningful — it sends `null`, which for a PATCH-style API
is how you erase a value rather than leave it unchanged. Read the annotation before deciding what
`None` means.

`UNSET` is falsy and identity-stable, so all three of these work on a response at runtime — but only
one of them narrows for the type checker:

```python
from {root_package}.core import UNSET, UnsetType

if response.{optional_field}:                                        # falsy when UNSET (and when empty!)
if response.{optional_field} is not UNSET:                           # precise: was it set at all? — does NOT narrow
if not isinstance(value := response.{optional_field}, UnsetType):    # precise AND narrows: value is T here
    use(value)
```

`UNSET` is an *instance*, not a `Literal`, so after `is not UNSET` mypy/pyright still see
`T | UnsetType`, and every attribute access that follows is a `union-attr` error under `--strict`. Use
the `isinstance` form whenever you go on to *use* the value; reserve `is UNSET` for a yes/no test.
Prefer either precise form over truthiness when "set but empty" and "not set" are different facts.

## Dict companions

Every model has a `{Model}Dict` `TypedDict` companion mirroring it field for field, with optional
members marked `NotRequired`. Anywhere a model is accepted, the companion is too — including nested,
because the companion types each nested member as `{Model} | {Model}Dict`:

```python
{RequestType}({required_field}="...", {required_list}=[{"{member}": {"{nested}": "..."}}])
```

The companion is a **closed** TypedDict, so a misspelled key is a type-checker error at the call site
rather than a runtime surprise. Three caveats:

- the companion is a typing construct only — it performs no runtime validation until the SDK validates
  the whole body;
- it cannot express `UNSET`, so a dict simply omits what it does not set;
- **the closed check only helps if a type checker actually runs.** At runtime the model base is
  `extra="allow"`, so a misspelled key that no checker saw is *accepted* and sent as an extra field
  rather than rejected (see *Unknown fields are preserved* below). The dict spelling is only as safe
  as your `mypy`/`pyright` gate.

## Enums are open

Enums are real `Enum` subclasses — `(str, Enum)` for a string enum, `(int, Enum)` for a numeric one —
living under `{root_package}.models.enums`. Each is paired with an **open alias**: `{Enum}OrStr` =
`Annotated[{Enum} | str, ...]`, or `{Enum}OrInt` = `Annotated[{Enum} | int, ...]`. A field typed with
the open alias accepts either spelling:

```python
from {root_package}.models.enums import {Enum}

value = {Enum}.{MEMBER}     # preferred: checked, discoverable
value = "{wire_value}"      # also valid
```

The point of the open alias is forward compatibility: **a value the server adds after this SDK was
generated survives as a plain string (or int)** instead of raising. That cuts both ways, and it is the
thing to get right when *reading* a response:

```python
status = response.{enum_field}                 # may be {Enum} OR str

if status == {Enum}.{MEMBER}:                  # ✓ works for the known member
    ...

match response.{enum_field}:                   # handle the open arm explicitly
    case {Enum}.{MEMBER}: ...
    case {Enum}.{OTHER_MEMBER}: ...
    case str() as unknown:                     # a value newer than this SDK
        log.warning("unknown value %s", unknown)
```

An `if/elif` chain over members with no final `else` silently does nothing for an unknown value.

**Stringifying differs by enum kind.** The generator gives every enum `__str__ = str.__str__`. On a
`(str, Enum)` that is what you want — `str(member)` and f-string interpolation give the **wire value**
(`"{wire_value}"`), not `"{Enum}.{MEMBER}"`, so logging and comparison against raw strings both behave.
On an `(int, Enum)` that same assignment makes `str(member)` raise
`TypeError: descriptor '__str__' requires a 'str' object` — so never interpolate an int-enum member
into a log line or an f-string. Use `member.value` (or `int(member)`) instead.

## Union types: alias, not class

Where a field can be one of several types, APIMatic generates a **type alias** under
`{root_package}/models/unions/` — re-exported from `{root_package}.models`. There is no union class,
no factory method and nothing to unwrap: the alias *is* a PEP 604 union of the arms, and you pass a
variant directly.

```python
# anyOf — a plain alias, named after its arms
{Variant1}Or{Variant2}: TypeAlias = {Variant1} | {Variant2}
{Variant1}Or{Variant2}Dict: TypeAlias = {Variant1}Dict | {Variant2}Dict

# oneOf with a discriminator — the same union, tagged
{Union}: TypeAlias = Annotated[{Variant1} | {Variant2}, Field(discriminator="{tag}")]
{Union}Dict: TypeAlias = {Variant1}Dict | {Variant2}Dict
```

**Construct** by building the variant you mean; **read back** with `isinstance` (or `match`):

```python
body = {RequestType}({union_field}={Variant1}(...))

if isinstance(response.{union_field}, {Variant1}):
    ...
elif isinstance(response.{union_field}, {Variant2}):
    ...
```

Three things the alias does not show:

- **A discriminated variant carries its tag as a defaulted `Literal`** (`{tag}: Literal["{value}"] =
  "{value}"`). Building the model gives you the tag for free — you never set it.
- **The dict spelling must carry the tag anyway.** The companion marks it `NotRequired`, but pydantic
  routes a tagged union on that key, so omitting it raises `ValidationError` (`union_tag_not_found`)
  at runtime while type-checking cleanly. Pass the model, or include `"{tag}": "{value}"` in the dict.
- **A union whose arms collapse to one is inlined at the use site** — the field is simply typed
  `{Variant} | None` and no alias module exists. Do not go looking for an alias the sheet does not
  list.

## Collections

List properties are `list[T]`; maps are `dict[str, V]` — **the key type is always `str`**, whatever
the spec said. A nested model element accepts its companion too (`list[{Model} | {Model}Dict]`).

```python
body = {RequestType}(
    {list_field}=["A", "B"],
    {map_field}={"k": "v"},
)
```

An **unset** collection is omitted from the JSON; an **empty** one (`[]`, `{}`) is serialized. Those
are different wire messages — do not use `[]` to mean "leave this alone".

## Wire aliases

The generator emits a pydantic alias for a field **exactly when the Python name no longer matches the
wire name** — snake-casing a `camelCase` property, sanitizing a name that is not a valid identifier,
escaping a Python keyword (trailing underscore, `type_` for `type`), or de-duplicating a collision.
Where the wire name is already a valid snake_case identifier, no alias is emitted at all.

```python
{field}: Optional[str] = Field(default=UNSET, alias="{wireField}")
```

The Python name is what you write in code; the alias is what crosses the wire. Both are accepted on
input, and output uses the alias. When a sheet lists a member as `{field} (wire {wireField})`, use
`{field}` in code and expect `{wireField}` in a captured request body — do not "fix" a test that
asserts the alias.

**The `…Dict` companion is keyed by the PYTHON name, not the alias.** A `TypedDict` cannot declare a
keyword or a non-identifier as a key through class syntax, and the base config's `validate_by_name` is
what makes the Python spelling work:

```python
client.{controller}.{operation}(body={"{field}": "..."})       # ✓ the companion's key
client.{controller}.{operation}(body={"{wireField}": "..."})   # validates, but type-checks as nothing
```

The serialized body carries `"{wireField}"` either way. The second form *does* validate at runtime via
`validate_by_alias` — so both happen to work, and only one is checked. Write the Python name.

## Serializing

```python
model.to_dict()                     # JSON-safe values, wire aliases, json.dumps-able
model.to_json()                     # the same content as text, indented 2 by default
model.to_dict(mode="python")        # keep Python objects (datetime stays datetime)
model.to_dict(by_alias=False)       # key by Python name instead
model.to_dict(exclude_none=True)    # drop nulls, round-trip safe
```

`to_dict`/`to_json` are the front door; `model_dump`/`model_dump_json` remain available for options
the wrappers do not surface (`include`/`exclude`, `context`, `round_trip`, `warnings`). Two behaviours
worth knowing:

- A never-touched `OptionalNullable` field is **omitted** by `to_dict`, even though a plain
  `model_dump` renders it as `null`. That is the tri-state being honoured; it is the one documented
  place the wrapper differs from the underlying dump.
- **`exclude_unset=True` is a trap on a locally built model.** It drops defaulted discriminator
  fields, after which the result no longer validates back against a discriminated union. Use
  `exclude_none=True` if your goal is just to suppress nulls. (On a *decoded response* it is the
  right tool — see the read-path note under the `Optional[Any]` trap below.)

## The `Optional[Any]` trap — a real serialization failure

**A field annotated `Optional[Any]` (or `OptionalNullable[Any]`) cannot be left unset.** Leaving it at
`UNSET` makes the whole model unserializable — `to_dict()`, `to_json()` *and the request path* all
raise:

```
pydantic_core._pydantic_core.PydanticSerializationError:
    Unable to serialize unknown type: <class '…core.optionality.UnsetType'>
```

`UnsetType` carries its own serializer, but `Any` absorbs the union arm before that serializer is
reached, so the sentinel arrives at pydantic's generic any-serializer, which has never heard of it.
Every other `Optional[T]` is fine, and so is a *container* of `Any` (`Optional[list[Any]]`,
`Optional[dict[str, Any]]`) — this is specific to a bare `Any` at the top of the annotation.

You get `Any` wherever the spec left a property unconstrained: a free-form object, an anonymous
object, or no schema at all. **Check the contract sheet for which members are typed `Any`** — it is
usually a small, fixed list, and a JSON-Patch-style `value` member is the classic case, because the
ops that take no value are exactly the ones that would leave it unset.

**Workaround: pass `None` explicitly.**

```python
client.{controller}.{operation}(body={Model}({field}=None))
# request body -> {"{field}": null}
```

It type-checks (`Any` admits `None`) and it serializes. Note the cost: the request now carries
`"{field}": null` where it should have carried nothing. Two consequences worth stating on any sheet
that touches such an operation:

- an explicit `null` is not the same wire message as an omitted key, so a strict server-side validator
  could reject it — confirm against sandbox before shipping;
- this is the one place where `None` on an `Optional[...]` field is correct. Everywhere else it is a
  type error (see above). Do not generalise it.

The dict spelling is no escape — it validates into the same model, sentinel included. If a future SDK
version widens these annotations, drop the explicit `None`.

**The trap fires on the read path too.** A *response* model whose `Any`-typed member the server
omitted decodes fine — and then fails `to_dict()` / `to_json()` with the same error, because that
member is sitting at `UNSET`. For a decoded response, `to_dict(exclude_unset=True)` is the escape: it
drops the sentinel before serialization, and the discriminator concern above does not apply to a
model the SDK decoded from the wire.

## Handing SDK values out

`UNSET` is not `None`, and nothing outside the SDK knows what it is. `json.dumps`, a web framework's
response encoder, an ORM column, a cache or message-queue serializer will each raise on it —
typically `Unable to serialize unknown type: UnsetType` or a `TypeError` — and in a request handler
that surfaces as a 500 the first time an optional member happens to be absent. Before an SDK value
crosses your boundary, do one of two things:

- map it into your **own** type, resolving `UNSET` to `None` or to an absent key as you go (the
  `isinstance` / `is not UNSET` checks above are the tool);
- or serialize the **whole model** with `to_dict()` / `to_json()`, which know the sentinel.

Never pass a raw member straight through to something that will encode it.

## Unknown fields are preserved

Unlike SDKs that drop unmodelled JSON, `extra="allow"` keeps them — at every nesting level, readable
via `model_extra`, and **re-emitted under the key they arrived with**:

```python
extra = response.model_extra or {}
new_field = extra.get("{some_new_field}")
```

This makes it safe to read an object, change one member and send it back without silently discarding
server-side state you never modelled. The symmetry also means an unknown key *you* supply is sent
rather than rejected — convenient for a field newer than the SDK, and a silent no-op when you simply
misspell a real one. A misspelled optional member does not error; it becomes an extra. If a value you
set is not taking effect, check it against the sheet's member list before suspecting the API.

## Dates and numbers

The generator maps spec types to Python as follows — take the exact type of any given member from the
contract sheet rather than assuming:

| Spec type | Python type |
|---|---|
| `string` (plain, password, regex, ip, hostname, json-pointer, time, uri) | `str` |
| `string` / `email` | pydantic `EmailStr` |
| `string` / `uuid` | `uuid.UUID` |
| integer widths (`integer`, `long`) | `int` |
| fractional numbers (`number`, `decimal`) | **`float`** |
| `boolean` | `bool` |
| `binary`, `file` | `bytes` |
| `date` | the SDK's `Date` converter |
| `date-time` | `RFC3339DateTime`, `RFC1123DateTime` or `UnixSecondsDateTime` |

Two consequences:

- **Date/time fields use the SDK's converter types**, so the wire format is handled for you. Assign a
  `datetime`/`date` and read one back; do not format strings by hand. Every one of those names is an
  `Annotated` alias over the stdlib type, declared in `{root_package}/core/converters/date_time.py`:
  `Date` → `datetime.date`; `RFC3339DateTime`, `RFC1123DateTime` and `UnixSecondsDateTime` →
  `datetime.datetime`. The alias only governs the wire format. They are runtime types, so the map's
  **Type sources** tables do not list them — this is where they live; do not go searching.
- **There is no `Decimal` arm.** A fractional number becomes `float`, so a spec that models money as a
  number gives you binary floating point. Most payment APIs instead model money as a **`str`** scaled
  to the currency (`"10.00"`) — where yours does, build it with `Decimal` and format explicitly, never
  with `%f`/`round()` and never through a locale-dependent conversion that can produce `"10,00"`:

  ```python
  from decimal import Decimal
  value = f"{Decimal('10.00'):.2f}"
  ```

Currency codes are typically plain `str` with no enum — pass `"USD"`.

## ValidationError is your friend, not an error to suppress

Constructing a model wrong raises `pydantic.ValidationError` (a `ValueError`) with the exact field
path. That is the SDK catching your mistake at the point you made it. Let it propagate in development;
in production, catch it at the boundary where *you* assemble a payload from external input, and treat
it as a 4xx on your own API rather than an upstream failure.

See [reference.md](reference.md) for the mechanics — `UNSET` semantics, `model_copy`, enum helpers,
reading nested optional structures, and type-checking notes.

## Next

- Calls and bodies → **python-calling-endpoints**
- Error payload models → **python-error-handling**
