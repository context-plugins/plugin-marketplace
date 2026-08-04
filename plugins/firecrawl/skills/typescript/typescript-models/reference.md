# Models reference (APIMatic TypeScript)

## Date/time

Date/time values are ISO-8601 / RFC-3339 strings (`"2024-06-17T15:30:45Z"`) — work with them as strings and let the SDK handle the wire format. To parse or format in your own code, use `new Date(value)`, `Date.toISOString()`, or a date library such as `date-fns` or `dayjs`.

## String-enum shape

```typescript
export const {EnumType} = {
  FirstValue:  'first_value',
  SecondValue: 'second_value',
} as const;

export type {EnumType} = typeof {EnumType}[keyof typeof {EnumType}];
```

Usage:

```typescript
import { {EnumType} } from 'firecrawl-apilib';

const v: {EnumType} = {EnumType}.FirstValue;    // known constant
const u: {EnumType} = 'new_value' as {EnumType}; // unknown-tolerant cast
const raw: string = {EnumType}.FirstValue;       // string assignment works directly
```

## Numeric-enum shape

Same pattern over `number`:

```typescript
export const {EnumType} = {
  Off: 0,
  On:  1,
} as const;

export type {EnumType} = typeof {EnumType}[keyof typeof {EnumType}];

request.{enumProp} = {EnumType}.On;
const n: number = {EnumType}.On;   // number assignment works directly
```

## Union types — finding the exact members

For a discriminated union type, open its file under `src/models/`. Each variant `{V}` typically produces:

- a factory `static from{V}(value: {V}): {Union}`, and
- a type guard `function is{V}(value: {Union}): value is {V}`.

Unions are immutable value objects — there are no setters and no way to mutate one after construction.

## Notes

- Optional model properties typed as `T | undefined` are omitted from the serialized JSON when `undefined` — distinct from sending an explicit `null`.
- A model captures unknown response fields only when it has an index signature; where it has none, unknown fields are dropped on deserialization.
