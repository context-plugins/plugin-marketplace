import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

export type Links69 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation?: Url;
};

export const links69Schema: Schema<Links69> = s.object<Links69>({
  documentation: s.optional(s.lazy(() => urlSchema)),
});
