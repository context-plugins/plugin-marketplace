import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Remediation guidance for the recipe. Always present; an empty object means no guidance is
 * available. Each field is present only when the recipe has that content.
 */
export type ComposerRecipeMetadata = {
  /** Possible impact of applying the remediation. */
  impacts?: string;
  /** Points to consider before remediating. */
  importantPoints?: string[];
  /** Documentation URL for the finding. */
  reference?: string;
  /** HTML describing how to remediate the finding manually. */
  manualRemediation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const composerRecipeMetadataProperties: s.Shape<ComposerRecipeMetadata> = {
  impacts: s.optional(s.string()),
  importantPoints: s.optional(s.array(s.string())),
  reference: s.optional(s.string()),
  manualRemediation: s.optional(s.string()),
};

export const composerRecipeMetadataInternalSchema: Schema<ComposerRecipeMetadata> =
  s.object<ComposerRecipeMetadata>(composerRecipeMetadataProperties, { additionalProperties: s.json() });

export const composerRecipeMetadataSchema: Schema<ComposerRecipeMetadata> = s.lazySchema(() =>
  s.object<ComposerRecipeMetadata>(
    {
      ...composerRecipeMetadataProperties,
      reference: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
