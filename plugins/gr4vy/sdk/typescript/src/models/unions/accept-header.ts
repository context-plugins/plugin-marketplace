import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The Accept header of the request from the buyer's browser. */
export type AcceptHeader = string;

export const acceptHeaderSchema: Schema<AcceptHeader> = s.of<AcceptHeader>(s.union([s.string()]));
