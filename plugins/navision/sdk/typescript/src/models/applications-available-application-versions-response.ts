import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { value1Schema, type Value1 } from "./value1.js";

export type ApplicationsAvailableApplicationVersionsResponse = {
  value?: Value1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationsAvailableApplicationVersionsResponseSchema: Schema<ApplicationsAvailableApplicationVersionsResponse> =
  s.object<ApplicationsAvailableApplicationVersionsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => value1Schema))),
    },
    { additionalProperties: s.json() },
  );
