import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nodeTypeSchema, type NodeType } from "./node-type.js";
import { propsSchema, type Props } from "./props.js";
import { type4Schema, type Type4 } from "./type4.js";

/** A component matching the search query. */
export type CloudDiagramComponentSearchItem = {
  /** Component ID. */
  id: string;
  /** Cloud account name. */
  accountName?: string;
  /** Component icon identifier. */
  icon?: string;
  /** Component color. */
  color?: string;
  /** Parent diagram ID. */
  schemeId?: string;
  /** Layer ID. */
  ssId?: string;
  /** Component name. */
  name?: string;
  /** Component type. */
  type: Type4;
  /** Node type. */
  nodeType?: NodeType;
  /** Group type (for group components). */
  groupType?: string;
  /**
   * Component properties. For the "prop" category contains the matched property key-value pairs.
   */
  props?: Props;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramComponentSearchItemSchema: Schema<CloudDiagramComponentSearchItem> =
  s.object<CloudDiagramComponentSearchItem>(
    {
      id: s.string(),
      accountName: s.optional(s.string()),
      icon: s.optional(s.string()),
      color: s.optional(s.string()),
      schemeId: s.optional(s.string()),
      ssId: s.optional(s.string()),
      name: s.optional(s.string()),
      type: type4Schema,
      nodeType: s.optional(s.lazy(() => nodeTypeSchema)),
      groupType: s.optional(s.string()),
      props: s.optional(s.lazy(() => propsSchema)),
      _keysMap: {
        id: "_id",
        accountName: "account_name",
        schemeId: "scheme_id",
        ssId: "ss_id",
        nodeType: "node_type",
        groupType: "group_type",
      },
    },
    { additionalProperties: s.json() },
  );
