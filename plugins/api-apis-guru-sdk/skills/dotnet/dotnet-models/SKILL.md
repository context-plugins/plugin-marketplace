---
name: dotnet-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated C#/.NET SDK — polymorphic OneOf/AnyOf unions (built with static factory methods, read via TryGet…, no object-initializer), string-/int-enums (StringEnum<T>/IntEnum<T> via static constants or FromValue, not C# enums), collections (IReadOnlyList/IReadOnlyDictionary), DateTimeOffset dates, and unknown-field behavior. Use when building a request body or reading a response field that is a union, enum, list/map, or date — anything that isn't a plain string/number — or when an unmodeled JSON field is dropped on deserialization. Load it even after reading the field's type in the source, since the type name alone won't tell you a union needs factory methods (not `new`) or that an enum isn't a C# enum.
---

# Working with models in an APIMatic .NET SDK

Most request/response data are immutable `record`s built with object-initializers (covered in
`dotnet-calling-endpoints`). This skill covers the **non-obvious model shapes** that trip integrations up.
The patterns are generic across APIMatic .NET SDKs; take the real type names from your SDK source — read the
model and union `.cs` files, not a decompiled or reflected view of the installed package.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Union}`,
> `{Variant}`, `{EnumType}`, `{RequestType}`) — replace it with the concrete identifier from the source.

## Polymorphic union types: `OneOf` and `AnyOf`

When a field can be one of several types, APIMatic generates a union `record` (under
`FlightCheckInLinks.Models.OneOf` or `.Models.AnyOf`). Build these with the generated **static factory
methods** (one per variant) and read them back with **`TryGet…` methods** — a union has no
object-initializer. JSON (de)serialization is automatic.

- `OneOf` — the value is exactly one variant (sometimes indicated by a discriminator field such as `type`).
- `AnyOf` — the value may match one of several primitive/shape variants.

### Construct

```csharp
// One static factory per variant: {Union}.{Variant}(value)
var u1 = {Union}.String("...");
var u2 = {Union}.{Variant}(new {Variant} { /* ... */ });

// AnyOf unions over primitives also expose implicit conversions:
{Union} u3 = "...";    // same as {Union}.String("...")
{Union} u4 = 10.50m;   // same as {Union}.Decimal(10.50m)
```

### Read / unwrap

```csharp
// Each variant has a bool TryGet{Variant}(out var value):
if (u1.TryGetString(out var s))        { /* use s (string)  */ }
else if (u1.TryGetDecimal(out var d))  { /* use d (decimal) */ }

// OneOf: branch over the variants you expect
if (resp.{Field}.TryGet{Variant}(out var v))           { /* ... */ }
else if (resp.{Field}.TryGet{OtherVariant}(out var w)) { /* ... */ }
```

The factory and `TryGet` names are built mechanically from the **variant's CLR type name**:

| Variant CLR type | Factory method | Reader |
| --- | --- | --- |
| `double` | `.Double(double)` | `TryGetDouble(out double)` |
| `decimal` | `.Decimal(decimal)` | `TryGetDecimal(out decimal)` |
| `string` | `.String(string)` | `TryGetString(out string)` |
| a model `{Variant}` | `.{Variant}({Variant})` | `TryGet{Variant}(out {Variant})` |
| a list of `{Variant}` | `.ListOf{Variant}(IReadOnlyList<{Variant}>)` | `TryGetListOf{Variant}(out IReadOnlyList<{Variant}>)` |

The exact CLR type varies per union — a numeric variant may be `double`, `decimal`, or `long` — so open the
union file under `Models/AnyOf` or `Models/OneOf` and copy the real method name. (Unions use the per-variant
factories and `TryGet…` readers shown above; `FromValue` belongs to enums.) The `Optional<T>` backing a
union is internal — interact only through the
factories and `TryGet…`.

## Collections

List/array properties are `IReadOnlyList<T>?`; maps are `IReadOnlyDictionary<TKey, TValue>?`. Assign a
`List<>`/array/`Dictionary<>` directly (each implements the read-only interface), or use collection
expressions:

```csharp
var body = new {RequestType}
{
    {ListProp} = ["A", "B"],                                    // IReadOnlyList<string>
    {MapProp}  = new Dictionary<string, string> { ["k"] = "v" } // IReadOnlyDictionary<string,string>
};
```

A null collection is omitted from the JSON; an **empty** collection is serialized.

## Dates & numbers

- Date/time fields are `DateTimeOffset?`, serialized as ISO-8601 / RFC-3339 — work with `DateTimeOffset`
  and let the SDK handle the wire format. For manual formatting/parsing use the BCL (`DateTimeOffset.Parse`,
  `.ToString("O")`); the SDK's date handling is internal.
- Money/quantities may be `string`, `decimal`, or a string-or-number `AnyOf` union; the model's property
  type is the source of truth.
  Numeric ids are typically `double?`.

## Enums

Enums are type-safe string-enums (`StringEnum<T>`) or int-enums (`IntEnum<T>`): use the static constants,
or `FromValue(...)` for a value not known at compile time; they convert implicitly to their underlying
value. Guard unknown values with `TryGetKnownValue(...)`.

```csharp
{request}.{EnumProp} = {EnumType}.SomeConstant;
{request}.{EnumProp} = {EnumType}.FromValue(serverProvidedValue);   // tolerates unknown values
if ({EnumType}.TryGetKnownValue(value, out var known)) { /* known constant */ }
```

See [reference.md](reference.md) for full string- and int-enum declarations and union-member discovery.

## Unknown / future fields

Models declare their properties explicitly. Whether unknown JSON fields are kept depends on the SDK:
APIMatic can generate an additional-properties map that captures them, but where a model has none — the
common case — unknown fields are dropped on deserialization. Check the model; to read an unmodeled field,
regenerate the SDK or parse that response yourself.
