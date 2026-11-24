import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { statusSchema, type Status } from "./status.js";

/** Process status */
export type AccessControlRequestResponse = {
  /** Response Status */
  status?: Status;
  data?: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessControlRequestResponseSchema: Schema<AccessControlRequestResponse> =
  s.object<AccessControlRequestResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => dataSchema)),
    },
    { additionalProperties: s.json() },
  );
