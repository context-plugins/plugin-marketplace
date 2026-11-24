import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MemberName = string;

export const memberNameSchema: Schema<MemberName> = s.of<MemberName>(s.union([s.string()]));
