import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredPlatformSchema, type RequiredPlatform } from "./required-platform.js";

export type AppOutput = {
  createdAt: Date;
  bundleId: string;
  /** justtrack's internal ID for the app */
  id: number;
  /** the name given to this app */
  name: string;
  /** identifier of the platform */
  platform: RequiredPlatform;
  storeId: string;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const appOutputProperties: s.Shape<AppOutput> = {
  createdAt: s.dateTime(),
  bundleId: s.string(),
  id: s.int(),
  name: s.string(),
  platform: requiredPlatformSchema,
  storeId: s.string(),
  updatedAt: s.dateTime(),
};

export const appOutputInternalSchema: Schema<AppOutput> = s.object<AppOutput>(appOutputProperties, {
  additionalProperties: s.json(),
});

export const appOutputSchema: Schema<AppOutput> = s.lazySchema(() =>
  s.object<AppOutput>(
    {
      ...appOutputProperties,
      bundleId: s.string().check(s.minLength(1)),
      id: s.int().check(s.gte(1)),
      name: s.string().check(s.minLength(1)),
      storeId: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
