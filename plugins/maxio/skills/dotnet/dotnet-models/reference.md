# Models reference (APIMatic .NET)

## Date/time

**Check the property type first.** A date/time field is `DateTimeOffset?` only where the API definition
marks it as a date/time; otherwise it is a plain `string?`, often with a `[RegularExpression]` attribute
documenting (not enforcing) an RFC-3339 shape. Both appear in generated SDKs, and some SDKs contain no
`DateTimeOffset` at all.

Where it *is* a `DateTimeOffset`, the property carries **no converter attribute** and round-trips as
`System.Text.Json`'s default — ISO-8601 with offset, `"2024-06-17T15:30:45+00:00"` — even where the API
documents a date-only shape. The four generated date converters (ISO-8601, RFC-1123, Unix epoch seconds,
date-only) are attached to whole-response payloads, not to model properties. Work with `DateTimeOffset`
directly and let the SDK serialize it; for formatting in your own code use the BCL
(`DateTimeOffset.Parse`, `.ToString("O")`, …), not the SDK's internal converters.

## String-enums

Schema enums under `Models/Enums/` are emitted `sealed`; the server-environment enum under `Servers/` is
not, so do not treat `sealed` as part of the contract.

```csharp
[JsonConverter(typeof(StringEnumConverter<{EnumType}>))]
public sealed record {EnumType} : StringEnum<{EnumType}>
{
    public static readonly {EnumType} FirstValue  = new("first_value");
    public static readonly {EnumType} SecondValue = new("second_value");

    private {EnumType}(string value) : base(value) { }   // required — the base has no parameterless ctor

    // Emitted for most, but NOT all, generated enums — see the note below.
    public static {EnumType} FromValue(string value) => FromValueCore(value);
}
```

> **Check that `FromValue` is actually there before you rely on it.** The base helper it forwards to
> (`FromValueCore`) is `protected`, and some generated enums — notably server / environment selectors —
> ship only their static constants without the public wrapper. On those, `{EnumType}.FromValue(s)` is a
> compile error and you map the string to a constant yourself.

Usage:

```csharp
var v = {EnumType}.FirstValue;                  // known constant
var u = {EnumType}.FromValue("new_value");      // unknown-tolerant
var c = {EnumType}.FromValue("FIRST_VALUE");    // case-insensitive: returns the FirstValue constant
string raw = v;                                 // implicit conversion to string
if ({EnumType}.TryGetKnownValue("first_value", out var known)) { /* known == FirstValue */ }
var all = {EnumType}.GetKnownValues();          // IReadOnlyCollection<{EnumType}>
```

## Int-enums

Same pattern over `int`:

```csharp
[JsonConverter(typeof(IntEnumConverter<{EnumType}>))]
public sealed record {EnumType} : IntEnum<{EnumType}>
{
    public static readonly {EnumType} Off = new(0);
    public static readonly {EnumType} On  = new(1);

    private {EnumType}(int value) : base(value) { }      // required — the base has no parameterless ctor

    public static {EnumType} FromValue(int value) => FromValueCore(value);
}

{request}.{EnumProp} = {EnumType}.On;
int n = {EnumType}.On;   // implicit conversion to int
```

## Union types — finding the exact members

For a `OneOf`/`AnyOf` type, the contract sheet lists the exact members (grounded from the SDK map/source). Each variant `{V}`
produces:

- a factory `static {Union} {V}({V} value)` (the parameter type usually equals the variant type name), and
- a reader `bool TryGet{V}(out {V} value)`.

A `OneOf`'s variants are always model/enum references (they come from the schema's discriminator
mappings), and each gets an `implicit operator {Union}({Variant})`. On an `AnyOf`, primitive and model
variants get one; list, map and untyped-object variants do not, and neither do two variants sharing one CLR
type. Unions are immutable records — there are no object-initializers and no way to mutate
one after construction.

## Notes

- **Only optional properties with no default** carry `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]`; leaving one
  unset omits it from the request JSON entirely (distinct from sending an explicit `null`). An optional
  property that has a **default value** (`public bool? Flag { get; init; } = false;`) gets no `JsonIgnore`,
  so it is **always serialized** — a body you never touched still sends every defaulted field. Check the
  property before assuming "unset" means "absent from the payload"; the difference matters on a PATCH.
- Every generated model ends with `[JsonExtensionData] public AdditionalProperties AdditionalProperties
  { get; init; } = [];` — unknown response fields are captured there (keyed by **wire name**) and
  round-trip on serialize. See the SKILL's *Unknown / future fields* for the read/write API and the
  cautions. On the older 4.0.0 surface this property does not exist and unknown fields are dropped —
  check the core-surface stamp before carrying this expectation across SDKs.
- Validation attributes (`[StringLength]`, `[RegularExpression]`, `[MaxLength]`, `[MinLength]`) are
  transcribed from the API definition and are **never evaluated by the SDK** — see the SKILL for what to do
  about that.
