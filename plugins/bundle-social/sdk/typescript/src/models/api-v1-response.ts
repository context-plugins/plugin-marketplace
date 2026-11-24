import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformsSchema, type Platforms } from "./platforms.js";

export type ApiV1Response = {
  status: string;
  createdAt: string;
  note: string;
  platforms: Platforms;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ResponseSchema: Schema<ApiV1Response> = s.object<ApiV1Response>(
  {
    status: s.string(),
    createdAt: s.string(),
    note: s.string(),
    platforms: platformsSchema,
  },
  { additionalProperties: s.json() },
);
