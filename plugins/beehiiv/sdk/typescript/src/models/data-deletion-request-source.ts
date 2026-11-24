import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source from which the deletion request was created. */
export const DataDeletionRequestSource = {
  Zendesk: "zendesk",
  Retool: "retool",
  Website: "website",
  App: "app",
  PublicApi: "public_api",
  Other: "other",
} as const;
export type DataDeletionRequestSource =
  | (typeof DataDeletionRequestSource)[keyof typeof DataDeletionRequestSource]
  | (string & {});

export const dataDeletionRequestSourceSchema: EnumSchema<DataDeletionRequestSource> =
  s.enumOf<DataDeletionRequestSource>(DataDeletionRequestSource);
