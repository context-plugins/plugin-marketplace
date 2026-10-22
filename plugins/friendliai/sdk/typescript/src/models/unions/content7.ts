import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesContentBlockSchema, type ResponsesContentBlock } from "./responses-content-block.js";

/** Text or image input to the model. Can also contain previous assistant responses. */
export type Content7 = string | ResponsesContentBlock[];

export const content7Schema: Schema<Content7> = s.of<Content7>(
  s.union([s.string(), s.array(s.lazy(() => responsesContentBlockSchema))]),
);
