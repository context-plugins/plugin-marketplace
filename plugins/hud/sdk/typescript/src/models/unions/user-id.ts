import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UserId = string;

export const userIdSchema: Schema<UserId> = s.of<UserId>(s.union([s.string()]));
