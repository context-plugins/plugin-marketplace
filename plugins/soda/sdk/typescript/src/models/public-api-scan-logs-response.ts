import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logsContentDtoSchema, type LogsContentDto } from "./logs-content-dto.js";

export type PublicApiScanLogsResponse = {
  content: LogsContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiScanLogsResponseSchema: Schema<PublicApiScanLogsResponse> =
  s.object<PublicApiScanLogsResponse>(
    {
      content: s.array(s.lazy(() => logsContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
