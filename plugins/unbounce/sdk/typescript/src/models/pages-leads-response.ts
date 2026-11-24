import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { leadSchema, type Lead } from "./lead.js";

export type PagesLeadsResponse = {
  leads?: Lead[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagesLeadsResponseSchema: Schema<PagesLeadsResponse> = s.object<PagesLeadsResponse>(
  {
    leads: s.optional(s.array(s.lazy(() => leadSchema))),
  },
  { additionalProperties: s.json() },
);
