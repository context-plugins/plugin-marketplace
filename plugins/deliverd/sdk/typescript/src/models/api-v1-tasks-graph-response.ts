import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rootSchema, type Root } from "./root.js";

export type ApiV1TasksGraphResponse = {
  root: Root;
  nodes: Record<string, unknown>[];
  links: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TasksGraphResponseSchema: Schema<ApiV1TasksGraphResponse> =
  s.object<ApiV1TasksGraphResponse>(
    {
      root: rootSchema,
      nodes: s.array(s.record(s.string(), s.unknown())),
      links: s.array(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
