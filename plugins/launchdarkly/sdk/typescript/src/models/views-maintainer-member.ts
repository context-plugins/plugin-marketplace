import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewsMaintainerMember = {
  id: string;
  email: string;
  role: string;
  firstName?: string;
  lastName?: string;
};

export const viewsMaintainerMemberSchema: Schema<ViewsMaintainerMember> = s.object<ViewsMaintainerMember>({
  id: s.string(),
  email: s.string(),
  role: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
