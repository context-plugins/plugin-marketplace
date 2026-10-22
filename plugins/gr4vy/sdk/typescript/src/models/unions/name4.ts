import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Display name associated with the client for presentation purposes. */
export type Name4 = string;

export const name4Schema: Schema<Name4> = s.of<Name4>(s.union([s.string()]));
