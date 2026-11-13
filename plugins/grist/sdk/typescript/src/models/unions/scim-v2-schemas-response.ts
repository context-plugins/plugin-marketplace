import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ScimV2SchemasResponse =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Record<string, unknown>[]
  | null;

export const scimV2SchemasResponseSchema: Schema<ScimV2SchemasResponse> = s.of<ScimV2SchemasResponse>(
  s.nullable(
    s.union([
      s.string(),
      s.float64(),
      s.boolean(),
      s.record(s.string(), s.unknown()),
      s.array(s.record(s.string(), s.unknown())),
    ]),
  ),
);
