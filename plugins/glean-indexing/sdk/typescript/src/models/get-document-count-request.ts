import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /getdocumentcount API call */
export type GetDocumentCountRequest = {
  /** Datasource name for which document count is needed. */
  datasource: string;
};

export const getDocumentCountRequestSchema: Schema<GetDocumentCountRequest> =
  s.object<GetDocumentCountRequest>({
    datasource: s.string(),
  });
