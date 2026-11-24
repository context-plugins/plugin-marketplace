import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the role of the speaker for each audio channel, either CUSTOMER or AGENT. */
export const ParticipantRole1AmazonTranscribeServiceOperationsApi = {
  Agent: "AGENT",
  Customer: "CUSTOMER",
} as const;
export type ParticipantRole1AmazonTranscribeServiceOperationsApi =
  | (typeof ParticipantRole1AmazonTranscribeServiceOperationsApi)[keyof typeof ParticipantRole1AmazonTranscribeServiceOperationsApi]
  | (string & {});

export const participantRole1AmazonTranscribeServiceOperationsApiSchema: EnumSchema<ParticipantRole1AmazonTranscribeServiceOperationsApi> =
  s.enumOf<ParticipantRole1AmazonTranscribeServiceOperationsApi>(
    ParticipantRole1AmazonTranscribeServiceOperationsApi,
  );
