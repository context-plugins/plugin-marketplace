import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** How long to wait before retrying */
export type RetryInterval = string;

export const retryIntervalSchema: Schema<RetryInterval> = s.of<RetryInterval>(s.union([s.string()]));
