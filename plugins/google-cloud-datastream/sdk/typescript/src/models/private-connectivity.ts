import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Private Connectivity */
export type PrivateConnectivity = {
  /**
   * Required. A reference to a private connection resource. Format:
   * `projects/{project}/locations/{location}/privateConnections/{name}`
   */
  privateConnection?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const privateConnectivitySchema: Schema<PrivateConnectivity> = s.object<PrivateConnectivity>(
  {
    privateConnection: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
