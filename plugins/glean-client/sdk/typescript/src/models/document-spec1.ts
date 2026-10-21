import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentSpec1 = {
  /** The ID of the document. */
  id: string;
};

export const documentSpec1Schema: Schema<DocumentSpec1> = s.object<DocumentSpec1>({
  id: s.string(),
});
