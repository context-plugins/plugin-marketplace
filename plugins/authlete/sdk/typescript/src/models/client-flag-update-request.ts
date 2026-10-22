import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientFlagUpdateRequest = {
  /** The flag value to be set */
  clientLocked: boolean;
};

export const clientFlagUpdateRequestSchema: Schema<ClientFlagUpdateRequest> =
  s.object<ClientFlagUpdateRequest>({
    clientLocked: s.boolean(),
  });
