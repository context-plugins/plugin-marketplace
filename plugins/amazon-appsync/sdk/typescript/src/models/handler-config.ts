import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { behaviorSchema, type Behavior } from "./behavior.js";
import { integrationSchema, type Integration } from "./integration.js";

export type HandlerConfig = {
  /** The behavior for the handler. */
  behavior: Behavior;
  integration: Integration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const handlerConfigSchema: Schema<HandlerConfig> = s.object<HandlerConfig>(
  {
    behavior: behaviorSchema,
    integration: integrationSchema,
  },
  { additionalProperties: s.json() },
);
