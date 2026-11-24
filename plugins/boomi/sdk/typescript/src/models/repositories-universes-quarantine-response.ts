import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quarantineEntrySchema, type QuarantineEntry } from "./quarantine-entry.js";

export type RepositoriesUniversesQuarantineResponse = {
  records?: QuarantineEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoriesUniversesQuarantineResponseSchema: Schema<RepositoriesUniversesQuarantineResponse> =
  s.object<RepositoriesUniversesQuarantineResponse>(
    {
      records: s.optional(s.array(s.lazy(() => quarantineEntrySchema))),
    },
    { additionalProperties: s.json() },
  );
