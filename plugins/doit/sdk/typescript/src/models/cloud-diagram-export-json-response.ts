import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudDiagramAttachmentSchema, type CloudDiagramAttachment } from "./cloud-diagram-attachment.js";
import { cloudDiagramCombinerSchema, type CloudDiagramCombiner } from "./cloud-diagram-combiner.js";
import { cloudDiagramElementSchema, type CloudDiagramElement } from "./cloud-diagram-element.js";
import {
  cloudDiagramExportJsonMetadataSchema,
  type CloudDiagramExportJsonMetadata,
} from "./cloud-diagram-export-json-metadata.js";
import { cloudDiagramGroupSchema, type CloudDiagramGroup } from "./cloud-diagram-group.js";
import { cloudDiagramLinkSchema, type CloudDiagramLink } from "./cloud-diagram-link.js";
import { cloudDiagramNodeSchema, type CloudDiagramNode } from "./cloud-diagram-node.js";
import { cloudDiagramNoteSchema, type CloudDiagramNote } from "./cloud-diagram-note.js";

/** Full diagram export as a structured JSON document. */
export type CloudDiagramExportJsonResponse = {
  /** Diagram-level metadata (excluding internal IDs). */
  statussheet?: Record<string, unknown>;
  /** Metadata included in a diagram JSON export. */
  metadata: CloudDiagramExportJsonMetadata;
  /** Exported nodes. */
  nodes?: CloudDiagramNode[];
  /** Exported elements. */
  elements?: CloudDiagramElement[];
  /** Exported groups. */
  groups?: CloudDiagramGroup[];
  /** Exported attachments. */
  attachments?: CloudDiagramAttachment[];
  /** Exported links. */
  links?: CloudDiagramLink[];
  /** Exported combiners. */
  combiners?: CloudDiagramCombiner[];
  /** Exported notes. */
  notes?: CloudDiagramNote[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramExportJsonResponseSchema: Schema<CloudDiagramExportJsonResponse> =
  s.object<CloudDiagramExportJsonResponse>(
    {
      statussheet: s.optional(s.record(s.string(), s.unknown())),
      metadata: cloudDiagramExportJsonMetadataSchema,
      nodes: s.optional(s.array(s.lazy(() => cloudDiagramNodeSchema))),
      elements: s.optional(s.array(s.lazy(() => cloudDiagramElementSchema))),
      groups: s.optional(s.array(s.lazy(() => cloudDiagramGroupSchema))),
      attachments: s.optional(s.array(s.lazy(() => cloudDiagramAttachmentSchema))),
      links: s.optional(s.array(s.lazy(() => cloudDiagramLinkSchema))),
      combiners: s.optional(s.array(s.lazy(() => cloudDiagramCombinerSchema))),
      notes: s.optional(s.array(s.lazy(() => cloudDiagramNoteSchema))),
    },
    { additionalProperties: s.json() },
  );
