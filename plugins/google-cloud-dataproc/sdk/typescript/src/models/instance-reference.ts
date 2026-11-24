import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A reference to a Compute Engine instance. */
export type InstanceReference = {
  /** The user-friendly name of the Compute Engine instance. */
  instanceName?: string;
  /** The unique identifier of the Compute Engine instance. */
  instanceId?: string;
  /** The public ECIES key used for sharing data with this instance. */
  publicEciesKey?: string;
  /** The public RSA key used for sharing data with this instance. */
  publicKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceReferenceSchema: Schema<InstanceReference> = s.object<InstanceReference>(
  {
    instanceName: s.optional(s.string()),
    instanceId: s.optional(s.string()),
    publicEciesKey: s.optional(s.string()),
    publicKey: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
