import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type DisableEmbedBranding = {
  /** @default "disable_embed_branding" */
  name?: "disable_embed_branding";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disableEmbedBrandingSchema: Schema<DisableEmbedBranding> = s.object<DisableEmbedBranding>(
  {
    name: s.defaulted(s.literal("disable_embed_branding"), "disable_embed_branding"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
