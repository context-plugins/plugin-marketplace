import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A unique key that identifies this request. Providing this header will make this an idempotent
 * request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid
 * collisions.
 */
export type IdempotencyKey2 = string;

export const idempotencyKey2Schema: Schema<IdempotencyKey2> = s.of<IdempotencyKey2>(s.union([s.string()]));
