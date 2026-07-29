---
name: typescript-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated TypeScript/Node.js SDK — discriminated union types (built with factory helpers or type guards, not plain object-literals), string-literal enums (use the exported constants or raw string values), collections (Array<T>), ISO-8601 date strings, and unknown-field behavior. Use when building a request body or reading a response field that is a union, enum, list/map, or date — anything that isn't a plain string/number — or when an unmodeled JSON field is dropped on deserialization. Load it even after reading the field's type in the source, since the type name alone won't tell you a union needs a factory helper (not a plain object-literal) or that an enum is a string literal union.
---

# Working with models in an APIMatic TypeScript SDK

Most request/response data are plain TypeScript objects conforming to interfaces (covered in `typescript-calling-endpoints`). This skill covers the **non-obvious model shapes** that trip integrations up. The patterns are generic across APIMatic TypeScript SDKs; take the real type names from your SDK source.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Union}`, `{Variant}`, `{EnumType}`, `{RequestType}`) — replace it with the concrete identifier from the source.

## Discriminated union types

When a field can be one of several types, APIMatic generates a discriminated union type (under `src/models/`). Build these with the generated **factory helpers** (one per variant) and read them back with **type guards** — a union is not a plain object-literal.

### Construct

```typescript
import { {Union}, {Variant} } from 'sportsdatalib';

// One factory helper per variant:
const u1 = {Union}.fromString('...');
const u2 = {Union}.from{Variant}({ /* ... */ });
```

### Read / unwrap

```typescript
import { is{Variant} } from 'sportsdatalib';

if (is{Variant}(u1)) {
  // u1 is narrowed to {Variant}
  console.log(u1.someField);
}
```

Alternatively, use the discriminator property when the union is tagged:

```typescript
switch (response.{field}.type) {
  case '{VariantType}':
    // narrowed here
    break;
}
```

Open the union type file under `src/models/` for the exact factory and guard names.

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
import { {EnumType} } from 'sportsdatalib';

request.{enumProp} = {EnumType}.SomeConstant;
request.{enumProp} = 'server_provided_value' as {EnumType};  // unknown-tolerant
```

See [reference.md](reference.md) for the full enum declaration shape.

## Unknown / future fields

Models declare their properties explicitly. Unknown JSON fields received in a response are typically dropped on deserialization unless the model has an index signature (`[key: string]: unknown`). Check the model interface; to read an unmodeled field, regenerate the SDK or parse that response yourself.
