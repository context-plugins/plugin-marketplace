import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Request body for getting layer components. At least one component type must be provided with one
 * or more IDs.
 */
export type CloudDiagramStatussheetGetRequest = {
  /** Node IDs to fetch. */
  node?: string[];
  /** Element IDs to fetch. */
  element?: string[];
  /** Link IDs to fetch. */
  link?: string[];
  /** Group IDs to fetch. */
  group?: string[];
  /** Attachment IDs to fetch. */
  attachment?: string[];
  /** Note IDs to fetch. */
  note?: string[];
  /** Combiner IDs to fetch. */
  combiner?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudDiagramStatussheetGetRequestProperties: s.Shape<CloudDiagramStatussheetGetRequest> = {
  node: s.optional(s.array(s.string())),
  element: s.optional(s.array(s.string())),
  link: s.optional(s.array(s.string())),
  group: s.optional(s.array(s.string())),
  attachment: s.optional(s.array(s.string())),
  note: s.optional(s.array(s.string())),
  combiner: s.optional(s.array(s.string())),
};

export const cloudDiagramStatussheetGetRequestInternalSchema: Schema<CloudDiagramStatussheetGetRequest> =
  s.object<CloudDiagramStatussheetGetRequest>(cloudDiagramStatussheetGetRequestProperties, {
    additionalProperties: s.json(),
  });

export const cloudDiagramStatussheetGetRequestSchema: Schema<CloudDiagramStatussheetGetRequest> =
  s.lazySchema(() =>
    s.object<CloudDiagramStatussheetGetRequest>(
      {
        ...cloudDiagramStatussheetGetRequestProperties,
        node: s.optional(s.array(s.string()).check(s.minLength(1))),
        element: s.optional(s.array(s.string()).check(s.minLength(1))),
        link: s.optional(s.array(s.string()).check(s.minLength(1))),
        group: s.optional(s.array(s.string()).check(s.minLength(1))),
        attachment: s.optional(s.array(s.string()).check(s.minLength(1))),
        note: s.optional(s.array(s.string()).check(s.minLength(1))),
        combiner: s.optional(s.array(s.string()).check(s.minLength(1))),
      },
      { additionalProperties: s.json() },
    ),
  );
