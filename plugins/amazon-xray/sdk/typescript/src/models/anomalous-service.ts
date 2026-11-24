import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceIdSchema, type ServiceId } from "./service-id.js";

export type AnomalousService = {
  serviceId?: ServiceId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalousServiceSchema: Schema<AnomalousService> = s.object<AnomalousService>(
  {
    serviceId: s.optional(s.lazy(() => serviceIdSchema)),
    _keysMap: {
      serviceId: "ServiceId",
    },
  },
  { additionalProperties: s.json() },
);
