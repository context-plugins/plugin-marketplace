import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./format.js";
import { sortingSchema, type Sorting } from "./sorting.js";

export type DocRequest1 = {
  /** markdown, MDX or JSON content used to update the document. */
  content: string;
  /**
   * OPTIONAL. Specify the format of the content. Default is markdown. Use mdx when the content
   * contains JSX-style Archbee components (<hint>, <CtaButton />, <Tabs>); directive-style
   * components (:::hint{type="info"}) work in both markdown and mdx.
   */
  format?: Format;
  /** OPTIONAL, set the name of the document. */
  title?: string;
  /** OPTIONAL, set the description of the document. */
  description?: string;
  /** OPTIONAL, set the preview image URL of the document. */
  previewImgUrl?: string;
  /** OPTIONAL, set the slug (url key) of the document. */
  slug?: string;
  /** OPTIONAL, set the url alias. */
  alias?: string;
  /** OPTIONAL, set the conditional rule id. */
  conditionalRuleId?: string;
  /** OPTIONAL. Specify the type of ordering for document insertion. */
  sorting?: Sorting;
  /** OPTIONAL, set document as hidden or not. */
  hidden?: boolean;
  /** OPTIONAL, document id. If present and valid, the doc will be updated. */
  docId?: string;
  /**
   * OPTIONAL, parent document id. If present and valid, the parent docId will be updated. If sent
   * empty, the document will be moved to the root of the tree.
   */
  parentDocId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docRequest1Schema: Schema<DocRequest1> = s.object<DocRequest1>(
  {
    content: s.string(),
    format: s.optional(s.lazy(() => formatSchema)),
    title: s.optional(s.string()),
    description: s.optional(s.string()),
    previewImgUrl: s.optional(s.string()),
    slug: s.optional(s.string()),
    alias: s.optional(s.string()),
    conditionalRuleId: s.optional(s.string()),
    sorting: s.optional(s.lazy(() => sortingSchema)),
    hidden: s.optional(s.boolean()),
    docId: s.optional(s.string()),
    parentDocId: s.optional(s.string()),
    _keysMap: {
      previewImgUrl: "previewImgURL",
    },
  },
  { additionalProperties: s.json() },
);
