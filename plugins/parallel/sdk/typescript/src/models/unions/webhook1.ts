import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { webhookSchema, type Webhook } from "../webhook.js";

/**
 * Webhook for the FindAll run., Callback URL (webhook endpoint) that will receive an HTTP POST when
 * the run completes. This feature is not available via the Python SDK.
 */
export type Webhook1 = Webhook;

export const webhook1Schema: Schema<Webhook1> = s.of<Webhook1>(s.union([s.lazy(() => webhookSchema)]));
