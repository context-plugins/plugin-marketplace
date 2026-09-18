# Models reference (APIMatic TypeScript)

Condensed reference for the shapes in **typescript-models**. The schema combinators live in
`src/core/validation/` — vendored static code, identical in every generated TypeScript SDK — and are
reached through the `s` namespace inside generated model modules. `s` re-exports `zod/v4-mini`
(`string`, `number`, `boolean`, `array`, `record`, `union`, `nullable`, `optional`, `literal`,
`unknown`) plus the SDK's own entries (`object`, `enumOf`, `discriminatedUnion`, `of`, `lazy`,
`optionalNullable`, `dateTime`, `rfc1123DateTime`, `unixSecondsDateTime`, `dateOnly`, `bytes`).
Confirm concrete type and field names in `src/models/`.

## The two exports per model

```ts
import { type {Model}, {model}Schema } from "{package-name}";
```

One `type` and one schema value, both re-exported from the package root. Take the pair from an
operation's **Type sources** table (`Type` · `Schema value` · `Source`) in `map/operations/*.md`, or
from the **Models** section of `sdk-map.md`. The type-name-to-path transform is not reversible, so do
not guess the path.

**An enum is the exception to the `type` import.** Its name is a value *and* a type, so
`import { {Enum}, {enum}Schema }` — with `type`, `{Enum}.Active` does not compile. Every other model
type carries no runtime value, so under `verbatimModuleSyntax` it must be imported as
`import { type {Model} }` or `import type { {Model} }`; the schema const is always a value import.

The package ships `dist` (with declaration files), `src`, `README.md`, `api-reference.md`,
`sdk-map.md` and `map`, so the readable TypeScript and the contract sheets are all inside
`node_modules/{package-name}/`.

No property is emitted `readonly` and no model is frozen: a decoded response is a plain mutable
object, and mutating it changes nothing on the wire by itself.

## Spec kind to TypeScript type

| API definition kind | Model type | Schema entry |
| --- | --- | --- |
| string, password, regex-constrained, email, uri, ip, hostname, json-pointer, uuid | `string` | `s.string()` — **format unchecked** |
| `time` | `string` | `s.string()` — unchecked |
| `date` | `string` | `s.dateOnly()` |
| `date-time` (ISO 8601 / RFC 1123 / unix) | `Date` | `s.dateTime()` / `s.rfc1123DateTime()` / `s.unixSecondsDateTime()` |
| int32, int64, float, double, big-decimal | `number` | `s.number()` |
| boolean | `boolean` | `s.boolean()` |
| binary, file | `Uint8Array` | `s.bytes()` (base64) |
| a value the spec fixed | that literal type | `s.literal(value)` |
| free-form object | `Record<string, unknown>` | `s.record(s.string(), s.unknown())` |
| array of `T` | `T[]` | `s.array(...)` |
| map of `T` | `Record<string, T>` | `s.record(s.string(), ...)` |
| model / enum reference | the referenced type | `s.lazy(...)`, or the bare schema const |
| unconstrained / no schema | `unknown` | `s.unknown()` — rejects nothing |

Nullability folds onto whatever the row produced: `T | null` with `s.nullable(...)`. It is never
folded onto `unknown`, which already admits `null`.

## Field declaration cheat sheet

| Declared | Schema entry | Building it |
| --- | --- | --- |
| `f: T` | the entry itself | always provide |
| `f?: T` | `s.optional(...)` | **omit the key** (not `f: undefined`) |
| `f: T \| null` | `s.nullable(...)` | provide `null` to send JSON `null` |
| `f?: T \| null` | `s.optionalNullable(...)` | omit, or provide `null` |

```ts
// Conditional optional field, exactOptionalPropertyTypes-safe:
const body: {Model} = { id, ...(note !== undefined ? { note } : {}) };
```

Run time is more forgiving than the type system — an explicit `undefined` is dropped from the JSON —
but do not rely on it: the SDK's own tsconfig sets `exactOptionalPropertyTypes` (and
`verbatimModuleSyntax`, `noUncheckedIndexedAccess`, `strict`), and a consumer that does the same will
not compile.

`s.defaulted(entry, value)` exists but belongs to an operation's request fields, not to model
properties; a model property never carries a default.

## Deriving a changed copy

```ts
const updated = { ...model, {field}: "..." };
```

Nothing validates a spread — the schema runs when you pass the value to an operation or call `encode`
yourself, and that is where a bad value surfaces. The copy is **shallow**: nested models and arrays
are shared with the original, so mutating one mutates both. Undeclared keys the source carried are
copied along, which is what keeps a read-modify-write round-trip from dropping server-side state the
SDK does not model.

## Reading a response model

- **An absent optional is `undefined`.** No sentinel, no wrapper, so `?.` / `??` are enough, and
  `!== undefined` is the precise test where "absent" and "present but empty" differ.
- **A response type whose spec marks nothing required accepts `{}`.** `{model}Schema.decode({})`
  succeeds and every property is `undefined`; a truncated body raises nothing. Check the properties
  you depend on.
- **Required on the request, optional on the response is normal.** Two schemas, one concept — read
  each from its own place in the map rather than assuming they match.
- Under `noUncheckedIndexedAccess`, `items[0]` is `T | undefined`; guard it before reaching through.
- An undeclared key that arrived on the wire is on the object but not in the type — reach it with a
  widening cast, and only when you must.

## Schema surface

```ts
type Schema<T, W = Encoded<T>> = {
  readonly decode: (value: unknown) => T;   // wire shape  -> model
  readonly encode: (value: unknown) => W;   // model shape -> wire
};

type EnumSchema<T> = Schema<T, T> & { readonly values: readonly T[] };
```

`Schema`, `EnumSchema` and `Encoded` are re-exported from the package root as types.

`Encoded<T>` — the wire projection:

| `T` | `Encoded<T>` |
| --- | --- |
| `Date` | `string \| number` |
| `Uint8Array` | `string` (base64) |
| `E[]` | `Encoded<E>[]` |
| object | each property projected |
| anything else | itself |

Both directions throw `SchemaError` on mismatch and produce nothing partial. The message is prefixed
`Wire value could not be decoded.` or `Type could not be encoded for the wire.`, followed by
`path: expected X, received Y` per issue (`<root>` where there is no path); `.rawBody` carries the
offending value, `.kind` is `"schema"`, and `.cause` is the underlying zod error with the structured
issue list. Request encoding runs before the HTTP call, so an encode failure means **nothing was
sent**.

## Key renaming

The `_keysMap` entry inside a generated `s.object<T>({ ... })` literal maps TypeScript property names
to wire keys, and is applied on decode and encode both. Only properties that moved appear:

```ts
export const {model}Schema = s.object<{Model}>({
  createdAt: s.dateTime(),
  isActive: s.optional(s.boolean()),
  _keysMap: { createdAt: "created_at", isActive: "is_active" },
});
```

You never write wire keys. Reach for `_keysMap` — or the **Wire-name divergences** table in
`sdk-map.md` — only when reading a captured HTTP body.

## Enums

```ts
export const {Enum} = { Active: "active", Retired: "retired" } as const;
export type {Enum} = (typeof {Enum})[keyof typeof {Enum}] | (string & {});
export const {enum}Schema = s.enumOf<{Enum}>({Enum});
```

| Property | Behaviour |
| --- | --- |
| Type | **open** — the `(string & {})` / `(number & {})` tail admits any value of the base type |
| Wire value | the member's value, verbatim (`"active"`, or `1` for a number enum) |
| Decoding | checks the **base type only** — `s.enumOf` builds `s.string()` or `s.number()` from the members and validates nothing else, so an unknown member is accepted |
| Known set | `{enum}Schema.values` — `readonly {Enum}[]`, in declaration order |
| Member names | generated identifiers; a number enum's members are `_0`, `_1`, … |

```ts
import { {Enum}, {enum}Schema } from "{package-name}";

body.status = {Enum}.Active;                             // preferred
body.status = "active";                                  // compiles, but survives a rename
const known = {enum}Schema.values.includes(fromServer);  // runtime membership test
```

Because unknown members decode, a `switch` over a received enum value **needs a `default` arm**, and
an `if`/`else if` chain over the members with no final `else` silently does nothing for a value newer
than the SDK.

There is **no coercion helper** — no `fromValue`, no closed lookup that raises — because a member *is*
its wire value:

```ts
{Enum}.Active === "active";              // true
`${{Enum}.Active}`;                      // "active" — safe in a log line, a URL, a query string
type Known = (typeof {Enum})[keyof typeof {Enum}];   // the closed set, at type level
```

Mapping an SDK enum onto your own, tolerating the open arm:

```ts
function toDomain(value: {Enum}): MyEnum {
  switch (value) {
    case {Enum}.Active: return MyEnum.A;
    case {Enum}.Retired: return MyEnum.B;
    default: return MyEnum.Unknown;      // covers values newer than this SDK
  }
}
```

## Discriminated unions (`oneOf`, and a polymorphic base)

```ts
// src/models/unions/{union}.ts
export type {Union} = ({ArmA} & { {tag}: "a" }) | ({ArmB} & { {tag}: "b" });

export const {union}Schema = s.discriminatedUnion<{Union}>("{wire_tag}", {
  a: {armA}Schema,
  b: {armB}Schema,
});
```

- The arms are the variant types **intersected with the tag literal**; the variant type itself does
  not declare the tag, so a value typed `{ArmA}` is not assignable to `{Union}`.
- **Narrow with `switch` on the tag.** The arms are exhaustive, so no fallback arm is needed.
- **Build by writing the arm's literal, tag included** — the schema writes the tag onto the wire from
  the value you pass, and dispatches on it when decoding.
- The schema's key is the **wire** discriminator and each entry's key is the wire tag **value**. The
  tag name on the **decoded** object can differ, where a variant renamed the discriminator; the type
  alias spells what arrives.
- A polymorphic base (an object schema that `allOf` subtypes with a discriminator derive from) is
  emitted here **as a discriminated union**, not as a base type. There is nothing to upcast to.
- ⚠ A tag matching no arm is a `SchemaError`, not an unset variant.

```ts
switch (value.{tag}) {
  case "a": return handleA(value);   // narrowed to the {ArmA} arm
  case "b": return handleB(value);
}
```

## Undiscriminated unions (`anyOf`)

```ts
export type {Union} = string | {Model};
export const {union}Schema = s.of<{Union}>(s.union([s.string(), s.lazy(() => {model}Schema)]));
```

- Nothing narrows the arms — use `typeof`, `in`, or `Array.isArray`.
- Decoding accepts a value matching **any** arm, and **the first match in declaration order wins**,
  so overlapping arms resolve by order.
- Build by passing a value of any arm directly. There is no wrapper and no factory.
- A union the spec left unconstrained degrades to `unknown`.
- ⚠ A value matching no arm is a `SchemaError`.

## Dates

| Schema | Model type | Wire | Notes |
| --- | --- | --- | --- |
| `s.dateTime()` | `Date` | `"2024-06-17T15:30:00Z"` | ISO 8601, **offset required**; encodes via `toISOString()` |
| `s.rfc1123DateTime()` | `Date` | `"Mon, 17 Jun 2024 15:30:00 GMT"` | strict IMF-fixdate (two-digit day, `GMT`); encodes via `toUTCString()` |
| `s.unixSecondsDateTime()` | `Date` | `1718638200` | epoch **seconds**; a numeric string also decodes; encodes floored to whole seconds |
| `s.dateOnly()` | `string` | `"2024-06-17"` | a **string**, not a `Date`; the `YYYY-MM-DD` shape is checked |

```ts
body.createdAt = new Date("2024-06-17T15:30:00Z");   // Date-typed fields
body.birthDate = "1990-04-02";                       // dateOnly field — a string
```

Failures to expect:

- `"2024-06-17"` into an `s.dateTime()` field → `SchemaError` (date-only, no offset).
- `"2024-06-17T15:30:00"` into an `s.dateTime()` field → `SchemaError` (no offset).
- `"Mon, 7 Jun 2024 15:30:00 GMT"` into `s.rfc1123DateTime()` → `SchemaError` (day must be two
  digits).
- Epoch **milliseconds** into `s.unixSecondsDateTime()` → no error; it decodes to a date ~50,000
  years out. Divide by 1000, or pass a `Date`.

Read the field's combinator in `src/models/{model}.ts` to know which applies — the `Date` type alone
does not say.

## Bytes

```ts
// Field declared: payload: Uint8Array   (schema: s.bytes())
body.payload = new TextEncoder().encode("hello");        // encoded to base64 on the wire
const text = new TextDecoder().decode(model.payload);    // decoded from base64 for you
```

Base64-in-JSON fields only. Non-base64 input fails on decode. The engine has no multipart or
raw-binary request body, so this is not a file-upload carrier.

## Collections

| Field | Type | Pass |
| --- | --- | --- |
| array | `T[]` | a plain array |
| map / free-form object | `Record<string, T>` | a plain object |
| unconstrained value | `unknown` | anything; nothing is checked |

| Value | On the wire |
| --- | --- |
| omitted / `undefined` | key absent |
| `null` on a nullable field | `null` |
| `[]` | `[]` |
| `{}` | `{}` |

## Recursive and self-referential models

Generated schemas wrap a reference that nests inside another validator in `s.lazy(() => otherSchema)`,
so a model that refers to itself (a tree node, a nested comment) works with no special handling.
Nothing is required of you; the type is just a normal recursive `type`.

## Undeclared keys (passthrough)

Model schemas are built on a **loose** object, so undeclared keys survive both directions:

```ts
// Decoding: an undeclared response key is on the object but not in the type.
const extra = (model as Record<string, unknown>)["x_experimental"];

// Encoding: extra keys on a value you pass are sent.
// (Excess-property checking catches this on a fresh literal, not on a variable.)
```

There is no typed `additionalProperties` bag, and `additionalProperties: false` is not enforced — it
has no visible effect at all. A key you need but the type lacks means the spec does not describe it.

## What is never validated

`s.string()` carries no format check and no length or pattern check; `s.number()` carries no range or
`multipleOf` check; arrays carry no `uniqueItems` check. The generator does not transcribe those
constraints, so there is nothing to read and nothing to invoke — they are enforced only by the
provider, as a `400`. `api-reference.md` carries the documented contract; put your own guard at your
own boundary if you want one before the round-trip.

## Round-tripping

```ts
const wire = {model}Schema.encode(model);          // wire-shaped plain object
const json = JSON.stringify(wire);
const back = {model}Schema.decode(JSON.parse(json));
```

`JSON.stringify(model)` directly is **not** the wire shape:

| Model value | Through `encode` | Through `JSON.stringify` directly |
| --- | --- | --- |
| a renamed property | the wire key | the TypeScript key |
| a `Date` on an RFC-1123 or unix-seconds field | that field's format | an ISO string — wrong format |
| a `Uint8Array` | base64 `string` | `{"0":104,"1":105}` — the bytes are gone |

So decoding a directly-stringified model fails on the renamed keys and the date formats, silently. The
same applies to handing a raw model to anything else that encodes — a framework's response
serializer, a cache, a queue: map it to your own type at the boundary, or hand out `encode`'s result.

Using a schema on inbound data you did not get from the SDK — a webhook body, a queue message, a
cached blob — is the intended use, and gives you the same validation the SDK applies to responses.
