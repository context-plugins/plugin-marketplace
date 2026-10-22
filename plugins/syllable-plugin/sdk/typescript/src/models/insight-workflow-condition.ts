import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentListSchema, type AgentList } from "./unions/agent-list.js";
import { folderListSchema, type FolderList } from "./unions/folder-list.js";
import { maxDurationSchema, type MaxDuration } from "./unions/max-duration.js";
import { minDurationSchema, type MinDuration } from "./unions/min-duration.js";
import { promptListSchema, type PromptList } from "./unions/prompt-list.js";
import { sampleRateSchema, type SampleRate } from "./unions/sample-rate.js";
import { sheetInfoSchema, type SheetInfo } from "./unions/sheet-info.js";

/** Model for the conditions that trigger an insight workflow. */
export type InsightWorkflowCondition = {
  /** Minimum duration of the calls in seconds */
  minDuration?: MinDuration;
  /** Maximum duration of the calls in seconds */
  maxDuration?: MaxDuration;
  /** Sample rate as a percentage of calls */
  sampleRate?: SampleRate;
  /** List of agents */
  agentList?: AgentList;
  /** List of prompts */
  promptList?: PromptList;
  /** List of folder IDs */
  folderList?: FolderList;
  /** Legacy sheet metadata, retained for viewing retired workflows */
  sheetInfo?: SheetInfo;
};

export const insightWorkflowConditionSchema: Schema<InsightWorkflowCondition> =
  s.object<InsightWorkflowCondition>({
    minDuration: s.optional(s.lazy(() => minDurationSchema)),
    maxDuration: s.optional(s.lazy(() => maxDurationSchema)),
    sampleRate: s.optional(s.lazy(() => sampleRateSchema)),
    agentList: s.optional(s.lazy(() => agentListSchema)),
    promptList: s.optional(s.lazy(() => promptListSchema)),
    folderList: s.optional(s.lazy(() => folderListSchema)),
    sheetInfo: s.optional(s.lazy(() => sheetInfoSchema)),
    _keysMap: {
      minDuration: "min_duration",
      maxDuration: "max_duration",
      sampleRate: "sample_rate",
      agentList: "agent_list",
      promptList: "prompt_list",
      folderList: "folder_list",
      sheetInfo: "sheet_info",
    },
  });
