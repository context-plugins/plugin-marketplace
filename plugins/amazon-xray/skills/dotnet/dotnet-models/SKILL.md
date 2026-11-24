---
name: dotnet-models
description: Load before building request payloads for an APIMatic .NET SDK in C# or mapping its models onto your own types — required members and nullability, OneOf/AnyOf unions, open enums, dates, collections, validation attributes, JSON wire names versus C# property names, and unknown fields.
---

# Working with models in an APIMatic .NET SDK

Most request/response data are immutable `record`s built with object-initializers (covered in
`dotnet-calling-endpoints`). This skill covers the **non-obvious model shapes** that trip integrations up.
The patterns are generic across APIMatic .NET SDKs; take the real type names from the contract sheet (grounded from the SDK map/source) — never a decompiled or reflected view of the
installed package.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Union}`,
> `{Variant}`, `{EnumType}`, `{RequestType}`) — replace it with the concrete identifier from the source.

## Polymorphic union types: `OneOf` and `AnyOf`

When a field can be one of several types, APIMatic generates a union `record` (under
`{RootNamespace}.Models.OneOf` or `.Models.AnyOf`). Build these with the generated **static factory
methods** (one per variant) and read them back with **`TryGet…` methods** or branch over every variant
with **`Match`** — a union has no object-initializer, and the `Optional<T>` backing each variant is
internal, so the factories, `TryGet…` and `Match` are the whole surface. JSON (de)serialization is
automatic.

- `OneOf` — the value is exactly one variant, selected on the wire by a **discriminator property** (e.g.
  `type`). The generated converter reads that property and switches on it.
- `AnyOf` — no discriminator; the converter **tries each variant's schema in declaration order** and takes
  the first that deserializes.

⚠ **A payload matching no variant does not throw** — it lands in the union's **Unknown** slot as the raw
`JsonElement`: `TryGetUnknown(out var raw)` returns `true`, every `TryGet{Variant}` returns `false`, and
the value serializes back verbatim. A variant the provider adds after your SDK was generated therefore does
not break the call; your code decides what to do with it. A `OneOf` whose discriminator property is missing
or not a string still throws, and so does a known discriminator value whose body does not fit that variant
(a missing required member or a wrong-typed value); both reach your catch as
`ResponseDeserializationException` (see `dotnet-error-handling`). You cannot build an Unknown value
yourself: its factory is not public.

### Construct

```csharp
// One static factory per variant: {Union}.{Variant}(value)
var u1 = {Union}.String("...");
var u2 = {Union}.{Variant}(new {Variant} { /* ... */ });

// Implicit conversions: every OneOf variant has one; on AnyOf, primitives and models do.
{Union} u3 = "...";                          // AnyOf only — same as {Union}.String("...")
{Union} u4 = new {Variant} { /* ... */ };    // same as {Union}.{Variant}(...)
```

**A `OneOf`'s variants are always model or enum references** — it has no primitive, list or map variant, and
every variant gets an implicit conversion. On an `AnyOf`, primitive and model variants get one; list, map and
untyped-object variants do not, and neither do two variants that share one CLR type. The factory always
exists — reach for the implicit conversion only where you can see one.

### Read / unwrap

```csharp
// Each variant has a bool TryGet{Variant}([NotNullWhen(true)] out T? value), a bare out T for a
// value type. The member name comes from the variant's SCHEMA type, not its CLR type — a `decimal`
// variant reads TryGetBigDecimal:
if (u1.TryGetString(out var s))            { /* use s (string)  */ }
else if (u1.TryGetBigDecimal(out var d))   { /* use d (decimal) */ }

// OneOf: branch over the variants you expect
if (resp.{Field}.TryGet{Variant}(out var v))           { /* ... */ }
else if (resp.{Field}.TryGet{OtherVariant}(out var w)) { /* ... */ }

// Match: one on{Variant} handler per variant, in the order the union declares them, then otherwise,
// which receives the raw JsonElement of a value the SDK could not place.
// The Func overload returns a value; the Action overload (same handler names) runs a side effect.
var result = resp.{Field}.Match(
    on{Variant}: v => Handle(v),
    on{OtherVariant}: w => HandleOther(w),
    otherwise: raw => HandleUnrecognised(raw));
```

Every `Match` handler is required, `otherwise` included, so a variant you leave out is a compile error —
unlike a `TryGet` chain, whose last `else` the compiler never checks and which silently drops an Unknown
value. Pass the handlers **by name**: a regenerated SDK whose spec adds or reorders a variant changes the
`Match` signature, and two variants of one CLR type (`onString` / `onEmailString`) would swap silently at
a positional call site. When you read with `TryGet…` instead, end the chain with
`TryGetUnknown(out var raw)` or an `else`, so an unrecognised value is handled on purpose.

The factory and `TryGet` names are built from the **variant's schema type name, which is often not its
CLR type name** — this is the single easiest thing to get wrong when writing a union branch from memory:

| Variant | Factory method | Reader |
| --- | --- | --- |
| a model `{Variant}` | `.{Variant}({Variant})` | `TryGet{Variant}([NotNullWhen(true)] out {Variant}? value)` |
| a big-decimal (CLR `decimal`) | `.BigDecimal(decimal)` | `TryGetBigDecimal(out decimal value)` |
| a UUID (CLR `Guid`) | `.Guid(Guid)` | `TryGetGuid(out Guid value)` |
| a date-time (CLR `DateTimeOffset`) | `.DateTime(DateTimeOffset)` | `TryGetDateTime(out DateTimeOffset value)` |
| a date (**also** CLR `DateTimeOffset`) | `.Date(DateTimeOffset)` | `TryGetDate(out DateTimeOffset value)` |
| an email / uri / ip (all CLR `string`) | `.EmailString(...)` / `.UriString(...)` / `.IpString(...)` | `TryGetEmailString([NotNullWhen(true)] out string? value)`, … |
| a list of `{Variant}` | `.ListOf{Variant}(IReadOnlyList<{Variant}>)` | `TryGetListOf{Variant}([NotNullWhen(true)] out IReadOnlyList<{Variant}>? value)` |
| a map of `{Variant}` | `.MapOf{Variant}(...)` | `TryGetMapOf{Variant}([NotNullWhen(true)] out IReadOnlyDictionary<string, {Variant}>? value)` |

A reference-type reader is `[NotNullWhen(true)] out T?`: `out var` infers `T?`, and the compiler narrows it to
`T` inside the `if`; outside the check the value may be null. A value-type reader stays a bare `out T`.

The primitive rows apply to `AnyOf` only. Two variants that would collide outright are suffixed (`String`,
`String2`); a variant named `Unknown`, or named like its own union, takes a `Variant` suffix
(`UnknownVariant`). Each row's `Match` handler is `on` + its factory name (`onBigDecimal`, `onEmailString`,
`onListOf{Variant}`). **Take the exact member name from the contract sheet** (grounded from the SDK
map/source) rather than deriving it from the C# type you see.

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

**An untyped field holds a `JsonElement`.** A property typed `object` or `JsonElement` (nullable or not) holds a
`JsonElement` after a read, when it is not `null`. Read it with the `JsonElement` API,
never a cast to `Dictionary`.

## Dates & numbers

- **A date/time field is not necessarily a `DateTimeOffset?` — check the property type.** It can be a
  plain `string?`, often with a `[RegularExpression]` that *documents* an RFC-3339 shape without enforcing it
  (see below); both occur in one SDK, and some SDKs have no `DateTimeOffset` at all. Take the type from the
  contract sheet: `DateTimeOffset.Parse` against a field that is already a `DateTimeOffset` will not compile,
  nor will a hand-built string written into a `DateTimeOffset?` field.
- **A `DateTimeOffset` model property round-trips as `System.Text.Json`'s default**, ISO-8601 with an offset
  (`"2024-06-17T15:30:45+00:00"`), *even where the API documents a date-only shape* — a field documented as
  `YYYY-MM-DD` is sent in the full form, and reconciling that with the provider is yours. Do not
  hand-format it; for your own formatting use the BCL (`DateTimeOffset.Parse`, `.ToString("O")`), never the
  SDK's internal converters.
- Money/quantities may be `string`, `decimal`, or a string-or-number `AnyOf` union; the model's property
  type is the source of truth. Numeric types vary per SDK (`int`, `long`, `double`, …) — take the exact
  type from the contract sheet; don't assume `double`.

## Validation attributes are documentation, not enforcement

Generated models carry validation attributes transcribed from the API definition — hundreds, sometimes
thousands, in a large SDK. They come from two places:

- the BCL: `[StringLength]`, `[MaxLength]`, `[MinLength]`, `[RegularExpression]`, `[Range]`;
- the SDK's own `{RootNamespace}.Core.Validation.Attributes`, for the constraints DataAnnotations has no
  equivalent for: `[Minimum]`, `[Maximum]`, `[ExclusiveMinimum]`, `[ExclusiveMaximum]`, `[MultipleOf]`,
  `[Format]`, `[UniqueItems]`, `[MinProperties]`, `[MaxProperties]`. `[Format]` in particular is easy to
  miss and can be the most common attribute in the tree.

**Nothing in the SDK evaluates any of them.** No validation is invoked anywhere on the request path, so a
value that violates the attribute right next to it is serialized and sent, and the constraint is enforced
only by the provider, as a `400` you then have to interpret.

Read them as the API's documented contract — they are an accurate, machine-transcribed statement of what
the provider will accept, and far cheaper to consult than the API docs. Just do not mistake their presence
for a client-side guard. Where you want one, opt in explicitly at your own boundary:

```csharp
Validator.ValidateObject(body, new ValidationContext(body), validateAllProperties: true);
```

The SDK's own attributes derive from `ValidationAttribute`, so that one call covers both families — you do
not need to handle `[Format]` or `[Minimum]` separately.

That is worth doing on user-supplied input before a write, where a rejected request costs a round-trip and
an error path; it is usually not worth it on values your own code produced.

## Enums

Enums are type-safe records — `OpenStringEnum<T>` over `string` or `OpenIntEnum<T>` over `long` — never C#
enums. Use the static constants; they convert implicitly to their underlying value. Reading back: `.Value`
(or the implicit conversion) yields the raw wire value — but **not** `ToString()`, see the warning below —
and `==` compares by value, so two instances read from the same wire value are equal.

There is **no public factory**: `{EnumType}.FromValue(...)` does not exist, and an undeclared value cannot
be constructed in code. Resolve a raw value with `{EnumType}.TryGetKnownValue(value, out var
known)` — exact, case-sensitive — and guard a received value with `instance.IsKnownValue()`. A server value
the SDK does not declare still deserializes (enums are open on reads), round-trips unchanged with the
server's own casing, and compares without constructing one: `instance.Is("raw")` or `instance == "raw"`.

Branch with the generated `Match`, not a `switch`: one `on{Member}` arm per declared value in declaration order,
then `otherwise`, which receives the raw wire value of anything undeclared. Pass the arms by name — the
parameters are positional, and a regenerated SDK that adds or reorders a value changes the signature (a
source break, and `MissingMethodException` for an assembly compiled against the old shape).

```csharp
{request}.{EnumProp} = {EnumType}.SomeConstant;
string wire = {response}.{EnumProp}.Value;                          // raw wire value back out
if ({EnumType}.TryGetKnownValue(value, out var known)) { /* known constant */ }
var text = {response}.{EnumProp}.Match(
    onSomeConstant: () => "some",
    onOtherConstant: () => "other",
    otherwise: raw => $"undeclared: {raw}");
```

⚠ **`ToString()` does not give you the wire value — it gives the record's debug form.** The base class
overrides `ToString()` to return the value, but each generated enum is itself a `record`, so the compiler
synthesises its own `ToString()` that shadows the override:

```csharp
string a = {EnumType}.SomeConstant.Value;      // "SOME_CONSTANT"  ← the wire value
string b = {EnumType}.SomeConstant;            // "SOME_CONSTANT"  ← implicit conversion, also fine
string c = $"{ {EnumType}.SomeConstant }";     // "{EnumType} { Value = SOME_CONSTANT }"  ← NOT the wire value
string d = {EnumType}.SomeConstant.ToString(); // same debug form
```

String interpolation picks `ToString()`, so an enum interpolated into a URL, a log line, or a hand-built
query string silently carries the debug form — and so does `string.Format`. Concatenation with `+` is safe
on a **string** enum (the implicit conversion to `string` wins overload resolution) but **not** on an int
enum: there is no `string + int` operator, so it binds `string + object` and you get the debug form again.
Use `.Value` explicitly whenever the string leaves your process, and the distinction stops mattering.

A member whose name would collide with the enum's own name, with the inherited or generated surface
(such as `Value`, `Match` or `IsKnownValue`), or with a member of `object` carries a `Member` suffix — a
value `value` becomes `ValueMember`; its siblings keep their plain names.

See [reference.md](reference.md) for full string- and int-enum declarations and union-member discovery.

## Unknown / future fields

Models declare their wire properties explicitly. An object or allOf model also carries a
`[JsonExtensionData]` bag — `public AdditionalProperties AdditionalProperties { get; init; } = [];`
(`{RootNamespace}.Core.Models`) — so unknown JSON fields are **kept**: a field this SDK does not model
survives deserialization and round-trips back out on serialize. A model that admits no extra fields has no
bag and drops them, a `OneOf`/`AnyOf` union has none of its own, and the bag is named `AdditionalProperties2`
when the model already has an `AdditionalProperties` property. Take the bag's name and type from the contract
sheet.

Read one with `response.AdditionalProperties.TryGetValue<T>("field_name", out var value)` (deserializes
the captured `JsonElement` to `T`), or `TryGetElement` for the raw `JsonElement`; `Set(key, value)` adds
one to a request. When every extra field has one type, the bag is `AdditionalProperties<T>`, whose
`TryGetValue("field_name", out var value)` takes no type argument. Two cautions: the keys are **wire names**
(there is no C# property, so nothing maps the casing for you), and a field appearing here rather than as a
typed property is one this SDK version does not type — prefer an SDK version that does over building
program logic on stringly-typed lookups. The bag itself has no `[JsonPropertyName]` and no wire name — its
contents merge into the model's own JSON object.
