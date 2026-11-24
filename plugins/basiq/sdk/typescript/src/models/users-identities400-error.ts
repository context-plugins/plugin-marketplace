import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1PlatformEventsApiSchema, type Datum1PlatformEventsApi } from "./datum1-platform-events-api.js";

export type UsersIdentities400Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1PlatformEventsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersIdentities400ErrorSchema: Schema<UsersIdentities400Error> =
  s.object<UsersIdentities400Error>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum1PlatformEventsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
