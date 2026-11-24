import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Content returned for http client or server errors, if any. */
export type ContentParallelAiExtractApi = string;

export const contentParallelAiExtractApiSchema: Schema<ContentParallelAiExtractApi> =
  s.of<ContentParallelAiExtractApi>(s.union([s.string()]));
