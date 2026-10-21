import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Job run mode. Preview will either return up to N matching results, or will run until capture time
 * T is reached. Discovery will gather the list of files to turn into streaming tasks, without
 * running the data collection job. Full Run will run the collection job.
 */
export const Mode14 = {
  List: "list",
  Preview: "preview",
  Run: "run",
} as const;
export type Mode14 = (typeof Mode14)[keyof typeof Mode14] | (string & {});

export const mode14Schema: EnumSchema<Mode14> = s.enumOf<Mode14>(Mode14);
