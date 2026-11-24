import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AudiencePatchAction = {
  /**
   * An array of values is required for all filters except when the comparator is 'exist' or
   * '!exist'
   */
  values: Record<string, unknown>;
  filterIndex: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audiencePatchActionSchema: Schema<AudiencePatchAction> = s.object<AudiencePatchAction>(
  {
    values: s.record(s.string(), s.unknown()),
    filterIndex: s.string(),
  },
  { additionalProperties: s.json() },
);
