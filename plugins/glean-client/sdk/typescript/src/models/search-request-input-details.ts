import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchRequestInputDetails = {
  /**
   * Whether the associated query was at least partially copy-pasted. If subsequent requests are
   * issued after a copy-pasted query is constructed (e.g. with facet modifications), this bit
   * should continue to be set for those requests.
   */
  hasCopyPaste?: boolean;
};

export const searchRequestInputDetailsSchema: Schema<SearchRequestInputDetails> =
  s.object<SearchRequestInputDetails>({
    hasCopyPaste: s.optional(s.boolean()),
  });
