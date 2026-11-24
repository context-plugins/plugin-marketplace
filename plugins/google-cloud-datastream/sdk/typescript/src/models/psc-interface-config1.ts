import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** PSC Interface Config. */
export type PscInterfaceConfig1 = {
  /**
   * Required. Fully qualified name of the Network Attachment that Datastream will connect to.
   * Format: `projects/{project}/regions/{region}/networkAttachments/{name}`
   */
  networkAttachment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pscInterfaceConfig1Schema: Schema<PscInterfaceConfig1> = s.object<PscInterfaceConfig1>(
  {
    networkAttachment: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
