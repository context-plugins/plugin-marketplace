import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { typeSchema, type Type } from "../type.js";

export type Type1ParallelAiChatApiBetaAndParallelAiExtractApi = Type;

export const type1ParallelAiChatApiBetaAndParallelAiExtractApiSchema: Schema<Type1ParallelAiChatApiBetaAndParallelAiExtractApi> =
  s.of<Type1ParallelAiChatApiBetaAndParallelAiExtractApi>(s.union([s.lazy(() => typeSchema)]));
