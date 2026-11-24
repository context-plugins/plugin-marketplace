import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Branch = string;

export const branchSchema: Schema<Branch> = s.of<Branch>(s.union([s.string()]));
