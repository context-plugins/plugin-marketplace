# Models reference (APIMatic Go)

Condensed reference for the model shapes in **go-models**. Confirm exact names in `models/`.

## Optional fields

Optional fields are pointers (`*T`) tagged `omitempty`; required fields are value types.

```go
func ptr[T any](v T) *T { return &v }

body.OptionalString = ptr("value")  // *string
body.OptionalInt    = ptr(42)       // *int
body.OmitThisField  = nil           // omitted

if result.Field != nil { fmt.Println(*result.Field) }   // nil-check on read
```

## Enums — typed int or string

```go
// string enum:
type {Enum} string
const {Enum}_{MEMBER} {Enum} = "wire_value"

// int enum:
type {Enum} int
const {Enum}_{MEMBER} {Enum} = 1

body.Field = models.{Enum}_{MEMBER}          // known
body.Field = models.{Enum}("runtime_value")  // unknown (conversion); fails (un)marshal if invalid
```

Constants are named `{Enum}_{MEMBER}`. Custom `MarshalJSON`/`UnmarshalJSON` validate membership.

## oneOf / anyOf unions

Opaque struct; build via the container, read via `As{Variant}`:

```go
u := models.{Union}Container.From{Variant}(value)   // construct (no struct literal possible)

if v, ok := u.As{Variant}(); ok { /* use *{Variant} */ }
```

- **With discriminator:** the generator maps the discriminator value → variant inside `UnmarshalJSON`
  (e.g. `"small" → Cat`, `"large" → Dog`); you still read with `As{Variant}`.
- **Without discriminator:** `UnmarshalJSON` tries each variant's schema in order.
- **anyOf** works the same way (a value may validate as more than one variant; `As{Variant}` reports which
  matched).
- **Nested unions** (`OneOf(X, OneOf(Y, Z))`) nest containers — read the outer first, then the inner.

If `value` is unset, `MarshalJSON` errors with "No underlying type is set" — always build with
`From{Variant}`.

## Polymorphic interfaces

Inheritance/discriminator hierarchies expose interfaces (`{Type}Interface`) with getters; concrete structs
implement them. Build with `New{Type}(...)` (grep `models/`), read via getters (`obj.GetName()`), and pass
the concrete value where the interface (or a union's `From{Variant}`) is expected.

## Collections

| Field type | `nil` + `omitempty` | explicit empty |
| --- | --- | --- |
| `[]{Item}` | omitted | `[]{Item}{}` → `[]` |
| `map[string]{V}` | omitted | `map[string]{V}{}` → `{}` |

## Dates

`time.Time`, a runtime date wrapper, or a string depending on the spec's format. Open the field for its
exact type; let the SDK marshal/unmarshal the wire format.

## Additional / unknown properties

Models carry `AdditionalProperties map[string]interface{}`. Unknown response keys are captured there
(not dropped); set keys to send extras. Marshalling calls `DetectConflictingProperties` and errors if an
extra key collides with a declared field.
