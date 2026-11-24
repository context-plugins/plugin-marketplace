import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A session's public share-link state (share modal reads/writes this). */
export type SessionShareInfo = {
  id: string;
  shareToken: string;
  sessionId: string;
  isActive: boolean;
  viewCount: number;
  createdAt: Date;
  shareUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionShareInfoSchema: Schema<SessionShareInfo> = s.object<SessionShareInfo>(
  {
    id: s.string(),
    shareToken: s.string(),
    sessionId: s.string(),
    isActive: s.boolean(),
    viewCount: s.int(),
    createdAt: s.dateTime(),
    shareUrl: s.string(),
  },
  { additionalProperties: s.json() },
);
