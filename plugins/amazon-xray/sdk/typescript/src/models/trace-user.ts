import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceIdSchema, type ServiceId } from "./service-id.js";

export type TraceUser = {
  /** The user's name. */
  userName?: string;
  /** Services that the user's request hit. */
  serviceIds?: ServiceId[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceUserSchema: Schema<TraceUser> = s.object<TraceUser>(
  {
    userName: s.optional(s.string()),
    serviceIds: s.optional(s.array(s.lazy(() => serviceIdSchema))),
    _keysMap: {
      userName: "UserName",
      serviceIds: "ServiceIds",
    },
  },
  { additionalProperties: s.json() },
);
