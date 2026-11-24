import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { audience1InternalSchema, audience1Schema, type Audience1 } from "./unions/audience1.js";

export type ApiV1ReportsShareRequest = {
  audience: Audience1[];
  capability?: Capability;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsShareRequestProperties: s.Shape<ApiV1ReportsShareRequest> = {
  audience: s.array(s.lazy(() => audience1InternalSchema)),
  capability: s.optional(s.lazy(() => capabilitySchema)),
};

export const apiV1ReportsShareRequestInternalSchema: Schema<ApiV1ReportsShareRequest> =
  s.object<ApiV1ReportsShareRequest>(apiV1ReportsShareRequestProperties, { additionalProperties: s.json() });

export const apiV1ReportsShareRequestSchema: Schema<ApiV1ReportsShareRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportsShareRequest>(
    {
      ...apiV1ReportsShareRequestProperties,
      audience: s.array(s.lazy(() => audience1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
