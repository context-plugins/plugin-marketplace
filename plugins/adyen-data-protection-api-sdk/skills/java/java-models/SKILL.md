---
name: java-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated Java SDK — inner Builder pattern (required fields in the Builder constructor, optional fields as fluent setters), nullable fields annotated @JsonInclude(NON_NULL), Java string-backed and integer-backed enums with fromString/fromInteger factory methods and a value() getter, oneOf/anyOf union types under models/containers/ built with static from{Variant}() factory methods and unwrapped with a match() visitor, polymorphic discriminated hierarchies, collections (List/Map), date types (LocalDate/OffsetDateTime/ZonedDateTime handled by the SDK), and the getAdditionalProperties() map inherited from BaseModel. Load it even after reading a field's Java type in the source, since the type name alone won't tell you that enums use fromString (not valueOf), that union containers require a static factory (not a constructor), or that match() is the exhaustive way to unwrap a union.
---

# Java SDK — Models

All model classes in an APIMatic-generated Java SDK extend `io.apimatic.core.types.BaseModel` and are built
using an inner `Builder` static class. Jackson (`com.fasterxml.jackson`) handles serialisation; you never
call Jackson directly — pass standard Java types to the builder and read them back via getters.

> **Confirm every class name, builder method, and enum constant from the SDK source.** The `doc/models/`
> directory in the cloned SDK is the fastest starting point — it lists all fields, their types, and whether
> each is `Required` or `Optional`, plus a complete usage example. Open the `.java` source for exact generic
> types and to see which constructor parameters the `Builder` requires.

## Builder pattern — required vs optional fields

Required fields are constructor parameters of the `Builder`. Optional fields are fluent setter methods called
before `.build()`. An unset optional field is annotated `@JsonInclude(JsonInclude.Include.NON_NULL)` on its
getter and is **omitted from the serialised JSON** — it is not sent as `null`.

```java
// ServiceStatus — "status" is required; everything else is optional.
// Confirmed from MultiAuth-Sample: models/ServiceStatus.java → Builder(String status)
import localhost3000.models.ServiceStatus;

ServiceStatus s = new ServiceStatus.Builder("ok")   // required arg in Builder constructor
    .app("my-app")                                   // optional fluent setter
    .notes(42)                                       // optional
    .build();

// Required constructor args are documented in doc/models/<model>.md under the Tags column:
// "Required" → goes in Builder(...)
// "Optional" → fluent setter method, may be omitted
```

Fields with `@JsonInclude(JsonInclude.Include.NON_NULL)` on their getter are optional — check the source.
Fields without that annotation (e.g. `status` on `ServiceStatus`) are required and are always serialised.

`toBuilder()` returns a new `Builder` pre-seeded with the current model's state, useful for creating
modified copies without repeating every field:

```java
ServiceStatus updated = original.toBuilder()
    .notes(100)
    .build();
```

## Nullable optional fields

Optional fields on response models are plain nullable reference types — there is no `Optional<T>`. Always
null-check before use:

```java
ServiceStatus status = ctrl.oAuthClientCredentialsGrant();
String app = status.getApp();   // may be null — guard before use
if (app != null) {
    System.out.println(app);
}

Integer notes = status.getNotes();  // boxed Integer — null when absent
```

Do not call `.get()` on optional fields expecting `Optional<T>` — the SDK returns the raw type or `null`.

## Java enums

Enums are standard Java `enum` types with custom `@JsonCreator`/`@JsonValue` support for round-tripping
through JSON. Two kinds exist:

### String-backed enums

The enum constant maps to a JSON string value via `@JsonValue public String value()` and a `fromString()`
factory. Use the constant directly wherever possible:

```java
// Confirmed from calculator.json: models/OperationTypeEnum.java
import io.apimatic.examples.models.OperationTypeEnum;

// Compile-time constant:
OperationTypeEnum op = OperationTypeEnum.SUM;           // wire value: "SUM"

// Runtime string (e.g. from config or user input):
OperationTypeEnum op2 = OperationTypeEnum.fromString("MULTIPLY");
// Returns null if the string does not match any constant — null-check before use.

// Get the wire value back:
String wireValue = OperationTypeEnum.SUM.value();       // → "SUM"
```

### Integer-backed enums

The enum constant maps to a JSON integer via a custom `value()` and a `fromInteger()` factory:

```java
// Confirmed from MultiAuth-Sample: models/SuiteCodeEnum.java
import localhost3000.models.SuiteCodeEnum;

SuiteCodeEnum suite  = SuiteCodeEnum.HEARTS;       // use directly
SuiteCodeEnum suite2 = SuiteCodeEnum.fromInteger(2); // runtime integer lookup
int n = SuiteCodeEnum.HEARTS.value();               // gets the integer wire value
```

Open the enum source to find the exact constant names and integer mappings — do not guess.

## OneOf / AnyOf union container classes

When a schema field can be one of several distinct types (oneOf) or satisfy one or more of several types
(anyOf), APIMatic generates an abstract container class under `com.adyen.catest.models.containers/`. The class
exposes **static factory methods** for construction and an abstract **`match()`** visitor for reading.

### Building a union value

Each allowed type has its own `from{Variant}(...)` static factory. Pass the value; the method returns an
instance of the abstract container type:

```java
// Confirmed from typeCombinator-global:
// models/containers/OneOfPrimitive.java → fromSenderName(String), fromMessageId(int)
// models/containers/AnyOfPrimitive.java → fromSenderName(String), fromMessageId(int)
import localhost3000.models.containers.OneOfPrimitive;
import localhost3000.models.containers.AnyOfPrimitive;

OneOfPrimitive asString = OneOfPrimitive.fromSenderName("alice");
OneOfPrimitive asInt    = OneOfPrimitive.fromMessageId(42);

AnyOfPrimitive anyStr   = AnyOfPrimitive.fromSenderName("bob");
```

For object-typed variants, build the model first:

```java
// Confirmed from typeCombinator-global: models/containers/OneOfLionDeerType.java
import localhost3000.models.Lion;
import localhost3000.models.Deer;
import localhost3000.models.containers.OneOfLionDeerType;

OneOfLionDeerType asDeer = OneOfLionDeerType.fromDeer(
    new Deer.Builder("deer22", "20 kg", "Hunted").build()
);
OneOfLionDeerType asLion = OneOfLionDeerType.fromLion(
    new Lion.Builder("id6", "100 kg", "hunter").kind("northener").build()
);
```

`fromSenderName(null)` returns `null` — check the source when passing potentially-null values.

### Reading a union value — the `match()` visitor

The abstract container exposes `match(Cases<R> cases)` with one method per variant. This is exhaustive —
the compiler enforces coverage of all cases:

```java
// Confirmed from typeCombinator-global: OneOfPrimitive.Cases<R>
String display = container.match(
    senderName -> "name: " + senderName,    // String variant
    messageId  -> "id: "   + messageId      // int variant
);

// For object-typed containers (e.g. OneOfLionDeerType):
String result = friend.match(
    lion  -> "Lion weight: " + lion.getWeight(),
    deer  -> "Deer type: "   + deer.getType()
);
```

Prefer `match()` over `instanceof` checks — it is exhaustive and survives SDK regeneration with new variants.
If `match()` is not available, use `instanceof` against the private inner case classes visible in the source;
do not assume inner class names without reading the source first.

## Polymorphic inheritance — `@JsonTypeInfo` / `@JsonSubTypes`

When models use discriminated inheritance, the base class carries Jackson annotations that drive
deserialisation. Confirmed from `typeCombinator-global`:

```java
// Animal.java (base):
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.EXISTING_PROPERTY,
              property = "pet_type", defaultImpl = Animal.class, visible = true)
@JsonSubTypes({
    @JsonSubTypes.Type(value = Cat.class, name = "Cat"),
    @JsonSubTypes.Type(value = Dog.class, name = "Dog")
})
public class Animal { ... }
```

Build a subtype using its own `Builder`, which accepts both the base-class fields and the subclass fields:

```java
// Cat.Builder(String name, String color) — name and color are required; petType defaults to "Cat"
import localhost3000.models.Cat;
import localhost3000.models.containers.AnyOfPrimitive;

Cat cat = new Cat.Builder("Whiskers", "grey")
    .id(AnyOfPrimitive.fromMessageId(7))   // inherited base-class field
    .build();
```

The default constructor of each subclass sets the discriminator property automatically (e.g.
`setPetType("Cat")`). You do not need to set it manually. Read back specific fields via `instanceof`:

```java
Animal received = ctrl.someEndpoint();
if (received instanceof Cat) {
    Cat c = (Cat) received;
    System.out.println(c.getName());   // Cat-specific field
}
```

## Collections

List and Map fields are plain Java generics — assign directly on the builder:

```java
import java.util.Arrays;

SomeModel m = new SomeModel.Builder()
    .tags(Arrays.asList("alpha", "beta"))   // List<String>
    .build();
```

- A `null` collection is omitted from the serialised JSON.
- An empty `Arrays.asList()` serialises as `[]`.
- Confirm the exact generic type (`List<String>`, `List<SomeEnum>`, `List<ModelClass>`) from the source or
  `doc/models/` — do not assume.

## Additional properties (unmodelled JSON fields)

Models extending `BaseModel` inherit `getAdditionalProperties()`, which returns a `Map<String, Object>` of
any JSON keys present in the response that are not declared fields. Confirmed: `ServiceStatus.toString()`
references `getAdditionalProperties()`.

```java
Map<String, Object> extra = status.getAdditionalProperties();
Object someValue = extra.get("some_future_field");
```

If `getAdditionalProperties()` does not exist on the class, the SDK does not collect unmapped fields for
that model — check the source.

## Date / time fields

Confirm the exact Java type from the model source — generated code may use `String` for timestamp fields
in some APIs. When the SDK runtime's Jackson configuration supports `java.time`:

- `LocalDate` → date-only fields (`"2024-06-01"`)
- `ZonedDateTime` or `OffsetDateTime` → full timestamps (`"2024-06-01T12:00:00Z"`)

If a date field is typed as `String` in the source, the SDK does not parse it — pass the wire format
directly.

## Quick reference

| Concern | What to do |
|---|---|
| Required vs optional fields | Check `doc/models/<model>.md` Tags column, or `Builder` constructor params in source |
| Omitting an optional from JSON | Leave the fluent setter uncalled — `@JsonInclude(NON_NULL)` omits it |
| Null-safe optional read | `null`-check the getter return; no `Optional<T>` wrapper |
| String enum lookup | `{Enum}.fromString(str)` — returns `null` on unknown |
| Integer enum lookup | `{Enum}.fromInteger(n)` — returns `null` on unknown |
| Wire value of enum | `.value()` on the constant |
| Build a union value | `{Container}.from{Variant}(value)` static factory |
| Read a union value | `.match(case1 -> ..., case2 -> ...)` visitor |
| Polymorphic subtype | Build using subtype's own `Builder`; read via `instanceof` |
| Collections | Plain `List<T>` / `Map<K,V>` — assign via builder setter |
| Unmodelled response fields | `model.getAdditionalProperties()` if available |
