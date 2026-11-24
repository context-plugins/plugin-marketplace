import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the URL defined in
 * the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your backend.
 */
export const OpenApiUseOwnBackend = {
  True: "true",
  False: "false",
} as const;
export type OpenApiUseOwnBackend =
  | (typeof OpenApiUseOwnBackend)[keyof typeof OpenApiUseOwnBackend]
  | (string & {});

export const openApiUseOwnBackendSchema: EnumSchema<OpenApiUseOwnBackend> =
  s.enumOf<OpenApiUseOwnBackend>(OpenApiUseOwnBackend);
