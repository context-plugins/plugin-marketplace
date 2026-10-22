import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { badRequestErrorSchema, type BadRequestError } from "../bad-request-error.js";
import { statusInvalidErrorSchema, type StatusInvalidError } from "../status-invalid-error.js";
import { statusNotAllowedErrorSchema, type StatusNotAllowedError } from "../status-not-allowed-error.js";

export type TransfersResponse2 = BadRequestError | StatusInvalidError | StatusNotAllowedError;

export const transfersResponse2Schema: Schema<TransfersResponse2> = s.of<TransfersResponse2>(
  s.union([
    s.lazy(() => badRequestErrorSchema),
    s.lazy(() => statusInvalidErrorSchema),
    s.lazy(() => statusNotAllowedErrorSchema),
  ]),
);
