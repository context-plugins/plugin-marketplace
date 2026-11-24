import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RotateWebhookSecretResponse = {
  /**
   * The newly minted org-scoped signing secret. Returned exactly once — store it now; subsequent
   * reads will not return it.
   */
  signingSecret: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rotateWebhookSecretResponseSchema: Schema<RotateWebhookSecretResponse> =
  s.object<RotateWebhookSecretResponse>(
    {
      signingSecret: s.string(),
    },
    { additionalProperties: s.json() },
  );
