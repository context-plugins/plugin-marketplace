import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Error = string;

export const errorSchema: Schema<Error> = s.of<Error>(s.union([s.string()]));
