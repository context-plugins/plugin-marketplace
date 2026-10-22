import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source associated with the Feedback.event.MANUAL_FEEDBACK event. */
export const Source = {
  Autocomplete: "AUTOCOMPLETE",
  Calendar: "CALENDAR",
  Chat: "CHAT",
  ChatGeneral: "CHAT_GENERAL",
  ConceptCard: "CONCEPT_CARD",
  DesktopApp: "DESKTOP_APP",
  DisambiguationCard: "DISAMBIGUATION_CARD",
  ExpertDetection: "EXPERT_DETECTION",
  Feed: "FEED",
  GeneratedQAndA: "GENERATED_Q_AND_A",
  InlineMenu: "INLINE_MENU",
  NativeResult: "NATIVE_RESULT",
  Prism: "PRISM",
  QAndA: "Q_AND_A",
  RelatedQuestions: "RELATED_QUESTIONS",
  ReportIssue: "REPORT_ISSUE",
  Sciobot: "SCIOBOT",
  Search: "SEARCH",
  Sidebar: "SIDEBAR",
  Summary: "SUMMARY",
  Tasks: "TASKS",
  TaskExecution: "TASK_EXECUTION",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
