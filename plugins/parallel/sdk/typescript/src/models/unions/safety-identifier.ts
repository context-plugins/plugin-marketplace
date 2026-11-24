import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SafetyIdentifier = string;

export const safetyIdentifierSchema: Schema<SafetyIdentifier> = s.of<SafetyIdentifier>(s.union([s.string()]));
