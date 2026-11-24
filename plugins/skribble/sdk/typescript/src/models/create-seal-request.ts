import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSealRequest = {
  /** Base64 encoded bytes of the document. */
  content: string;
  /**
   * Account name of the seal contract that should be used. If your company own more than one seal
   * and the field account_name is not given or empty, then the first given seal for the API user
   * will be used for sealing.
   */
  accountName?: string;
  /** Title of the document. */
  title?: string;
  visualSignature?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSealRequestSchema: Schema<CreateSealRequest> = s.object<CreateSealRequest>(
  {
    content: s.string(),
    accountName: s.optional(s.string()),
    title: s.optional(s.string()),
    visualSignature: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountName: "account_name",
      visualSignature: "visual_signature",
    },
  },
  { additionalProperties: s.json() },
);
