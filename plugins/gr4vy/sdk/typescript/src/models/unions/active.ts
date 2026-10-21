import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the API key pair is active and can be used to authenticate. */
export type Active = boolean;

export const activeSchema: Schema<Active> = s.of<Active>(s.union([s.boolean()]));
