import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Request identifier for debugging and support. */
export type RequestId = string;

export const requestIdSchema: Schema<RequestId> = s.of<RequestId>(s.union([s.string()]));
