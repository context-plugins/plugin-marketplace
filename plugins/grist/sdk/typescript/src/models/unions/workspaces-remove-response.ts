import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type WorkspacesRemoveResponse =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Record<string, unknown>[]
  | null;

export const workspacesRemoveResponseSchema: Schema<WorkspacesRemoveResponse> =
  s.of<WorkspacesRemoveResponse>(
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
