import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { revokedInternalSchema, revokedSchema, type Revoked } from "./revoked.js";

export type ApiV1ReportsShareResponse1 = {
  revoked: Revoked[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsShareResponse1Properties: s.Shape<ApiV1ReportsShareResponse1> = {
  revoked: s.array(s.lazy(() => revokedInternalSchema)),
};

export const apiV1ReportsShareResponse1InternalSchema: Schema<ApiV1ReportsShareResponse1> =
  s.object<ApiV1ReportsShareResponse1>(apiV1ReportsShareResponse1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportsShareResponse1Schema: Schema<ApiV1ReportsShareResponse1> = s.lazySchema(() =>
  s.object<ApiV1ReportsShareResponse1>(
    {
      ...apiV1ReportsShareResponse1Properties,
      revoked: s.array(s.lazy(() => revokedSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
