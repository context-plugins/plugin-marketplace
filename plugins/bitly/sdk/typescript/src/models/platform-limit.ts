import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodLimitSchema, type MethodLimit } from "./method-limit.js";

export type PlatformLimit = {
  endpoint?: string;
  methods?: MethodLimit[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platformLimitSchema: Schema<PlatformLimit> = s.object<PlatformLimit>(
  {
    endpoint: s.optional(s.string()),
    methods: s.optional(s.array(s.lazy(() => methodLimitSchema))),
  },
  { additionalProperties: s.json() },
);
