import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { documentSpecSchema, type DocumentSpec } from "../document-spec.js";
import { documentSpec1Schema, type DocumentSpec1 } from "../document-spec1.js";
import { documentSpec2Schema, type DocumentSpec2 } from "../document-spec2.js";
import { documentSpec3Schema, type DocumentSpec3 } from "../document-spec3.js";

export type DocumentSpec4 = DocumentSpec | DocumentSpec1 | DocumentSpec2 | DocumentSpec3;

export const documentSpec4Schema: Schema<DocumentSpec4> = s.of<DocumentSpec4>(
  s.union([
    s.lazy(() => documentSpecSchema),
    s.lazy(() => documentSpec1Schema),
    s.lazy(() => documentSpec2Schema),
    s.lazy(() => documentSpec3Schema),
  ]),
);
