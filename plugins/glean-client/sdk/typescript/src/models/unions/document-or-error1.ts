import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { documentOrErrorSchema, type DocumentOrError } from "../document-or-error.js";
import { documentSchema, type Document } from "../document.js";

export type DocumentOrError1 = Document | DocumentOrError;

export const documentOrError1Schema: Schema<DocumentOrError1> = s.of<DocumentOrError1>(
  s.union([s.lazy(() => documentSchema), s.lazy(() => documentOrErrorSchema)]),
);
