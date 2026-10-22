import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Ryft linked sub-account ID, sent as the `Account` header. */
export type SubAccountId = string;

export const subAccountIdSchema: Schema<SubAccountId> = s.of<SubAccountId>(s.union([s.string()]));
