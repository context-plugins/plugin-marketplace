import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardActivityContentDtoSchema,
  type DataStandardActivityContentDto,
} from "./data-standard-activity-content-dto.js";

export type PublicApiDataStandardsActivityResponse = {
  activity?: DataStandardActivityContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDataStandardsActivityResponseSchema: Schema<PublicApiDataStandardsActivityResponse> =
  s.object<PublicApiDataStandardsActivityResponse>(
    {
      activity: s.optional(s.lazy(() => dataStandardActivityContentDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
