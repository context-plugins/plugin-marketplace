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

Every enum — schema enums under `Models/Enums/` and the server-environment enum under `Servers/` — is a
`sealed record` with a `private` constructor and a get-only `Value`. There is no public factory.

```csharp
[JsonConverter(typeof(StringEnumConverter<{EnumType}>))]
public sealed record {EnumType} : OpenStringEnum<{EnumType}>
{
    private {EnumType}(string value) : base(value)
    {
    }

    public static readonly {EnumType} FirstValue = new("first_value");

    public static readonly {EnumType} SecondValue = new("second_value");

    public TResult Match<TResult>(Func<TResult> onFirstValue, Func<TResult> onSecondValue, Func<string, TResult> otherwise) => …

    public void Match(Action onFirstValue, Action onSecondValue, Action<string> otherwise) { … }
}
```

Usage:

```csharp
var v = {EnumType}.FirstValue;                                         // known constant
string raw = v;                                                        // implicit conversion to string
if ({EnumType}.TryGetKnownValue("first_value", out var known)) { }     // exact match — "FIRST_VALUE" is not found
var all = {EnumType}.GetKnownValues();                                 // IReadOnlyCollection<{EnumType}>
var label = received.Match(onFirstValue: () => "1", onSecondValue: () => "2", otherwise: raw => raw);
bool same = received.Is("first_value");                                // compare a raw value without constructing one
```

A server value the SDK does not declare deserializes into an instance whose `IsKnownValue()` is false,
keeps the server's own casing, and serializes back unchanged. The server-environment enum is *closed*: an
undeclared value fails the read with `JsonException`, and its `Match` is `internal` with no `otherwise`.

## Int-enums

Same pattern over `long`:

```csharp
[JsonConverter(typeof(IntEnumConverter<{EnumType}>))]
public sealed record {EnumType} : OpenIntEnum<{EnumType}>
{
    private {EnumType}(long value) : base(value)
    {
    }

    public static readonly {EnumType} Off = new(0L);

    public static readonly {EnumType} On = new(1L);

    public TResult Match<TResult>(Func<TResult> onOff, Func<TResult> onOn, Func<long, TResult> otherwise) => …

    public void Match(Action onOff, Action onOn, Action<long> otherwise) { … }
}

{request}.{EnumProp} = {EnumType}.On;
long n = {EnumType}.On;   // implicit conversion to long
```

Member names come from the spec's `x-enum-varnames` when it declares them, otherwise `Value{n}` /
`Negative{n}` from the value itself.

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

- **Every optional property** carries `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]`, whether or
  not it declares a default (`public bool? Flag { get; init; } = false;`): a null value is omitted from the request
  JSON entirely, never sent as an explicit `null`. Two shapes have no guard and always reach the wire: a
  `required` property, which writes `null` when its type is nullable (`public required string? Reason`), and a
  non-optional property with a default (`public long Priority { get; init; } = 1L;`), whose type cannot hold
  null. There is no way to send an explicit `null` for an optional property; the difference matters on a PATCH.
- Every generated model ends with `[JsonExtensionData] public AdditionalProperties AdditionalProperties
  { get; init; } = [];` — unknown response fields are captured there (keyed by **wire name**) and
  round-trip on serialize. See the SKILL's *Unknown / future fields* for the read/write API and the
  cautions. On the older 4.0.0 surface this property does not exist and unknown fields are dropped —
  check the core-surface stamp before carrying this expectation across SDKs.
- Validation attributes (`[StringLength]`, `[RegularExpression]`, `[MaxLength]`, `[MinLength]`) are
  transcribed from the API definition and are **never evaluated by the SDK** — see the SKILL for what to do
  about that.
