import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The base62 encoded buyer ID. This represents a shorter version of this buyer's `id` which is sent
 * to payment services, anti-fraud services, and other connectors. You can use this ID to reconcile
 * a payment service's buyer against our system.
 */
export type ReconciliationId = string;

export const reconciliationIdSchema: Schema<ReconciliationId> = s.of<ReconciliationId>(s.union([s.string()]));
