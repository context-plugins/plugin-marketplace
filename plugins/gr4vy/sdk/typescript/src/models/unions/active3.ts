import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Flag to determine whether this subscription should be sent webhook payloads. */
export type Active3 = boolean;

export const active3Schema: Schema<Active3> = s.of<Active3>(s.union([s.boolean()]));
