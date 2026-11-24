import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusHightouchSignupsApi = {
  Subscribed: "subscribed",
  DoiPendingConfirmation: "doi_pending_confirmation",
} as const;
export type StatusHightouchSignupsApi =
  | (typeof StatusHightouchSignupsApi)[keyof typeof StatusHightouchSignupsApi]
  | (string & {});

export const statusHightouchSignupsApiSchema: EnumSchema<StatusHightouchSignupsApi> =
  s.enumOf<StatusHightouchSignupsApi>(StatusHightouchSignupsApi);
