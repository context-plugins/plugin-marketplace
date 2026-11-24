import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  experienceVariantInternalSchema,
  experienceVariantSchema,
  type ExperienceVariant,
} from "./experience-variant.js";
import {
  statusContentstackPersonalizeManagementExperiencesApiSchema,
  type StatusContentstackPersonalizeManagementExperiencesApi,
} from "./status-contentstack-personalize-management-experiences-api.js";
import { typeSchema, type Type } from "./type.js";

/** A personalization experience with variant and audience configuration. */
export type Experience = {
  /** Unique identifier of the experience. */
  uid?: string;
  /** Display name of the experience. */
  name?: string;
  /** Type of experience — SEGMENTED for rule-based or AB_TEST for split testing. */
  type?: Type;
  /** Current status of the experience. */
  status?: StatusContentstackPersonalizeManagementExperiencesApi;
  /** List of content variants included in the experience. */
  variants?: ExperienceVariant[];
  /** ISO 8601 timestamp when the experience was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const experienceProperties: s.Shape<Experience> = {
  uid: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
  status: s.optional(s.lazy(() => statusContentstackPersonalizeManagementExperiencesApiSchema)),
  variants: s.optional(s.array(s.lazy(() => experienceVariantInternalSchema))),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    createdAt: "created_at",
  },
};

export const experienceInternalSchema: Schema<Experience> = s.object<Experience>(experienceProperties, {
  additionalProperties: s.json(),
});

export const experienceSchema: Schema<Experience> = s.lazySchema(() =>
  s.object<Experience>(
    {
      ...experienceProperties,
      variants: s.optional(s.array(s.lazy(() => experienceVariantSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
