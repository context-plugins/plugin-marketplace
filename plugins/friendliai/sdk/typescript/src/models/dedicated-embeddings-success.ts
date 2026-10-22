import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embeddingObjectSchema, type EmbeddingObject } from "./embedding-object.js";
import { textUsageSchema, type TextUsage } from "./text-usage.js";
import { model25Schema, type Model25 } from "./unions/model25.js";

export type DedicatedEmbeddingsSuccess = {
  /** A unique ID of the embeddings. */
  id: string;
  /** The model to generate the embeddings. For dedicated endpoints, it returns the endpoint ID. */
  model?: Model25;
  /** The object type, which is always set to `list`. @default "list" */
  object?: "list";
  /** A list of embedding objects. */
  data: EmbeddingObject[];
  usage: TextUsage;
  /** The Unix timestamp (in seconds) for when the embeddings were created. */
  created: number;
};

export const dedicatedEmbeddingsSuccessSchema: Schema<DedicatedEmbeddingsSuccess> =
  s.object<DedicatedEmbeddingsSuccess>({
    id: s.string(),
    model: s.optional(s.lazy(() => model25Schema)),
    object: s.defaulted(s.literal("list"), "list"),
    data: s.array(s.lazy(() => embeddingObjectSchema)),
    usage: textUsageSchema,
    created: s.int(),
  });
