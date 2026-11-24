import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  connectionResponseResourceSchema,
  type ConnectionResponseResource,
} from "./connection-response-resource.js";

/** Object containing details for connections refresh. */
export type ConnectionsRefreshResource = {
  /** Type, always "list". */
  type: string;
  /** Job details data. */
  data: ConnectionResponseResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionsRefreshResourceSchema: Schema<ConnectionsRefreshResource> =
  s.object<ConnectionsRefreshResource>(
    {
      type: s.string(),
      data: s.array(s.lazy(() => connectionResponseResourceSchema)),
    },
    { additionalProperties: s.json() },
  );
