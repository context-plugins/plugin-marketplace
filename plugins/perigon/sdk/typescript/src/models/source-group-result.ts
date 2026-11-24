import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceGroupDtoSchema, type SourceGroupDto } from "./source-group-dto.js";

/** Single source group response. */
export type SourceGroupResult = {
  /** Named group of news source domains for filtering search and monitors. */
  data: SourceGroupDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceGroupResultSchema: Schema<SourceGroupResult> = s.object<SourceGroupResult>(
  {
    data: sourceGroupDtoSchema,
  },
  { additionalProperties: s.json() },
);
