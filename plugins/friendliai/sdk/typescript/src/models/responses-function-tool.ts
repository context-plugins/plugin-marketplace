import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description2Schema, type Description2 } from "./unions/description2.js";
import { strict1Schema, type Strict1 } from "./unions/strict1.js";

export type ResponsesFunctionTool = {
  /** The type of the function tool. Always `function`. @default "function" */
  type?: "function";
  /** The name of the function to call. */
  name: string;
  /** A JSON schema object describing the parameters of the function. */
  parameters: Record<string, unknown>;
  /** Whether to enforce strict parameter validation. Default `true`. */
  strict?: Strict1;
  /**
   * A description of the function. Used by the model to determine whether or not to call the
   * function.
   */
  description?: Description2;
};

export const responsesFunctionToolSchema: Schema<ResponsesFunctionTool> = s.object<ResponsesFunctionTool>({
  type: s.defaulted(s.literal("function"), "function"),
  name: s.string(),
  parameters: s.record(s.string(), s.unknown()),
  strict: s.optional(s.lazy(() => strict1Schema)),
  description: s.optional(s.lazy(() => description2Schema)),
});
