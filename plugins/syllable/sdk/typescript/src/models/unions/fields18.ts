import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sessionLabelPropertiesSchema, type SessionLabelProperties } from "../session-label-properties.js";

/** The fields to include in the response */
export type Fields18 = SessionLabelProperties[];

export const fields18Schema: Schema<Fields18> = s.of<Fields18>(
  s.union([s.array(s.lazy(() => sessionLabelPropertiesSchema))]),
);
