import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateLagRequest = {
  /** The ID of the LAG. */
  lagId: string;
  /** The name of the LAG. */
  lagName?: string;
  /**
   * The minimum number of physical connections that must be operational for the LAG itself to be
   * operational.
   */
  minimumLinks?: number;
  /**
   * The LAG MAC Security (MACsec) encryption mode. Amazon Web Services applies the value to all
   * connections which are part of the LAG.
   */
  encryptionMode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateLagRequestSchema: Schema<UpdateLagRequest> = s.object<UpdateLagRequest>(
  {
    lagId: s.string(),
    lagName: s.optional(s.string()),
    minimumLinks: s.optional(s.int()),
    encryptionMode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
