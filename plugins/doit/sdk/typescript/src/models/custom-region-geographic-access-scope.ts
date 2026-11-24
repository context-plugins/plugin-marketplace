import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomRegionGeographicAccessScope = {
  /** Access is limited to one tenant-owned custom region. @default "customRegion" */
  type?: "customRegion";
  /** Ready custom region owned by the authenticated tenant. */
  customRegionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customRegionGeographicAccessScopeProperties: s.Shape<CustomRegionGeographicAccessScope> = {
  type: s.defaulted(s.literal("customRegion"), "customRegion"),
  customRegionId: s.string(),
};

export const customRegionGeographicAccessScopeInternalSchema: Schema<CustomRegionGeographicAccessScope> =
  s.object<CustomRegionGeographicAccessScope>(customRegionGeographicAccessScopeProperties, {
    additionalProperties: s.json(),
  });

export const customRegionGeographicAccessScopeSchema: Schema<CustomRegionGeographicAccessScope> =
  s.lazySchema(() =>
    s.object<CustomRegionGeographicAccessScope>(
      {
        ...customRegionGeographicAccessScopeProperties,
        customRegionId: s.string().check(s.minLength(1), s.maxLength(200)),
      },
      { additionalProperties: s.json() },
    ),
  );
