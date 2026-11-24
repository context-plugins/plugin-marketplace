import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A diagram layer (cloud account) matching the search query. */
export type CloudDiagramSchemeSearchItem = {
  /** Layer ID. */
  id: string;
  /** Cloud account name. */
  accountName?: string;
  /** Parent diagram ID. */
  schemeId?: string;
  /** Layer ID (same as _id). */
  ssId?: string;
  /** Parent diagram name. */
  scheme?: string;
  /** Import/sync status. */
  status?: string;
  /** Layer name. */
  name?: string;
  /** Component type — always "statussheet" for this category. @default "statussheet" */
  type?: "statussheet";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramSchemeSearchItemSchema: Schema<CloudDiagramSchemeSearchItem> =
  s.object<CloudDiagramSchemeSearchItem>(
    {
      id: s.string(),
      accountName: s.optional(s.string()),
      schemeId: s.optional(s.string()),
      ssId: s.optional(s.string()),
      scheme: s.optional(s.string()),
      status: s.optional(s.string()),
      name: s.optional(s.string()),
      type: s.defaulted(s.literal("statussheet"), "statussheet"),
      _keysMap: {
        id: "_id",
        accountName: "account_name",
        schemeId: "scheme_id",
        ssId: "ss_id",
      },
    },
    { additionalProperties: s.json() },
  );
