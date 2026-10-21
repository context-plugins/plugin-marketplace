import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single filter option for knowledge hub filters. */
export type FilterOption = {
  /** Filter ID value to send in requests. */
  id: string;
  /** Display label for the filter. */
  label: string;
  /** Additional type information (currently unused, may be null). */
  type?: string | null;
  /** Connector type/name. Set only for entries in the `connectors` list. */
  connectorType?: string | null;
};

export const filterOptionSchema: Schema<FilterOption> = s.object<FilterOption>({
  id: s.string(),
  label: s.string(),
  type: s.optionalNullable(s.string()),
  connectorType: s.optionalNullable(s.string()),
});
