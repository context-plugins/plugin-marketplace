import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** String value of insight tool result */
export type StringValue = string;

export const stringValueSchema: Schema<StringValue> = s.of<StringValue>(s.union([s.string()]));
