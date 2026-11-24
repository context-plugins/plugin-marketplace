import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { device1Schema, type Device1 } from "./device1.js";
import { ExtractFormat1, extractFormat1Schema } from "./extract-format1.js";
import { waitUntil1Schema, type WaitUntil1 } from "./wait-until1.js";

export type V1ExtractRequest = {
  url: string;
  /** @default ExtractFormat1.Markdown */
  extractFormat?: ExtractFormat1;
  waitUntil?: WaitUntil1;
  timeout?: number;
  device?: Device1;
  blockCookieBanners?: boolean;
  hideSelectors?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ExtractRequestProperties: s.Shape<V1ExtractRequest> = {
  url: s.string(),
  extractFormat: s.defaulted(extractFormat1Schema, ExtractFormat1.Markdown),
  waitUntil: s.optional(s.lazy(() => waitUntil1Schema)),
  timeout: s.optional(s.int()),
  device: s.optional(s.lazy(() => device1Schema)),
  blockCookieBanners: s.optional(s.boolean()),
  hideSelectors: s.optional(s.array(s.string())),
};

export const v1ExtractRequestInternalSchema: Schema<V1ExtractRequest> = s.object<V1ExtractRequest>(
  v1ExtractRequestProperties,
  { additionalProperties: s.json() },
);

export const v1ExtractRequestSchema: Schema<V1ExtractRequest> = s.lazySchema(() =>
  s.object<V1ExtractRequest>(
    {
      ...v1ExtractRequestProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
