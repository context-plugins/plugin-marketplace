---
name: go-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated Go SDK — pointer-typed optional fields (*T + omitempty), typed int- or string-enums with {Enum}_{MEMBER} constants (not iota), oneOf/anyOf unions built via a {Type}Container.From{Variant}(...) helper and read with As{Variant}() (*Interface, bool), polymorphic interface types, collections, dates, and the AdditionalProperties map that preserves unknown JSON fields. Use when building a request struct or reading a response field that is a union, enum, pointer-optional, slice/map, or date — anything that isn't a plain required string/number. Load it even after reading the field's type in the source, since the type name alone won't tell you a union needs a container helper or that an enum isn't a Go iota.
---

# Working with models in an APIMatic Go SDK

Most request/response data are plain Go structs in the `models` package, built with struct literals. This
skill covers the **non-obvious shapes** that trip integrations up. Take the real type names from your SDK
source (`models/`).

> Throughout, `{...}` tokens are placeholders for names you take from your SDK. The generated
> `doc/models/*.md` files describe each model's fields and types.

## Optional fields — pointer types `*T`

Optional struct fields are **pointer types** (`*string`, `*int`, `*models.{Type}`) tagged
`json:"name,omitempty"`. A `nil` pointer is omitted from the JSON; required fields are non-pointer.

```go
body := models.{RequestType}{
    RequiredField: "value",        // non-pointer — always sent
    OptionalField: ptr("active"),  // *string — pass a pointer
    OmitMe:        nil,            // *string — omitted from JSON
}

func ptr[T any](v T) *T { return &v }   // define once
```

Read an optional response field with a nil-check:

```go
if result.OptionalField != nil {
    fmt.Println(*result.OptionalField)
}
```

## Enums — typed `int` or `string`, with `{Enum}_{MEMBER}` constants

Enums are **not** Go `iota` types. APIMatic generates a named type over `int` **or** `string`, with one
exported constant per value named `{EnumType}_{MEMBER}`:

```go
// string-based:  type OAuthProviderErrorEnum string
//   const OAuthProviderErrorEnum_INVALIDREQUEST OAuthProviderErrorEnum = "invalid_request"
// int-based:     type SuiteCodeEnum int
//   const SuiteCodeEnum_HEARTS SuiteCodeEnum = 1

body.Status = models.OAuthProviderErrorEnum_INVALIDREQUEST           // known constant
body.Status = models.OAuthProviderErrorEnum("server_provided_value") // unknown/runtime value (conversion)
```

The type's custom `MarshalJSON`/`UnmarshalJSON` validate against the known members, so an unrecognized
value fails (un)marshalling. Open `models/enums.go` for the exact constant names and whether the enum is
int- or string-based.

## oneOf / anyOf unions — container helper + `As{Variant}`

A field that can hold one of several types is generated as an **opaque struct** (a private `value any`
plus per-variant `isX` flags) with:

- a package-level **container** variable `models.{Union}Container` exposing `From{Variant}(...)`
  constructors, and
- `As{Variant}() (*{Variant}, bool)` reader methods.

```go
// Construct — pick the variant:
pet := models.OneOfCatDogKindContainer.FromCat(cat)   // cat satisfies CatInterface

// Read — try each variant:
if c, ok := pet.AsCat(); ok {
    // *CatInterface
} else if d, ok := pet.AsDog(); ok {
    // *DogInterface
}
```

You **cannot** build a union with a struct literal (its fields are unexported) — use the `From{Variant}`
helper, or `MarshalJSON` returns "No underlying type is set". For unions with a discriminator, the
generator wires the discriminator mapping into `UnmarshalJSON` automatically. See
[reference.md](reference.md) for nested unions and anyOf.

## Polymorphic types — interfaces

Models in an inheritance/discriminator hierarchy are exposed as **interfaces** (e.g. `AnimalInterface`,
`CatInterface`) with getter methods, and concrete structs that implement them. Build a concrete value with
its constructor (grep `func New{Type}` in `models/`), then pass it where the interface is expected (e.g.
into a union's `From{Variant}`). Read fields through the getters (`obj.GetName()`).

## Collections — slices and maps

List fields are `[]{ItemType}`; maps are `map[string]{ValueType}`:

```go
body.Tags = []string{"a", "b"}
body.Meta = map[string]string{"env": "prod"}
```

A `nil` slice/map with `omitempty` is omitted; an explicit empty `[]string{}` serializes as `[]`.

## Dates

Date/time fields are represented as `time.Time`, a runtime date-wrapper type, or a plain string depending
on the OpenAPI format the spec used. **Open the field in the model** to see its exact type and `json` tag,
and let the SDK's (un)marshalling handle the wire format — don't format dates by hand.

## Unknown / additional properties — preserved, not dropped

Generated models include an `AdditionalProperties map[string]interface{}` field. Unknown JSON keys on a
response are **captured there** (not silently dropped), and you can set extra keys to send by populating
it — the model's `MarshalJSON` calls `DetectConflictingProperties` and will error if an additional key
collides with a declared field.

```go
if v, ok := result.AdditionalProperties["x_custom"]; ok {
    fmt.Println(v)
}
```

See [reference.md](reference.md) for a condensed reference on all model shapes.
