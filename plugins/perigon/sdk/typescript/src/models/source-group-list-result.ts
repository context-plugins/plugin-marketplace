import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceGroupDtoSchema, type SourceGroupDto } from "./source-group-dto.js";

/** Paginated list of source groups. */
export type SourceGroupListResult = {
  /** Total number of matching source groups across all pages. */
  total: number;
  /** Source groups returned for the requested page. */
  data: SourceGroupDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceGroupListResultSchema: Schema<SourceGroupListResult> = s.object<SourceGroupListResult>(
  {
    total: s.int(),
    data: s.array(s.lazy(() => sourceGroupDtoSchema)),
  },
  { additionalProperties: s.json() },
);
