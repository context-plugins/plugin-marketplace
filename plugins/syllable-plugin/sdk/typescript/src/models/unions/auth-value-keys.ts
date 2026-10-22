import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Auth value keys (values omitted for security); only hmac_secret is currently supported */
export type AuthValueKeys = string[];

export const authValueKeysSchema: Schema<AuthValueKeys> = s.of<AuthValueKeys>(s.union([s.array(s.string())]));
