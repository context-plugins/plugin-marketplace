import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSideAvailabilitySchema, type ClientSideAvailability } from "./client-side-availability.js";
import { customPropertySchema, type CustomProperty } from "./custom-property.js";
import { defaultsSchema, type Defaults } from "./defaults.js";
import { kind8Schema, type Kind8 } from "./kind8.js";
import { linkSchema, type Link } from "./link.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { variationSchema, type Variation } from "./variation.js";

export type ExpandedFlagRep = {
  /** A human-friendly name for the feature flag */
  name: string;
  /** Kind of feature flag */
  kind: Kind8;
  /** Description of the feature flag */
  description?: string;
  /** A unique key used to reference the flag in your code */
  key: string;
  /** Version of the feature flag */
  version: number;
  creationDate: number;
  /**
   * Deprecated, use <code>clientSideAvailability</code>. Whether this flag should be made available
   * to the client-side JavaScript SDK
   *
   * @deprecated
   */
  includeInSnippet?: boolean;
  clientSideAvailability?: ClientSideAvailability;
  /** An array of possible variations for the flag */
  variations: Variation[];
  /** Whether the flag is a temporary flag */
  temporary: boolean;
  /** Tags for the feature flag */
  tags: string[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The ID of the member who maintains the flag */
  maintainerId?: string;
  maintainer?: MemberSummary;
  customProperties: Record<string, CustomProperty>;
  /** Boolean indicating if the feature flag is archived */
  archived: boolean;
  archivedDate?: number;
  defaults?: Defaults;
};

export const expandedFlagRepSchema: Schema<ExpandedFlagRep> = s.object<ExpandedFlagRep>({
  name: s.string(),
  kind: kind8Schema,
  description: s.optional(s.string()),
  key: s.string(),
  version: s.int(),
  creationDate: s.int(),
  includeInSnippet: s.optional(s.boolean()),
  clientSideAvailability: s.optional(s.lazy(() => clientSideAvailabilitySchema)),
  variations: s.array(s.lazy(() => variationSchema)),
  temporary: s.boolean(),
  tags: s.array(s.string()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  maintainerId: s.optional(s.string()),
  maintainer: s.optional(s.lazy(() => memberSummarySchema)),
  customProperties: s.record(
    s.string(),
    s.lazy(() => customPropertySchema),
  ),
  archived: s.boolean(),
  archivedDate: s.optional(s.int()),
  defaults: s.optional(s.lazy(() => defaultsSchema)),
  _keysMap: {
    version: "_version",
    links: "_links",
    maintainer: "_maintainer",
  },
});
