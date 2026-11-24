import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ByokCredentialId = string;

export const byokCredentialIdSchema: Schema<ByokCredentialId> = s.of<ByokCredentialId>(s.union([s.string()]));
