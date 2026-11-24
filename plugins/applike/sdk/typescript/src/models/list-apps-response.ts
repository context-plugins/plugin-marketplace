import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appOutputInternalSchema, appOutputSchema, type AppOutput } from "./app-output.js";

export type ListAppsResponse = {
  results: AppOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listAppsResponseProperties: s.Shape<ListAppsResponse> = {
  results: s.array(s.lazy(() => appOutputInternalSchema)),
};

export const listAppsResponseInternalSchema: Schema<ListAppsResponse> = s.object<ListAppsResponse>(
  listAppsResponseProperties,
  { additionalProperties: s.json() },
);

export const listAppsResponseSchema: Schema<ListAppsResponse> = s.lazySchema(() =>
  s.object<ListAppsResponse>(
    {
      ...listAppsResponseProperties,
      results: s.array(s.lazy(() => appOutputSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
