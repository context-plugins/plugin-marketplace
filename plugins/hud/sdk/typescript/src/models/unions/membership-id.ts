import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MembershipId = number;

export const membershipIdSchema: Schema<MembershipId> = s.of<MembershipId>(s.union([s.int()]));
