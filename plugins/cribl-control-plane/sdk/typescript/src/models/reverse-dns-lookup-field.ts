import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReverseDnsLookupField = {
  /**
   * Name of the field containing the IP to look up. If the field value is not in IPv4 or IPv6
   * format, the lookup is skipped.
   */
  inFieldName?: string;
  /** Name of field to add the resolved domain to. Leave blank to overwrite the lookup field. */
  outFieldName?: string;
};

export const reverseDnsLookupFieldSchema: Schema<ReverseDnsLookupField> = s.object<ReverseDnsLookupField>({
  inFieldName: s.optional(s.string()),
  outFieldName: s.optional(s.string()),
});
