import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientSecretUpdateRequest = {
  /**
   * The new value of the client secret. Valid characters for a client secret are `A-Z`, `a-z`,
   * `0-9`, `-`, and `_`. The maximum length of a client secret is 86.
   */
  clientSecret: string;
};

export const clientSecretUpdateRequestSchema: Schema<ClientSecretUpdateRequest> =
  s.object<ClientSecretUpdateRequest>({
    clientSecret: s.string(),
  });
