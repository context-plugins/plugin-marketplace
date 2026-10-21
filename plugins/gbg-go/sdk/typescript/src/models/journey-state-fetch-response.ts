import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextSchema, type Context } from "./context.js";
import { metaDataSchema, type MetaData } from "./meta-data.js";
import { statusSchema, type Status } from "./status.js";

export type JourneyStateFetchResponse = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
  status: Status;
  metaData: MetaData;
  context?: Context;
  data?: Record<string, unknown>;
};

export const journeyStateFetchResponseSchema: Schema<JourneyStateFetchResponse> =
  s.object<JourneyStateFetchResponse>({
    instanceId: s.string(),
    status: statusSchema,
    metaData: metaDataSchema,
    context: s.optional(s.lazy(() => contextSchema)),
    data: s.optional(s.record(s.string(), s.unknown())),
  });
