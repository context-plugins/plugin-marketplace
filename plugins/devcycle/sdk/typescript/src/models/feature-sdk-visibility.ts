import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureSdkVisibility = {
  mobile: boolean;
  client: boolean;
  server: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureSdkVisibilitySchema: Schema<FeatureSdkVisibility> = s.object<FeatureSdkVisibility>(
  {
    mobile: s.boolean(),
    client: s.boolean(),
    server: s.boolean(),
  },
  { additionalProperties: s.json() },
);
