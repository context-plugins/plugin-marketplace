import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextKindRepSchema, type ContextKindRep } from "./context-kind-rep.js";
import { linkSchema, type Link } from "./link.js";

export type ContextKindsCollectionRep = {
  /** An array of context kinds */
  items: ContextKindRep[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const contextKindsCollectionRepSchema: Schema<ContextKindsCollectionRep> =
  s.object<ContextKindsCollectionRep>({
    items: s.array(s.lazy(() => contextKindRepSchema)),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
