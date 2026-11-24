import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type StopProjectVersionResponse = {
  /** The current status of the stop operation. */
  status?: Status3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopProjectVersionResponseSchema: Schema<StopProjectVersionResponse> =
  s.object<StopProjectVersionResponse>(
    {
      status: s.optional(s.lazy(() => status3Schema)),
      _keysMap: {
        status: "Status",
      },
    },
    { additionalProperties: s.json() },
  );
