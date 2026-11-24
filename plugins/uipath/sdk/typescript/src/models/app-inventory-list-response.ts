import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicationSchema, type Application } from "./application.js";

/** Response containing application inventory entries */
export type AppInventoryListResponse = {
  /** Total number of application inventory entries */
  totalCount?: number;
  applications?: Application[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appInventoryListResponseSchema: Schema<AppInventoryListResponse> =
  s.object<AppInventoryListResponse>(
    {
      totalCount: s.optional(s.int()),
      applications: s.optional(s.array(s.lazy(() => applicationSchema))),
    },
    { additionalProperties: s.json() },
  );
