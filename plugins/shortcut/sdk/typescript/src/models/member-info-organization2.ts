import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MemberInfoOrganization2 = {
  id: string;
};

export const memberInfoOrganization2Schema: Schema<MemberInfoOrganization2> =
  s.object<MemberInfoOrganization2>({
    id: s.string(),
  });
