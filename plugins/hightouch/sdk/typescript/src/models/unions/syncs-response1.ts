import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { syncSchema, type Sync } from "../sync.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type SyncsResponse1 = Sync | ValidateErrorJson | InternalServerError;

export const syncsResponse1Schema: Schema<SyncsResponse1> = s.of<SyncsResponse1>(
  s.union([
    s.lazy(() => syncSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
