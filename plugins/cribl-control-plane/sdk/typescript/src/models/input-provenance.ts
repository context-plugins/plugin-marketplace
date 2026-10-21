import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  originOptionsCriblSourceProvenanceSchema,
  type OriginOptionsCriblSourceProvenance,
} from "./origin-options-cribl-source-provenance.js";
import {
  templateFamilyOptionsCriblSourceProvenanceSchema,
  type TemplateFamilyOptionsCriblSourceProvenance,
} from "./template-family-options-cribl-source-provenance.js";

/**
 * Read-only metadata that records how the Source was created. Preserved on update when omitted from
 * the request body. Cannot be set on create.
 */
export type InputProvenance = {
  /** Feature that created the Source. */
  origin?: OriginOptionsCriblSourceProvenance;
  /** ARN of the S3 bucket or Firehose delivery stream configured as the Source. */
  destinationArn?: string;
  /** ARN of the AWS resource that produces the logs. */
  sourceArn?: string;
  /** Resolved DSD source-service offering, when known. */
  sourceService?: string;
  /**
   * Cloud tenant or scope id the Source was configured for (for example an AWS account id, GCP
   * project or folder id, or Azure subscription or resource group id).
   */
  accountId?: string;
  /**
   * Infrastructure-as-code family that provisioned the AWS resources (absent means cloudformation).
   */
  templateFamily?: TemplateFamilyOptionsCriblSourceProvenance;
};

export const inputProvenanceSchema: Schema<InputProvenance> = s.object<InputProvenance>({
  origin: s.optional(s.lazy(() => originOptionsCriblSourceProvenanceSchema)),
  destinationArn: s.optional(s.string()),
  sourceArn: s.optional(s.string()),
  sourceService: s.optional(s.string()),
  accountId: s.optional(s.string()),
  templateFamily: s.optional(s.lazy(() => templateFamilyOptionsCriblSourceProvenanceSchema)),
});
