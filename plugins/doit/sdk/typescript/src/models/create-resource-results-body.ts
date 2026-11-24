import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceResultRequestSchema, type ResourceResultRequest } from "./resource-result-request.js";

/** Request body for creating or replacing resource results for an insight. */
export type CreateResourceResultsBody = {
  /** A list of resource-level results for creating or updating an insight. */
  resourceResults: ResourceResultRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createResourceResultsBodySchema: Schema<CreateResourceResultsBody> =
  s.object<CreateResourceResultsBody>(
    {
      resourceResults: s.array(s.lazy(() => resourceResultRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
