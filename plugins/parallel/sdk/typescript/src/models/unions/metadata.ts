import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";

/** Metadata for the FindAll run., User-provided metadata stored with the task group. */
export type Metadata = Record<string, Metadata1>;

export const metadataSchema: Schema<Metadata> = s.of<Metadata>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => metadata1Schema),
    ),
  ]),
);
