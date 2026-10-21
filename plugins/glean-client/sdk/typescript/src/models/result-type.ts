import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultType = {
  AdditionalDocument: "ADDITIONAL_DOCUMENT",
  App: "APP",
  BrowserHistory: "BROWSER_HISTORY",
  ChatHistory: "CHAT_HISTORY",
  Datasource: "DATASOURCE",
  Document: "DOCUMENT",
  Entity: "ENTITY",
  Golink: "GOLINK",
  History: "HISTORY",
  NewChat: "NEW_CHAT",
  Operator: "OPERATOR",
  OperatorValue: "OPERATOR_VALUE",
  Quicklink: "QUICKLINK",
  Suggestion: "SUGGESTION",
} as const;
export type ResultType = (typeof ResultType)[keyof typeof ResultType] | (string & {});

export const resultTypeSchema: EnumSchema<ResultType> = s.enumOf<ResultType>(ResultType);
