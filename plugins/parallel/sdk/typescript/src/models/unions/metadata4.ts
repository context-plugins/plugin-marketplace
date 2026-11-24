import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";

/**
 * User-provided metadata stored with the run. Keys and values must be strings with a maximum length
 * of 16 and 512 characters respectively.
 */
export type Metadata4 = Record<string, Metadata1>;

export const metadata4Schema: Schema<Metadata4> = s.of<Metadata4>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => metadata1Schema),
    ),
  ]),
);
