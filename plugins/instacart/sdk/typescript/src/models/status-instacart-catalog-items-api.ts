import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the submission. */
export const StatusInstacartCatalogItemsApi = {
  Accepted: "accepted",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusInstacartCatalogItemsApi =
  | (typeof StatusInstacartCatalogItemsApi)[keyof typeof StatusInstacartCatalogItemsApi]
  | (string & {});

export const statusInstacartCatalogItemsApiSchema: EnumSchema<StatusInstacartCatalogItemsApi> =
  s.enumOf<StatusInstacartCatalogItemsApi>(StatusInstacartCatalogItemsApi);
