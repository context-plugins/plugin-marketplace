import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Private connectivity. */
export type PrivateConnectivity2 = {
  /**
   * Required. A reference to a private connection resource. Format:
   * `projects/{project}/locations/{location}/privateConnections/{name}`
   */
  privateConnection?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const privateConnectivity2Schema: Schema<PrivateConnectivity2> = s.object<PrivateConnectivity2>(
  {
    privateConnection: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
