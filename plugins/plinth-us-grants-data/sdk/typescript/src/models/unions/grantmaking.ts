import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Grantmaking = Record<string, unknown>;

export const grantmakingSchema: Schema<Grantmaking> = s.of<Grantmaking>(
  s.union([s.record(s.string(), s.unknown())]),
);
