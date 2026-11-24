import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1UserPropertySchema,
  type Clixexternalv1UserProperty,
} from "./clixexternalv1-user-property.js";

export type ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody = {
  properties?: Clixexternalv1UserProperty[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodySchema: Schema<ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody> =
  s.object<ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody>(
    {
      properties: s.optional(s.array(s.lazy(() => clixexternalv1UserPropertySchema))),
    },
    { additionalProperties: s.json() },
  );
