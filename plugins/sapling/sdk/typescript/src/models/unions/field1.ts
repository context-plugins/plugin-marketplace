import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fieldInternalSchema, fieldSchema, type Field } from "../field.js";

export type Field1 = string | Field;

export const field1InternalSchema: Schema<Field1> = s.of<Field1>(
  s.union([s.string(), s.lazy(() => fieldInternalSchema)]),
);

export const field1Schema: Schema<Field1> = s.lazySchema(() =>
  s.of<Field1>(s.union([s.string().check(s.minLength(1), s.maxLength(50)), s.lazy(() => fieldSchema)])),
);
