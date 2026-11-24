import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callbackMethodSchema, type CallbackMethod } from "./callback-method.js";

export type DiscoveryCallback = {
  bulkId?: string;
  callbackMethod?: CallbackMethod;
  bulkStatus?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discoveryCallbackSchema: Schema<DiscoveryCallback> = s.object<DiscoveryCallback>(
  {
    bulkId: s.optional(s.string()),
    callbackMethod: s.optional(s.lazy(() => callbackMethodSchema)),
    bulkStatus: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
