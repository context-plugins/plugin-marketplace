import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationSchema, type Automation } from "./automation.js";

export type AutomationsGetResponse = {
  data?: Automation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationsGetResponseSchema: Schema<AutomationsGetResponse> = s.object<AutomationsGetResponse>(
  {
    data: s.optional(s.lazy(() => automationSchema)),
  },
  { additionalProperties: s.json() },
);
