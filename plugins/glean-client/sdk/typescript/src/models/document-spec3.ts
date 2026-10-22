import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ugcType1Schema, type UgcType1 } from "./ugc-type1.js";

export type DocumentSpec3 = {
  /** The type of the user generated content (UGC datasource). */
  ugcType: UgcType1;
  /** The string id for user generated content. Used for CHATS. */
  ugcId: string;
  /** The specific type of the user generated content type. */
  docType?: string;
};

export const documentSpec3Schema: Schema<DocumentSpec3> = s.object<DocumentSpec3>({
  ugcType: ugcType1Schema,
  ugcId: s.string(),
  docType: s.optional(s.string()),
});
