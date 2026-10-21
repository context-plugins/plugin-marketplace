import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";

export type Embedded9 = {
  documents: Document[];
};

export const embedded9Schema: Schema<Embedded9> = s.object<Embedded9>({
  documents: s.array(s.lazy(() => documentSchema)),
});
