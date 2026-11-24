import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Style of ApiObservation */
export const Style = {
  StyleUnspecified: "STYLE_UNSPECIFIED",
  Rest: "REST",
  Grpc: "GRPC",
  Graphql: "GRAPHQL",
} as const;
export type Style = (typeof Style)[keyof typeof Style] | (string & {});

export const styleSchema: EnumSchema<Style> = s.enumOf<Style>(Style);
