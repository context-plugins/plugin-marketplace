import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * OPTIONAL. You can now test your API's directly in the editor or on your published docs with the
 * new API Try It!
 */
export const OpenApiTryIt = {
  True: "true",
  False: "false",
} as const;
export type OpenApiTryIt = (typeof OpenApiTryIt)[keyof typeof OpenApiTryIt] | (string & {});

export const openApiTryItSchema: EnumSchema<OpenApiTryIt> = s.enumOf<OpenApiTryIt>(OpenApiTryIt);
