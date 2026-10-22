import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Twilio US A2P messaging-path configuration snapshot from the last explicit verify; null if never
 * checked.
 */
export type A2PVerified = boolean;

export const a2PVerifiedSchema: Schema<A2PVerified> = s.of<A2PVerified>(s.union([s.boolean()]));
