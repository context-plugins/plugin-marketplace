import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";
import { typeSchema, type Type } from "./type.js";

export type Auth = {
  type: Type;
  result: Result;
};

export const authSchema: Schema<Auth> = s.object<Auth>({
  type: typeSchema,
  result: resultSchema,
});
