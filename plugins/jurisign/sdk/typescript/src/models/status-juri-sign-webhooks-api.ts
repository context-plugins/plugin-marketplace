import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusJuriSignWebhooksApi = {
  Success: "success",
  Pending: "pending",
  Failed: "failed",
} as const;
export type StatusJuriSignWebhooksApi =
  | (typeof StatusJuriSignWebhooksApi)[keyof typeof StatusJuriSignWebhooksApi]
  | (string & {});

export const statusJuriSignWebhooksApiSchema: EnumSchema<StatusJuriSignWebhooksApi> =
  s.enumOf<StatusJuriSignWebhooksApi>(StatusJuriSignWebhooksApi);
