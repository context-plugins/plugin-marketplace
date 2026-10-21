import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sessionPropertiesSchema, type SessionProperties } from "../session-properties.js";

/** The fields to include in the response */
export type Fields19 = SessionProperties[];

export const fields19Schema: Schema<Fields19> = s.of<Fields19>(
  s.union([s.array(s.lazy(() => sessionPropertiesSchema))]),
);
