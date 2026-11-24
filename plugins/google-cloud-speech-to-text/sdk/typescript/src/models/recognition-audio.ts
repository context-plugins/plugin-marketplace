import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or
 * `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See
 * [content limits](https://cloud.google.com/speech-to-text/quotas#content).
 */
export type RecognitionAudio = {
  /**
   * The audio data bytes encoded as specified in `RecognitionConfig`. Note: as with all bytes
   * fields, proto buffers use a pure binary representation, whereas JSON representations use
   * base64.
   */
  content?: string;
  /**
   * URI that points to a file that contains audio data bytes as specified in `RecognitionConfig`.
   * The file must not be compressed (for example, gzip). Currently, only Google Cloud Storage URIs
   * are supported, which must be specified in the following format: `gs://bucket_name/object_name`
   * (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request
   * URIs](https://cloud.google.com/storage/docs/reference-uris).
   */
  uri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognitionAudioSchema: Schema<RecognitionAudio> = s.object<RecognitionAudio>(
  {
    content: s.optional(s.string()),
    uri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
