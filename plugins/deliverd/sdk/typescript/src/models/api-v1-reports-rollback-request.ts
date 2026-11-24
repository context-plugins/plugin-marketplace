import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsRollbackRequest = {
  /** Version number to restore */
  version?: number;
  /** Version id, if you have it instead of the number */
  versionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsRollbackRequestProperties: s.Shape<ApiV1ReportsRollbackRequest> = {
  version: s.optional(s.int()),
  versionId: s.optional(s.string()),
};

export const apiV1ReportsRollbackRequestInternalSchema: Schema<ApiV1ReportsRollbackRequest> =
  s.object<ApiV1ReportsRollbackRequest>(apiV1ReportsRollbackRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportsRollbackRequestSchema: Schema<ApiV1ReportsRollbackRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportsRollbackRequest>(
    {
      ...apiV1ReportsRollbackRequestProperties,
      version: s.optional(s.int().check(s.gt(0))),
    },
    { additionalProperties: s.json() },
  ),
);
