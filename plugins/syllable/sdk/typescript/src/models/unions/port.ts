import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** SIP endpoint port. */
export type Port = string;

export const portSchema: Schema<Port> = s.of<Port>(s.union([s.string()]));
