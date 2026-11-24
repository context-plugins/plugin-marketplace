import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { warningSchema, type Warning } from "./warning.js";

/**
 * Present only when something needs saying: `warnings[]` names any parameter this endpoint does not
 * accept or could not honour, and `unsupported[]` lists the fatal ones. Same shape as the grant
 * endpoints.
 */
export type XPlinthPlinthUsGrantsDataResolveApi = {
  warnings?: Warning[];
  unsupported?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const xPlinthPlinthUsGrantsDataResolveApiSchema: Schema<XPlinthPlinthUsGrantsDataResolveApi> =
  s.object<XPlinthPlinthUsGrantsDataResolveApi>(
    {
      warnings: s.optional(s.array(s.lazy(() => warningSchema))),
      unsupported: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
