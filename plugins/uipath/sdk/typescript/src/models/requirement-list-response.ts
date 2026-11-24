import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requirementSchema, type Requirement } from "./requirement.js";

/** Paginated response containing requirements */
export type RequirementListResponse = {
  /** Total number of requirements */
  totalCount?: number;
  requirements?: Requirement[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requirementListResponseSchema: Schema<RequirementListResponse> =
  s.object<RequirementListResponse>(
    {
      totalCount: s.optional(s.int()),
      requirements: s.optional(s.array(s.lazy(() => requirementSchema))),
    },
    { additionalProperties: s.json() },
  );
