import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optInStatusSchema, type OptInStatus } from "./opt-in-status.js";

export type OpsCenterIntegration = {
  /**
   * Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem
   * for each created insight.
   */
  optInStatus?: OptInStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const opsCenterIntegrationSchema: Schema<OpsCenterIntegration> = s.object<OpsCenterIntegration>(
  {
    optInStatus: s.optional(s.lazy(() => optInStatusSchema)),
    _keysMap: {
      optInStatus: "OptInStatus",
    },
  },
  { additionalProperties: s.json() },
);
