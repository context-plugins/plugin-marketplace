import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumPlatformConnectorsApiInternalSchema,
  datumPlatformConnectorsApiSchema,
  type DatumPlatformConnectorsApi,
} from "./datum-platform-connectors-api.js";
import { links1Schema, type Links1 } from "./links1.js";

/** ConnectorsList contains list of connectors data. */
export type ConnectorsResponse = {
  /** Type identifies response data format */
  type: string;
  /** TotalCount contains total count of connectors */
  totalCount: number;
  /** Data contains list of connectors */
  data: DatumPlatformConnectorsApi[];
  /** ResourceLinks contains resource links */
  links: Links1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const connectorsResponseProperties: s.Shape<ConnectorsResponse> = {
  type: s.string(),
  totalCount: s.int(),
  data: s.array(s.lazy(() => datumPlatformConnectorsApiInternalSchema)),
  links: links1Schema,
};

export const connectorsResponseInternalSchema: Schema<ConnectorsResponse> = s.object<ConnectorsResponse>(
  connectorsResponseProperties,
  { additionalProperties: s.json() },
);

export const connectorsResponseSchema: Schema<ConnectorsResponse> = s.lazySchema(() =>
  s.object<ConnectorsResponse>(
    {
      ...connectorsResponseProperties,
      data: s.array(s.lazy(() => datumPlatformConnectorsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
