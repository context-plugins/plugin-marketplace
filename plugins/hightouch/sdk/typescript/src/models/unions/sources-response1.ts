import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { sourceSchema, type Source } from "../source.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type SourcesResponse1 = Source | ValidateErrorJson | InternalServerError;

export const sourcesResponse1Schema: Schema<SourcesResponse1> = s.of<SourcesResponse1>(
  s.union([
    s.lazy(() => sourceSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
