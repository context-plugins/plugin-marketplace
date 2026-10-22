import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Minimal identity reference for a node in the knowledge graph. */
export type KnowledgeGraphNodeRefSchema = {
  /**
   * Node identifier. Pass it back as `nodeId` to open this node. When `is_record` is true it is
   * also the Record ID accepted by GET /connectors/record/{recordId}/content.
   */
  id: string;
  name: string;
  /** One of `app`, `recordGroup`, `folder`, `record`. */
  nodeType: string;
  /** e.g. `TICKET`, `CONFLUENCE_PAGE`, `PROJECT`, `COLLECTION`. */
  subType: string | null;
  /**
   * True for record and folder nodes — the nodes whose content can be read via GET
   * /connectors/record/{recordId}/content.
   */
  isRecord: boolean;
};

export const knowledgeGraphNodeRefSchemaSchema: Schema<KnowledgeGraphNodeRefSchema> =
  s.object<KnowledgeGraphNodeRefSchema>({
    id: s.string(),
    name: s.string(),
    nodeType: s.string(),
    subType: s.nullable(s.string()),
    isRecord: s.boolean(),
    _keysMap: {
      nodeType: "node_type",
      subType: "sub_type",
      isRecord: "is_record",
    },
  });
