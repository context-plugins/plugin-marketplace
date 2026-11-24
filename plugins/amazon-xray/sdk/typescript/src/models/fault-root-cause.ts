import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faultRootCauseServiceSchema, type FaultRootCauseService } from "./fault-root-cause-service.js";

export type FaultRootCause = {
  /**
   * A list of corresponding services. A service identifies a segment and it contains a name,
   * account ID, type, and inferred flag.
   */
  services?: FaultRootCauseService[];
  /** A flag that denotes that the root cause impacts the trace client. */
  clientImpacting?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faultRootCauseSchema: Schema<FaultRootCause> = s.object<FaultRootCause>(
  {
    services: s.optional(s.array(s.lazy(() => faultRootCauseServiceSchema))),
    clientImpacting: s.optional(s.boolean()),
    _keysMap: {
      services: "Services",
      clientImpacting: "ClientImpacting",
    },
  },
  { additionalProperties: s.json() },
);
