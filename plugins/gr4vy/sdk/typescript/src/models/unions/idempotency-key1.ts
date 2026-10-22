import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A unique key forwarded to the gift card service to make the issuance idempotent. */
export type IdempotencyKey1 = string;

export const idempotencyKey1Schema: Schema<IdempotencyKey1> = s.of<IdempotencyKey1>(s.union([s.string()]));
