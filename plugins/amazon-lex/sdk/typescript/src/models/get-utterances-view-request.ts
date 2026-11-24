import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusTypeSchema, type StatusType } from "./status-type.js";

export type GetUtterancesViewRequest = {
  /** The name of the bot for which utterance information should be returned. */
  botName: string;
  /**
   * An array of bot versions for which utterance information should be returned. The limit is 5
   * versions per request.
   */
  botVersions: string[];
  /**
   * To return utterances that were recognized and handled, use Detected. To return utterances that
   * were not recognized, use Missed.
   */
  statusType: StatusType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getUtterancesViewRequestSchema: Schema<GetUtterancesViewRequest> =
  s.object<GetUtterancesViewRequest>(
    {
      botName: s.string(),
      botVersions: s.array(s.string()),
      statusType: statusTypeSchema,
    },
    { additionalProperties: s.json() },
  );
