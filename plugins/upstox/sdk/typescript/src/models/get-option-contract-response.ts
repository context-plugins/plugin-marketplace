import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { instrumentDataSchema, type InstrumentData } from "./instrument-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetOptionContractResponse = {
  status?: Status;
  /** Response data for option contracts */
  data?: InstrumentData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getOptionContractResponseSchema: Schema<GetOptionContractResponse> =
  s.object<GetOptionContractResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => instrumentDataSchema))),
    },
    { additionalProperties: s.json() },
  );
