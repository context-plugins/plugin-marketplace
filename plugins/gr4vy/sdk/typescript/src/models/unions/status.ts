import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { threeDSecureStatusSchema, type ThreeDSecureStatus } from "../three-dsecure-status.js";

/** The status of the 3DS challenge for this transaction. */
export type Status = ThreeDSecureStatus;

export const statusSchema: Schema<Status> = s.of<Status>(s.union([s.lazy(() => threeDSecureStatusSchema)]));
