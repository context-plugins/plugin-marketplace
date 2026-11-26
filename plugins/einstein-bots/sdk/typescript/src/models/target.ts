import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Target = {
  /** Type of the transfer target. */
  type: Type;
  /** ID of the transfer target. */
  value: string;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  type: typeSchema,
  value: s.string(),
});
