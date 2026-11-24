import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDoiTContractTemplatesApi = {
  Active: "active",
  Archived: "archived",
} as const;
export type StatusDoiTContractTemplatesApi =
  | (typeof StatusDoiTContractTemplatesApi)[keyof typeof StatusDoiTContractTemplatesApi]
  | (string & {});

export const statusDoiTContractTemplatesApiSchema: EnumSchema<StatusDoiTContractTemplatesApi> =
  s.enumOf<StatusDoiTContractTemplatesApi>(StatusDoiTContractTemplatesApi);
