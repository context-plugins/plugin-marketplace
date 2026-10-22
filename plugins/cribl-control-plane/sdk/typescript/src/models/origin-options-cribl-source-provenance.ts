import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Feature that created the Source. */
export const OriginOptionsCriblSourceProvenance = {
  DataSourceDiscovery: "data_source_discovery",
} as const;
export type OriginOptionsCriblSourceProvenance =
  | (typeof OriginOptionsCriblSourceProvenance)[keyof typeof OriginOptionsCriblSourceProvenance]
  | (string & {});

export const originOptionsCriblSourceProvenanceSchema: EnumSchema<OriginOptionsCriblSourceProvenance> =
  s.enumOf<OriginOptionsCriblSourceProvenance>(OriginOptionsCriblSourceProvenance);
