import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpSecurityNetwork = {
  connectionType?: string;
  route?: string;
  isAnycast?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipSecurityNetworkSchema: Schema<IpSecurityNetwork> = s.object<IpSecurityNetwork>(
  {
    connectionType: s.optional(s.string()),
    route: s.optional(s.string()),
    isAnycast: s.optional(s.boolean()),
    _keysMap: {
      connectionType: "connection_type",
      isAnycast: "is_anycast",
    },
  },
  { additionalProperties: s.json() },
);
