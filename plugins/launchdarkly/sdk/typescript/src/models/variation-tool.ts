import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VariationTool = {
  /** The key of the tool to use. */
  key: string;
  /** The version of the tool. */
  version: number;
  /** Custom metadata and configuration for application-level use */
  customParameters?: Record<string, unknown>;
};

export const variationToolSchema: Schema<VariationTool> = s.object<VariationTool>({
  key: s.string(),
  version: s.int(),
  customParameters: s.optional(s.record(s.string(), s.unknown())),
});
