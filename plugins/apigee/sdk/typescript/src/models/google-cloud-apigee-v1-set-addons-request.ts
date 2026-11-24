import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AddonsConfig1Schema,
  type GoogleCloudApigeeV1AddonsConfig1,
} from "./google-cloud-apigee-v1-addons-config1.js";

/** Request for SetAddons. */
export type GoogleCloudApigeeV1SetAddonsRequest = {
  /** Required. Add-on configurations. */
  addonsConfig?: GoogleCloudApigeeV1AddonsConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SetAddonsRequestSchema: Schema<GoogleCloudApigeeV1SetAddonsRequest> =
  s.object<GoogleCloudApigeeV1SetAddonsRequest>(
    {
      addonsConfig: s.optional(s.lazy(() => googleCloudApigeeV1AddonsConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
