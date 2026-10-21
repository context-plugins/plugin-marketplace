import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { datasourceSchema, type Datasource } from "./datasource.js";
import { directionSchema, type Direction } from "./direction.js";
import { idTypeSchema, type IdType } from "./id-type.js";

export type MessagesRequest = {
  /** Type of the id in the incoming request. */
  idType: IdType;
  /**
   * ID corresponding to the requested idType. Note that channel and threads are represented by the
   * underlying datasource's ID and conversations are represented by their document's ID.
   */
  id: string;
  /** Id for the for the workspace in case of multiple workspaces. */
  workspaceId?: string;
  /**
   * The direction of the results asked with respect to the reference timestamp. Missing field
   * defaults to OLDER. Only applicable when using a message_id.
   */
  direction?: Direction;
  /** Timestamp in millis of the reference message. Only applicable when using a message_id. */
  timestampMillis?: number;
  /** Whether to include root message in response. */
  includeRootMessage?: boolean;
  /** The type of the data source. */
  datasource: Datasource;
  /**
   * The datasource instance display name from which the document was extracted. This is used for
   * appinstance facet filter for datasources that support multiple instances.
   */
  datasourceInstanceDisplayName?: string;
};

export const messagesRequestSchema: Schema<MessagesRequest> = s.object<MessagesRequest>({
  idType: idTypeSchema,
  id: s.string(),
  workspaceId: s.optional(s.string()),
  direction: s.optional(s.lazy(() => directionSchema)),
  timestampMillis: s.optional(s.int()),
  includeRootMessage: s.optional(s.boolean()),
  datasource: datasourceSchema,
  datasourceInstanceDisplayName: s.optional(s.string()),
});
