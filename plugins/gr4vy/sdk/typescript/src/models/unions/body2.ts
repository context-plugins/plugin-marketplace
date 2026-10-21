import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  updateTransactionSessionRequestSchema,
  type UpdateTransactionSessionRequest,
} from "../update-transaction-session-request.js";

export type Body2 = UpdateTransactionSessionRequest;

export const body2Schema: Schema<Body2> = s.of<Body2>(
  s.union([s.lazy(() => updateTransactionSessionRequestSchema)]),
);
