import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  experienceVariantInternalSchema,
  experienceVariantSchema,
  type ExperienceVariant,
} from "./experience-variant.js";
import { type1Schema, type Type1 } from "./type1.js";

/** Parameters for creating or updating an experience. */
export type CreateExperienceRequest = {
  /** Display name for the experience. */
  name: string;
  /** Experience type. */
  type: Type1;
  /** Variant definitions for the experience. */
  variants?: ExperienceVariant[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createExperienceRequestProperties: s.Shape<CreateExperienceRequest> = {
  name: s.string(),
  type: type1Schema,
  variants: s.optional(s.array(s.lazy(() => experienceVariantInternalSchema))),
};

export const createExperienceRequestInternalSchema: Schema<CreateExperienceRequest> =
  s.object<CreateExperienceRequest>(createExperienceRequestProperties, { additionalProperties: s.json() });

export const createExperienceRequestSchema: Schema<CreateExperienceRequest> = s.lazySchema(() =>
  s.object<CreateExperienceRequest>(
    {
      ...createExperienceRequestProperties,
      variants: s.optional(s.array(s.lazy(() => experienceVariantSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
