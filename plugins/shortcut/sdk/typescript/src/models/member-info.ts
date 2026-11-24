import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { basicWorkspaceInfoSchema, type BasicWorkspaceInfo } from "./basic-workspace-info.js";
import { memberInfoOrganization2Schema, type MemberInfoOrganization2 } from "./member-info-organization2.js";

export type MemberInfo = {
  id: string;
  isOwner: boolean;
  mentionName: string;
  name: string;
  role: string;
  workspace2: BasicWorkspaceInfo;
  organization2: MemberInfoOrganization2;
};

export const memberInfoSchema: Schema<MemberInfo> = s.object<MemberInfo>({
  id: s.string(),
  isOwner: s.boolean(),
  mentionName: s.string(),
  name: s.string(),
  role: s.string(),
  workspace2: basicWorkspaceInfoSchema,
  organization2: memberInfoOrganization2Schema,
  _keysMap: {
    isOwner: "is_owner",
    mentionName: "mention_name",
  },
});
