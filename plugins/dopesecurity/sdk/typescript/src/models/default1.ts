import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultBypassItemSchema, type DefaultBypassItem } from "./default-bypass-item.js";

/** Default application bypass entries with their toggle states */
export type Default1 = {
  /** Default bypass apps on macOS */
  mac: DefaultBypassItem[];
  /** Default bypass apps on Windows */
  windows: DefaultBypassItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const default1Schema: Schema<Default1> = s.object<Default1>(
  {
    mac: s.array(s.lazy(() => defaultBypassItemSchema)),
    windows: s.array(s.lazy(() => defaultBypassItemSchema)),
  },
  { additionalProperties: s.json() },
);
