import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** An automation workflow that connects a trigger to one or more actions. */
export type Automation = {
  /** Unique identifier of the automation. */
  uid?: string;
  /** Display name of the automation. */
  name?: string;
  /** Current status of the automation. */
  status?: Status;
  /** Configuration for the automation trigger condition. */
  trigger?: Record<string, unknown>;
  /** Ordered list of action steps executed when the trigger fires. */
  steps?: Record<string, unknown>[];
  /** ISO 8601 timestamp when the automation was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the automation was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationSchema: Schema<Automation> = s.object<Automation>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    trigger: s.optional(s.record(s.string(), s.unknown())),
    steps: s.optional(s.array(s.record(s.string(), s.unknown()))),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
