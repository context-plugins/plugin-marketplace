import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Used by Friendli Dedicated Endpoints to track which webhook automation triggered an endpoint
 * rollout. If the `idempotencyKey` is provided, the API will check if the endpoint already exists,
 * and rollout the existing endpoint if it does. In such cases, the `projectId` must be provided.
 * Any unique value can be used.
 */
export type IdempotencyKey = string;

export const idempotencyKeySchema: Schema<IdempotencyKey> = s.of<IdempotencyKey>(s.union([s.string()]));
