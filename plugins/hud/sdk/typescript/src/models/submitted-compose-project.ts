import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  submittedComposeDocumentInternalSchema,
  submittedComposeDocumentSchema,
  type SubmittedComposeDocument,
} from "./submitted-compose-document.js";
import { rootInternalSchema, rootSchema, type Root } from "./unions/root.js";
import { serviceAccessSchema, type ServiceAccess } from "./unions/service-access.js";

/** Compose document and its optional environment source artifact. */
export type SubmittedComposeProject = {
  /** Normalized Compose document transported with a hosted runtime artifact. */
  document: SubmittedComposeDocument;
  root?: Root;
  serviceAccess?: ServiceAccess;
};

const submittedComposeProjectProperties: s.Shape<SubmittedComposeProject> = {
  document: submittedComposeDocumentInternalSchema,
  root: s.optional(s.lazy(() => rootInternalSchema)),
  serviceAccess: s.optional(s.lazy(() => serviceAccessSchema)),
  _keysMap: {
    serviceAccess: "service_access",
  },
};

export const submittedComposeProjectInternalSchema: Schema<SubmittedComposeProject> =
  s.object<SubmittedComposeProject>(submittedComposeProjectProperties);

export const submittedComposeProjectSchema: Schema<SubmittedComposeProject> = s.lazySchema(() =>
  s.object<SubmittedComposeProject>({
    ...submittedComposeProjectProperties,
    document: submittedComposeDocumentSchema,
    root: s.optional(s.lazy(() => rootSchema)),
  }),
);
