import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeBundleSocialAutomationApi = {
  CommentCreated: "COMMENT_CREATED",
  DmReceived: "DM_RECEIVED",
  QuickReplyClicked: "QUICK_REPLY_CLICKED",
  ButtonClicked: "BUTTON_CLICKED",
  ManualTest: "MANUAL_TEST",
} as const;
export type TypeBundleSocialAutomationApi =
  | (typeof TypeBundleSocialAutomationApi)[keyof typeof TypeBundleSocialAutomationApi]
  | (string & {});

export const typeBundleSocialAutomationApiSchema: EnumSchema<TypeBundleSocialAutomationApi> =
  s.enumOf<TypeBundleSocialAutomationApi>(TypeBundleSocialAutomationApi);
