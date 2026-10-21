import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type SettlementConvenienceLinks1 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const settlementConvenienceLinks1Schema: Schema<SettlementConvenienceLinks1> =
  s.object<SettlementConvenienceLinks1>({
    self: urlSchema,
    documentation: s.optional(s.lazy(() => urlSchema)),
  });
