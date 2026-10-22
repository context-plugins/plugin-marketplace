import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optionSourceTypeSchema, type OptionSourceType } from "./option-source-type.js";

export type ConnectorFilterField = {
  /** Filter key: the key in `filters.<sync|indexing>.values` */
  name?: string;
  displayName?: string;
  description?: string;
  filterType?: string;
  category?: string;
  required?: boolean;
  defaultValue?: Record<string, unknown>;
  defaultOperator?: string | null;
  fallbackOperator?: string;
  noImplicitOperatorDefault?: boolean;
  operators?: string[];
  /** `dynamic` options come from GET /connectors/{connectorId}/filters/{filterKey}/options */
  optionSourceType?: OptionSourceType;
  options?: Record<string, unknown>[];
};

export const connectorFilterFieldSchema: Schema<ConnectorFilterField> = s.object<ConnectorFilterField>({
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  description: s.optional(s.string()),
  filterType: s.optional(s.string()),
  category: s.optional(s.string()),
  required: s.optional(s.boolean()),
  defaultValue: s.optional(s.record(s.string(), s.unknown())),
  defaultOperator: s.optionalNullable(s.string()),
  fallbackOperator: s.optional(s.string()),
  noImplicitOperatorDefault: s.optional(s.boolean()),
  operators: s.optional(s.array(s.string())),
  optionSourceType: s.optional(s.lazy(() => optionSourceTypeSchema)),
  options: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
