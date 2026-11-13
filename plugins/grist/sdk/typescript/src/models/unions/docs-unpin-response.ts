import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DocsUnpinResponse =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Record<string, unknown>[]
  | null;

export const docsUnpinResponseSchema: Schema<DocsUnpinResponse> = s.of<DocsUnpinResponse>(
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
