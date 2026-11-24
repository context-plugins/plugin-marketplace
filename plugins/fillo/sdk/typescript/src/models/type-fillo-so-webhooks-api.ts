import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeFilloSoWebhooksApi = {
  None: "none",
  Bearer: "bearer",
  XApiKey: "x-api-key",
} as const;
export type TypeFilloSoWebhooksApi =
  | (typeof TypeFilloSoWebhooksApi)[keyof typeof TypeFilloSoWebhooksApi]
  | (string & {});

export const typeFilloSoWebhooksApiSchema: EnumSchema<TypeFilloSoWebhooksApi> =
  s.enumOf<TypeFilloSoWebhooksApi>(TypeFilloSoWebhooksApi);
