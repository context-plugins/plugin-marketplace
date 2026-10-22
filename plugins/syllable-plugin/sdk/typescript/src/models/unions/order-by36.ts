import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sessionLabelPropertiesSchema, type SessionLabelProperties } from "../session-label-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy36 = SessionLabelProperties;

export const orderBy36Schema: Schema<OrderBy36> = s.of<OrderBy36>(
  s.union([s.lazy(() => sessionLabelPropertiesSchema)]),
);
