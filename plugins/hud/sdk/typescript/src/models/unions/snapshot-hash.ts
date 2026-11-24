import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SnapshotHash = string;

export const snapshotHashSchema: Schema<SnapshotHash> = s.of<SnapshotHash>(s.union([s.string()]));
