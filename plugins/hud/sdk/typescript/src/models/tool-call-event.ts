import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { errorSchema, type Error } from "./unions/error.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { resultDataSchema, type ResultData } from "./unions/result-data.js";
import { resultTextSchema, type ResultText } from "./unions/result-text.js";
import { screenshotUrlSchema, type ScreenshotUrl } from "./unions/screenshot-url.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";
import { toolCallIdSchema, type ToolCallId } from "./unions/tool-call-id.js";
import { toolNameSchema, type ToolName } from "./unions/tool-name.js";

/**
 * A single MCP tool call with its result merged in.
 *
 * Mirrors what FastMCP returns: ``result_data`` preserves ``structuredContent`` when present;
 * otherwise text content is unwrapped into ``result_text`` so renderers don't have to dig.
 */
export type ToolCallEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "tool_call" */
  kind?: "tool_call";
  method: string;
  toolCallId?: ToolCallId;
  toolName?: ToolName;
  arguments?: Record<string, unknown>;
  resultText?: ResultText;
  resultData?: ResultData;
  error?: Error;
  /** @default false */
  isScreenshot?: boolean;
  screenshotUrl?: ScreenshotUrl;
  screenshotUrls?: string[];
};

export const toolCallEventSchema: Schema<ToolCallEvent> = s.object<ToolCallEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("tool_call"), "tool_call"),
  method: s.string(),
  toolCallId: s.optional(s.lazy(() => toolCallIdSchema)),
  toolName: s.optional(s.lazy(() => toolNameSchema)),
  arguments: s.optional(s.record(s.string(), s.unknown())),
  resultText: s.optional(s.lazy(() => resultTextSchema)),
  resultData: s.optional(s.lazy(() => resultDataSchema)),
  error: s.optional(s.lazy(() => errorSchema)),
  isScreenshot: s.defaulted(s.boolean(), false),
  screenshotUrl: s.optional(s.lazy(() => screenshotUrlSchema)),
  screenshotUrls: s.optional(s.array(s.string())),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
    toolCallId: "tool_call_id",
    toolName: "tool_name",
    resultText: "result_text",
    resultData: "result_data",
    isScreenshot: "is_screenshot",
    screenshotUrl: "screenshot_url",
    screenshotUrls: "screenshot_urls",
  },
});
