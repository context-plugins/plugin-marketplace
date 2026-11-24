from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_dataproc_v1_workflow_template_encryption_config1 import (
    GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1,
    GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1Dict,
)
from .ordered_job import OrderedJob, OrderedJobDict
from .template_parameter import TemplateParameter, TemplateParameterDict
from .workflow_template_placement1 import WorkflowTemplatePlacement1, WorkflowTemplatePlacement1Dict


class WorkflowTemplate(SdkBaseModel):
    """A Dataproc workflow template resource."""

    parameters: Optional[list[TemplateParameter]] = UNSET
    """Optional. Template parameters whose values are substituted into the template. Values for parameters must be
    provided when the template is instantiated."""

    version: Optional[int] = UNSET
    """Optional. Used to perform a consistent read-modify-write.This field should be left blank for a
    CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current
    server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request,
    which will return the current template with the version field filled in with the current server version. The user
    updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request."""

    placement: Optional[WorkflowTemplatePlacement1] = UNSET
    """Required. WorkflowTemplate scheduling information."""

    encryption_config: Optional[GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1] = Field(
        default=UNSET, alias="encryptionConfig"
    )
    """Optional. Encryption settings for encrypting workflow template job arguments."""

    name: Optional[str] = UNSET
    """Output only. The resource name of the workflow template, as described in
    https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of
    the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For
    projects.locations.workflowTemplates, the resource name of the template has the following format:
    projects/{project_id}/locations/{location}/workflowTemplates/{template_id}"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time template was created."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters
    created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035
    (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters,
    and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a
    template."""

    dag_timeout: Optional[str] = Field(default=UNSET, alias="dagTimeout")
    """Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration
    (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes
    ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the
    end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running
    on a managed cluster, the cluster is deleted."""

    id: Optional[str] = UNSET
    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time template was last updated."""

    jobs: Optional[list[OrderedJob]] = UNSET
    """Required. The Directed Acyclic Graph of Jobs to submit."""


class WorkflowTemplateDict(TypedDict):
    parameters: NotRequired[list[TemplateParameterDict]]
    version: NotRequired[int]
    placement: NotRequired[WorkflowTemplatePlacement1Dict]
    encryption_config: NotRequired[GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1Dict]
    name: NotRequired[str]
    create_time: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    dag_timeout: NotRequired[str]
    id: NotRequired[str]
    update_time: NotRequired[str]
    jobs: NotRequired[list[OrderedJobDict]]
