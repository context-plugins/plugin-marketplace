import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioSpecificationSchema, type AudioSpecification } from "./audio-specification.js";
import { dtmfSpecificationSchema, type DtmfSpecification } from "./dtmf-specification.js";

export type AudioAndDtmfInputSpecification = {
  /**
   * Time for which a bot waits before assuming that the customer isn't going to speak or press a
   * key. This timeout is shared between Audio and DTMF inputs.
   */
  startTimeoutMs: number;
  audioSpecification?: AudioSpecification;
  dtmfSpecification?: DtmfSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioAndDtmfInputSpecificationSchema: Schema<AudioAndDtmfInputSpecification> =
  s.object<AudioAndDtmfInputSpecification>(
    {
      startTimeoutMs: s.int(),
      audioSpecification: s.optional(s.lazy(() => audioSpecificationSchema)),
      dtmfSpecification: s.optional(s.lazy(() => dtmfSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
