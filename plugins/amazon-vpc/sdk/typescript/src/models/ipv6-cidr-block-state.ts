import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Ipv6CidrBlockState = {
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipv6CidrBlockStateSchema: Schema<Ipv6CidrBlockState> = s.object<Ipv6CidrBlockState>(
  {
    state: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
