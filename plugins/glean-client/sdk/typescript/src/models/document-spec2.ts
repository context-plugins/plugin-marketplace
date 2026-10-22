import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ugcType3Schema, type UgcType3 } from "./ugc-type3.js";

export type DocumentSpec2 = {
  /** The type of the user generated content (UGC datasource). */
  ugcType: UgcType3;
  /**
   * The numeric id for user generated content. Used for ANNOUNCEMENTS, ANSWERS, COLLECTIONS,
   * SHORTCUTS.
   */
  contentId: number;
  /** The specific type of the user generated content type. */
  docType?: string;
};

export const documentSpec2Schema: Schema<DocumentSpec2> = s.object<DocumentSpec2>({
  ugcType: ugcType3Schema,
  contentId: s.int(),
  docType: s.optional(s.string()),
});
