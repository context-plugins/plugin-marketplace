import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type Response1 = {
  prompt?: string;
  value?: Value;
};

export const response1Schema: Schema<Response1> = s.object<Response1>({
  prompt: s.optional(s.string()),
  value: s.optional(s.lazy(() => valueSchema)),
});
