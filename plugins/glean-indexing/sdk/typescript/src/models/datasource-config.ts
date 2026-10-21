import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { canonicalizingRegexTypeSchema, type CanonicalizingRegexType } from "./canonicalizing-regex-type.js";
import { connectorTypeSchema, type ConnectorType } from "./connector-type.js";
import { DatasourceCategory, datasourceCategorySchema } from "./datasource-category.js";
import { hideBuiltInFacetSchema, type HideBuiltInFacet } from "./hide-built-in-facet.js";
import { objectDefinitionSchema, type ObjectDefinition } from "./object-definition.js";
import { quicklinkSchema, type Quicklink } from "./quicklink.js";

/**
 * Structure describing shared config properties of the datasource (including multi-instance
 * support)
 */
export type DatasourceConfig = {
  /** Unique identifier of datasource instance to which this config applies. */
  name: string;
  /**
   * The user-friendly instance label to display. If omitted, falls back to the title-cased `name`.
   */
  displayName?: string;
  /**
   * The type of this datasource. It is an important signal for relevance and must be specified and
   * cannot be UNCATEGORIZED. Please refer to
   * [this](https://developers.glean.com/docs/indexing_api_datasource_category/) for more details.
   *
   * @default DatasourceCategory.Uncategorized
   */
  datasourceCategory?: DatasourceCategory;
  /**
   * Regular expression that matches URLs of documents of the datasource instance. The behavior for
   * multiple matches is non-deterministic. **Note: `urlRegex` is a required field for non-entity
   * datasources, but not required if the datasource is used to push custom entities (ie.
   * datasources where isEntityDatasource is false). Please add a regex as specific as possible to
   * this datasource instance.**
   */
  urlRegex?: string;
  /**
   * The URL to an image to be displayed as an icon for this datasource instance. Must have a
   * transparency mask. SVG are recommended over PNG. Public, scio-authenticated and Base64 encoded
   * data URLs are all valid (but not third-party-authenticated URLs).
   */
  iconUrl?: string;
  /** The list of top-level `objectType`s for the datasource. */
  objectDefinitions?: ObjectDefinition[];
  /** Example text for what to search for in this datasource */
  suggestionText?: string;
  /**
   * The URL of the landing page for this datasource instance. Should point to the most useful page
   * for users, not the company marketing page.
   */
  homeUrl?: string;
  /**
   * This only applies to WEB_CRAWL and BROWSER_CRAWL datasources. Defines the seed URLs for
   * crawling.
   */
  crawlerSeedUrls?: string[];
  /**
   * The URL to an image to be displayed as an icon for this datasource instance in dark mode. Must
   * have a transparency mask. SVG are recommended over PNG. Public, scio-authenticated and Base64
   * encoded data URLs are all valid (but not third-party-authenticated URLs).
   */
  iconDarkUrl?: string;
  /** List of built-in facet types that should be hidden for the datasource. */
  hideBuiltInFacets?: HideBuiltInFacet[];
  /**
   * A list of regular expressions to apply to an arbitrary URL to transform it into a canonical URL
   * for this datasource instance. Regexes are to be applied in the order specified in this list.
   */
  canonicalizingUrlRegex?: CanonicalizingRegexType[];
  /**
   * A list of regular expressions to apply to an arbitrary title to transform it into a title that
   * will be displayed in the search results
   */
  canonicalizingTitleRegex?: CanonicalizingRegexType[];
  /** A regex that identifies titles that should not be indexed */
  redlistTitleRegex?: string;
  connectorType?: ConnectorType;
  /**
   * List of actions for this datasource instance that will show up in autocomplete and app card,
   * e.g. "Create new issue" for jira
   */
  quicklinks?: Quicklink[];
  /**
   * The name of a render config to use for displaying results from this datasource. Any well known
   * datasource name may be used to render the same as that source, e.g. `web` or `gdrive`. Please
   * refer to [this](https://developers.glean.com/docs/rendering_search_results/) for more details
   */
  renderConfigPreset?: string;
  /** Aliases that can be used as `app` operator-values. */
  aliases?: string[];
  /** Whether or not this datasource is hosted on-premise. */
  isOnPrem?: boolean;
  /**
   * True if browser activity is able to report the correct URL for VIEW events. Set this to true if
   * the URLs reported by Chrome are constant throughout each page load. Set this to false if the
   * page has Javascript that modifies the URL during or after the load.
   *
   * @default true
   */
  trustUrlRegexForViewActivity?: boolean;
  /**
   * If true, a utm_source query param will be added to outbound links to this datasource within
   * Glean.
   */
  includeUtmSource?: boolean;
  /**
   * If true, the fragment part of the URL will be stripped when converting to a canonical url.
   *
   * @default true
   */
  stripFragmentInCanonicalUrl?: boolean;
  /** The (non-unique) name of the datasource of which this config is an instance, e.g. "jira". */
  datasourceName?: string;
  /** The instance of the datasource for this particular config, e.g. "onprem". */
  instanceOnlyName?: string;
  /**
   * A human readable string identifying this instance as compared to its peers, e.g.
   * "github.com/askscio" or "github.askscio.com"
   */
  instanceDescription?: string;
};

export const datasourceConfigSchema: Schema<DatasourceConfig> = s.object<DatasourceConfig>({
  name: s.string(),
  displayName: s.optional(s.string()),
  datasourceCategory: s.defaulted(datasourceCategorySchema, DatasourceCategory.Uncategorized),
  urlRegex: s.optional(s.string()),
  iconUrl: s.optional(s.string()),
  objectDefinitions: s.optional(s.array(s.lazy(() => objectDefinitionSchema))),
  suggestionText: s.optional(s.string()),
  homeUrl: s.optional(s.string()),
  crawlerSeedUrls: s.optional(s.array(s.string())),
  iconDarkUrl: s.optional(s.string()),
  hideBuiltInFacets: s.optional(s.array(s.lazy(() => hideBuiltInFacetSchema))),
  canonicalizingUrlRegex: s.optional(s.array(s.lazy(() => canonicalizingRegexTypeSchema))),
  canonicalizingTitleRegex: s.optional(s.array(s.lazy(() => canonicalizingRegexTypeSchema))),
  redlistTitleRegex: s.optional(s.string()),
  connectorType: s.optional(s.lazy(() => connectorTypeSchema)),
  quicklinks: s.optional(s.array(s.lazy(() => quicklinkSchema))),
  renderConfigPreset: s.optional(s.string()),
  aliases: s.optional(s.array(s.string())),
  isOnPrem: s.optional(s.boolean()),
  trustUrlRegexForViewActivity: s.defaulted(s.boolean(), true),
  includeUtmSource: s.optional(s.boolean()),
  stripFragmentInCanonicalUrl: s.defaulted(s.boolean(), true),
  datasourceName: s.optional(s.string()),
  instanceOnlyName: s.optional(s.string()),
  instanceDescription: s.optional(s.string()),
  _keysMap: {
    canonicalizingUrlRegex: "canonicalizingURLRegex",
  },
});
