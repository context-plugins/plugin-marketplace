---
name: typescript-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated TypeScript/Node.js SDK — oneOf/anyOf union types (built as plain object literals, narrowed on the way back with the generated is{Variant} type guards), string-literal enums (use the exported constants or raw string values), collections (Array<T>), ISO-8601 date strings, and unknown-field behavior. Use when building a request body or reading a response field that is a union, enum, list/map, or date — anything that isn't a plain string/number — or when an unmodeled JSON field is dropped on deserialization. Load it even after reading the field's type in the source, since the type name alone won't tell you that a union is validated at call time and rejects a value matching more than one variant.
---

# Working with models in an APIMatic TypeScript SDK

Most request/response data are plain TypeScript objects conforming to interfaces (covered in `typescript-calling-endpoints`). This skill covers the **non-obvious model shapes** that trip integrations up. The patterns are generic across APIMatic TypeScript SDKs; take the real type names from your SDK source.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Union}`, `{Variant}`, `{EnumType}`, `{RequestType}`) — replace it with the concrete identifier from the source.

## Discriminated union types

When a field can be one of several types, APIMatic generates a union type in
`src/models/containers/`: a TypeScript union of the variant interfaces, plus a runtime schema built with
`oneOf([...])`.

### Construct — a plain object literal

There are **no factory helpers**. Assign the variant's own shape directly:

```typescript
const body: {RequestType} = {
  {field}: {                 // typed as {Union}
    type: '{variantTag}',    // the variant's discriminating value, if it has one
    someField: 'value',
  },
};
```

### Read — narrow with the generated type guards

The union's namespace exports one `is{Variant}` guard per variant. These are **read-side only**:

```typescript
import { {Union} } from 'vimeo';

if ({Union}.is{Variant}(response.result.{field})) {
  // narrowed to {Variant}
}
```

A tagged union can also be narrowed on its discriminator:

```typescript
switch (response.result.{field}.type) {
  case '{variantTag}':
    break;
}
```

### The failure mode to know about

`oneOf` is validated **when you make the call**, client-side, before any HTTP request. The runtime tries
every variant and requires **exactly one** match. Two errors come out of it:

- `Matched more than one type` — your value satisfies several variants at once. Usually the variants'
  discriminating field is unconstrained in the generated schema, so no value can disambiguate them. Set
  the discriminator explicitly; if it still fails, the union cannot be satisfied from the typed API and
  the SDK needs regenerating.
- `Could not match against any acceptable type` — a required field is missing, or the discriminator
  value is not one the variant accepts.

Open the container file under `src/models/containers/` and read the variant list and each variant's
schema before debugging your own input.

## Collections

List/array properties are `Array<T>` (or `T[]`); maps are `Record<string, V>`. Assign a plain array or object directly:

```typescript
const body: {RequestType} = {
  {listProp}: ['A', 'B'],                           // Array<string>
  {mapProp}: { key: 'value' },                      // Record<string, string>
};
```

A `null` or `undefined` collection is omitted from the JSON; an **empty** array `[]` is serialized.

## Dates & numbers

- Date/time fields are ISO-8601 strings (e.g. `"2024-06-17T15:30:45Z"`) — pass and receive them as strings. Use `new Date(value)` or a date library in your own code to parse/format; the SDK handles the wire format.
- Money/quantities may be `string`, `number`, or a union; the model's property type is the source of truth.
- Numeric IDs are typically `number`.

## Enums

Enums are string literal unions with exported constants. Use the exported constants, or pass the raw string value for unknown/dynamic values:

```typescript
import { {EnumType} } from 'vimeo';

request.{enumProp} = {EnumType}.SomeConstant;
request.{enumProp} = 'server_provided_value' as {EnumType};  // unknown-tolerant
```

See [reference.md](reference.md) for the full enum declaration shape.

## Unknown / future fields

Models declare their properties explicitly. Unknown JSON fields received in a response are typically dropped on deserialization unless the model has an index signature (`[key: string]: unknown`). Check the model interface; to read an unmodeled field, regenerate the SDK or parse that response yourself.
