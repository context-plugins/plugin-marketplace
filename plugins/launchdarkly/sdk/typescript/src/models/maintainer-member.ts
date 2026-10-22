import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaintainerMember = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
};

export const maintainerMemberSchema: Schema<MaintainerMember> = s.object<MaintainerMember>({
  id: s.string(),
  email: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  role: s.string(),
  _keysMap: {
    id: "_id",
  },
});
