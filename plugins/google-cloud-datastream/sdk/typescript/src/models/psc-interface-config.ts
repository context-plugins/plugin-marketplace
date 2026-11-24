import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The PSC Interface configuration is used to create PSC Interface between Datastream and the
 * consumer's PSC.
 */
export type PscInterfaceConfig = {
  /**
   * Required. Fully qualified name of the Network Attachment that Datastream will connect to.
   * Format: `projects/{project}/regions/{region}/networkAttachments/{name}`
   */
  networkAttachment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pscInterfaceConfigSchema: Schema<PscInterfaceConfig> = s.object<PscInterfaceConfig>(
  {
    networkAttachment: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
