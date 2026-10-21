import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileRepSchema, type FileRep } from "./file-rep.js";
import { linkSchema, type Link } from "./link.js";
import { status7Schema, type Status7 } from "./status7.js";

export type Import = {
  /** The import ID */
  id: string;
  /** The segment key */
  segmentKey: string;
  creationTime: number;
  /** The import mode used, either <code>merge</code> or <code>replace</code> */
  mode: string;
  /** The import status */
  status: Status7;
  /** The imported files and their status */
  files?: FileRep[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const importSchema: Schema<Import> = s.object<Import>({
  id: s.string(),
  segmentKey: s.string(),
  creationTime: s.int(),
  mode: s.string(),
  status: status7Schema,
  files: s.optional(s.array(s.lazy(() => fileRepSchema))),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
