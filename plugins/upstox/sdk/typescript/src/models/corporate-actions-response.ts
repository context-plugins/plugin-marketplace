import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { corporateActionDataSchema, type CorporateActionData } from "./corporate-action-data.js";
import { statusSchema, type Status } from "./status.js";

export type CorporateActionsResponse = {
  status?: Status;
  data?: CorporateActionData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const corporateActionsResponseSchema: Schema<CorporateActionsResponse> =
  s.object<CorporateActionsResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => corporateActionDataSchema))),
    },
    { additionalProperties: s.json() },
  );
