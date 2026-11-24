import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destination1Schema, type Destination1 } from "./destination1.js";
import { status1Schema, type Status1 } from "./status1.js";

export type UpdateTraceSegmentDestinationResult = {
  /** The destination of the trace segments. */
  destination?: Destination1;
  /** The status of the update. */
  status?: Status1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTraceSegmentDestinationResultSchema: Schema<UpdateTraceSegmentDestinationResult> =
  s.object<UpdateTraceSegmentDestinationResult>(
    {
      destination: s.optional(s.lazy(() => destination1Schema)),
      status: s.optional(s.lazy(() => status1Schema)),
      _keysMap: {
        destination: "Destination",
        status: "Status",
      },
    },
    { additionalProperties: s.json() },
  );
