import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntitlementRequestDto = {
  /** The entitlements to evaluate for the given user and site */
  entitlements: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const entitlementRequestDtoProperties: s.Shape<EntitlementRequestDto> = {
  entitlements: s.array(s.string()),
};

export const entitlementRequestDtoInternalSchema: Schema<EntitlementRequestDto> =
  s.object<EntitlementRequestDto>(entitlementRequestDtoProperties, { additionalProperties: s.json() });

export const entitlementRequestDtoSchema: Schema<EntitlementRequestDto> = s.lazySchema(() =>
  s.object<EntitlementRequestDto>(
    {
      ...entitlementRequestDtoProperties,
      entitlements: s.array(s.string()).check(s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
