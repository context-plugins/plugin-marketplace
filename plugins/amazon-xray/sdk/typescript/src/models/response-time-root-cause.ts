import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responseTimeRootCauseServiceSchema,
  type ResponseTimeRootCauseService,
} from "./response-time-root-cause-service.js";

export type ResponseTimeRootCause = {
  /**
   * A list of corresponding services. A service identifies a segment and contains a name, account
   * ID, type, and inferred flag.
   */
  services?: ResponseTimeRootCauseService[];
  /** A flag that denotes that the root cause impacts the trace client. */
  clientImpacting?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseTimeRootCauseSchema: Schema<ResponseTimeRootCause> = s.object<ResponseTimeRootCause>(
  {
    services: s.optional(s.array(s.lazy(() => responseTimeRootCauseServiceSchema))),
    clientImpacting: s.optional(s.boolean()),
    _keysMap: {
      services: "Services",
      clientImpacting: "ClientImpacting",
    },
  },
  { additionalProperties: s.json() },
);
