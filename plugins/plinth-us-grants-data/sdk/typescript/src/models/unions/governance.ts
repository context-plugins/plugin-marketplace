import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Governance = Record<string, unknown>;

export const governanceSchema: Schema<Governance> = s.of<Governance>(
  s.union([s.record(s.string(), s.unknown())]),
);
