import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataStandardStatusDto = {
  Draft: "draft",
  Active: "active",
  Paused: "paused",
  Invalid: "invalid",
} as const;
export type DataStandardStatusDto =
  | (typeof DataStandardStatusDto)[keyof typeof DataStandardStatusDto]
  | (string & {});

export const dataStandardStatusDtoSchema: EnumSchema<DataStandardStatusDto> =
  s.enumOf<DataStandardStatusDto>(DataStandardStatusDto);
