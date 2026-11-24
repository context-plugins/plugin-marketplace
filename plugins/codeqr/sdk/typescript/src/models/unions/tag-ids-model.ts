import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The IDs of the tags to filter the links., The IDs of the tags to filter the QR codes. */
export type TagIdsModel = string | string[];

export const tagIdsModelSchema: Schema<TagIdsModel> = s.of<TagIdsModel>(
  s.union([s.string(), s.array(s.string())]),
);
