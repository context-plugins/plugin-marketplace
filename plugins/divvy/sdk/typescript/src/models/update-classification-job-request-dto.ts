import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a job (description updated) */
export type UpdateClassificationJobRequestDto = {
  /** Job name */
  name?: string;
  /** Job short name */
  shortName?: string;
  /** Job description */
  description?: string;
  /** BILL-generated ID of the parent job. You can set this field if this job is a child object. */
  parentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateClassificationJobRequestDtoSchema: Schema<UpdateClassificationJobRequestDto> =
  s.object<UpdateClassificationJobRequestDto>(
    {
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
