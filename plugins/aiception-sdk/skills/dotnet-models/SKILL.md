---
name: dotnet-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated C#/.NET SDK (APIMATIC v3.0) — nullable optional fields (NullValueHandling.Ignore on JsonProperty), real C# enums with integer or string backing + EnumMember wire values, oneOf/anyOf union containers (abstract classes built via static From{Variant} factories and read with Match<T> or MatchSome<T>, never with new), polymorphic inheritance hierarchies, collections, dates, and the AdditionalProperties map that preserves unknown JSON. Use when building a request struct or reading a response field that is a union container, enum, nullable, collection, or date — anything that isn't a plain required string or number — load it even after reading the field's type in the source, since the type name alone won't tell you a union requires a From{Variant} factory or that Match<T> is the way to read it.
---

# Working with models in an APIMatic C#/.NET SDK

Most request/response data are plain C# classes (subclasses of `BaseModel`) built with object
initializers. This skill covers the **non-obvious shapes** that trip integrations up. Take the real
type names from your SDK source (`Models/` and `Models/Containers/`); the generated
`doc/models/*.md` files describe each field's type and Required/Optional tag.

> Throughout, `{...}` tokens are placeholders for names from your SDK.

## Optional fields — nullable types + NullValueHandling.Ignore

Required fields have non-nullable types (`string`, `int`, `double`). Optional fields are C# nullable
types (`string?` or `long?`, `int?`, etc.) and carry:

```csharp
[JsonProperty("field_name", NullValueHandling = NullValueHandling.Ignore)]
public string OptionalField { get; set; }
```

A `null` optional field is **omitted** from the JSON sent in a request. Read an optional response
field with a null-check:

```csharp
var body = new {RequestModel}
{
    RequiredField = "value",    // non-nullable
    OptionalField = null,       // omitted from request JSON
};

if (result.OptionalField != null)
{
    Console.WriteLine(result.OptionalField);
}
```

## Enums — real C# enums with generated backing values

APIMatic generates standard C# `enum` types, not wrapper types. Two kinds:

**Integer-backed** (decorated with `[JsonConverter(typeof(NumberEnumConverter))]`):

```csharp
// SuiteCodeEnum.cs
public enum SuiteCodeEnum { Hearts = 1, Spades = 2, Clubs = 3, Diamonds = 4 }

SuiteCodeEnum suite = SuiteCodeEnum.Hearts;   // wire value: 1
```

**String-backed** (decorated with `[JsonConverter(typeof(StringEnumConverter))]` + `[EnumMember]`):

```csharp
// OAuthProviderErrorEnum.cs
public enum OAuthProviderErrorEnum
{
    [EnumMember(Value = "invalid_request")] InvalidRequest,
    [EnumMember(Value = "invalid_client")]  InvalidClient,
    // ...
}

OAuthProviderErrorEnum err = OAuthProviderErrorEnum.InvalidRequest;
// wire value: "invalid_request"
```

Open the enum file in `Models/` to confirm: whether it is integer- or string-backed, and the exact
`[EnumMember]` wire value for string enums. The C# member name and the wire value differ — always
use the generated constant, never pass a raw string/int where an enum is expected.

## oneOf / anyOf union containers — From{Variant} factory + Match<T> reader

When a field can hold one of several types, APIMatic generates an **abstract container class** under
`Models/Containers/`. The container has:

- one `public static {Container} From{Variant}({Variant} value)` factory per variant, and
- an `abstract T Match<T>(Func<{A}, T> caseA, Func<{B}, T> caseB, ...)` method to read the value.

**You cannot build a union with `new` — use the factory.** Attempting to `new` the container
(abstract class) is a compile error.

```csharp
using TypeCombinatorGlobal.Standard.Models;
using TypeCombinatorGlobal.Standard.Models.Containers;

// Construct — pick the variant:
OneOfCatDogKind pet = OneOfCatDogKind.FromCat(new Cat
{
    Name = "whiskers",
    Color = "grey",
    Kind = "small",
});

// Or the other variant:
OneOfCatDogKind pet2 = OneOfCatDogKind.FromDog(new Dog { Name = "rex", Fangs = "yes" });
```

**Reading with `Match<T>`** — all branches must have the same return type `T`:

```csharp
string description = pet.Match<string>(
    cat => $"Cat: {cat.Name}",
    dog => $"Dog: {dog.Name}"
);
```

**Reading with `MatchSome<T>`** — when you only care about some variants; pass `null` for the
others and get the `default(T)` for unmatched variants:

```csharp
string name = pet.MatchSome<string>(
    cat: c => c.Name   // only handle Cat; Dog returns null
);
```

**Primitive unions** use the same pattern with primitive wrapper factories:

```csharp
// AnyOfPrimitive: From{VariantName}(...) where the name is per the API's generated field name
AnyOfPrimitive id = AnyOfPrimitive.FromSenderName("user-123");
AnyOfPrimitive idNum = AnyOfPrimitive.FromMessageId(42);

id.Match<string>(
    senderName: s => $"name={s}",
    messageId: i => $"id={i}"
);
```

Open the container class (e.g. `OneOfCatDogKind.cs`) in `Models/Containers/` to see the exact
factory method names and the `Match<T>` lambda parameter names — they are per-API and matter for
compilation.

## Polymorphic types — inheritance hierarchies

Models in an inheritance/discriminator hierarchy have a base class and concrete subclasses. Build
a concrete instance with an object initializer and set the discriminator property (e.g. `PetType`):

```csharp
Cat cat = new Cat
{
    Name = "whiskers",
    Color = "grey",
    PetType = "Cat",   // discriminator — check doc/models/{type}.md for the required value
    OneOfKind = "One Of kind2",
};
```

The base class in `{BaseClass}.cs` declares the common fields. Concrete subclasses add their own
fields and carry the discriminator value. Check `doc/models/{type}.md` for the required discriminator
field and its exact string value.

## Collections

List/array fields are `List<{ItemType}>` (or `IList<{ItemType}>`); maps are
`Dictionary<string, {ValueType}>`:

```csharp
var body = new {RequestModel}
{
    Tags = new List<string> { "a", "b" },
    Meta = new Dictionary<string, string> { ["env"] = "prod" },
};
```

A `null` collection with `NullValueHandling.Ignore` is omitted from JSON; an explicit empty
`List<>()` serializes as `[]`.

## Dates

Date/time fields are typically `string` (wire format depends on the API), `DateTime`, or
`DateTimeOffset`. Open the model property in the source to confirm the exact type and `[JsonProperty]`
tag; let the SDK's (de)serialization handle the wire format. Do not format dates manually unless
the property type is `string`.

## Unknown / additional properties — preserved in AdditionalProperties

Generated model classes extend `BaseModel`, which includes:

```csharp
[JsonExtensionData]
public IDictionary<string, JToken> AdditionalProperties { get; set; }
```

Unknown JSON keys on a response are **captured there** (not dropped), and you can set extra keys
to include in requests by populating it:

```csharp
if (result.AdditionalProperties.TryGetValue("x_custom", out var val))
{
    Console.WriteLine(val.ToString());
}

// Send an additional field:
body.AdditionalProperties = new Dictionary<string, JToken>
{
    ["x_trace"] = "abc"
};
```

Confirm that `AdditionalProperties` is present by checking `BaseModel.cs` in the generated source —
the pattern is consistent across APIMATIC v3.0 SDKs.

## See also

- [reference.md](reference.md) — condensed field-by-field quick reference
- **dotnet-calling-endpoints** — object-initializer syntax for plain models
- **dotnet-error-handling** — typed exception subclasses and their model fields
