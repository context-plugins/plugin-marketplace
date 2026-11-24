import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Capability declaration, stripped to its stable identity.
 *
 * `url` and `params` from the live `hello` reply are deliberately absent: they are ephemeral
 * (substrate-local addresses) and may carry secrets (SSH keys), so the build pipeline never
 * transmits or persists them.
 */
export type ManifestCapability = {
  name: string;
  protocol: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manifestCapabilitySchema: Schema<ManifestCapability> = s.object<ManifestCapability>(
  {
    name: s.string(),
    protocol: s.string(),
  },
  { additionalProperties: s.json() },
);
