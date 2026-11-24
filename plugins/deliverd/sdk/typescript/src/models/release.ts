import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The release the run tested — any of provider, model, modelVersion, promptHash, guardrailsHash.
 * Evidence naming a release other than the one the AI system now runs does not count towards a
 * control
 */
export type Release = {
  provider?: string;
  model?: string;
  modelVersion?: string;
  /** The prompt's digest, as the release recorded it: sha256:…, a commit or a tag */
  promptHash?: string;
  /** The guardrail configuration's digest */
  guardrailsHash?: string;
};

const releaseProperties: s.Shape<Release> = {
  provider: s.optional(s.string()),
  model: s.optional(s.string()),
  modelVersion: s.optional(s.string()),
  promptHash: s.optional(s.string()),
  guardrailsHash: s.optional(s.string()),
};

export const releaseInternalSchema: Schema<Release> = s.object<Release>(releaseProperties);

export const releaseSchema: Schema<Release> = s.lazySchema(() =>
  s.object<Release>({
    ...releaseProperties,
    provider: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
    model: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
    modelVersion: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
  }),
);
