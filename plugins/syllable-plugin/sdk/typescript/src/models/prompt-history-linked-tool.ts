import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Record of a tool linked to a previous prompt version in the prompt history. */
export type PromptHistoryLinkedTool = {
  /** ID of the tool */
  toolId: number;
  /**
   * Current name of the tool (may have been different at the time the given version of the prompt
   * was created)
   */
  currentToolName: string;
  /**
   * Whether the tool has changed (not including being deleted) since the given version of the
   * prompt was created
   */
  outOfDate: boolean;
  /** Whether the tool has been deleted since the given version of the prompt was created */
  deleted: boolean;
};

export const promptHistoryLinkedToolSchema: Schema<PromptHistoryLinkedTool> =
  s.object<PromptHistoryLinkedTool>({
    toolId: s.int(),
    currentToolName: s.string(),
    outOfDate: s.boolean(),
    deleted: s.boolean(),
    _keysMap: {
      toolId: "tool_id",
      currentToolName: "current_tool_name",
      outOfDate: "out_of_date",
    },
  });
