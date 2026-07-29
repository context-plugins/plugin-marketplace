# Models reference (APIMatic Java)

Condensed reference for the model shapes in **java-models**. Confirm exact names in `models/`.

## Builder pattern

```java
// Required fields → Builder constructor; optional fields → fluent setters before .build()
// Confirmed: ServiceStatus.Builder(String status) — status is required, rest are optional
{Type} obj = new {Type}.Builder(requiredA, requiredB)
        .optionalField(value)
        .build();
```

Open `doc/models/{type}.md` — the Tags column says Required / Optional.

## Nullable / optional fields

Optional fields are `@JsonInclude(NON_NULL)` — unset means `null`, which is omitted from JSON.
Always null-check getters on response models:

```java
String v = result.getSomeField();  // may be null → guard before use
if (v != null) { use(v); }
```

## String-backed enum

```java
// Confirmed: OperationTypeEnum in calculator.json
// Constant: SomeEnum.MEMBER; wire value via .value():
String wire = OperationTypeEnum.SUM.value();         // → "SUM"

// Runtime lookup (returns null if unknown — not an exception):
OperationTypeEnum e = OperationTypeEnum.fromString("MULTIPLY");

// Jackson internal (@JsonCreator) — throws IOException on unknown:
// OperationTypeEnum.constructFromString("MULTIPLY")
```

## Integer-backed enum

```java
// Confirmed: SuiteCodeEnum in MultiAuth-Sample
int wire = SuiteCodeEnum.HEARTS.value();             // → integer constant
SuiteCodeEnum e = SuiteCodeEnum.fromInteger(1);      // null if unknown

// Check the enum's static initializer block in the source for the integer wire values.
```

## oneOf / anyOf union (models/containers/)

```java
// Confirmed: OneOfPrimitive, AnyOfPrimitive, OneOfLionDeerType in typeCombinator-global

// Construct — static factory only (no public constructor):
OneOfPrimitive u = OneOfPrimitive.fromSenderName("alice");  // String variant
OneOfPrimitive u = OneOfPrimitive.fromMessageId(42);         // int variant

// Object-typed variant — build model first:
OneOfLionDeerType v = OneOfLionDeerType.fromLion(
    new Lion.Builder("id6", "100 kg", "hunter").kind("northener").build()
);

// Unwrap — match() visitor (exhaustive at compile time):
R result = u.match(
    senderName -> /* handle String */,
    messageId  -> /* handle int */
);
```

- **With discriminator:** custom `@JsonDeserialize` maps the discriminator value to the correct
  case class automatically during deserialization.
- **Without discriminator:** Jackson tries each case class in order.
- **AnyOf:** same factory + `match()` pattern as OneOf; semantically allows partial type satisfaction.
- **Nested unions:** build the inner union first, pass it to the outer factory.
- `fromSenderName(null)` returns `null` — check source if passing potentially-null values.

## Polymorphic / discriminated hierarchy

```java
// Confirmed: Animal → Cat, Dog in typeCombinator-global
// Cat.Builder(String name, String color) — default constructor sets petType = "Cat" automatically.
Cat cat = new Cat.Builder("Whiskers", "grey")
        .id(AnyOfPrimitive.fromMessageId(7))   // base-class field
        .build();

// Read back via instanceof:
if (received instanceof Cat c) {               // Java 16+ pattern; cast on Java 8-15
    System.out.println(c.getName());
}
```

Do not set the discriminator field manually — the default constructor initialises it.

## Collections

```java
SomeModel m = new SomeModel.Builder()
        .tags(Arrays.asList("a", "b"))  // List<T>
        .build();
```

`null` + `@JsonInclude(NON_NULL)` → omitted from JSON. Empty list → serialised as `[]`.

## Date / time types

Confirm the exact Java type from the model source — may be `String` in some SDKs.

| Java type | Wire format |
| --- | --- |
| `LocalDate` | `"2024-06-17"` |
| `OffsetDateTime` | `"2024-06-17T15:30:45Z"` |
| `ZonedDateTime` | ISO-8601 with zone ID |

SDK handles JSON (de)serialization; work with `java.time` types directly.

## Additional properties (BaseModel)

All models extend `BaseModel`; unknown response JSON fields land in:

```java
// Confirmed: ServiceStatus.toString() references getAdditionalProperties()
Map<String, Object> extras = result.getAdditionalProperties();
Object v = extras.get("x_custom");  // null if field absent
```
