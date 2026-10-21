import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type ExtinctionCollectionRep = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** An array of extinction events */
  items: Record<string, Record<string, unknown>>;
};

export const extinctionCollectionRepSchema: Schema<ExtinctionCollectionRep> =
  s.object<ExtinctionCollectionRep>({
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    items: s.record(s.string(), s.record(s.string(), s.unknown())),
    _keysMap: {
      links: "_links",
    },
  });
