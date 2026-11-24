import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SpecContentType1 = {
  SpecContentTypeUnspecified: "SPEC_CONTENT_TYPE_UNSPECIFIED",
  BoostedSpecContent: "BOOSTED_SPEC_CONTENT",
  GatewayOpenApiSpec: "GATEWAY_OPEN_API_SPEC",
} as const;
export type SpecContentType1 = (typeof SpecContentType1)[keyof typeof SpecContentType1] | (string & {});

export const specContentType1Schema: EnumSchema<SpecContentType1> =
  s.enumOf<SpecContentType1>(SpecContentType1);
