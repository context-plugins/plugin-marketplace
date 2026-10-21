import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { encodingFormat1Schema, type EncodingFormat1 } from "./unions/encoding-format1.js";
import { input3Schema, type Input3 } from "./unions/input3.js";
import { tokens1Schema, type Tokens1 } from "./unions/tokens1.js";

export type DedicatedEmbeddingsBody = {
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /**
   * Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a
   * single request, pass an array of strings or array of token arrays.
   *
   * Either `input` or `tokens` field is required.
   */
  input?: Input3;
  /**
   * The tokenized prompt (i.e., input tokens).
   *
   * Either `input` or `tokens` field is required.
   */
  tokens?: Tokens1;
  /**
   * The format to return the embeddings in. Can be either `float` or
   * [`base64`](https://pypi.org/project/pybase64/).
   */
  encodingFormat?: EncodingFormat1;
};

export const dedicatedEmbeddingsBodySchema: Schema<DedicatedEmbeddingsBody> =
  s.object<DedicatedEmbeddingsBody>({
    model: s.string(),
    input: s.optional(s.lazy(() => input3Schema)),
    tokens: s.optional(s.lazy(() => tokens1Schema)),
    encodingFormat: s.optional(s.lazy(() => encodingFormat1Schema)),
    _keysMap: {
      encodingFormat: "encoding_format",
    },
  });
