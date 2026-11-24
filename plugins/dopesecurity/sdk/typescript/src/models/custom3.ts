import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Custom3 = {
  /** List of macOS application names to delete */
  mac?: string[];
  /** List of Windows application names to delete */
  windows?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const custom3Schema: Schema<Custom3> = s.object<Custom3>(
  {
    mac: s.optional(s.array(s.string())),
    windows: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
