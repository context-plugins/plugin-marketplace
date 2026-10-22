import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type TransfersFailureResponse = {
  links?: Record<string, HalLink>;
  code: string;
  description: string;
  explanation?: string;
};

export const transfersFailureResponseSchema: Schema<TransfersFailureResponse> =
  s.object<TransfersFailureResponse>({
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => halLinkSchema),
      ),
    ),
    code: s.string(),
    description: s.string(),
    explanation: s.optional(s.string()),
    _keysMap: {
      links: "_links",
    },
  });
