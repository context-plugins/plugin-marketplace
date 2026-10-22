import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The platform that the Paze session is being created for. Defaults to `web`. */
export const Source = {
  Web: "web",
  Mobile: "mobile",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
