import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultBypassItemSchema, type DefaultBypassItem } from "./default-bypass-item.js";

/** Default application entries with updated toggle states (matched by name), keyed by platform. */
export type Default = {
  /** Default bypass apps on macOS. */
  mac?: DefaultBypassItem[];
  /** Default bypass apps on Windows. */
  windows?: DefaultBypassItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaultSchema: Schema<Default> = s.object<Default>(
  {
    mac: s.optional(s.array(s.lazy(() => defaultBypassItemSchema))),
    windows: s.optional(s.array(s.lazy(() => defaultBypassItemSchema))),
  },
  { additionalProperties: s.json() },
);
