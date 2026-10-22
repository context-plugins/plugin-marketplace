import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The function specification. */
export type AssistantMessageToolCallFunction2 = {
  /** The name of function. */
  name: string;
  /** The arguments of function in JSON schema format to call the function. */
  arguments: string;
};

export const assistantMessageToolCallFunction2Schema: Schema<AssistantMessageToolCallFunction2> =
  s.object<AssistantMessageToolCallFunction2>({
    name: s.string(),
    arguments: s.string(),
  });
