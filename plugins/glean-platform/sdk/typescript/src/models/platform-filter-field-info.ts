import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformFilterOperatorSchema, type PlatformFilterOperator } from "./platform-filter-operator.js";

export type PlatformFilterFieldInfo = {
  /** Field name usable in the `filters` array for `POST /api/search`. */
  field: string;
  /**
   * Open field-type string. Current values are `STRING` for text and keyword fields and `USER` for
   * people fields (`owner`, `from`, `author`, `assignee`, `reporter`, `mentions`). Clients must
   * tolerate unknown values.
   */
  type: string;
  /**
   * Comparison operators supported for this field. Built-in fields expose `EQUALS` and
   * `NOT_EQUALS`.
   */
  operators: PlatformFilterOperator[];
  /**
   * Suggested filter values observed for the supplied `query`. Omitted in catalog-only responses.
   * Present as an array, including `[]`, when `query` is provided. Values are a bounded,
   * non-exhaustive sample in search-provider order and may include duplicates; blank values are
   * omitted. No additional endpoint-specific truncation is applied. Grouping in the search UI is
   * not preserved; each value applies to the field broadly. An empty array does not mean no valid
   * value exists. Availability varies by data source; federated and MCP integrations may return
   * page-derived values or none at all. Reusing a suggested value in `POST /api/search` does not
   * guarantee matching results or identical filter behavior. For `USER` fields, values may be email
   * addresses or display names.
   */
  values?: string[];
};

export const platformFilterFieldInfoSchema: Schema<PlatformFilterFieldInfo> =
  s.object<PlatformFilterFieldInfo>({
    field: s.string(),
    type: s.string(),
    operators: s.array(s.lazy(() => platformFilterOperatorSchema)),
    values: s.optional(s.array(s.string())),
  });
