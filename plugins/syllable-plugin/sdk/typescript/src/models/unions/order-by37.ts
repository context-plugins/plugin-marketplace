import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sessionPropertiesSchema, type SessionProperties } from "../session-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy37 = SessionProperties;

export const orderBy37Schema: Schema<OrderBy37> = s.of<OrderBy37>(
  s.union([s.lazy(() => sessionPropertiesSchema)]),
);
