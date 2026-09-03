---
name: typescript-models
description: Working with models in an APIMatic-generated TypeScript SDK — building request bodies from plain object literals, required members and optional-versus-nullable fields, open enums, discriminated and undiscriminated unions, the four date codecs, and the schema companion beside every type. Load before constructing a request payload or mapping SDK models onto your own domain types.
---

# Working with models in an APIMatic TypeScript SDK

Every model is a plain `type` — **not a class**. There is no constructor, no builder and no default
export: you build one with an object literal and read one with plain property access.

```ts
import { type {Model}, {model}Schema } from "{package-name}";

const body: {Model} = { {requiredField}: "..." };
```

**There is exactly one spelling.** No companion dict type, no builder, no factory and no static
helper: an object literal is how every model is built, at every nesting level. And **nothing is
frozen** — no property is emitted `readonly`, so a decoded response is an ordinary mutable object.
Mutating one is allowed but is not a wire operation: what you changed reaches the API only by passing
the value to an operation, or by re-encoding it yourself.

Two exports per model — the type and a `{model}Schema` value — and both come from the **package
root**; deep imports do not resolve. This skill covers the **non-obvious model shapes** that trip
integrations up. The patterns are generic across APIMatic TypeScript SDKs; take the real type and
field names from the contract sheet — the **Models** section of `sdk-map.md` and the **Type sources**
table on the operation's block in `map/operations/*.md`, both grounded in the `src/models/` the
package ships — never from a compiled `dist/`, and never from a path derived off the type name. The
`Source` column is where to **read** a shape, never what to import.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Model}`,
> `{Union}`, `{Variant}`, `{Enum}`, `{package-name}`) — replace it with the concrete identifier from
> the source.

## Where a model lives

| Group (as `sdk-map.md` names it) | Directory | What is emitted |
| --- | --- | --- |
| Objects, and `allOf` (flattened) | `src/models/` | one `type` with the properties, plus its schema |
| Enums (open; const companion plus schema) | `src/models/` | `as const` object + open type alias + schema |
| Discriminated unions (`oneOf`) | `src/models/unions/` | union of tag-narrowed arms + dispatching schema |
| Unions without a discriminant (`anyOf`) | `src/models/unions/` | a bare union type + an accepting schema |

Two consequences worth internalising. **`allOf` is flattened** into one plain object type — every
constituent's properties restated on one type, with no inheritance, no base type to assign to and
nothing recording the composition. And **an object schema that `allOf` subtypes made a polymorphic
base is emitted as a discriminated union**, not as a base type, so it lands under `unions/` too:
there is nothing to upcast to, and you narrow on the tag instead.

## Required, optional, nullable

```ts
type {Model} = {
  id: string;               // required
  label?: string;           // optional — omit the key
  retiredAt: Date | null;   // required AND nullable — null is a value, distinct from omitted
  note?: string | null;     // both — omit it, or send null
};
```

Optional properties are declared `f?: T`, **not** `f?: T | undefined`. The SDK itself compiles under
`exactOptionalPropertyTypes` and `verbatimModuleSyntax`, and where your project does too you must
**omit or spread** an absent field rather than assign `undefined` to it:

```ts
const bad: {Model}  = { id: "1", label: undefined };                          // does not compile
const ok: {Model}   = { id: "1" };                                            // omit
const also: {Model} = { id: "1", ...(label !== undefined ? { label } : {}) };  // conditional
```

At run time an explicit `undefined` is dropped from the JSON anyway, so that one is a type-level
constraint. `null` is not: a nullable field set to `null` sends JSON `null`, which is a different
request from an absent key — the distinction that matters on a PATCH.

**A spec-level default on a model property is not emitted.** Defaults are applied to an operation's
*request fields* (the `Default` column of its **Fields** table), never to a property inside a model,
so an omitted optional stays absent rather than being filled in for you.

### Reading one back

An absent optional is simply `undefined` — there is no sentinel value to import and nothing to
compare against, so `?.` and `??` are the whole toolkit, and `!== undefined` is the precise test when
"present but empty" and "absent" are different facts. Under `noUncheckedIndexedAccess` an array index
is `T | undefined` too, so guard `items[0]` before reaching through it.

⚠ **A response type whose spec marks nothing required decodes an empty body without complaint** —
every property reads back `undefined` and nothing throws. A truncated or partial body is therefore
not an error, it is a model full of `undefined`; check the properties you actually depend on. A
property that is required on a request type and optional on the response type is normal and
intentional — two schemas for one concept — so never infer the response shape from the request shape.
Both are in the map: the operation's **Fields** table for the request, the **Type sources** file for
the response.

## Polymorphic union types: discriminated and undiscriminated

A `oneOf` with a discriminator becomes a union whose arms are the variant types **intersected with
the tag literal that selects each one**, beside a schema that dispatches on that tag:

```ts
// src/models/unions/{union}.ts
export type {Union} = ({VariantA} & { {tag}: "a" }) | ({VariantB} & { {tag}: "b" });

export const {union}Schema = s.discriminatedUnion<{Union}>("{wire_tag}", {
  a: {variantA}Schema,
  b: {variantB}Schema,
});
```

An `anyOf` becomes a bare union with nothing to switch on — `export type {Union} = string | {Model}`
— and its schema tries the arms in **declaration order**, first match winning, so overlapping arms
are resolved by order.

⚠ **A payload matching no arm throws.** Both kinds end in a `SchemaError` mid-decode — an
unrecognized tag has no arm to dispatch to, and an undiscriminated union that matches nothing has no
arm to fall back on. You do not get a null union or an unset variant. A provider that adds a variant
your SDK predates turns into a decode failure on a call that was previously fine, so a union field is
a place to expect regeneration pressure. See **typescript-error-handling** for where that surfaces in
a catch ladder.

### Construct

Write the arm's object literal directly; there is no factory, no static helper and no wrapper type.

```ts
const method: {Union} = { {tag}: "a", /* the rest of {VariantA} */ };
```

**Include the tag.** It is part of the union arm, and the schema puts it on the wire from the value
you pass. The catch is that the tag lives on the *arm*, not on the variant type: a value typed
`{VariantA}` does not carry it, so building one and then passing it where `{Union}` is expected fails
to compile. Build against the union type, or spread the variant and add the tag.

### Read / narrow

```ts
switch (value.{tag}) {                 // discriminated: the arms are exhaustive, no fallback needed
  case "a": return handleA(value);     // narrowed to the {VariantA} arm
  case "b": return handleB(value);
}

if (typeof other === "string") { /* ... */ } else { /* the model arm */ }   // undiscriminated
```

An undiscriminated union has nothing to switch on, so narrow it yourself with `typeof`, an `in`
check, or `Array.isArray`.

The tag property name on the **decoded** object is not necessarily the wire discriminator — a variant
that renamed it has the rename applied on the way out, so the type alias spells what arrives while
the schema names what was sent. Take the exact tag and arm names from the **Unions** table in
`sdk-map.md` (`Union` · `Variants` · `Narrow with` · `Source`) rather than deriving them.

A union the spec left unconstrained degrades to `unknown`. That is the generator reporting that the
spec constrained nothing, not a bug.

## Collections

Array properties are `T[]`; maps and free-form objects are `Record<string, T>` (an API-definition map
is always string-keyed). Pass a plain array or a plain object — there is no wrapper and nothing to
convert.

| Value | On the wire |
| --- | --- |
| omitted / `undefined` | key absent |
| `null` on a nullable field | `null` |
| `[]` | `[]` |
| `{}` | `{}` |

## Dates & numbers

- **A date-bearing field's wire format is fixed per field, and you cannot substitute another.** All
  three instant kinds are typed `Date` while being three different things on the wire, so the type
  alone does not tell you which — read the field's combinator in `src/models/{model}.ts`.

  | Field's schema | Wire form | Model type |
  | --- | --- | --- |
  | `s.dateTime()` | offset-bearing ISO 8601 — `"2024-06-17T15:30:00Z"` | `Date` |
  | `s.rfc1123DateTime()` | HTTP-date — `"Mon, 17 Jun 2024 15:30:00 GMT"` | `Date` |
  | `s.unixSecondsDateTime()` | epoch **seconds** — `1718638200` | `Date` |
  | `s.dateOnly()` | `"2024-06-17"` | `string` — **not** a `Date` |

  Pass a `Date` and let the schema encode it; never hand-format one. Two traps: `s.dateTime()`
  **requires the offset**, so a bare `"2024-06-17T15:30:00"` and a date-only `"2024-06-17"` both
  fail; and a **`s.dateOnly()` field is a `string`**, so `new Date(...)` there is a type error and
  formatting `"YYYY-MM-DD"` is yours to do.

- **Every numeric kind is a `number`.** `int32`, `int64`, `float`, `double` and a big-decimal all map
  to `number`, checked with `s.number()`; the model's property type is the source of truth and it
  never says which. An `int64` past `Number.MAX_SAFE_INTEGER` has already lost precision in
  `JSON.parse` before any schema sees it — the engine's `bigint` path is on the parameter serializer,
  not on model properties — so treat a large-integer field as something to verify against the
  provider rather than as a safe round-trip.

- **There is no decimal type.** A `number` is an IEEE-754 double, so a spec that models money as a
  number hands you binary floating point and the usual accumulation errors. Many APIs instead model
  money as a **`string`** scaled to the currency (`"10.00"`) — where yours does, keep it a string end
  to end: formatting it through `Number` and back is what silently turns `"10.10"` into `10.1`.

- **A field the spec pinned to one value** is typed as that literal and checked with
  `s.literal(...)`: `status: "accepted"` admits that one value and nothing else, in either direction.

## Bytes

A binary or file-typed field is `Uint8Array` in the model and a base64 `string` on the wire; the codec
runs both ways, so pass bytes, not base64:

```ts
const body: {Model} = { payload: new TextEncoder().encode("hello") };
const text = new TextDecoder().decode(model.payload);
```

That is for base64-in-JSON fields only. It is **not** file upload: the engine builds empty, JSON,
form-urlencoded and text bodies and nothing else — there is no multipart or raw-binary request body
at all (see **typescript-calling-endpoints**).

## What the schema checks — and what it does not

Model schemas are built on `zod/v4-mini`, and what they verify is much narrower than what the API
definition said. Checked: the **primitive type** of each property, the presence of required keys, the
four date formats, base64, a pinned literal, and a union's arms. Not checked — because the generator
does not transcribe these at all, so there is no attribute to read and no validator to invoke:

- **String formats.** A uuid, email, uri, hostname, ip, password, json-pointer, regex-constrained
  string and a bare `time` are all emitted as plain `string` with `s.string()`. Nothing validates the
  shape in either direction: an email field accepts `"not an email"` and sends it.
- **Bounds and lengths.** No `minLength`, `maxLength`, `minimum`, `maximum`, `multipleOf`,
  `uniqueItems` or `pattern` reaches the generated code.
- **`additionalProperties: false`.** Not enforced; see *Unknown / future fields* below.

The provider is therefore the only enforcer of those, and it enforces them as a `400` you have to
interpret. Where you want a client-side guard — worth it on user-supplied input before a write, where
a rejected request costs a round-trip and an error path — write it at your own boundary and read the
constraints from `api-reference.md`, which does carry the API's documented contract.

What the schema *does* check, it checks in **both** directions: encoding runs before the request is
built, so an invalid model throws `SchemaError` and **nothing is sent**. Read that failure as the SDK
catching your mistake at the point you made it, not as an upstream fault — the compiler catches the
shape and the schema catches the values, and between them very little reaches the network wrong. In
production, catch it at the boundary where *you* assemble a payload from external input and treat it
as a 4xx on your own API.

## Enums

Enums are **not** TypeScript `enum`s. Each is an `as const` companion object plus an open type alias
and a schema:

```ts
export const {Enum} = { Active: "active", Retired: "retired" } as const;
export type {Enum} = (typeof {Enum})[keyof typeof {Enum}] | (string & {});
export const {enum}Schema = s.enumOf<{Enum}>({Enum});
```

- **The name is a value and a type at once.** Import it *without* `type` wherever you use its members
  — `import { {Enum}, {enum}Schema } from "{package-name}"` — since a type-only import makes
  `{Enum}.Active` a compile error. Prefer the member over the bare literal: a spec change that
  renames the value then fails to compile instead of failing in production.
- **The type is open.** The `(string & {})` tail — `(number & {})` on a number enum — means any value
  of the base type is assignable.
- **The schema validates the base type only, never membership.** A string enum accepts any string, a
  number enum any number, so a value the provider added after generation round-trips instead of
  throwing. That is deliberate, and it is why a `switch` over a **received** enum value needs a
  `default` arm — the opposite of a discriminated union, whose unrecognized tag does throw.

```ts
if ({enum}Schema.values.includes(received)) { /* a member this SDK knows */ }
```

`.values` is the declared set in declaration order, and the only runtime membership test on offer.
There is no coercion helper — no `fromValue`, no lookup function — because a member *is* its wire
value: `{Enum}.Active === "active"`, `` `${{Enum}.Active}` `` is `"active"`, and a value read off a
response compares directly against the member. Member *names*, on the other hand, are generated
identifiers rather than wire values — a number enum's members are named `_0`, `_1`, … — so take both
columns from the **Enums** table in `sdk-map.md`.

## JSON key renaming happens invisibly

A model's property names are TypeScript-cased; the wire names may differ. The mapping is a `_keysMap`
entry inside the schema literal, applied on decode and encode both, and carrying only the properties
that actually moved:

```ts
export const {model}Schema = s.object<{Model}>({
  createdAt: s.dateTime(),
  _keysMap: { createdAt: "created_at" },
});
```

So you always write `createdAt` and the wire always carries `created_at`. You never spell a wire name
— except when you are staring at a captured HTTP body wondering why the key does not match. The
divergences are listed once, in the **Wire-name divergences** table in `sdk-map.md` (`Type` ·
`Property` · `Wire key`); every property absent from that table uses its TypeScript name verbatim.

## Unknown / future fields

Model schemas are built on a **loose** object, so keys the model does not declare are **kept**, not
stripped, in both directions — a field the provider added after this SDK was generated survives
decoding and round-trips back out on encode. `additionalProperties: false` changes nothing about
this.

There is no typed bag to read them from, though, and no member on the type:

```ts
// Decoding: the key is on the object but not in the type.
const extra = (model as Record<string, unknown>)["x_experimental"];

// Encoding: extra keys on a value you pass are sent. Excess-property checking catches them on a
// fresh object literal, but not on a value that arrived through a variable.
```

The keys are **wire names** — there is no property, so nothing maps the casing for you here. And a
field you depend on that has no typed property is a regeneration signal: prefer regenerating the SDK
from a spec that describes it over building program logic on stringly-typed lookups.

The same symmetry is a debugging trap on the way out: a **misspelled** property is not an error
either, it is an extra key that gets sent and ignored. So when a value you set is not taking effect,
check the spelling against the type before suspecting the API — excess-property checking only catches
it on a fresh object literal, never on a value that reached the call through a variable.

## The schema companion

You do not need `{model}Schema` for ordinary calls — the SDK encodes requests and decodes responses
itself. It is there for when you hold the wire shape yourself:

```ts
const model = {model}Schema.decode(JSON.parse(rawWebhookBody));  // validates and renames keys
const wire  = {model}Schema.encode(model);                       // exactly what the SDK would send
const back  = {model}Schema.decode(JSON.parse(JSON.stringify(wire)));
```

Both directions throw `SchemaError` on mismatch and produce nothing partial. Using a schema on
inbound data the SDK did not hand you — a webhook body, a queue message, a cached blob — is the
intended use, and gives you exactly the validation the SDK applies to a response.

Do **not** `JSON.stringify` a model directly for storage, or hand a raw model to anything that will
encode it — a web framework's response serializer, a cache, a queue. `JSON.stringify` writes
TypeScript-cased keys, ISO strings for every date whatever the field's wire format, and turns a
`Uint8Array` into an index-keyed object (`{"0":104,"1":105}`) rather than base64. Decoding that back
fails on the renamed keys and the wrong date formats, silently, and the bytes are simply gone. Either
map the model into your own type at the boundary, or go through `encode` and hand out its result.

See [reference.md](reference.md) for the per-shape reference: the full spec-kind-to-type table, the
schema surface, and the failures each date codec produces.

## Next

- Pass models to an operation → **typescript-calling-endpoints**
- `SchemaError`, its message and `rawBody` → **typescript-error-handling**
