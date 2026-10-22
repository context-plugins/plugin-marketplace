import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Agent-level value for a static parameter on a tool, overriding the tool-level default if one
 * exists.
 */
export type AgentToolFieldDefault = {
  /** The name of the field */
  fieldName: string;
  /** The default value for the field */
  defaultValue: Record<string, unknown>;
};

export const agentToolFieldDefaultSchema: Schema<AgentToolFieldDefault> = s.object<AgentToolFieldDefault>({
  fieldName: s.string(),
  defaultValue: s.record(s.string(), s.unknown()),
  _keysMap: {
    fieldName: "field_name",
    defaultValue: "default_value",
  },
});
