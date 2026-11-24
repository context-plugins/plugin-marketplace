import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the Send-To request */
export const StatusSkribbleSendToApi = {
  Unclaimed: "UNCLAIMED",
  Expired: "EXPIRED",
  Claimed: "CLAIMED",
  Signing: "SIGNING",
  Signed: "SIGNED",
  Withdrawn: "WITHDRAWN",
  Declined: "DECLINED",
} as const;
export type StatusSkribbleSendToApi =
  | (typeof StatusSkribbleSendToApi)[keyof typeof StatusSkribbleSendToApi]
  | (string & {});

export const statusSkribbleSendToApiSchema: EnumSchema<StatusSkribbleSendToApi> =
  s.enumOf<StatusSkribbleSendToApi>(StatusSkribbleSendToApi);
