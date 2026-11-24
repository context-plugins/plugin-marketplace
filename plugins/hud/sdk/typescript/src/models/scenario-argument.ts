import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultSchema, type Default } from "./unions/default.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { inputschemaSchema, type Inputschema } from "./unions/inputschema.js";
import {
  typeHudPlatformQaAgentsApiSchema,
  type TypeHudPlatformQaAgentsApi,
} from "./unions/type-hud-platform-qa-agents-api.js";

export type ScenarioArgument = {
  name: string;
  /** @default false */
  required?: boolean;
  description?: Description;
  type?: TypeHudPlatformQaAgentsApi;
  default?: Default;
  inputSchema?: Inputschema;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scenarioArgumentSchema: Schema<ScenarioArgument> = s.object<ScenarioArgument>(
  {
    name: s.string(),
    required: s.defaulted(s.boolean(), false),
    description: s.optional(s.lazy(() => descriptionSchema)),
    type: s.optional(s.lazy(() => typeHudPlatformQaAgentsApiSchema)),
    default: s.optional(s.lazy(() => defaultSchema)),
    inputSchema: s.optional(s.lazy(() => inputschemaSchema)),
  },
  { additionalProperties: s.json() },
);
