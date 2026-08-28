---
name: dotnet-models
description: Working with models in an APIMatic-generated .NET SDK in C# — building request models, required members and nullability, enums, union/AnyOf accessors, and JSON wire names versus C# property names. Load before constructing request payloads or mapping SDK models onto your own domain types.
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
methods** (one per variant) and read them back with **`TryGet…` methods** — a union has no
object-initializer. JSON (de)serialization is automatic.

- `OneOf` — the value is exactly one variant, selected on the wire by a **discriminator property** (e.g.
  `type`). The generated converter reads that property and switches on it.
- `AnyOf` — no discriminator; the converter **tries each variant's schema in declaration order** and takes
  the first that deserializes.

⚠ **A payload matching no variant throws.** Both converters end in
`throw new JsonException("JSON does not match … schemas: …")`, raised mid-deserialization of the response —
you do not get a null union or an unset variant. A provider that adds a variant your SDK predates turns
into a `JsonException` on a call that was previously fine, so a union field is a place to expect
regeneration pressure. See `dotnet-error-handling` for where that surfaces in a catch ladder.

### Construct

```csharp
// One static factory per variant: {Union}.{Variant}(value)
var u1 = {Union}.String("...");
var u2 = {Union}.{Variant}(new {Variant} { /* ... */ });

// Implicit conversions: every OneOf variant has one; on AnyOf, primitives and models do.
{Union} u3 = "...";                          // AnyOf only — same as {Union}.String("...")
{Union} u4 = new {Variant} { /* ... */ };    // same as {Union}.{Variant}(...)
```

**A `OneOf`'s variants are always model or enum references** — the generator builds them from the schema's
discriminator mappings, so a `OneOf` has no primitive, list or map variant at all, and every variant it does
have gets an implicit conversion. An `AnyOf` is the open one: primitives and models get a conversion, while
list, map and untyped-object variants do not, and neither do two variants that share one CLR type (the
operators would collide). The factory is the form that always exists — reach for the implicit conversion
only where you can see one.

### Read / unwrap

```csharp
// Each variant has a bool TryGet{Variant}(out var value). The member name comes from the
// variant's SCHEMA type, not its CLR type — a `decimal` variant reads TryGetBigDecimal:
if (u1.TryGetString(out var s))            { /* use s (string)  */ }
else if (u1.TryGetBigDecimal(out var d))   { /* use d (decimal) */ }

// OneOf: branch over the variants you expect
if (resp.{Field}.TryGet{Variant}(out var v))           { /* ... */ }
else if (resp.{Field}.TryGet{OtherVariant}(out var w)) { /* ... */ }
```

The factory and `TryGet` names are built from the **variant's schema type name, which is often not its
CLR type name** — this is the single easiest thing to get wrong when writing a union branch from memory:

| Variant | Factory method | Reader |
| --- | --- | --- |
| a model `{Variant}` | `.{Variant}({Variant})` | `TryGet{Variant}(out {Variant})` |
| a big-decimal (CLR `decimal`) | `.BigDecimal(decimal)` | `TryGetBigDecimal(out decimal)` |
| a UUID (CLR `Guid`) | `.Guid(Guid)` | `TryGetGuid(out Guid)` |
| a date-time (CLR `DateTimeOffset`) | `.DateTime(DateTimeOffset)` | `TryGetDateTime(out DateTimeOffset)` |
| a date (**also** CLR `DateTimeOffset`) | `.Date(DateTimeOffset)` | `TryGetDate(out DateTimeOffset)` |
| an email / uri / ip (all CLR `string`) | `.EmailString(...)` / `.UriString(...)` / `.IpString(...)` | `TryGetEmailString(...)`, … |
| a list of `{Variant}` | `.ListOf{Variant}(IReadOnlyList<{Variant}>)` | `TryGetListOf{Variant}(out IReadOnlyList<{Variant}>)` |
| a map of `{Variant}` | `.MapOf{Variant}(...)` | `TryGetMapOf{Variant}(out …)` |

So a `decimal` variant is `TryGetBigDecimal`, never `TryGetDecimal`; three variants that are all CLR
`string` get three different names; and a `DateTimeOffset` variant is `TryGetDateTime` **or** `TryGetDate`
depending on which the definition declared — two members, one CLR type, and the C# signature cannot tell
them apart. Where two variants would collide outright the generator suffixes them (`String`, `String2`).
The primitive rows apply to `AnyOf` only, since a `OneOf` has no primitive variants. **Take the exact member
name from the contract sheet** (grounded from the SDK map/source) rather than deriving it from
the C# type you see. (Unions use the per-variant factories and `TryGet…` readers shown above; `FromValue`
belongs to enums.) The `Optional<T>` backing a union is internal — interact only through the factories and
`TryGet…`.

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

- **A date/time field is not necessarily a `DateTimeOffset?` — check the property type.** The generator
  emits `DateTimeOffset?` only where the API definition marks the field as a date/time. Where it does not,
  the field is a plain `string?`, frequently carrying a `[RegularExpression]` attribute that *documents* an
  RFC-3339 shape without enforcing it (see below). Both are common in the same SDK, and one of the sampled
  SDKs has **no** `DateTimeOffset` in its models at all. Take the type from the contract sheet; a
  `DateTimeOffset.Parse` written against a field that is already a `DateTimeOffset` will not compile, and a
  hand-built string written into a `DateTimeOffset?` field will not either.
- **A `DateTimeOffset` model property carries no converter** — it round-trips as `System.Text.Json`'s
  default, ISO-8601 with an offset (`"2024-06-17T15:30:45+00:00"`), *even where the API documents a
  date-only shape*. The generator does ship four date converters (ISO-8601, RFC-1123, Unix epoch seconds,
  date-only), but it attaches them to **whole-response payloads** — an operation whose response body is a
  date scalar, or a list or map of them — not to properties inside a model. So if a field's documented wire shape is `YYYY-MM-DD` and
  the property is a `DateTimeOffset?`, what the SDK sends is the full ISO-8601 form, and reconciling that
  with the provider is your problem, not the SDK's. Do not hand-format anyway; for your own formatting use
  the BCL (`DateTimeOffset.Parse`, `.ToString("O")`), never the SDK's internal converters.
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

Enums are type-safe string-enums (`StringEnum<T>`) or int-enums (`IntEnum<T>`): use the static constants,
or `FromValue(...)` for a value not known at compile time; they convert implicitly to their underlying
value. Reading back: `.Value` (or the implicit conversion) yields the raw wire
value — but **not** `ToString()`, see the warning below — and the enum types are `record`s, so `==`
compares by value — `{EnumType}.FromValue("x")` equals the
`x` constant. Guard unknown values with `TryGetKnownValue(...)` or `instance.IsKnownValue()`.

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

**The known-value lookup is case-insensitive**, which is easy to rely on by accident. String enums build
their constant table with `StringComparer.OrdinalIgnoreCase`, so `FromValue("captured")` returns the
`CAPTURED` constant itself — same instance, `IsKnownValue()` true, and the **declared** casing is what goes
on the wire. A casing slip in a configuration value is therefore silently corrected. What is *not*
corrected is a value matching no constant at all: that is passed through verbatim, serialized verbatim, and
`IsKnownValue()` returns false — so `IsKnownValue()` is the check that catches a typo, not a case mismatch.
Int enums match exactly; only string enums are case-insensitive.

⚠ **`FromValue` is emitted per enum, not guaranteed on all of them.** Some generated enums — server /
environment selectors are the ones to watch — expose only their static constants and keep the conversion
helper `protected`, so `{EnumType}.FromValue(someString)` does not compile. Check the type before you plan
to map a configuration string through it; where it is absent, write the string→constant mapping yourself
and default deliberately rather than reaching for a helper that isn't there.

```csharp
{request}.{EnumProp} = {EnumType}.SomeConstant;
{request}.{EnumProp} = {EnumType}.FromValue(serverProvidedValue);   // tolerates unknown values
string wire = {response}.{EnumProp}.Value;                          // raw wire value back out
if ({EnumType}.TryGetKnownValue(value, out var known)) { /* known constant */ }
```

See [reference.md](reference.md) for full string- and int-enum declarations and union-member discovery.

## Unknown / future fields

Models declare their wire properties explicitly, and **every generated model also carries a
`[JsonExtensionData]` property** — `public AdditionalProperties AdditionalProperties { get; init; } = [];`
(`{RootNamespace}.Core.Models`) — so unknown JSON fields are **kept**, not dropped: a field the provider
added after this SDK was generated survives deserialization and round-trips back out on serialize.

Read one with `response.AdditionalProperties.TryGetValue<T>("field_name", out var value)` (deserializes
the captured `JsonElement` to `T`), or `TryGetElement` for the raw `JsonElement`; `Set(key, value)` adds
one to a request. Two cautions: the keys are **wire names** (there is no C# property, so nothing maps the
casing for you), and a field appearing here rather than as a typed property is a regeneration signal —
prefer regenerating the SDK over building program logic on stringly-typed lookups. The
`AdditionalProperties` property itself has no `[JsonPropertyName]` and no wire name — its contents merge
into the model's own JSON object.
