import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { associationStatusSchema, type AssociationStatus } from "./association-status.js";

export type ApiAssociation = {
  /** The domain name. */
  domainName?: string;
  /** The API ID. */
  apiId?: string;
  /**
   * Identifies the status of an association. PROCESSING: The API association is being created. You
   * cannot modify association requests during processing. SUCCESS: The API association was
   * successful. You can modify associations after success. FAILED: The API association has failed.
   * You can modify associations after failure.
   */
  associationStatus?: AssociationStatus;
  /** Details about the last deployment status. */
  deploymentDetail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiAssociationSchema: Schema<ApiAssociation> = s.object<ApiAssociation>(
  {
    domainName: s.optional(s.string()),
    apiId: s.optional(s.string()),
    associationStatus: s.optional(s.lazy(() => associationStatusSchema)),
    deploymentDetail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
