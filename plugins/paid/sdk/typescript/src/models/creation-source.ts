import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreationSource = {
  Manual: "manual",
  Api: "api",
  Crm: "crm",
  Other: "other",
} as const;
export type CreationSource = (typeof CreationSource)[keyof typeof CreationSource] | (string & {});

export const creationSourceSchema: EnumSchema<CreationSource> = s.enumOf<CreationSource>(CreationSource);
