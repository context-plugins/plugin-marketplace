import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NameSource = {
  CopartScn: "copart_scn",
  CopartSn: "copart_sn",
  IaaiProviderName: "iaai_provider_name",
  Unavailable: "unavailable",
} as const;
export type NameSource = (typeof NameSource)[keyof typeof NameSource] | (string & {});

export const nameSourceSchema: EnumSchema<NameSource> = s.enumOf<NameSource>(NameSource);
