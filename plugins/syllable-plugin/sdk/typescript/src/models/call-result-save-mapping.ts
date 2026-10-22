import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fromSchema, type From } from "./unions/from.js";

/**
 * One field-extraction mapping applied to a call action's tool response.
 *
 * Example: {"from": "is_valid", "to": "is_valid"} Example (derived value): {"from": "status ==
 * 'valid'", "to": "is_valid"}
 */
export type CallResultSaveMapping = {
  /**
   * Expression evaluated against the parsed tool response body (the JSON the external tool
   * returned). Supported forms: (1) JMESPath string (default for plain strings) — a bare field name
   * for raw passthrough, or a boolean/computed expression for derived values, (2) typed JMESPath
   * object {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}.
   */
  from: From;
  /** Workflow variable name to store the extracted value under. */
  to: string;
};

export const callResultSaveMappingSchema: Schema<CallResultSaveMapping> = s.object<CallResultSaveMapping>({
  from: fromSchema,
  to: s.string(),
});
