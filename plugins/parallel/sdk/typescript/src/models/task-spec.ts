import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputSchemaSchema, type InputSchema } from "./unions/input-schema.js";
import { outputSchema1Schema, type OutputSchema1 } from "./unions/output-schema1.js";

/**
 * Specification for a task.
 *
 * Auto output schemas can be specified by setting `output_schema={"type":"auto"}`. Not specifying a
 * TaskSpec is the same as setting an auto output schema.
 *
 * For convenience bare strings are also accepted as input or output schemas.
 */
export type TaskSpec = {
  /**
   * JSON schema or text fully describing the desired output from the task. Descriptions of output
   * fields will determine the form and content of the response. A bare string is equivalent to a
   * text schema with the same description.
   */
  outputSchema: OutputSchema1;
  /**
   * Optional JSON schema or text description of expected input to the task. A bare string is
   * equivalent to a text schema with the same description.
   */
  inputSchema?: InputSchema;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskSpecSchema: Schema<TaskSpec> = s.object<TaskSpec>(
  {
    outputSchema: outputSchema1Schema,
    inputSchema: s.optional(s.lazy(() => inputSchemaSchema)),
    _keysMap: {
      outputSchema: "output_schema",
      inputSchema: "input_schema",
    },
  },
  { additionalProperties: s.json() },
);
