import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { badRequestSchemaSchema, type BadRequestSchema } from "../bad-request-schema.js";
import { duplicateResourceSchemaSchema, type DuplicateResourceSchema } from "../duplicate-resource-schema.js";

export type FundingSourcesResponse = BadRequestSchema | DuplicateResourceSchema;

export const fundingSourcesResponseSchema: Schema<FundingSourcesResponse> = s.of<FundingSourcesResponse>(
  s.union([s.lazy(() => badRequestSchemaSchema), s.lazy(() => duplicateResourceSchemaSchema)]),
);
