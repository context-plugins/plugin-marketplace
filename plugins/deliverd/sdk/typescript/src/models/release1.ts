import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The release the results tested — any of provider, model, modelVersion, promptHash, guardrailsHash
 * — with results, a report or a pull. Evidence that names another release than the AI system now
 * runs does not count towards a control
 */
export type Release1 = {
  provider?: string;
  model?: string;
  modelVersion?: string;
  /** The prompt's digest, as the release recorded it: sha256:…, a commit or a tag */
  promptHash?: string;
  /** The guardrail configuration's digest */
  guardrailsHash?: string;
};

const release1Properties: s.Shape<Release1> = {
  provider: s.optional(s.string()),
  model: s.optional(s.string()),
  modelVersion: s.optional(s.string()),
  promptHash: s.optional(s.string()),
  guardrailsHash: s.optional(s.string()),
};

export const release1InternalSchema: Schema<Release1> = s.object<Release1>(release1Properties);

export const release1Schema: Schema<Release1> = s.lazySchema(() =>
  s.object<Release1>({
    ...release1Properties,
    provider: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
    model: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
    modelVersion: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
  }),
);
