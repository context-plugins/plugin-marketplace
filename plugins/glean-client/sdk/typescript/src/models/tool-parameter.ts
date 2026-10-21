import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type6Schema, type Type6 } from "./type6.js";

export type ToolParameter = {
  /** Parameter type (string, number, boolean, object, array) */
  type?: Type6;
  /** The name of the parameter */
  name?: string;
  /** The description of the parameter */
  description?: string;
  /** Whether the parameter is required */
  isRequired?: boolean;
  /**
   * The possible values for the parameter. Can contain only primitive values or arrays of primitive
   * values.
   */
  possibleValues?: string[];
  items?: ToolParameter;
  /** When type is 'object', this describes the structure of the object. */
  properties?: Record<string, ToolParameter>;
};

export const toolParameterSchema: Schema<ToolParameter> = s.object<ToolParameter>({
  type: s.optional(s.lazy(() => type6Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  isRequired: s.optional(s.boolean()),
  possibleValues: s.optional(s.array(s.string())),
  items: s.optional(s.lazy(() => toolParameterSchema)),
  properties: s.optional(
    s.record(
      s.string(),
      s.lazy(() => toolParameterSchema),
    ),
  ),
});
