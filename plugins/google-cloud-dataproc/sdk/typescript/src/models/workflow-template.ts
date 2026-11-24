import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudDataprocV1WorkflowTemplateEncryptionConfig1Schema,
  type GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1,
} from "./google-cloud-dataproc-v1-workflow-template-encryption-config1.js";
import { orderedJobSchema, type OrderedJob } from "./ordered-job.js";
import { templateParameterSchema, type TemplateParameter } from "./template-parameter.js";
import {
  workflowTemplatePlacement1Schema,
  type WorkflowTemplatePlacement1,
} from "./workflow-template-placement1.js";

/** A Dataproc workflow template resource. */
export type WorkflowTemplate = {
  /**
   * Optional. Template parameters whose values are substituted into the template. Values for
   * parameters must be provided when the template is instantiated.
   */
  parameters?: TemplateParameter[];
  /**
   * Optional. Used to perform a consistent read-modify-write.This field should be left blank for a
   * CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must
   * match the current server version. A typical update template flow would fetch the current
   * template with a GetWorkflowTemplate request, which will return the current template with the
   * version field filled in with the current server version. The user updates other fields in the
   * template, then returns it as part of the UpdateWorkflowTemplate request.
   */
  version?: number;
  /** Required. WorkflowTemplate scheduling information. */
  placement?: WorkflowTemplatePlacement1;
  /** Optional. Encryption settings for encrypting workflow template job arguments. */
  encryptionConfig?: GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1;
  /**
   * Output only. The resource name of the workflow template, as described in
   * https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,
   * the resource name of the template has the following format:
   * projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For
   * projects.locations.workflowTemplates, the resource name of the template has the following
   * format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
   */
  name?: string;
  /** Output only. The time template was created. */
  createTime?: string;
  /**
   * Optional. The labels to associate with this template. These labels will be propagated to all
   * jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters,
   * and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty,
   * but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a
   * template.
   */
  labels?: Record<string, string>;
  /**
   * Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation
   * of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout
   * duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the
   * first job is submitted. If the workflow is running at the end of the timeout period, any
   * remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a
   * managed cluster, the cluster is deleted.
   */
  dagTimeout?: string;
  id?: string;
  /** Output only. The time template was last updated. */
  updateTime?: string;
  /** Required. The Directed Acyclic Graph of Jobs to submit. */
  jobs?: OrderedJob[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTemplateSchema: Schema<WorkflowTemplate> = s.object<WorkflowTemplate>(
  {
    parameters: s.optional(s.array(s.lazy(() => templateParameterSchema))),
    version: s.optional(s.int()),
    placement: s.optional(s.lazy(() => workflowTemplatePlacement1Schema)),
    encryptionConfig: s.optional(s.lazy(() => googleCloudDataprocV1WorkflowTemplateEncryptionConfig1Schema)),
    name: s.optional(s.string()),
    createTime: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    dagTimeout: s.optional(s.string()),
    id: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    jobs: s.optional(s.array(s.lazy(() => orderedJobSchema))),
  },
  { additionalProperties: s.json() },
);
