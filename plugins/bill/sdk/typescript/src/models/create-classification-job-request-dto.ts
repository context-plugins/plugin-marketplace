import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a job */
export type CreateClassificationJobRequestDto = {
  /** Job name */
  name: string;
  /** Job short name */
  shortName?: string;
  /** Job description */
  description?: string;
  /** BILL-generated ID of the parent job. You can set this field if this job is a child object. */
  parentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createClassificationJobRequestDtoProperties: s.Shape<CreateClassificationJobRequestDto> = {
  name: s.string(),
  shortName: s.optional(s.string()),
  description: s.optional(s.string()),
  parentId: s.optional(s.string()),
};

export const createClassificationJobRequestDtoInternalSchema: Schema<CreateClassificationJobRequestDto> =
  s.object<CreateClassificationJobRequestDto>(createClassificationJobRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createClassificationJobRequestDtoSchema: Schema<CreateClassificationJobRequestDto> =
  s.lazySchema(() =>
    s.object<CreateClassificationJobRequestDto>(
      {
        ...createClassificationJobRequestDtoProperties,
        name: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
