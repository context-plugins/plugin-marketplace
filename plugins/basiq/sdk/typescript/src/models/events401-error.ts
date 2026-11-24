import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum2PlatformConnectorsApiSchema,
  type Datum2PlatformConnectorsApi,
} from "./datum2-platform-connectors-api.js";

export type Events401Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2PlatformConnectorsApi[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const events401ErrorSchema: Schema<Events401Error> = s.object<Events401Error>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum2PlatformConnectorsApiSchema)),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
