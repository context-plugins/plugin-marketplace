import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredPlatformSchema, type RequiredPlatform } from "./required-platform.js";

export type CreateAppRequest = {
  bundleId: string;
  iconUrl: string;
  /** the name given to this app */
  name: string;
  /** identifier of the platform */
  platform: RequiredPlatform;
  storeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createAppRequestProperties: s.Shape<CreateAppRequest> = {
  bundleId: s.string(),
  iconUrl: s.string(),
  name: s.string(),
  platform: requiredPlatformSchema,
  storeId: s.string(),
};

export const createAppRequestInternalSchema: Schema<CreateAppRequest> = s.object<CreateAppRequest>(
  createAppRequestProperties,
  { additionalProperties: s.json() },
);

export const createAppRequestSchema: Schema<CreateAppRequest> = s.lazySchema(() =>
  s.object<CreateAppRequest>(
    {
      ...createAppRequestProperties,
      bundleId: s.string().check(s.minLength(1)),
      iconUrl: s.string().check(s.minLength(1)),
      name: s.string().check(s.minLength(1)),
      storeId: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
