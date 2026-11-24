import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureSdkVisibilityDto = {
  mobile: boolean;
  client: boolean;
  server: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureSdkVisibilityDtoSchema: Schema<FeatureSdkVisibilityDto> =
  s.object<FeatureSdkVisibilityDto>(
    {
      mobile: s.boolean(),
      client: s.boolean(),
      server: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
