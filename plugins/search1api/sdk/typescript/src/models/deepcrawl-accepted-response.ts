import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeepcrawlAcceptedResponse = {
  taskId: string;
  /** @default "queued" */
  status?: "queued";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deepcrawlAcceptedResponseSchema: Schema<DeepcrawlAcceptedResponse> =
  s.object<DeepcrawlAcceptedResponse>(
    {
      taskId: s.string(),
      status: s.defaulted(s.literal("queued"), "queued"),
    },
    { additionalProperties: s.json() },
  );
