import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentSpec = {
  /** The URL of the document. */
  url: string;
};

export const documentSpecSchema: Schema<DocumentSpec> = s.object<DocumentSpec>({
  url: s.string(),
});
