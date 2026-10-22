import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type SubjectDataRep = {
  links?: Record<string, Link>;
  /** The subject's name */
  name?: string;
  /** The subject's avatar */
  avatarUrl?: string;
};

export const subjectDataRepSchema: Schema<SubjectDataRep> = s.object<SubjectDataRep>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  name: s.optional(s.string()),
  avatarUrl: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
