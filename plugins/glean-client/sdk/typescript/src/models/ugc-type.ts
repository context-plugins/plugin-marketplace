import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UgcType = {
  AgentType: "AGENT_TYPE",
  AnnouncementsType: "ANNOUNCEMENTS_TYPE",
  AnswersType: "ANSWERS_TYPE",
  ChatsType: "CHATS_TYPE",
  CollectionsType: "COLLECTIONS_TYPE",
  EmailType: "EMAIL_TYPE",
  HtmlCodeType: "HTML_CODE_TYPE",
  ImageType: "IMAGE_TYPE",
  MessageType: "MESSAGE_TYPE",
  PaperType: "PAPER_TYPE",
  PrismViewsType: "PRISM_VIEWS_TYPE",
  PromptTemplatesType: "PROMPT_TEMPLATES_TYPE",
  PinsType: "PINS_TYPE",
  ScribesType: "SCRIBES_TYPE",
  ShortcutsType: "SHORTCUTS_TYPE",
  SkillsType: "SKILLS_TYPE",
  SlideType: "SLIDE_TYPE",
  SpreadsheetType: "SPREADSHEET_TYPE",
  InlineHtmlType: "INLINE_HTML_TYPE",
  PodcastType: "PODCAST_TYPE",
  VideoType: "VIDEO_TYPE",
  WorkflowsType: "WORKFLOWS_TYPE",
} as const;
export type UgcType = (typeof UgcType)[keyof typeof UgcType] | (string & {});

export const ugcTypeSchema: EnumSchema<UgcType> = s.enumOf<UgcType>(UgcType);
