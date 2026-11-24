import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responseTimeRootCauseEntitySchema,
  type ResponseTimeRootCauseEntity,
} from "./response-time-root-cause-entity.js";

export type ResponseTimeRootCauseService = {
  /** The service name. */
  name?: string;
  /** A collection of associated service names. */
  names?: string[];
  /** The type associated to the service. */
  type?: string;
  /** The account ID associated to the service. */
  accountId?: string;
  /** The path of root cause entities found on the service. */
  entityPath?: ResponseTimeRootCauseEntity[];
  /** A Boolean value indicating if the service is inferred from the trace. */
  inferred?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseTimeRootCauseServiceSchema: Schema<ResponseTimeRootCauseService> =
  s.object<ResponseTimeRootCauseService>(
    {
      name: s.optional(s.string()),
      names: s.optional(s.array(s.string())),
      type: s.optional(s.string()),
      accountId: s.optional(s.string()),
      entityPath: s.optional(s.array(s.lazy(() => responseTimeRootCauseEntitySchema))),
      inferred: s.optional(s.boolean()),
      _keysMap: {
        name: "Name",
        names: "Names",
        type: "Type",
        accountId: "AccountId",
        entityPath: "EntityPath",
        inferred: "Inferred",
      },
    },
    { additionalProperties: s.json() },
  );
