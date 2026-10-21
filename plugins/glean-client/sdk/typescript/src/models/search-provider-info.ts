import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchProviderInfo = {
  /** Name of the search provider. */
  name?: string;
  /** URL to the provider's logo. */
  logoUrl?: string;
  /**
   * URL template that can be used to perform the suggested search by replacing the {query}
   * placeholder with the query suggestion.
   */
  searchLinkUrlTemplate?: string;
};

export const searchProviderInfoSchema: Schema<SearchProviderInfo> = s.object<SearchProviderInfo>({
  name: s.optional(s.string()),
  logoUrl: s.optional(s.string()),
  searchLinkUrlTemplate: s.optional(s.string()),
});
