import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusJuriSignPublicFormsApi = {
  Active: "active",
  Paused: "paused",
  Expired: "expired",
} as const;
export type StatusJuriSignPublicFormsApi =
  | (typeof StatusJuriSignPublicFormsApi)[keyof typeof StatusJuriSignPublicFormsApi]
  | (string & {});

export const statusJuriSignPublicFormsApiSchema: EnumSchema<StatusJuriSignPublicFormsApi> =
  s.enumOf<StatusJuriSignPublicFormsApi>(StatusJuriSignPublicFormsApi);
