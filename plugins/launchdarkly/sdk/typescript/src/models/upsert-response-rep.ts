import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type UpsertResponseRep = {
  /** The status of the create or update operation */
  status?: string;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const upsertResponseRepSchema: Schema<UpsertResponseRep> = s.object<UpsertResponseRep>({
  status: s.optional(s.string()),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  _keysMap: {
    links: "_links",
  },
});
