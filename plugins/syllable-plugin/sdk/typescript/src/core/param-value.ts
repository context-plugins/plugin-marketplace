import type { Entry } from "./validation/schema.js";
import { encodeEntry } from "./validation/schema-error.js";

export type ParamStyle = "plain" | "indexed" | "unindexed" | "csv" | "tsv" | "psv";

export type ParamValue =
  | string
  | number
  | boolean
  | bigint
  | null
  | undefined
  | readonly ParamValue[]
  | { readonly [key: string]: ParamValue };

export type Param<Name extends string = string> = {
  readonly name: Name;
  readonly value: unknown;
  readonly schema: Entry<unknown>;
};

export type StyledParam = Param & { readonly style?: ParamStyle | undefined };

export type ParamPair = readonly [name: string, value: string];

const MAX_SAFE_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);

export function flattenValue(value: ParamValue): string[] {
  if (value === undefined || value === null) return [];
  if (isScalar(value)) return [scalar(value)];
  if (!Array.isArray(value)) return [jsonValue(value)];

  const folded: string[] = [];
  for (const element of value) {
    if (element === undefined || element === null) folded.push("");
    else if (isScalar(element)) folded.push(scalar(element));
    else return [jsonValue(value)];
  }
  return folded;
}

export function encodedParam(source: Param): ParamValue {
  return encodeEntry(source.schema, source.value) as ParamValue;
}

export function flattenParams(sources?: ReadonlyArray<StyledParam>): ParamPair[] {
  return (sources ?? []).flatMap((source) =>
    flattenParam(source.name, encodedParam(source), source.style ?? "plain"),
  );
}

function flattenParam(key: string, value: ParamValue, style: ParamStyle): ParamPair[] {
  if (value === undefined || value === null) return [];
  if (isScalar(value)) return [[key, scalar(value)]];
  if (Array.isArray(value)) return flattenArray(key, value, style);
  return Object.entries(value).flatMap(([sub, subValue]) => flattenParam(`${key}[${sub}]`, subValue, style));
}

function flattenArray(key: string, values: readonly ParamValue[], style: ParamStyle): ParamPair[] {
  const present = values.filter((value) => value !== undefined && value !== null);
  switch (style) {
    case "plain":
      return present.flatMap((value) => flattenParam(key, value, style));
    case "indexed":
      return values.flatMap((value, index) => flattenParam(`${key}[${index}]`, value, style));
    case "unindexed":
      return present.flatMap((value) => flattenParam(`${key}[]`, value, style));
    case "csv":
      return [joined(key, values, ",")];
    case "tsv":
      return [joined(key, values, "\t")];
    case "psv":
      return [joined(key, values, "|")];
    default:
      return unknownStyle(style);
  }
}

function joined(key: string, values: readonly ParamValue[], separator: string): ParamPair {
  return [key, flattenValue(values).join(separator)];
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
