import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Request identifier for debugging and support. It may be omitted in some failure paths. */
export type RequestId1 = string;

export const requestId1Schema: Schema<RequestId1> = s.of<RequestId1>(s.union([s.string()]));
