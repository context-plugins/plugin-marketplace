import { encodeEntry, type Entry } from "./validation/schema.js";

export type ParamStyle = "plain" | "indexed" | "unindexed" | "csv" | "ssv" | "tsv" | "psv";

export type ParamValue =
  | string
  | number
  | boolean
  | bigint
  | null
  | undefined
  | readonly ParamValue[]
  | { readonly [key: string]: ParamValue };

export type Param = {
  readonly name: string;
  readonly value: unknown;
  readonly schema: Entry<unknown>;
};

export type StyledParam = {
  readonly name?: string;
  readonly value: unknown;
  readonly schema: Entry<unknown>;
  readonly style?: ParamStyle | undefined;
};

export type ParamPair = readonly [name: string, value: string];

type ParamField = {
  readonly key: string;
  readonly items: readonly string[];
  readonly separator: string;
};

const MAX_SAFE_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);

export function flattenValue(value: ParamValue): string[] {
  if (value === undefined || value === null) return [];
  if (isList(value) && value.every((element) => element === null || typeof element !== "object")) {
    return value.map(itemText);
  }
  return [itemText(value)];
}

export function encodedParam(source: StyledParam): ParamValue {
  return encodeEntry(source.schema, source.value) as ParamValue;
}

export function flatten(
  sources: readonly StyledParam[],
  join: (items: readonly string[], separator: string) => string = (items, separator) => items.join(separator),
): ParamPair[] {
  return sources
    .flatMap(({ name, style = "plain", ...source }) =>
      name === undefined
        ? flattenExploded(encodedParam(source), style)
        : flattenParam(name, encodedParam(source), style),
    )
    .map(({ key, items, separator }): ParamPair => [key, join(items, separator)]);
}

function flattenExploded(value: ParamValue, style: ParamStyle): ParamField[] {
  if (value === undefined || value === null) return [];
  if (isScalar(value) || isList(value)) throw new TypeError("A param with no name must hold an object.");
  return Object.entries(value).flatMap(([key, property]) => flattenParam(key, property, style));
}

function flattenParam(key: string, value: ParamValue, style: ParamStyle): ParamField[] {
  if (value === undefined || value === null) return [];
  if (isScalar(value)) return [{ key, items: [scalar(value)], separator: "" }];
  switch (style) {
    case "plain":
      return isList(value)
        ? present(value).flatMap((item) => flattenParam(key, item, style))
        : bracketed(key, value, style);
    case "indexed":
      return isList(value)
        ? value.flatMap((item, index) => flattenParam(`${key}[${index}]`, item, style))
        : bracketed(key, value, style);
    case "unindexed":
      return isList(value)
        ? present(value).flatMap((item) => flattenParam(`${key}[]`, item, style))
        : bracketed(key, value, style);
    case "csv":
      return joined(key, value, ",");
    case "ssv":
      return joined(key, value, " ");
    case "tsv":
      return joined(key, value, "\t");
    case "psv":
      return joined(key, value, "|");
    default:
      return unknownStyle(style);
  }
}

function bracketed(
  key: string,
  value: { readonly [key: string]: ParamValue },
  style: ParamStyle,
): ParamField[] {
  return Object.entries(value).flatMap(([sub, subValue]) => flattenParam(`${key}[${sub}]`, subValue, style));
}

function joined(
  key: string,
  value: readonly ParamValue[] | { readonly [key: string]: ParamValue },
  separator: string,
): ParamField[] {
  const items = isList(value)
    ? value.map(itemText)
    : Object.entries(value).flatMap(([sub, subValue]) =>
        subValue === undefined || subValue === null ? [] : [sub, itemText(subValue)],
      );
  return items.length === 0 ? [] : [{ key, items, separator }];
}

function present(values: readonly ParamValue[]): ParamValue[] {
  return values.filter((value) => value !== undefined && value !== null);
}

function isList(value: ParamValue): value is readonly ParamValue[] {
  return Array.isArray(value);
}

function itemText(value: ParamValue): string {
  if (value === undefined || value === null) return "";
  return isScalar(value) ? scalar(value) : jsonValue(value);
}

function unknownStyle(style: never): never {
  throw new TypeError(`Unknown parameter style: ${String(style)}.`);
}

export function isScalar(value: ParamValue): value is string | number | boolean | bigint {
  if (value === undefined || value === null) return false;
  return typeof value !== "object";
}

export function scalar(value: string | number | boolean | bigint): string {
  return String(value);
}

export function jsonValue(value: ParamValue): string {
  return JSON.stringify(value, bigintReplacer);
}

function bigintReplacer(_key: string, value: unknown): unknown {
  if (typeof value !== "bigint") return value;
  if (value <= MAX_SAFE_BIGINT && value >= -MAX_SAFE_BIGINT) return Number(value);
  return String(value);
}
