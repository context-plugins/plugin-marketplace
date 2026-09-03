# Model mechanics — reference (APIMatic Python)

Supporting detail for `python-models`. Take type and member names from the contract sheet. `{...}` is a placeholder for a name from your SDK.

## `UNSET` semantics

```python
from {root_package}.core import UNSET, UnsetType
```

- A singleton: `UnsetType()` returns the existing instance, and `copy`/`deepcopy`/unpickle all
  preserve identity. So `field is UNSET` is reliable, including on a deep copy of a model.
- Falsy: `bool(UNSET) is False`. Convenient, but it collapses "unset" with "empty list" and
  "empty string" — use `is UNSET` when you need to tell them apart.
- `repr(UNSET)` is `"UNSET"`.
- It is only ever a **default**. Never construct `UnsetType()` yourself; pass `UNSET` if you need to
  spell "omitted" explicitly while building kwargs.

The two annotations that admit it, one per spelling a spec can declare:

```python
Optional         = T | UnsetType           # optional        — omitted or a value
OptionalNullable = T | None | UnsetType    # optional+nullable — omitted, null, or a value
```

Building a payload conditionally, without a `None` ever reaching a non-nullable field:

```python
body = {RequestType}(
    {required_field}="...",
    {optional_field}=value if value is not None else UNSET,
)
```

## Deriving a changed copy

Models are frozen, so mutate by copying:

```python
updated = body.model_copy(update={"{field}": "..."})
```

`update=` bypasses validation for the updated keys — pydantic does not re-validate a `model_copy`.
For values from an untrusted source, rebuild the model instead so validation actually runs.

## Enum helpers

```python
from {root_package}.models.enums import {Enum}

{Enum}("{wire_value}")             # wire value -> member; ValueError if unknown
{Enum}.{MEMBER}.value              # -> "{wire_value}"
str({Enum}.{MEMBER})               # -> "{wire_value}"  (str enums only — see below)
list({Enum})                       # every member
```

Coercing an unknown value with `{Enum}(...)` raises `ValueError` — that is the *closed* lookup.
The **open** alias used on model fields (`{Enum}OrStr` / `{Enum}OrInt`) does not raise; it passes the
unknown value through as the underlying scalar. Do not reimplement that coercion at your boundary;
read the field and handle the scalar arm.

`__str__ = str.__str__` is emitted on **every** enum, which is right for a `(str, Enum)` and wrong for
an `(int, Enum)`: on an int enum, `str(member)` and f-string interpolation raise
`TypeError: descriptor '__str__' requires a 'str' object`. Use `.value` for int enums.

Tolerating an unknown value when you must map to your own enum:

```python
def to_domain(value: {Enum} | str) -> MyEnum:
    match value:
        case {Enum}.{MEMBER}:       return MyEnum.A
        case {Enum}.{OTHER_MEMBER}: return MyEnum.B
        case _:                     return MyEnum.UNKNOWN     # covers new wire values
```

## Union aliases — finding the exact arms

A union is a **type alias**, not a class, so there is nothing to construct and nothing to unwrap. The
contract sheet lists the arms; each arm is used directly. The SDK map names the **module** declaring
the alias, not its arms — read them off the alias there.

```python
from {root_package}.models import {Union}          # also {root_package}.models.unions.{module}
```

- **Plain (`anyOf`)** — `{Union}: TypeAlias = {Variant1} | {Variant2}`, with a companion
  `{Union}Dict: TypeAlias = {Variant1}Dict | {Variant2}Dict`. Named after its arms when the spec gave
  it no name (`{Variant1}Or{Variant2}`).
- **Discriminated (`oneOf` with a discriminator, or an `allOf` base with subtypes)** —
  `{Union}: TypeAlias = Annotated[{Variant1} | {Variant2}, Field(discriminator="{tag}")]`. Each variant
  declares the tag as a defaulted `Literal`, so constructing the variant sets it for you.
- **One surviving arm** — no alias module is emitted at all; the field is typed with that arm directly
  (`{Variant} | None` where a dropped arm was nullable). An alias the sheet does not list does not
  exist.
- Read a union back with `isinstance` / `match`; there are no `TryGet…`-style readers.

Two runtime notes that the annotation does not show:

```python
{RequestType}({union_field}={"{tag}": "{value}", ...})   # ✓ dict form must carry the tag
{RequestType}({union_field}={...})                       # ✗ ValidationError: union_tag_not_found
model.to_dict(exclude_unset=True)                        # ✗ drops the defaulted tag; no longer validates back
```

## Reading nested optional structures

**Response models declare almost everything optional** — a schema that marks nothing required produces
a model with no required member, so `{Model}.model_validate({})` succeeds and every field reads back
`UNSET`. Check the contract sheet for which response members, if any, are actually required.

Two consequences for reading a response:

- **A truncated body is not an error**, it is a model full of `UNSET`. Nothing raises. Check the
  members you actually depend on — see `python-error-handling`.
- A chain of `?`-style access is the normal shape. Python has no `?.`, so guard or use a walrus:

```python
value = None
if (items := response.{list_field}) and items[0].{nested}:
    value = items[0].{nested}.{leaf}
```

A member that is **required on the request model and optional on the response model** is common and
intentional — the same concept, two schemas. Never assume the response shape from the request shape.

## Unknown fields

```python
response.model_extra            # dict of preserved unknown keys, or None
response.model_fields_set       # which declared fields were explicitly set
```

Unknown keys are also reachable by attribute access **unless** the name collides with the model API
(`json`, `copy`, `dict`, `schema`, …). Prefer `model_extra["key"]` — it never collides.

## Type-checking notes

The SDK ships `py.typed`, so `mypy`/`pyright` check your calls against it fully.

- `Optional[T]` from the SDK and `typing.Optional[T]` are **different types**. If you import both into
  one module you will confuse yourself and your reader; the SDK's generated modules never import
  `typing.Optional` — unions are spelled with PEP 604 `|` — and yours should not shadow the name.
- Passing `None` to an `Optional[T]` field is a type error the checker reports. Believe it — at
  runtime it is also a `ValidationError`. (`OptionalNullable[T]` is the annotation that does admit
  `None`.)
- A `{Model}Dict` literal is checked structurally, so an unknown key is an error there too. That check
  is what makes the dict spelling safe to use at all — it is the *only* thing that catches a
  misspelling, since the model base is `extra="allow"` at runtime.
