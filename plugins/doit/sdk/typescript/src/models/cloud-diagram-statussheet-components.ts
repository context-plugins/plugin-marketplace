import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudDiagramAttachmentSchema, type CloudDiagramAttachment } from "./cloud-diagram-attachment.js";
import { cloudDiagramCombinerSchema, type CloudDiagramCombiner } from "./cloud-diagram-combiner.js";
import { cloudDiagramElementSchema, type CloudDiagramElement } from "./cloud-diagram-element.js";
import { cloudDiagramGroupSchema, type CloudDiagramGroup } from "./cloud-diagram-group.js";
import { cloudDiagramLinkSchema, type CloudDiagramLink } from "./cloud-diagram-link.js";
import { cloudDiagramNodeSchema, type CloudDiagramNode } from "./cloud-diagram-node.js";
import { cloudDiagramNoteSchema, type CloudDiagramNote } from "./cloud-diagram-note.js";

/** Component collections of a diagram layer, keyed by component ID. */
export type CloudDiagramStatussheetComponents = {
  /** Map of node ID to node component. */
  node?: Record<string, CloudDiagramNode>;
  /** Map of element ID to element component. */
  element?: Record<string, CloudDiagramElement>;
  /** Map of group ID to group component. */
  group?: Record<string, CloudDiagramGroup>;
  /** Map of link ID to link component. */
  link?: Record<string, CloudDiagramLink>;
  /** Map of attachment ID to attachment component. */
  attachment?: Record<string, CloudDiagramAttachment>;
  /** Map of combiner ID to combiner component. */
  combiner?: Record<string, CloudDiagramCombiner>;
  /** Map of note ID to note component. */
  note?: Record<string, CloudDiagramNote>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramStatussheetComponentsSchema: Schema<CloudDiagramStatussheetComponents> =
  s.object<CloudDiagramStatussheetComponents>(
    {
      node: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramNodeSchema),
        ),
      ),
      element: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramElementSchema),
        ),
      ),
      group: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramGroupSchema),
        ),
      ),
      link: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramLinkSchema),
        ),
      ),
      attachment: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramAttachmentSchema),
        ),
      ),
      combiner: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramCombinerSchema),
        ),
      ),
      note: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramNoteSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
