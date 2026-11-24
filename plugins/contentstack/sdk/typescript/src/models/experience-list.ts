import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { experienceInternalSchema, experienceSchema, type Experience } from "./experience.js";

/** A list of personalization experiences. */
export type ExperienceList = {
  /** Array of experience objects. */
  data?: Experience[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const experienceListProperties: s.Shape<ExperienceList> = {
  data: s.optional(s.array(s.lazy(() => experienceInternalSchema))),
};

export const experienceListInternalSchema: Schema<ExperienceList> = s.object<ExperienceList>(
  experienceListProperties,
  { additionalProperties: s.json() },
);

export const experienceListSchema: Schema<ExperienceList> = s.lazySchema(() =>
  s.object<ExperienceList>(
    {
      ...experienceListProperties,
      data: s.optional(s.array(s.lazy(() => experienceSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
