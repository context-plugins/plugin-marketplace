import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type SyncsResponse11 = Record<string, unknown> | ValidateErrorJson | InternalServerError;

export const syncsResponse11Schema: Schema<SyncsResponse11> = s.of<SyncsResponse11>(
  s.union([
    s.record(s.string(), s.unknown()),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
