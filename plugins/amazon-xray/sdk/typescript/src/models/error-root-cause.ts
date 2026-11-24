import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorRootCauseServiceSchema, type ErrorRootCauseService } from "./error-root-cause-service.js";

export type ErrorRootCause = {
  /**
   * A list of services corresponding to an error. A service identifies a segment and it contains a
   * name, account ID, type, and inferred flag.
   */
  services?: ErrorRootCauseService[];
  /** A flag that denotes that the root cause impacts the trace client. */
  clientImpacting?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorRootCauseSchema: Schema<ErrorRootCause> = s.object<ErrorRootCause>(
  {
    services: s.optional(s.array(s.lazy(() => errorRootCauseServiceSchema))),
    clientImpacting: s.optional(s.boolean()),
    _keysMap: {
      services: "Services",
      clientImpacting: "ClientImpacting",
    },
  },
  { additionalProperties: s.json() },
);
