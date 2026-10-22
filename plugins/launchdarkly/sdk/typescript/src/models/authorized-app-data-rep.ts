import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type AuthorizedAppDataRep = {
  links?: Record<string, Link>;
  /** The ID of the authorized application */
  id?: string;
  /** Whether the application is authorized through SCIM */
  isScim?: boolean;
  /** The authorized application name */
  name?: string;
  /** The name of the maintainer for this authorized application */
  maintainerName?: string;
};

export const authorizedAppDataRepSchema: Schema<AuthorizedAppDataRep> = s.object<AuthorizedAppDataRep>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  id: s.optional(s.string()),
  isScim: s.optional(s.boolean()),
  name: s.optional(s.string()),
  maintainerName: s.optional(s.string()),
  _keysMap: {
    links: "_links",
    id: "_id",
  },
});
