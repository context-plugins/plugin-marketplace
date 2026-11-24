import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RcaNodeStatusDto = {
  RootCause: "rootCause",
  Affected: "affected",
  Healthy: "healthy",
} as const;
export type RcaNodeStatusDto = (typeof RcaNodeStatusDto)[keyof typeof RcaNodeStatusDto] | (string & {});

export const rcaNodeStatusDtoSchema: EnumSchema<RcaNodeStatusDto> =
  s.enumOf<RcaNodeStatusDto>(RcaNodeStatusDto);
