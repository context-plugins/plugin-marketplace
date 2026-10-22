import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolMetadataSchema, type ToolMetadata } from "./tool-metadata.js";
import { writeActionParameterSchema, type WriteActionParameter } from "./write-action-parameter.js";

export type ToolInfo = {
  /** The manifest for a tool that can be used to augment Glean Assistant. */
  metadata?: ToolMetadata;
  /** Parameters supported by the tool. */
  parameters?: Record<string, WriteActionParameter>;
};

export const toolInfoSchema: Schema<ToolInfo> = s.object<ToolInfo>({
  metadata: s.optional(s.lazy(() => toolMetadataSchema)),
  parameters: s.optional(
    s.record(
      s.string(),
      s.lazy(() => writeActionParameterSchema),
    ),
  ),
});
