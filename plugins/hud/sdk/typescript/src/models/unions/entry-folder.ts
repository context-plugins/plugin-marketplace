import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EntryFolder = string;

export const entryFolderSchema: Schema<EntryFolder> = s.of<EntryFolder>(s.union([s.string()]));
