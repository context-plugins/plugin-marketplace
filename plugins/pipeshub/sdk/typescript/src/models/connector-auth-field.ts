import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** One field of an auth form. Send its value in `config.auth` under `name`. */
export type ConnectorAuthField = {
  name?: string;
  displayName?: string;
  placeholder?: string;
  description?: string;
  /** Input type, for example TEXT, PASSWORD, URL, SELECT, CHECKBOX */
  fieldType?: string;
  required?: boolean;
  usage?: string;
  /** Default value; its type follows `fieldType` */
  defaultValue?: Record<string, unknown>;
  validation?: Record<string, unknown>;
  /** Stored values come back masked */
  isSecret?: boolean;
  options?: Record<string, unknown>[];
};

export const connectorAuthFieldSchema: Schema<ConnectorAuthField> = s.object<ConnectorAuthField>({
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  placeholder: s.optional(s.string()),
  description: s.optional(s.string()),
  fieldType: s.optional(s.string()),
  required: s.optional(s.boolean()),
  usage: s.optional(s.string()),
  defaultValue: s.optional(s.record(s.string(), s.unknown())),
  validation: s.optional(s.record(s.string(), s.unknown())),
  isSecret: s.optional(s.boolean()),
  options: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
