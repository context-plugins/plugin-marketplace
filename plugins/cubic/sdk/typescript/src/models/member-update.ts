import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expectedRoleSchema, type ExpectedRole } from "./expected-role.js";
import { role3Schema, type Role3 } from "./role3.js";

export type MemberUpdate = {
  /** Desired seat state. Send with expectedSeat. */
  seat?: boolean;
  /** Desired role. Send with expectedRole. */
  role?: Role3;
  /** Current seat state from your latest read; send only with seat. */
  expectedSeat?: boolean;
  /** Current role from your latest read; send only with role. */
  expectedRole?: ExpectedRole;
};

export const memberUpdateSchema: Schema<MemberUpdate> = s.object<MemberUpdate>({
  seat: s.optional(s.boolean()),
  role: s.optional(s.lazy(() => role3Schema)),
  expectedSeat: s.optional(s.boolean()),
  expectedRole: s.optional(s.lazy(() => expectedRoleSchema)),
});
