import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ClassificationJob response Dto. */
export type ClassificationJobResponseDto = {
  /** BILL-generated ID of the job. The value begins with `job`. */
  id?: string;
  /** Job name */
  name?: string;
  /** Job short name */
  shortName?: string;
  /** Job description */
  description?: string;
  /** BILL-generated ID of the parent job. You can set this field if this job is a child object. */
  parentId?: string;
  /** Set as `true` if the job is archived */
  archived?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationJobResponseDtoSchema: Schema<ClassificationJobResponseDto> =
  s.object<ClassificationJobResponseDto>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
