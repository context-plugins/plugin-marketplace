import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDatasourceDiagnosticsWarehouseResponseActionButtonDto = {
  enabled?: boolean;
  title?: string;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasourceDiagnosticsWarehouseResponseActionButtonDtoSchema: Schema<PublicApiDatasourceDiagnosticsWarehouseResponseActionButtonDto> =
  s.object<PublicApiDatasourceDiagnosticsWarehouseResponseActionButtonDto>(
    {
      enabled: s.optional(s.boolean()),
      title: s.optional(s.string()),
      url: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
