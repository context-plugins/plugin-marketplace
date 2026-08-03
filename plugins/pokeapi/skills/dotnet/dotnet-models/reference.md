# Models reference (APIMatic .NET)

## Date/time

Date/time values are `DateTimeOffset?`, serialized as ISO-8601 / RFC-3339 (`"2024-06-17T15:30:45Z"`) — work
with `DateTimeOffset` directly and let the SDK handle the wire format. For manual formatting/parsing in your
own code, use the BCL (`DateTimeOffset.Parse`, `.ToString("O")`, …), not the SDK's internal helpers.

## String-enums

```csharp
[JsonConverter(typeof(StringEnumConverter<{EnumType}>))]
public sealed record {EnumType} : StringEnum<{EnumType}>
{
    public static readonly {EnumType} FirstValue  = new("first_value");
    public static readonly {EnumType} SecondValue = new("second_value");
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
string raw = v;                                 // implicit conversion to string
if ({EnumType}.TryGetKnownValue("first_value", out var known)) { /* known == FirstValue */ }
var all = {EnumType}.GetKnownValues();
```

## Int-enums

Same pattern over `int`:

```csharp
[JsonConverter(typeof(IntEnumConverter<{EnumType}>))]
public sealed record {EnumType} : IntEnum<{EnumType}>
{
    public static readonly {EnumType} Off = new(0);
    public static readonly {EnumType} On  = new(1);
    public static {EnumType} FromValue(int value) => FromValueCore(value);
}

{request}.{EnumProp} = {EnumType}.On;
int n = {EnumType}.On;   // implicit conversion to int
```

## Union types — finding the exact members

For a `OneOf`/`AnyOf` type, the contract sheet lists the exact members (the SDK helper agent grounds
them from the SDK map/source). Each variant `{V}`
produces:

- a factory `static {Union} {V}({V} value)` (the parameter type usually equals the variant type name), and
- a reader `bool TryGet{V}(out {V} value)`.

`AnyOf` unions over primitives also commonly add `implicit operator {Union}({primitive})`. Unions are
immutable records — there are no object-initializers and no way to mutate one after construction.

## Notes

- Optional model properties use `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]`, so leaving
  one unset omits it from the request JSON entirely (distinct from sending an explicit `null`).
- A model captures unknown response fields only when it has an additional-properties map; where it has
  none, unknown fields are dropped.
