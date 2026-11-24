import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1UserPropertySchema,
  type Clixexternalv1UserProperty,
} from "./clixexternalv1-user-property.js";

export type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse = {
  properties?: Clixexternalv1UserProperty[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CreateOrUpdateUsersPropertiesByDeviceIdResponseSchema: Schema<V1CreateOrUpdateUsersPropertiesByDeviceIdResponse> =
  s.object<V1CreateOrUpdateUsersPropertiesByDeviceIdResponse>(
    {
      properties: s.optional(s.array(s.lazy(() => clixexternalv1UserPropertySchema))),
    },
    { additionalProperties: s.json() },
  );
