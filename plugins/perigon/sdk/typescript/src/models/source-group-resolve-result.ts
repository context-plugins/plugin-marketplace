import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceGroupDtoSchema, type SourceGroupDto } from "./source-group-dto.js";

/** Resolved source groups response. */
export type SourceGroupResolveResult = {
  /** Resolved source groups. */
  data: SourceGroupDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceGroupResolveResultSchema: Schema<SourceGroupResolveResult> =
  s.object<SourceGroupResolveResult>(
    {
      data: s.array(s.lazy(() => sourceGroupDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
