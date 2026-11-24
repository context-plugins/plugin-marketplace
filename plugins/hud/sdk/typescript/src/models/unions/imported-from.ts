import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { externalOriginSchema, type ExternalOrigin } from "../external-origin.js";

export type ImportedFrom = ExternalOrigin;

export const importedFromSchema: Schema<ImportedFrom> = s.of<ImportedFrom>(
  s.union([s.lazy(() => externalOriginSchema)]),
);
