import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { linkSchema, type Link } from "./link.js";

export type ApplicationVersionRep = {
  access?: Access;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** Version of the application version */
  version?: number;
  /**
   * Whether the application version was automatically created, because it was included in a context
   * when a LaunchDarkly SDK evaluated a feature flag, or if the application version was created
   * through the LaunchDarkly UI or REST API.
   */
  autoAdded: boolean;
  creationDate?: number;
  /** The unique identifier of this application version */
  key: string;
  /** The name of this version */
  name: string;
  /**
   * Whether this version is supported. Only applicable if the application <code>kind</code> is
   * <code>mobile</code>.
   */
  supported?: boolean;
};

export const applicationVersionRepSchema: Schema<ApplicationVersionRep> = s.object<ApplicationVersionRep>({
  access: s.optional(s.lazy(() => accessSchema)),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  version: s.optional(s.int()),
  autoAdded: s.boolean(),
  creationDate: s.optional(s.int()),
  key: s.string(),
  name: s.string(),
  supported: s.optional(s.boolean()),
  _keysMap: {
    access: "_access",
    links: "_links",
    version: "_version",
  },
});
