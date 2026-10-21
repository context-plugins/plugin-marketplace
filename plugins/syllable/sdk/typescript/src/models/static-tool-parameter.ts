import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  staticToolParameterType2Schema,
  type StaticToolParameterType2,
} from "./static-tool-parameter-type2.js";
import { defaultSchema, type Default } from "./unions/default.js";
import { description6Schema, type Description6 } from "./unions/description6.js";

/** A parameter for the tool whose value should be set at config time. */
export type StaticToolParameter = {
  /** The name of the parameter - must be unique within the tool. */
  name: string;
  /** The description of the parameter. */
  description?: Description6;
  /** Whether the parameter is required to have a value assigned. */
  required: boolean;
  /** The expected type for the parameter. */
  type: StaticToolParameterType2;
  /**
   * The default value for the parameter. If `type` is string, must be a string. If `type` is int,
   * must be an int. If `type` is boolean, must be a boolean. If `type` is data_source_list, must be
   * a list of strings (data source names).
   */
  default?: Default;
};

export const staticToolParameterSchema: Schema<StaticToolParameter> = s.object<StaticToolParameter>({
  name: s.string(),
  description: s.optional(s.lazy(() => description6Schema)),
  required: s.boolean(),
  type: staticToolParameterType2Schema,
  default: s.optional(s.lazy(() => defaultSchema)),
});
