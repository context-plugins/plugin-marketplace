import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Healthcheck = Record<string, unknown>;

export const healthcheckSchema: Schema<Healthcheck> = s.of<Healthcheck>(
  s.union([s.record(s.string(), s.unknown())]),
);
