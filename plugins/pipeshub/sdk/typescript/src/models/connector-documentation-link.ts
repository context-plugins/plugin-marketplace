import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorDocumentationLink = {
  title?: string;
  url?: string;
  type?: string;
};

export const connectorDocumentationLinkSchema: Schema<ConnectorDocumentationLink> =
  s.object<ConnectorDocumentationLink>({
    title: s.optional(s.string()),
    url: s.optional(s.string()),
    type: s.optional(s.string()),
  });
