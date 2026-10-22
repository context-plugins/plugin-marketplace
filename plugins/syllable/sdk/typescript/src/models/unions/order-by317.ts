import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { userPropertiesSchema, type UserProperties } from "../user-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy317 = UserProperties;

export const orderBy317Schema: Schema<OrderBy317> = s.of<OrderBy317>(
  s.union([s.lazy(() => userPropertiesSchema)]),
);
