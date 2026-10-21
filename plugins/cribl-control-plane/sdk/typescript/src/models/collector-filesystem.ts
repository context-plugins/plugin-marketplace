import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesystemCollectorConf1Schema,
  type FilesystemCollectorConf1,
} from "./filesystem-collector-conf1.js";

/** Filesystem collector configuration */
export type CollectorFilesystem = {
  /** Collector type @default "filesystem" */
  type?: "filesystem";
  /** Collector configuration */
  conf: FilesystemCollectorConf1;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorFilesystemSchema: Schema<CollectorFilesystem> = s.object<CollectorFilesystem>({
  type: s.defaulted(s.literal("filesystem"), "filesystem"),
  conf: filesystemCollectorConf1Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});
