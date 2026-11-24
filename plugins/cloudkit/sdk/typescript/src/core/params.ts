import type { ParamPair, StyledParam } from "./param-value.js";
import { flatten } from "./param-value.js";

export function percentEncode(value: string): string {
  return encodeURIComponent(value).replace(
    /[!'()*]/g,
    (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}

export function formEncode(value: string): string {
  return percentEncode(value).replace(/%20/g, "+");
}

export function queryString(layers: ReadonlyArray<readonly StyledParam[]>): string {
  return layers
    .flatMap((layer) => flatten(layer, queryValue))
    .map(([key, value]) => `${percentEncode(key)}=${value}`)
    .join("&");
}

export function formString(fields: readonly StyledParam[]): string {
  return serializePairs(flatten(fields), formEncode);
}

function queryValue(items: readonly string[], separator: string): string {
  return items.map(percentEncode).join(separator === "," ? separator : percentEncode(separator));
}

export function serializePairs(pairs: ReadonlyArray<ParamPair>, encode: (value: string) => string): string {
  return pairs.map(([key, value]) => `${encode(key)}=${encode(value)}`).join("&");
}
