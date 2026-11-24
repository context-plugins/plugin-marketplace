import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindDeliverdDevReportsApiSchema,
  type KindDeliverdDevReportsApi,
} from "./kind-deliverd-dev-reports-api.js";

export type Attachment = {
  id: string;
  kind: KindDeliverdDevReportsApi;
  contentType: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>(
  {
    id: s.string(),
    kind: kindDeliverdDevReportsApiSchema,
    contentType: s.string(),
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
