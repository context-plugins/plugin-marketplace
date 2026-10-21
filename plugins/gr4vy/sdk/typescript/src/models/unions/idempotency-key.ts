import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A unique key that identifies this request. If supported by the gift card service, the value will
 * be forwarded to make the activation idempotent. We recommend using V4 UUIDs, or another random
 * string with enough entropy to avoid collisions.
 */
export type IdempotencyKey = string;

export const idempotencyKeySchema: Schema<IdempotencyKey> = s.of<IdempotencyKey>(s.union([s.string()]));
