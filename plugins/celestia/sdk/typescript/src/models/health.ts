import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Health = {
  /** @default "ok" */
  status?: "ok";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthSchema: Schema<Health> = s.object<Health>(
  {
    status: s.defaulted(s.literal("ok"), "ok"),
  },
  { additionalProperties: s.json() },
);
