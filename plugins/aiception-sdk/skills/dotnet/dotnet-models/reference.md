# Models reference (APIMatic .NET — APIMATIC v3.0)

## Optional fields

Optional properties are nullable (`string?`, `long?`, `int?`) and carry
`[JsonProperty("wire_name", NullValueHandling = NullValueHandling.Ignore)]`. A `null` value is
omitted from the request JSON. Required properties are non-nullable and must be set.

## C# enums — integer-backed

```csharp
[JsonConverter(typeof(NumberEnumConverter))]
public enum {EnumType}
{
    FirstMember = 1,
    SecondMember = 2,
}

// Usage:
{EnumType} val = {EnumType}.FirstMember;   // wire value: 1
```

## C# enums — string-backed

```csharp
[JsonConverter(typeof(StringEnumConverter))]
public enum {EnumType}
{
    [EnumMember(Value = "first_value")] FirstMember,
    [EnumMember(Value = "second_value")] SecondMember,
}

// Usage:
{EnumType} val = {EnumType}.FirstMember;   // wire value: "first_value"
```

The C# member name and the wire value differ — always use the generated constant. Confirm the
`[EnumMember(Value = "...")]` strings from the enum file in `Models/`.

## oneOf/anyOf union containers

Union fields use an **abstract container class** under `Models/Containers/`. Build with a static
`From{Variant}` factory; read with `Match<T>` or `MatchSome<T>`.

```csharp
// Construct:
OneOfCatDogKind pet = OneOfCatDogKind.FromCat(new Cat { Name = "whiskers", Color = "grey" });

// Read — all branches share return type T:
string name = pet.Match<string>(
    cat => cat.Name,
    dog => dog.Name
);

// Read — only handle some variants (others return default(T)):
string catName = pet.MatchSome<string>(cat: c => c.Name);
```

To find the exact `From{Variant}` names and `Match<T>` parameter names for a specific union, open
the container `.cs` file in `Models/Containers/`.

## Primitive unions

```csharp
// AnyOfPrimitive example (names are per-API):
AnyOfPrimitive id = AnyOfPrimitive.FromSenderName("user-123");
AnyOfPrimitive id2 = AnyOfPrimitive.FromMessageId(42);

string result = id.Match<string>(
    senderName: s => s,
    messageId: i => i.ToString()
);
```

## Polymorphic models (discriminator hierarchy)

Build the concrete subclass; set the discriminator field to its required wire value (check
`doc/models/{type}.md` for what the value must be):

```csharp
Cat cat = new Cat
{
    Name = "whiskers",
    Color = "grey",
    PetType = "Cat",      // discriminator
};
```

## Collections

```csharp
var body = new {Model}
{
    Tags = new List<string> { "a", "b" },            // List<string>
    Meta = new Dictionary<string, string> { ["k"] = "v" },
};
// null collection with NullValueHandling.Ignore → omitted from JSON
// empty List<>() → serialized as []
```

## AdditionalProperties (unknown JSON fields)

`BaseModel` includes `[JsonExtensionData] IDictionary<string, JToken> AdditionalProperties` — unknown
response keys land there (not dropped). Populate it to send extra JSON fields.

## Notes

- Open the model `.cs` file in `Models/` to confirm which fields are required vs optional and to
  see the exact `[JsonProperty]` wire names (they may differ from the C# property name).
- Union containers are `abstract class` — you cannot `new` them; always use `From{Variant}(...)`.
- `Match<T>` requires all variant callbacks; `MatchSome<T>` lets you pass `null` for variants you
  don't handle (they return `default(T)`).
