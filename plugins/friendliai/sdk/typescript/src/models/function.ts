import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { descriptionSchema, type Description } from "./unions/description.js";

export type Function = {
  /**
   * A description of what the function does, used by the model to choose when and how to call the
   * function.
   */
  description?: Description;
  /**
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and
   * dashes, with a maximum length of 64.
   */
  name: string;
  /**
   * The parameters the functions accepts, described as a JSON Schema object. To represent a
   * function with no parameters, use the value `{"type": "object", "properties": {}}`.
   */
  parameters: Record<string, unknown>;
};

export const functionSchema: Schema<Function> = s.object<Function>({
  description: s.optional(s.lazy(() => descriptionSchema)),
  name: s.string(),
  parameters: s.record(s.string(), s.unknown()),
});
