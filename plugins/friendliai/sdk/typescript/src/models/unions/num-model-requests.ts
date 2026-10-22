import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The count of requests made. */
export type NumModelRequests = number;

export const numModelRequestsSchema: Schema<NumModelRequests> = s.of<NumModelRequests>(s.union([s.int()]));
