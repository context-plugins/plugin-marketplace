import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addFieldSchema, type AddField } from "./add-field.js";
import { scanningRulesetSchema, type ScanningRuleset } from "./scanning-ruleset.js";

export type FunctionConfSchemaSensitiveDataScanner = {
  /** List of scanning rulesets to apply, each with a ruleset ID and a mitigation expression. */
  rules?: ScanningRuleset[];
  /**
   * Rulesets act on the events contained in these fields. Mitigation expressions apply to the scan
   * results. Supports wildcards (*).
   */
  fields?: string[];
  /** Fields that the mitigation expression will not be applied to. Supports wildcards (*). */
  excludeFields?: string[];
  /** Fields to add when mitigation is applied to an event */
  flags?: AddField[];
  /** Add matching ruleset IDs to a field called "__detected" */
  includeDetectedRules?: boolean;
  /** Run detection in the background without blocking event processing. */
  backgroundDetection?: boolean;
};

export const functionConfSchemaSensitiveDataScannerSchema: Schema<FunctionConfSchemaSensitiveDataScanner> =
  s.object<FunctionConfSchemaSensitiveDataScanner>({
    rules: s.optional(s.array(s.lazy(() => scanningRulesetSchema))),
    fields: s.optional(s.array(s.string())),
    excludeFields: s.optional(s.array(s.string())),
    flags: s.optional(s.array(s.lazy(() => addFieldSchema))),
    includeDetectedRules: s.optional(s.boolean()),
    backgroundDetection: s.optional(s.boolean()),
  });
