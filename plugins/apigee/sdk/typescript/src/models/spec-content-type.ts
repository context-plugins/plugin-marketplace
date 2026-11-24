import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The type of the spec content. */
export const SpecContentType = {
  SpecContentTypeUnspecified: "SPEC_CONTENT_TYPE_UNSPECIFIED",
  BoostedSpecContent: "BOOSTED_SPEC_CONTENT",
  GatewayOpenApiSpec: "GATEWAY_OPEN_API_SPEC",
} as const;
export type SpecContentType = (typeof SpecContentType)[keyof typeof SpecContentType] | (string & {});

export const specContentTypeSchema: EnumSchema<SpecContentType> = s.enumOf<SpecContentType>(SpecContentType);
