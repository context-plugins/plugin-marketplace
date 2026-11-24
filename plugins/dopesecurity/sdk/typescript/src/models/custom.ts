import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customBypassRequestItemInternalSchema,
  customBypassRequestItemSchema,
  type CustomBypassRequestItem,
} from "./custom-bypass-request-item.js";

/** Custom application entries to upsert (matched by name), keyed by platform. */
export type Custom = {
  /** Custom bypass apps on macOS. */
  mac?: CustomBypassRequestItem[];
  /** Custom bypass apps on Windows. */
  windows?: CustomBypassRequestItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customProperties: s.Shape<Custom> = {
  mac: s.optional(s.array(s.lazy(() => customBypassRequestItemInternalSchema))),
  windows: s.optional(s.array(s.lazy(() => customBypassRequestItemInternalSchema))),
};

export const customInternalSchema: Schema<Custom> = s.object<Custom>(customProperties, {
  additionalProperties: s.json(),
});

export const customSchema: Schema<Custom> = s.lazySchema(() =>
  s.object<Custom>(
    {
      ...customProperties,
      mac: s.optional(s.array(s.lazy(() => customBypassRequestItemSchema))),
      windows: s.optional(s.array(s.lazy(() => customBypassRequestItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
