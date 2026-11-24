import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformLimitSchema, type PlatformLimit } from "./platform-limit.js";

export type PlatformLimits = {
  platformLimits?: PlatformLimit[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platformLimitsSchema: Schema<PlatformLimits> = s.object<PlatformLimits>(
  {
    platformLimits: s.optional(s.array(s.lazy(() => platformLimitSchema))),
    _keysMap: {
      platformLimits: "platform_limits",
    },
  },
  { additionalProperties: s.json() },
);
