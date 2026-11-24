import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entitlementResultDtoSchema, type EntitlementResultDto } from "./entitlement-result-dto.js";

export type EntitlementResponseDto = {
  /** A map of entitlements to the result given a user and site */
  entitlements: Record<string, EntitlementResultDto>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitlementResponseDtoSchema: Schema<EntitlementResponseDto> = s.object<EntitlementResponseDto>(
  {
    entitlements: s.record(
      s.string(),
      s.lazy(() => entitlementResultDtoSchema),
    ),
  },
  { additionalProperties: s.json() },
);
