import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailSettingsDtoSchema, type EmailSettingsDto } from "./email-settings-dto.js";
import { releasedStalenessDtoSchema, type ReleasedStalenessDto } from "./released-staleness-dto.js";
import {
  unmodifiedLongStalenessDtoSchema,
  type UnmodifiedLongStalenessDto,
} from "./unmodified-long-staleness-dto.js";
import {
  unmodifiedShortStalenessDtoSchema,
  type UnmodifiedShortStalenessDto,
} from "./unmodified-short-staleness-dto.js";
import { unusedStalenessDtoSchema, type UnusedStalenessDto } from "./unused-staleness-dto.js";

export type StalenessSettingsDto = {
  enabled: boolean;
  released: ReleasedStalenessDto;
  unmodifiedLong: UnmodifiedLongStalenessDto;
  unmodifiedShort: UnmodifiedShortStalenessDto;
  unused: UnusedStalenessDto;
  email: EmailSettingsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stalenessSettingsDtoSchema: Schema<StalenessSettingsDto> = s.object<StalenessSettingsDto>(
  {
    enabled: s.boolean(),
    released: releasedStalenessDtoSchema,
    unmodifiedLong: unmodifiedLongStalenessDtoSchema,
    unmodifiedShort: unmodifiedShortStalenessDtoSchema,
    unused: unusedStalenessDtoSchema,
    email: emailSettingsDtoSchema,
  },
  { additionalProperties: s.json() },
);
