import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import {
  applicationFlagCollectionRepSchema,
  type ApplicationFlagCollectionRep,
} from "./application-flag-collection-rep.js";
import { kindSchema, type Kind } from "./kind.js";
import { linkSchema, type Link } from "./link.js";
import { maintainerRepSchema, type MaintainerRep } from "./maintainer-rep.js";

export type ApplicationRep = {
  flags?: ApplicationFlagCollectionRep;
  access?: Access;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** Version of the application */
  version?: number;
  /**
   * Whether the application was automatically created because it was included in a context when a
   * LaunchDarkly SDK evaluated a feature flag, or was created through the LaunchDarkly UI or REST
   * API.
   */
  autoAdded: boolean;
  creationDate?: number;
  /** The application description */
  description?: string;
  /** The unique identifier of this application */
  key: string;
  /** To distinguish the kind of application */
  kind: Kind;
  maintainer?: MaintainerRep;
  /** The name of the application */
  name: string;
};

export const applicationRepSchema: Schema<ApplicationRep> = s.object<ApplicationRep>({
  flags: s.optional(s.lazy(() => applicationFlagCollectionRepSchema)),
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
  description: s.optional(s.string()),
  key: s.string(),
  kind: kindSchema,
  maintainer: s.optional(s.lazy(() => maintainerRepSchema)),
  name: s.string(),
  _keysMap: {
    access: "_access",
    links: "_links",
    version: "_version",
    maintainer: "_maintainer",
  },
});
