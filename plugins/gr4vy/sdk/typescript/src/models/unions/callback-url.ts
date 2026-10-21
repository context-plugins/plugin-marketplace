import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The URL for the webhook endpoint you provide for PayPal to send you order update events. */
export type CallbackUrl = string;

export const callbackUrlSchema: Schema<CallbackUrl> = s.of<CallbackUrl>(s.union([s.string()]));
