---
name: typescript-models
description: Load before building a request payload for an APIMatic-generated TypeScript SDK or mapping its models onto your own types — object-literal models, optional versus nullable fields, open enums, discriminated and plain unions, date codecs, bytes, unknown fields, and the schema companion beside every type.
---

# Working with models in an APIMatic TypeScript SDK

Every model is a plain `type` — **not a class**. There is no constructor, no builder and no default
export: you build one with an object literal and read one with plain property access.

```ts
import { type {Model}, {model}Schema } from "{package-name}";

const body: {Model} = { {requiredField}: "..." };
```

An object literal is how every model is built, at every nesting level. **Nothing is `readonly` or
frozen**: a decoded response is an ordinary mutable object, and a change reaches the API only when you
pass the value to an operation, or re-encode it yourself.

Two exports per model — the type and a `{model}Schema` value — both from the **package root**
(**typescript-client-initialization**). Take the real type and field names from the **Models** section
of `sdk-map.md` or an operation's **Type sources** table in `map/operations/*.md` — never from a
compiled `dist/`, and never from a path derived off the type name. The `Source` column is where to
**read** a shape, never what to import.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Model}`,
> `{Union}`, `{Variant}`, `{Enum}`, `{package-name}`) — replace it with the concrete identifier from
> the source.

## Where a model lives

| Group (as `sdk-map.md` names it) | Directory | What it is |
| --- | --- | --- |
| Objects, and `allOf` (flattened) | `src/models/` | one `type` with the properties, plus its schema |
| Enums (open; const companion plus schema) | `src/models/` | `as const` object + open type alias + schema |
| Discriminated unions (`oneOf`) | `src/models/unions/` | union of tag-narrowed arms + dispatching schema |
| Unions without a discriminant (`anyOf`) | `src/models/unions/` | a bare union type + an accepting schema |

**`allOf` is flattened** into one plain object type — every constituent's properties on one type, with
no inheritance and no base type to assign to. **A polymorphic base** (an object that `allOf` subtypes
derive from) is a discriminated union under `unions/`, not a base type: there is nothing to upcast to,
and you narrow on the tag instead.

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

At run time an explicit `undefined` is treated as omitted anyway, so that one is a type-level
constraint. `null` is not: a nullable field set to `null` sends JSON `null`, which is a different
request from an absent key — the distinction that matters on a PATCH.

**A model property whose schema is `s.defaulted(...)` has a default.** It is optional in the type;
omitting it, or passing `undefined`, still sends the default (on a partial update, send its current value
instead), and a response that omits it reads back as the default.

### Reading one back

An absent optional is simply `undefined` — there is no sentinel value to import and nothing to
compare against, so `?.` and `??` are the whole toolkit, and, on a property with no default,
`!== undefined` is the precise test when "present but empty" and "absent" are different facts. Under
`noUncheckedIndexedAccess` an array index is `T | undefined` too, so guard `items[0]` before reaching
through it.

⚠ **A response type with no required properties decodes an empty or truncated body without
complaint** — every property reads `undefined`, or its default, and nothing throws; check the properties
you depend on. Request and response types for one concept can differ in requiredness, so never infer the
response shape from the request shape: read each from the map (the operation's **Fields** table for the
request, the **Type sources** file for the response).

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

⚠ **A payload matching no arm throws** — through an operation as a `DecodeError` whose `cause` is the
`SchemaError`, through a schema you call directly as the `SchemaError` itself. There is no null or
unset variant, so a variant the provider adds later breaks a call that used to work. See
**typescript-error-handling** for where that surfaces in a catch ladder.

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

A union with nothing constrained is typed `unknown`.

## Collections

Array properties are `T[]`; maps and free-form objects are `Record<string, T>` (an API-definition map
is always string-keyed). Pass a plain array or a plain object — there is no wrapper and nothing to
convert.

| Value | On the wire |
| --- | --- |
| omitted / `undefined` | key absent, or its default if it has one |
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

- **Every numeric kind is a `number`; the schema says which check runs.** `int32` and `int64` are
  checked with `s.int()`, which rejects a fraction and anything outside the safe-integer range.
  `float`, `double` and a big-decimal are checked with `s.float64()`, which rejects `NaN` and
  `±Infinity`. Neither checks the `int32` or `float` range. An `int64` past
  `Number.MAX_SAFE_INTEGER` is rejected rather than rounded, so treat a large-integer field as
  something to verify against the provider rather than as a safe round-trip.

- **There is no decimal type.** A `number` is an IEEE-754 double, so a spec that models money as a
  number hands you binary floating point and the usual accumulation errors. Many APIs instead model
  money as a **`string`** scaled to the currency (`"10.00"`) — where yours does, keep it a string end
  to end: formatting it through `Number` and back is what silently turns `"10.10"` into `10.1`.

- **A field pinned to one value** is typed as that literal and checked with
  `s.literal(...)`: `status: "accepted"` admits that one value and nothing else, in either direction.

## Bytes

A binary or file-typed field is `Uint8Array` in the model and a base64 `string` on the wire; the codec
runs both ways, so pass bytes, not base64:

```ts
const body: {Model} = { payload: new TextEncoder().encode("hello") };
const text = new TextDecoder().decode(model.payload);
```

That is for base64-in-JSON fields only, and it is **not** the file-upload carrier: a raw-binary body
or multipart file takes a `FileInput` (**typescript-calling-endpoints**), and a decoded `Uint8Array`
field is not assignable to one — `new Uint8Array(value)` is the one-copy bridge.

## What the schema checks — and what it does not

Checked, in both directions: the **primitive type** of each property, the presence of required keys,
the four date formats, base64, a pinned literal, and a union's arms. **Not checked**:

- **String formats.** A uuid, email, uri, hostname, ip, password, json-pointer, regex-constrained
  string and a bare `time` are all plain `string` with `s.string()`. Nothing validates the shape in
  either direction: an email field accepts `"not an email"` and sends it.
- **Bounds and lengths** — `minLength`, `maxLength`, `minimum`, `maximum`, `multipleOf`,
  `uniqueItems`, `pattern`.
- **`additionalProperties: false`** — see *Unknown / future fields* below.

The provider is the only enforcer of those, as a `400` you have to interpret. Where you want a
client-side guard — worth it on user-supplied input before a write, where a rejected request costs a
round-trip and an error path — write it at your own boundary and read the constraints from
`api-reference.md`, which does carry the API's documented contract.

An invalid model rejects the call with `EncodeError` — its `cause` the `SchemaError` naming the field —
and **nothing is sent**. In production, catch it at the boundary where *you* assemble a payload from
external input and treat it as a 4xx on your own API.

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
  `{Enum}.Active` a compile error. Prefer the member over the bare literal: an SDK update that
  renames the value then fails to compile instead of failing in production.
- **The type is open.** The `(string & {})` tail — `(number & {})` on a number enum — means any value
  of the base type is assignable.
- **The schema validates the base type only, never membership.** A string enum accepts any string, a
  number enum any number, so a value newer than the SDK round-trips instead of throwing. That is deliberate, and it is why a `switch` over a **received** enum value needs a
  `default` arm — the opposite of a discriminated union, whose unrecognized tag does throw.

```ts
if ({enum}Schema.values.includes(received)) { /* a member this SDK knows */ }
```

`.values` is the declared set in declaration order, and the only runtime membership test on offer.
There is no coercion helper — no `fromValue`, no lookup function — because a member *is* its wire
value: `{Enum}.Active === "active"`, `` `${{Enum}.Active}` `` is `"active"`, and a value read off a
response compares directly against the member. Member *names*, on the other hand, are generated
identifiers rather than wire values — a number enum's members are named `_0`, `_1`, … — so take the
names and their values from the `as const` companion in the enum's own file.

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

Model schemas are **loose**: keys the model does not declare are **kept**, not stripped, in both
directions, so a field added after this SDK survives decoding and is re-sent on encode. There is no
typed bag and no member on the type; read one by its **wire** name — nothing maps the casing here:

```ts
const extra = (model as Record<string, unknown>)["x_experimental"];
```

The same holds on the way out: a **misspelled** property is not an error, it is an extra key that is
sent and ignored. Excess-property checking catches it only on a fresh object literal, never on a value
that reached the call through a variable — so when a value you set is not taking effect, check the
spelling against the type before suspecting the API.

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
- `SchemaError`, and the `DecodeError` or `EncodeError` it arrives on → **typescript-error-handling**
