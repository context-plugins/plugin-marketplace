import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allFailureReasonSchema, type AllFailureReason } from "./all-failure-reason.js";
import {
  documentVerificationStatusSchema,
  type DocumentVerificationStatus,
} from "./document-verification-status.js";
import { links2Schema, type Links2 } from "./links2.js";
import { status6Schema, type Status6 } from "./status6.js";
import { typeSchema, type Type } from "./type.js";

/** Identity verification document for a customer or beneficial owner */
export type Document = {
  links: Links2;
  /** Unique identifier for the document */
  id: string;
  /** Current status of the document upload */
  status: Status6;
  /** Type of identity document uploaded */
  type: Type;
  /** ISO-8601 timestamp when the document was uploaded */
  created: Date;
  /** Verification status of the document after review */
  documentVerificationStatus: DocumentVerificationStatus;
  /** Primary reason why document verification failed (if rejected) */
  failureReason?: string;
  /** Complete list of all failure reasons if document verification was rejected */
  allFailureReasons?: AllFailureReason[];
};

export const documentSchema: Schema<Document> = s.object<Document>({
  links: links2Schema,
  id: s.string(),
  status: status6Schema,
  type: typeSchema,
  created: s.dateTime(),
  documentVerificationStatus: documentVerificationStatusSchema,
  failureReason: s.optional(s.string()),
  allFailureReasons: s.optional(s.array(s.lazy(() => allFailureReasonSchema))),
  _keysMap: {
    links: "_links",
  },
});
