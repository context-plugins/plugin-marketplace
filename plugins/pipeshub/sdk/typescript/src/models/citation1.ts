import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { citationSchema, type Citation } from "./citation.js";

export type Citation1 = {
  citationId?: string;
  /**
   * A populated citation document. Represents a single chunk of source content (e.g. a passage from
   * a document or record) referenced by an AI response, together with its provenance metadata.
   */
  citationData?: Citation;
};

export const citation1Schema: Schema<Citation1> = s.object<Citation1>({
  citationId: s.optional(s.string()),
  citationData: s.optional(s.lazy(() => citationSchema)),
});
