import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logLevelDtoSchema, type LogLevelDto } from "./log-level-dto.js";

export type LogsContentDto = {
  index: number;
  level: LogLevelDto;
  message: string;
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logsContentDtoSchema: Schema<LogsContentDto> = s.object<LogsContentDto>(
  {
    index: s.int(),
    level: logLevelDtoSchema,
    message: s.string(),
    timestamp: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
