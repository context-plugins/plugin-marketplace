import * as zod from "zod/v4-mini";
import type { JSONType, ZodMiniType } from "zod/v4-mini";
import { SchemaError, issuesList, issuesMessage } from "./schema-error.js";

/**
 * What a value looks like on the wire.
 *
 * @remarks
 * Only `Date` and `Uint8Array` change shape — a `Date` becomes its serialized form and a
 * `Uint8Array` a string in the RFC 4648 alphabet its field declares — recursing through arrays and
 * objects. Everything else is unchanged, because the schema layer stops at *values*: how a number
 * is written into a query string versus a JSON body is the engine's decision, not the schema's.
 */
export type Encoded<T, K extends string = BagKey<T>> = T extends Date
  ? string | number
  : T extends Uint8Array
    ? string
    : T extends string | number | boolean | null | undefined
      ? T
      : T extends readonly (infer E)[]
        ? Encoded<E>[]
        : T extends object
          ? { [P in keyof T as Declared<P, K>]: Encoded<T[P]> }
          : T;

/**
 * Any value JSON can carry: a string, a finite number, a boolean, `null`, an array of these, or a
 * plain object of these.
 *
 * @remarks
 * This is what an untyped `additionalProperties` record holds, and it is zod's `JSONType` under
 * the SDK's name. Narrow it the way JSON is narrowed — `typeof`, `Array.isArray`, `=== null` — or
 * hand it to an exported schema's `decode`. A `Date`, a `Uint8Array`, a `Map`, a function,
 * `undefined` and a non-finite number are not JSON values and are refused on `encode` rather than
 * silently rewritten by `JSON.stringify`: write a `Date` as the string the service expects, and
 * bytes in the alphabet it expects.
 */
export type JsonValue = JSONType;

export type KeysMap<T, K extends string = BagKey<T>> = { readonly [P in keyof T as Declared<P, K>]?: string };

export type Entry<V, W = unknown> = ZodMiniType<V, W> | Schema<V, W>;

export type Shape<T, K extends string = BagKey<T>> = { [P in keyof T as Declared<P, K>]-?: Entry<T[P]> } & {
  readonly _keysMap?: KeysMap<T, K>;
};

type Declared<P, K extends string> = Exclude<P, K>;

type BagKey<T> = BagKeyOf<T, keyof T & string>;

type BagKeyOf<T, P extends keyof T & string> = P extends BagName
  ? NonNullable<T[P]> extends Record<string, unknown>
    ? P
    : never
  : never;

type BagName = "additionalProperties" | `additionalProperties${number}`;

/**
 * What an object schema is told beyond its shape: the entry every undeclared key's value is
 * decoded and encoded through.
 *
 * @remarks
 * Required exactly when the model declares the record, under the one key the model gives it:
 * `additionalProperties`, or `additionalProperties2` when the spec itself declares a property by
 * the first name. It is typed by that field's value type, so the catchall's codec is checked
 * against the model the way every field entry is. `decode` moves every key the shape does not
 * declare into the record, and `encode` spreads it back onto the wire, so the wire itself never
 * carries a key by that name. The record is present only when there is at least one undeclared
 * key. A bag key that names a declared field is rejected on `encode`.
 *
 * A model with no such field takes no options: undeclared keys pass through both directions
 * untouched, and the model has no field for them.
 */
export type ObjectOptions<T, K extends string = BagKey<T>> = { readonly [P in K]: Entry<BagValue<T, K>> };

type BagValue<T, K extends string> = K extends keyof T
  ? T[K] extends Record<string, infer V> | undefined
    ? V
    : never
  : never;

type OptionsFor<T, K extends string> = [BagValue<T, K>] extends [never] ? [] : [options: ObjectOptions<T, K>];

type Bag = readonly [key: string, entry: Entry<unknown>];

/**
 * The codec exported beside every model: `decode` from the wire, `encode` back to it.
 *
 * @remarks
 * Both directions are complete on their own — one call each, never a pair. `decode` accepts the
 * wire form only and `encode` the SDK form only, so passing one direction's value to the other is
 * rejected rather than waved through. A failure throws `SchemaError`; through an operation the
 * same failure reaches you one level down, on the `cause` of a `DecodeError` or an
 * `EncodeError`, which name the call.
 *
 * `validate` is `encode` without the conversion and without the throw: it runs the same rules on
 * the same value and returns a {@link ValidationResult}, whose `message` on failure names every
 * field that failed and why, so a caller branches on the outcome rather than catching it.
 *
 * What an operation runs is **structural**: types, shape, and required keys. Enum membership is
 * the service's to enforce and is never checked. A model whose spec declares value constraints
 * such as `minLength`, `pattern` or `minimum` exports a schema that enforces them in both
 * directions, so `validate` on it is how a value is checked before it is sent; the structural
 * twin the operations use stays inside the module.
 */
export type Schema<T, W = Encoded<T>> = {
  readonly decode: (value: unknown) => T;
  encode(value: T): W;
  validate(value: T): ValidationResult;
};

/**
 * The outcome of `validate`: `success` says whether the value passed, and on failure `message` is
 * the list of failing fields, each with its reason, as `code: expected regex format; attributes:
 * must have at most 10 properties` — the same list a `SchemaError` from `encode` carries after
 * its leading sentence.
 */
export type ValidationResult =
  | { readonly success: true }
  | { readonly success: false; readonly message: string };

/**
 * The codec of an open enum, which also exposes the known members at run time.
 *
 * @remarks
 * `values` is the set the spec declared. It is **not** enforced — an open enum validates the base
 * type only, so an unrecognized server value round-trips instead of throwing. Test membership
 * yourself against `values` when you need to.
 */
export type EnumSchema<T> = Schema<T, T> & {
  readonly values: readonly T[];
};

type Built<T, W> = Schema<T, W> & {
  readonly zod: () => ZodMiniType<T, W>;
  readonly tagged: (discriminator: string, value: string) => ZodMiniType<T, W>;
};

export function object<T>(shape: Shape<T, never>): Schema<T, Encoded<T, never>>;
export function object<T, K extends string = BagKey<T>>(
  shape: Shape<T, K>,
  ...rest: OptionsFor<T, K>
): Schema<T, Encoded<T, K>>;
export function object<T, K extends string>(
  shape: Shape<T, K>,
  options?: ObjectOptions<T, K>,
): Schema<T, Encoded<T, K>> {
  const bag = bagOf(options);
  let memo: ZodMiniType<T, Encoded<T, K>> | undefined;
  const zodType = (): ZodMiniType<T, Encoded<T, K>> => (memo ??= buildObject(shape, bag));
  return {
    zod: zodType,
    tagged: (discriminator, value) => buildObject(shape, bag, [discriminator, value]),
    decode: (value) => decodeWith(zodType(), value),
    encode: (value) => encodeWith(zodType(), value),
    validate: (value) => validateWith(zodType(), value),
  } as Built<T, Encoded<T, K>>;
}

function bagOf(options: Readonly<Record<string, Entry<unknown>>> | undefined): Bag | undefined {
  return options === undefined ? undefined : Object.entries(options)[0];
}

export function discriminatedUnion<T>(
  discriminator: string,
  variants: Readonly<Record<string, Schema<unknown, unknown>>>,
): Schema<T, Encoded<T>> {
  let memo: ZodMiniType<T, Encoded<T>> | undefined;
  const build = (): ZodMiniType<T, Encoded<T>> => {
    const members = Object.entries(variants).map(([value, variant]) =>
      built(variant).tagged(discriminator, value),
    );
    return zod.discriminatedUnion(discriminator, members as never);
  };
  const zodType = (): ZodMiniType<T, Encoded<T>> => (memo ??= build());
  return {
    zod: zodType,
    tagged: () => zodType(),
    decode: (value) => decodeWith(zodType(), value),
    encode: (value) => encodeWith(zodType(), value),
    validate: (value) => validateWith(zodType(), value),
  } as Built<T, Encoded<T>>;
}

export function enumOf<T extends string | number>(members: Readonly<Record<string, T>>): EnumSchema<T> {
  const values = Object.values(members);
  const base: ZodMiniType<unknown, unknown> = values.every((value) => typeof value === "number")
    ? zod.number()
    : zod.string();
  return {
    ...of(base as ZodMiniType<T, T>),
    values,
  };
}

export function of<T, W = Encoded<T>>(zodType: ZodMiniType<T, W>): Schema<T, W> {
  return {
    zod: () => zodType,
    tagged: () => zodType,
    decode: (value) => decodeWith(zodType, value),
    encode: (value) => encodeWith(zodType, value),
    validate: (value) => validateWith(zodType, value),
  } as Built<T, W>;
}

export function decodeWith<T>(zodType: ZodMiniType<T, unknown>, value: unknown): T {
  const result = zodType.safeParse(value);
  if (result.success) return result.data;
  throw new SchemaError(issuesMessage(result.error), result.error);
}

export function encodeWith<T, W>(zodType: ZodMiniType<T, W>, value: T): W {
  const result = zod.safeEncode(zodType, value);
  if (result.success) return result.data;
  throw new SchemaError(issuesMessage(result.error, "Type could not be encoded for the wire."), result.error);
}

export function validateWith<T, W>(zodType: ZodMiniType<T, W>, value: T): ValidationResult {
  const result = zod.safeEncode(zodType, value);
  if (result.success) return { success: true };
  return { success: false, message: issuesList(result.error) };
}

export function decodeEntry<V>(schema: Entry<V>, value: unknown): V {
  return isSchema(schema) ? schema.decode(value) : decodeWith(schema, value);
}

export function encodeEntry<V, W>(schema: Entry<V, W>, value: V): W {
  return isSchema(schema) ? schema.encode(value) : encodeWith(schema, value);
}

export function lazySchema<T>(target: () => Schema<T, Encoded<T>>): Schema<T, Encoded<T>> {
  let memo: Built<T, Encoded<T>> | undefined;
  const schema = (): Built<T, Encoded<T>> => (memo ??= built(target()));
  return {
    zod: () => schema().zod(),
    tagged: (discriminator, value) => schema().tagged(discriminator, value),
    decode: (value) => schema().decode(value),
    encode: (value) => schema().encode(value),
    validate: (value) => schema().validate(value),
  } as Built<T, Encoded<T>>;
}

type WireObject = ZodMiniType<Record<string, unknown>, Record<string, unknown>>;

function buildObject<T, K extends string>(
  shape: Shape<T, K>,
  bag: Bag | undefined,
  tag?: readonly [string, string],
): ZodMiniType<T, Encoded<T, K>> {
  const keysMap = new Map(Object.entries((shape as { _keysMap?: Record<string, string> })._keysMap ?? {}));
  const wire: Record<string, ZodMiniType<unknown, unknown>> = {};
  const renames: [string, string][] = [];

  for (const [key, entry] of Object.entries(shape)) {
    if (key === "_keysMap") continue;
    const wireKey = keysMap.get(key) ?? key;
    wire[wireKey] = resolve(entry as Entry<unknown>);
    if (wireKey !== key) renames.push([wireKey, key]);
  }
  if (tag) wire[tag[0]] = zod.literal(tag[1]);

  if (bag !== undefined && Object.hasOwn(wire, bag[0])) {
    throw new Error(`${bag[0]} is both the additional-properties key and a wire key of the shape`);
  }
  const object: WireObject =
    bag === undefined
      ? zod.looseObject(wire)
      : collectExtras(zod.looseObject(wire), new Set(Object.keys(wire)), bag[0], resolve(bag[1]));
  const renaming: ZodMiniType<unknown, unknown> =
    renames.length === 0
      ? object
      : zod.codec(object, zod.custom<Record<string, unknown>>(), {
          decode: (value) => renameKeys(value, renames, "decode"),
          encode: (value) => renameKeys(value, renames, "encode"),
        });
  return renaming as ZodMiniType<T, Encoded<T, K>>;
}

function collectExtras(
  declaredObject: WireObject,
  declared: ReadonlySet<string>,
  key: string,
  entry: ZodMiniType<unknown, unknown>,
): WireObject {
  const codec = zod.codec(zod.custom<Record<string, unknown>>(), declaredObject, {
    decode: (value, payload) => {
      if (!isRecord(value)) {
        payload.issues.push({ code: "invalid_type", expected: "object", input: value, path: [] });
        return value;
      }
      const out: Record<string, unknown> = {};
      const extras: Record<string, unknown> = {};
      let found = false;
      for (const wireKey of Object.keys(value)) {
        const item = value[wireKey];
        if (declared.has(wireKey)) {
          setOwn(out, wireKey, item);
          continue;
        }
        found = true;
        const result = entry.safeParse(item);
        if (result.success) setOwn(extras, wireKey, result.data);
        else for (const issue of result.error.issues) payload.issues.push(nested(issue, [wireKey]));
      }
      if (found) out[key] = extras;
      return out;
    },
    encode: (value, payload) => {
      const { [key]: extras, ...out } = value;
      if (extras === undefined) return out;
      if (!isRecord(extras)) {
        payload.issues.push({ code: "invalid_type", expected: "record", input: extras, path: [key] });
        return out;
      }
      for (const wireKey of Object.keys(extras)) {
        const item = extras[wireKey];
        if (declared.has(wireKey)) {
          payload.issues.push({
            code: "custom",
            message: "declared by the model, so not an additional property",
            input: item,
            path: [key, wireKey],
          });
          continue;
        }
        const result = zod.safeEncode(entry, item);
        if (result.success) setOwn(out, wireKey, result.data);
        else for (const issue of result.error.issues) payload.issues.push(nested(issue, [key, wireKey]));
      }
      return out;
    },
  });
  codec._zod.propValues = declaredObject._zod.propValues;
  return codec;
}

function nested(issue: zod.core.$ZodIssue, under: readonly PropertyKey[]): zod.core.$ZodRawIssue {
  return { ...issue, path: [...under, ...issue.path] } as zod.core.$ZodRawIssue;
}

function setOwn(target: Record<string, unknown>, key: string, value: unknown): void {
  Object.defineProperty(target, key, { value, enumerable: true, writable: true, configurable: true });
}

function renameKeys(
  value: Record<string, unknown>,
  renames: readonly [string, string][],
  direction: "decode" | "encode",
): Record<string, unknown> {
  const out = { ...value };
  for (const [wireKey, key] of renames) {
    const [from, to] = direction === "decode" ? [wireKey, key] : [key, wireKey];
    if (!Object.hasOwn(out, from)) continue;
    setOwn(out, to, out[from]);
    delete out[from];
  }
  return out;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  if (value === null || typeof value !== "object") return false;
  const prototype: unknown = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

export function resolve<T>(entry: Entry<T, Encoded<T>>): ZodMiniType<T, Encoded<T>> {
  return isSchema(entry) ? built(entry).zod() : entry;
}

function built<T>(schema: Schema<T, Encoded<T>>): Built<T, Encoded<T>> {
  return schema as Built<T, Encoded<T>>;
}

function isSchema<V, W>(entry: Entry<V, W>): entry is Schema<V, W> {
  return typeof (entry as { decode?: unknown }).decode === "function";
}
