import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { composeInternalSchema, composeSchema, type Compose } from "./unions/compose.js";
import { imageInternalSchema, imageSchema, type Image } from "./unions/image.js";
import { limitsInternalSchema, limitsSchema, type Limits } from "./unions/limits.js";
import { resourcesInternalSchema, resourcesSchema, type Resources } from "./unions/resources.js";

/**
 * SDK ``RuntimeConfig`` accepted by hosted v6 submissions.
 *
 * Provider-specific support is validated by the SDK runtime implementation.
 */
export type SubmittedRuntimeConfig = {
  image?: Image;
  compose?: Compose;
  resources?: Resources;
  limits?: Limits;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submittedRuntimeConfigProperties: s.Shape<SubmittedRuntimeConfig> = {
  image: s.optional(s.lazy(() => imageInternalSchema)),
  compose: s.optional(s.lazy(() => composeInternalSchema)),
  resources: s.optional(s.lazy(() => resourcesInternalSchema)),
  limits: s.optional(s.lazy(() => limitsInternalSchema)),
};

export const submittedRuntimeConfigInternalSchema: Schema<SubmittedRuntimeConfig> =
  s.object<SubmittedRuntimeConfig>(submittedRuntimeConfigProperties, { additionalProperties: s.json() });

export const submittedRuntimeConfigSchema: Schema<SubmittedRuntimeConfig> = s.lazySchema(() =>
  s.object<SubmittedRuntimeConfig>(
    {
      ...submittedRuntimeConfigProperties,
      image: s.optional(s.lazy(() => imageSchema)),
      compose: s.optional(s.lazy(() => composeSchema)),
      resources: s.optional(s.lazy(() => resourcesSchema)),
      limits: s.optional(s.lazy(() => limitsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
