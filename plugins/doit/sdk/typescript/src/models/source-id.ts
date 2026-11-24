import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceId = {
  PublicApi: "public-api",
} as const;
export type SourceId = (typeof SourceId)[keyof typeof SourceId] | (string & {});

export const sourceIdSchema: EnumSchema<SourceId> = s.enumOf<SourceId>(SourceId);
