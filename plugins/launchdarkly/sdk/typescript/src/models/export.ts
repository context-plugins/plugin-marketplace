import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { initiatorRepSchema, type InitiatorRep } from "./initiator-rep.js";
import { linkSchema, type Link } from "./link.js";

export type Export = {
  /** The export ID */
  id: string;
  /** The segment key */
  segmentKey: string;
  creationTime: number;
  /** The export status */
  status: string;
  /** The export size, in bytes */
  sizeBytes: number;
  /** The export size, with units */
  size: string;
  initiator: InitiatorRep;
  /**
   * The location and content type of related resources, including the location of the exported file
   */
  links: Record<string, Link>;
};

export const exportSchema: Schema<Export> = s.object<Export>({
  id: s.string(),
  segmentKey: s.string(),
  creationTime: s.int(),
  status: s.string(),
  sizeBytes: s.int(),
  size: s.string(),
  initiator: initiatorRepSchema,
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
