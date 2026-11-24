import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asanaNamedResourceSchema, type AsanaNamedResource } from "./asana-named-resource.js";

/** A generic list of objects, such as those returned by the typeahead search endpoint. */
export type WorkspacesTypeaheadResponse = {
  data?: AsanaNamedResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesTypeaheadResponseSchema: Schema<WorkspacesTypeaheadResponse> =
  s.object<WorkspacesTypeaheadResponse>(
    {
      data: s.optional(s.array(s.lazy(() => asanaNamedResourceSchema))),
    },
    { additionalProperties: s.json() },
  );
