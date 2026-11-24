import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationSchema, type Automation } from "./automation.js";

/** A list of automations in a project. */
export type AutomationList = {
  /** Array of automation objects. */
  data?: Automation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationListSchema: Schema<AutomationList> = s.object<AutomationList>(
  {
    data: s.optional(s.array(s.lazy(() => automationSchema))),
  },
  { additionalProperties: s.json() },
);
