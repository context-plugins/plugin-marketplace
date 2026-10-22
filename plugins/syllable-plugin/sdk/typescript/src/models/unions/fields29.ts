import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { userPropertiesSchema, type UserProperties } from "../user-properties.js";

/** The fields to include in the response */
export type Fields29 = UserProperties[];

export const fields29Schema: Schema<Fields29> = s.of<Fields29>(
  s.union([s.array(s.lazy(() => userPropertiesSchema))]),
);
