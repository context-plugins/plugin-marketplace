import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { conditionSchema, type Condition } from "./condition.js";
import { triggerEventSchema, type TriggerEvent } from "./trigger-event.js";

export type AutomationInput = {
  name: string;
  triggerEvent: TriggerEvent;
  conditions?: Condition[];
  actions: Action[];
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationInputSchema: Schema<AutomationInput> = s.object<AutomationInput>(
  {
    name: s.string(),
    triggerEvent: triggerEventSchema,
    conditions: s.optional(s.array(s.lazy(() => conditionSchema))),
    actions: s.array(s.lazy(() => actionSchema)),
    enabled: s.optional(s.boolean()),
    _keysMap: {
      triggerEvent: "trigger_event",
    },
  },
  { additionalProperties: s.json() },
);
