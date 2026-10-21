import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { contextTaskMetadataSchema, type ContextTaskMetadata } from "../context-task-metadata.js";

export type Metadata = ContextTaskMetadata;

export const metadataSchema: Schema<Metadata> = s.of<Metadata>(
  s.union([s.lazy(() => contextTaskMetadataSchema)]),
);
