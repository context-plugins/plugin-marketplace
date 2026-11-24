import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An https link the digest email carries for recipients to stop it. */
export type UnsubscribeUrl1 = string;

export const unsubscribeUrl1Schema: Schema<UnsubscribeUrl1> = s.of<UnsubscribeUrl1>(s.union([s.string()]));
