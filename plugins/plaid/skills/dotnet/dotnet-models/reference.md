# Models reference (APIMatic .NET)

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

A member with no declared name is `Value{n}` / `Negative{n}`, from the value itself.

## Union types — finding the exact members

For a `OneOf`/`AnyOf` type, the contract sheet lists the exact members (grounded from the SDK map/source). Each variant `{V}`
produces:

- a factory `static {Union} {V}({V} value)` (the parameter type usually equals the variant type name),
- a reader `bool TryGet{V}([NotNullWhen(true)] out {V}? value)` for a reference type, `bool TryGet{V}(out {V} value)`
  for a value type, and
- a handler `on{V}` in both `Match` overloads (`Func<{V}, TResult>` / `Action<{V}>`), in declaration order,
  before the closing `otherwise` (`Func<JsonElement, TResult>` / `Action<JsonElement>`).

Every union also has `bool TryGetUnknown(out JsonElement value)` for a value the SDK could not place. Its
factory is internal: application code can read such a value and send it back, but cannot create one.

Which variants also get an `implicit operator {Union}({Variant})` is in the SKILL. Unions are immutable
records — there are no object-initializers and no way to mutate one after construction.

## Notes

- **Every optional property** carries `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]`, whether or
  not it declares a default (`public bool? Flag { get; init; } = false;`): a null value is omitted from the request
  JSON entirely, never sent as an explicit `null`. Two shapes have no guard and always reach the wire: a
  `required` property, which writes `null` when its type is nullable (`public required string? Reason`), and a
  non-optional property with a default (`public long Priority { get; init; } = 1L;`), whose type cannot hold
  null. There is no way to send an explicit `null` for an optional property; the difference matters on a PATCH.
