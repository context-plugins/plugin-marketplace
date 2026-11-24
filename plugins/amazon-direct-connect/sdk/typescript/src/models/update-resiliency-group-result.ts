import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resiliencyGroupSchema, type ResiliencyGroup } from "./resiliency-group.js";

export type UpdateResiliencyGroupResult = {
  resiliencyGroup?: ResiliencyGroup;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateResiliencyGroupResultSchema: Schema<UpdateResiliencyGroupResult> =
  s.object<UpdateResiliencyGroupResult>(
    {
      resiliencyGroup: s.optional(s.lazy(() => resiliencyGroupSchema)),
    },
    { additionalProperties: s.json() },
  );
