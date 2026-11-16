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
str({Enum}.{MEMBER})               # -> "{wire_value}"  (str enums only; an int enum raises TypeError)
list({Enum})                       # every member
```

`{Enum}(...)` is the *closed* lookup. The open alias on model fields passes an unknown value through
as the scalar (`SKILL.md` *Enums are open*) — read the field and handle that arm rather than
reimplementing the coercion at your boundary.

Tolerating an unknown value when you must map to your own enum:

```python
def to_domain(value: {Enum} | str) -> MyEnum:
    match value:
        case {Enum}.{MEMBER}:       return MyEnum.A
        case {Enum}.{OTHER_MEMBER}: return MyEnum.B
        case _:                     return MyEnum.UNKNOWN     # covers new wire values
```

## Union aliases — finding the exact arms

```python
from {root_package}.models import {Union}          # also {root_package}.models.unions.{module}
```

The SDK map names the **module** declaring a union, not its arms — read them off the alias there. An
unnamed `anyOf` alias is named after its arms (`{Variant1}Or{Variant2}`). A discriminated alias exists
for a `oneOf` with a discriminator **and** for an `allOf` base with subtypes. Construction and reading
rules are in `SKILL.md` *Union types*.

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

The SDK ships `py.typed`, so `mypy`/`pyright` check your calls against it fully. The SDK's modules
never import `typing.Optional` (unions are spelled with PEP 604 `|`); don't import it into a module
that also uses the SDK's `Optional`, a different type.
