import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expressionTaskEvents2Schema, type ExpressionTaskEvents2 } from "./expression-task-events2.js";
import { inputParameterSchema, type InputParameter } from "./input-parameter.js";
import { Type5, type5Schema } from "./type5.js";
import { configSchema, type Config } from "./unions/config.js";
import { expressionSchema, type Expression } from "./unions/expression.js";
import { idSchema, type Id } from "./unions/id.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { outputSchema, type Output } from "./unions/output.js";
import { toolSchema, type Tool } from "./unions/tool.js";
import { variablesSchema, type Variables } from "./unions/variables.js";
import { Version, versionSchema } from "./version.js";

export type ExpressionTask = {
  /** A unique identifier for the task. */
  id?: Id;
  config?: Config;
  variables?: Variables;
  metadata?: Metadata;
  tool?: Tool;
  /** @default Type5.Expression */
  type?: Type5;
  /** @default Version.V1Alpha */
  version?: Version;
  inputs?: InputParameter[];
  /**
   * Expression for task output/logic. Supported expression forms: (1) JMESPath string (default for
   * plain strings), (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or (3)
   * typed CEL object {"type":"cel","expression":"..."}.
   */
  expression?: Expression;
  output?: Output;
  /** Actions to execute when the configured events occur. */
  on?: ExpressionTaskEvents2;
};

export const expressionTaskSchema: Schema<ExpressionTask> = s.object<ExpressionTask>({
  id: s.optional(s.lazy(() => idSchema)),
  config: s.optional(s.lazy(() => configSchema)),
  variables: s.optional(s.lazy(() => variablesSchema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  tool: s.optional(s.lazy(() => toolSchema)),
  type: s.defaulted(type5Schema, Type5.Expression),
  version: s.defaulted(versionSchema, Version.V1Alpha),
  inputs: s.optional(s.array(s.lazy(() => inputParameterSchema))),
  expression: s.optional(s.lazy(() => expressionSchema)),
  output: s.optional(s.lazy(() => outputSchema)),
  on: s.optional(s.lazy(() => expressionTaskEvents2Schema)),
});
