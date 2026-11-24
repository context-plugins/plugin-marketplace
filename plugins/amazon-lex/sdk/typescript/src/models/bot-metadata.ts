import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type BotMetadata = {
  /** The name of the bot. */
  name?: string;
  /** A description of the bot. */
  description?: string;
  /** The status of the bot. */
  status?: Status;
  /**
   * The date that the bot was updated. When you create a bot, the creation date and last updated
   * date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the bot was created. */
  createdDate?: Date;
  /** The version of the bot. For a new bot, the version is always $LATEST. */
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botMetadataSchema: Schema<BotMetadata> = s.object<BotMetadata>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    version: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
