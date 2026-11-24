import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { syncTemplateSchema, type SyncTemplate } from "../sync-template.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type SyncTemplatesResponse1 = SyncTemplate | ValidateErrorJson | InternalServerError;

export const syncTemplatesResponse1Schema: Schema<SyncTemplatesResponse1> = s.of<SyncTemplatesResponse1>(
  s.union([
    s.lazy(() => syncTemplateSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
