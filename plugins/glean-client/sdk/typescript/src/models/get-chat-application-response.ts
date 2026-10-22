import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetChatApplicationResponse = {
  application?: Record<string, unknown>;
};

export const getChatApplicationResponseSchema: Schema<GetChatApplicationResponse> =
  s.object<GetChatApplicationResponse>({
    application: s.optional(s.record(s.string(), s.unknown())),
  });
