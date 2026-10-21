import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";

export type ResultsDescription = {
  /**
   * Textual description of the results. Can be shown at the top of SERP, e.g. 'People who write
   * about this topic' for experts in people tab.
   */
  text?: string;
  /** Defines how to render an icon */
  iconConfig?: IconConfig;
};

export const resultsDescriptionSchema: Schema<ResultsDescription> = s.object<ResultsDescription>({
  text: s.optional(s.string()),
  iconConfig: s.optional(s.lazy(() => iconConfigSchema)),
});
