import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OrgId = number | string;

export const orgIdSchema: Schema<OrgId> = s.of<OrgId>(s.union([s.int(), s.string()]));
