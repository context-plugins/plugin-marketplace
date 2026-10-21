import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** This is the response description received from the processor. */
export type AuthResponseCode = string;

export const authResponseCodeSchema: Schema<AuthResponseCode> = s.of<AuthResponseCode>(s.union([s.string()]));
