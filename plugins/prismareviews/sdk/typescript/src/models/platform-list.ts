import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformInternalSchema, platformSchema, type Platform } from "./platform.js";

export type PlatformList = {
  data: Platform[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const platformListProperties: s.Shape<PlatformList> = {
  data: s.array(s.lazy(() => platformInternalSchema)),
};

export const platformListInternalSchema: Schema<PlatformList> = s.object<PlatformList>(
  platformListProperties,
  { additionalProperties: s.json() },
);

export const platformListSchema: Schema<PlatformList> = s.lazySchema(() =>
  s.object<PlatformList>(
    {
      ...platformListProperties,
      data: s.array(s.lazy(() => platformSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
