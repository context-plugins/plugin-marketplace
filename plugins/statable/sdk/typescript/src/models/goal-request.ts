import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Operator, operatorSchema } from "./operator.js";

export type GoalRequest = {
  name: string;
  /** URL path to match. */
  path?: string;
  /** e = equals, b = begins with, c = contains. @default Operator.E */
  operator?: Operator;
  /** Match a custom event instead of a path. */
  eventName?: string;
  /** Percent scrolled. */
  scrollDepth?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalRequestSchema: Schema<GoalRequest> = s.object<GoalRequest>(
  {
    name: s.string(),
    path: s.optional(s.string()),
    operator: s.defaulted(operatorSchema, Operator.E),
    eventName: s.optional(s.string()),
    scrollDepth: s.optional(s.int()),
    _keysMap: {
      eventName: "event_name",
      scrollDepth: "scroll_depth",
    },
  },
  { additionalProperties: s.json() },
);
