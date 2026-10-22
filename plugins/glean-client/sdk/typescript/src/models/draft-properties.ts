import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DraftProperties = {
  /** The opaque id of the associated draft. */
  draftId?: number;
};

export const draftPropertiesSchema: Schema<DraftProperties> = s.object<DraftProperties>({
  draftId: s.optional(s.int()),
});
