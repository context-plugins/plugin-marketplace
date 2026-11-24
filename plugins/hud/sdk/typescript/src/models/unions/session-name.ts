import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SessionName = string;

export const sessionNameSchema: Schema<SessionName> = s.of<SessionName>(s.union([s.string()]));
