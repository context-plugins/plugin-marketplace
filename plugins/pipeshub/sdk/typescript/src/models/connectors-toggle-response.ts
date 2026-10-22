import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsToggleResponse = {
  success: boolean;
  message?: string;
};

export const connectorsToggleResponseSchema: Schema<ConnectorsToggleResponse> =
  s.object<ConnectorsToggleResponse>({
    success: s.boolean(),
    message: s.optional(s.string()),
  });
