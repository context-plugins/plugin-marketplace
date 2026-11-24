import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoicesGetParametersStatus = {
  Building: "building",
  Draft: "draft",
  Pending: "pending",
  Posted: "posted",
  Voided: "voided",
  Canceled: "canceled",
  Error: "error",
} as const;
export type InvoicesGetParametersStatus =
  | (typeof InvoicesGetParametersStatus)[keyof typeof InvoicesGetParametersStatus]
  | (string & {});

export const invoicesGetParametersStatusSchema: EnumSchema<InvoicesGetParametersStatus> =
  s.enumOf<InvoicesGetParametersStatus>(InvoicesGetParametersStatus);
