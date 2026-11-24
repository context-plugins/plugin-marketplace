import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botAliasTestExecutionTargetSchema,
  type BotAliasTestExecutionTarget,
} from "./bot-alias-test-execution-target.js";

export type TestExecutionTarget = {
  botAliasTarget?: BotAliasTestExecutionTarget;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testExecutionTargetSchema: Schema<TestExecutionTarget> = s.object<TestExecutionTarget>(
  {
    botAliasTarget: s.optional(s.lazy(() => botAliasTestExecutionTargetSchema)),
  },
  { additionalProperties: s.json() },
);
