import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A connector-specific sync setting. Send its value in `config.sync` under `name`. */
export type ConnectorSyncCustomField = {
  name?: string;
  displayName?: string;
  description?: string;
  fieldType?: string;
  required?: boolean;
  defaultValue?: Record<string, unknown>;
  validation?: Record<string, unknown>;
  isSecret?: boolean;
  nonEditable?: boolean;
  options?: string[];
};

export const connectorSyncCustomFieldSchema: Schema<ConnectorSyncCustomField> =
  s.object<ConnectorSyncCustomField>({
    name: s.optional(s.string()),
    displayName: s.optional(s.string()),
    description: s.optional(s.string()),
    fieldType: s.optional(s.string()),
    required: s.optional(s.boolean()),
    defaultValue: s.optional(s.record(s.string(), s.unknown())),
    validation: s.optional(s.record(s.string(), s.unknown())),
    isSecret: s.optional(s.boolean()),
    nonEditable: s.optional(s.boolean()),
    options: s.optional(s.array(s.string())),
  });
