import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SrvparserRequest = {
  /** The SRV record string to parse */
  record: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SrvparserRequestSchema: Schema<V1SrvparserRequest> = s.object<V1SrvparserRequest>(
  {
    record: s.string(),
  },
  { additionalProperties: s.json() },
);
