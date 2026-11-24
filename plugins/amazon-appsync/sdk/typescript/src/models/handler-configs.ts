import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { handlerConfigSchema, type HandlerConfig } from "./handler-config.js";

export type HandlerConfigs = {
  onPublish?: HandlerConfig;
  onSubscribe?: HandlerConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const handlerConfigsSchema: Schema<HandlerConfigs> = s.object<HandlerConfigs>(
  {
    onPublish: s.optional(s.lazy(() => handlerConfigSchema)),
    onSubscribe: s.optional(s.lazy(() => handlerConfigSchema)),
  },
  { additionalProperties: s.json() },
);
