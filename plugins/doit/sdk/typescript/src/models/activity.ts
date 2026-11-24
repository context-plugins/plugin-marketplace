import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Activity type. */
export const Activity = {
  NodeCreate: "NODE_CREATE",
  NodeUpdate: "NODE_UPDATE",
  NodeDelete: "NODE_DELETE",
  LinkCreate: "LINK_CREATE",
  LinkUpdate: "LINK_UPDATE",
  LinkDelete: "LINK_DELETE",
  GroupCreate: "GROUP_CREATE",
  GroupUpdate: "GROUP_UPDATE",
  GroupDelete: "GROUP_DELETE",
  AttachmentCreate: "ATTACHMENT_CREATE",
  AttachmentUpdate: "ATTACHMENT_UPDATE",
  AttachmentDelete: "ATTACHMENT_DELETE",
} as const;
export type Activity = (typeof Activity)[keyof typeof Activity] | (string & {});

export const activitySchema: EnumSchema<Activity> = s.enumOf<Activity>(Activity);
