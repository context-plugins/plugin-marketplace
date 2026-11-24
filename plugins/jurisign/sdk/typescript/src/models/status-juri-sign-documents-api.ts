import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusJuriSignDocumentsApi = {
  Draft: "draft",
  Pending: "pending",
  Completed: "completed",
  Cancelled: "cancelled",
} as const;
export type StatusJuriSignDocumentsApi =
  | (typeof StatusJuriSignDocumentsApi)[keyof typeof StatusJuriSignDocumentsApi]
  | (string & {});

export const statusJuriSignDocumentsApiSchema: EnumSchema<StatusJuriSignDocumentsApi> =
  s.enumOf<StatusJuriSignDocumentsApi>(StatusJuriSignDocumentsApi);
