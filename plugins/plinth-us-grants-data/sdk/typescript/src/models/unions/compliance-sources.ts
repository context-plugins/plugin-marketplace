import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ComplianceSources = Record<string, unknown>;

export const complianceSourcesSchema: Schema<ComplianceSources> = s.of<ComplianceSources>(
  s.union([s.record(s.string(), s.unknown())]),
);
