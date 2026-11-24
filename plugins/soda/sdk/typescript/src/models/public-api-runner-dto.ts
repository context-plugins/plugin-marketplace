import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiRunnerTypeDtoSchema, type PublicApiRunnerTypeDto } from "./public-api-runner-type-dto.js";
import {
  publicApiRunnerVersionsDtoSchema,
  type PublicApiRunnerVersionsDto,
} from "./public-api-runner-versions-dto.js";

export type PublicApiRunnerDto = {
  id?: string;
  isOnline?: boolean;
  label?: string;
  lastSeenTimestamp?: Date;
  name?: string;
  type?: PublicApiRunnerTypeDto;
  versions?: PublicApiRunnerVersionsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRunnerDtoSchema: Schema<PublicApiRunnerDto> = s.object<PublicApiRunnerDto>(
  {
    id: s.optional(s.string()),
    isOnline: s.optional(s.boolean()),
    label: s.optional(s.string()),
    lastSeenTimestamp: s.optional(s.dateTime()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => publicApiRunnerTypeDtoSchema)),
    versions: s.optional(s.lazy(() => publicApiRunnerVersionsDtoSchema)),
  },
  { additionalProperties: s.json() },
);
