import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url77Schema, type Url77 } from "./url77.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links31 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation: Url;
  /** The API resource URL of the entity that this event belongs to. */
  entity?: Url77;
};

export const links31Schema: Schema<Links31> = s.object<Links31>({
  self: urlSchema,
  documentation: urlSchema,
  entity: s.optional(s.lazy(() => url77Schema)),
});
