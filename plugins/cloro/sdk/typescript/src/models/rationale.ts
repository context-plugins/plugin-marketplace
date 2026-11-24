import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productCitationSchema, type ProductCitation } from "./product-citation.js";

export type Rationale = {
  rationale?: string;
  citations?: ProductCitation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rationaleSchema: Schema<Rationale> = s.object<Rationale>(
  {
    rationale: s.optional(s.string()),
    citations: s.optional(s.array(s.lazy(() => productCitationSchema))),
  },
  { additionalProperties: s.json() },
);
