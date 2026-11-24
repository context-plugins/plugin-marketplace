import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Plan = {
  /** Plan code (free|starter|pro|scale|enterprise). */
  code: string;
  name: string;
  /** Subscription status. */
  status: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planSchema: Schema<Plan> = s.object<Plan>(
  {
    code: s.string(),
    name: s.string(),
    status: statusSchema,
  },
  { additionalProperties: s.json() },
);
