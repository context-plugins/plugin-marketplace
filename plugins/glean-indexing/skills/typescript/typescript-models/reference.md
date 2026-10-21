# Models reference (APIMatic TypeScript)

Lookup tables beside **typescript-models**, which carries the rules. Model modules build their
schemas from the `s` namespace (`src/core/validation/`, the same in every APIMatic TypeScript SDK):
`zod/v4-mini`'s `string`, `number`, `boolean`, `array`, `record`, `union`, `nullable`, `optional`,
`literal`, `unknown`, plus the SDK's `object`, `enumOf`, `discriminatedUnion`, `of`, `lazy`,
`optionalNullable`, `defaulted`, `dateTime`, `rfc1123DateTime`, `unixSecondsDateTime`, `dateOnly` and
`bytes`.
Confirm concrete type and field names in `src/models/`.

## Spec kind to TypeScript type

| API definition kind | Model type | Schema entry |
| --- | --- | --- |
| string, password, regex-constrained, email, uri, ip, hostname, json-pointer, uuid | `string` | `s.string()` — **format unchecked** |
| `time` | `string` | `s.string()` — unchecked |
| `date` | `string` | `s.dateOnly()` |
| `date-time` (ISO 8601 / RFC 1123 / unix) | `Date` | `s.dateTime()` / `s.rfc1123DateTime()` / `s.unixSecondsDateTime()` |
| int32, int64 | `number` | `s.int()` |
| float, double, big-decimal | `number` | `s.float64()` |
| boolean | `boolean` | `s.boolean()` |
| binary, file — as a declared <em>field</em> | `Uint8Array` | `s.bytes()` (base64) |
| a pinned value | that literal type | `s.literal(value)` |
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
| `f?: T` | `s.defaulted(...)` | omitting it sends its default; set the value you mean |
| `f: T \| null` | `s.nullable(...)` | provide `null` to send JSON `null` |
| `f?: T \| null` | `s.optionalNullable(...)` | omit, or provide `null` |

## Deriving a changed copy

```ts
const updated = { ...model, {field}: "..." };
```

Nothing validates a spread — the schema runs when you pass the value to an operation or call `encode`
yourself, and that is where a bad value surfaces. The copy is **shallow**: nested models and arrays
are shared with the original, so mutating one mutates both. Undeclared keys the source carried are
copied along, which is what keeps a read-modify-write round-trip from dropping server-side state the
SDK does not model.

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

A `SchemaError` message is prefixed `Wire value could not be decoded.` or `Type could not be encoded
for the wire.`, followed by `path: expected X, received T` per issue — `T` the type that arrived,
never the value (`<root>` where there is no path). `.cause` is the underlying zod error with the
structured issue list.

## Enums

An `if`/`else if` chain over the members with no final `else` silently does nothing for a value newer
than the SDK. `type Known = (typeof {Enum})[keyof typeof {Enum}]` is the closed set at type level.

## Dates

- `s.dateTime()` requires an offset on decode; encodes via `toISOString()`.
- `s.rfc1123DateTime()` is strict IMF-fixdate (two-digit day, `GMT`); encodes via `toUTCString()`.
- `s.unixSecondsDateTime()` also decodes a numeric string; encodes floored to whole seconds.
- `s.dateOnly()` checks the `YYYY-MM-DD` shape. `s.bytes()` rejects non-base64 input on decode.

Failures to expect:

- `"2024-06-17"` or `"2024-06-17T15:30:00"` into an `s.dateTime()` field → `SchemaError` (no offset).
- `"Mon, 7 Jun 2024 15:30:00 GMT"` into `s.rfc1123DateTime()` → `SchemaError` (day must be two
  digits).
- Epoch **milliseconds** into `s.unixSecondsDateTime()` → no error; it decodes to a date ~50,000
  years out. Divide by 1000, or pass a `Date`.

## Recursive and self-referential models

A self-referential model (a tree node, a nested comment) needs no special handling: generated schemas
wrap a nested reference in `s.lazy(() => otherSchema)`.
