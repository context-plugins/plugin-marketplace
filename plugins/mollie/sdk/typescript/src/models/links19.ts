import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url60Schema, type Url60 } from "./url60.js";
import { url61Schema, type Url61 } from "./url61.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links19 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the client's organization. */
  organization?: Url60;
  /** The API resource URL of the client's onboarding status. */
  onboarding?: Url61;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links19Schema: Schema<Links19> = s.object<Links19>({
  self: urlSchema,
  organization: s.optional(s.lazy(() => url60Schema)),
  onboarding: s.optional(s.lazy(() => url61Schema)),
  documentation: s.optional(s.lazy(() => urlSchema)),
});
