import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusLushaWebhooksApi = {
  Success: "success",
  Failed: "failed",
  PermanentFailure: "permanent_failure",
} as const;
export type StatusLushaWebhooksApi =
  | (typeof StatusLushaWebhooksApi)[keyof typeof StatusLushaWebhooksApi]
  | (string & {});

export const statusLushaWebhooksApiSchema: EnumSchema<StatusLushaWebhooksApi> =
  s.enumOf<StatusLushaWebhooksApi>(StatusLushaWebhooksApi);
