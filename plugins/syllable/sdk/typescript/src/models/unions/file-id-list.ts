import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of file IDs to be processed. This is only applicable for upload folders */
export type FileIdList = number[];

export const fileIdListSchema: Schema<FileIdList> = s.of<FileIdList>(s.union([s.array(s.int())]));
