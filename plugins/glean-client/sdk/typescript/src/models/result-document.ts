import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResultDocument = {
  title?: string;
  url?: string;
};

export const resultDocumentSchema: Schema<ResultDocument> = s.object<ResultDocument>({
  title: s.optional(s.string()),
  url: s.optional(s.string()),
});
