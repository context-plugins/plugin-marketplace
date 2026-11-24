import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The route resource is the child of the private connection resource, used for defining a route for
 * a private connection.
 */
export type Route = {
  /** Required. Display name. */
  displayName?: string;
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** Destination port for connection */
  destinationPort?: number;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Required. Destination address for connection */
  destinationAddress?: string;
  /** Labels. */
  labels?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routeSchema: Schema<Route> = s.object<Route>(
  {
    displayName: s.optional(s.string()),
    name: s.optional(s.string()),
    destinationPort: s.optional(s.int()),
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    destinationAddress: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
