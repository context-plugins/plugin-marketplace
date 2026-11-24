import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { labelInternalSchema, labelSchema, type Label } from "../label.js";

export type Label1 = string | Label;

export const label1InternalSchema: Schema<Label1> = s.of<Label1>(
  s.union([s.string(), s.lazy(() => labelInternalSchema)]),
);

export const label1Schema: Schema<Label1> = s.lazySchema(() =>
  s.of<Label1>(s.union([s.string().check(s.minLength(1), s.maxLength(50)), s.lazy(() => labelSchema)])),
);
