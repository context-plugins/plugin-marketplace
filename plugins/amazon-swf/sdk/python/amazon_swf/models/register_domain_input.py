from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_tag import ResourceTag, ResourceTagDict


class RegisterDomainInput(SdkBaseModel):
    name: str
    r"""Name of the domain to register. The name must be unique in the region that the domain is registered in. The
    specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical
    bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn."""

    description: Optional[str] = UNSET
    """A text description of the domain."""

    workflow_execution_retention_period_in_days: str = Field(alias="workflowExecutionRetentionPeriodInDays")
    """The duration (in days) that records and histories of workflow executions on the domain should be kept by the
    service. After the retention period, the workflow execution isn't available in the results of visibility calls. If
    you pass the value NONE or 0 (zero), then the workflow execution history isn't retained. As soon as the workflow
    execution completes, the execution record and its history are deleted. The maximum workflow execution retention
    period is 90 days. For more information about Amazon SWF service limits, see: Amazon SWF Service Limits in the
    Amazon SWF Developer Guide."""

    tags: Optional[list[ResourceTag]] = UNSET
    """Tags to be added when registering a domain. Tags may only contain unicode letters, digits, whitespace, or these
    symbols: _ . : / = + - @."""


class RegisterDomainInputDict(TypedDict):
    name: str
    description: NotRequired[str]
    workflow_execution_retention_period_in_days: str
    tags: NotRequired[list[ResourceTagDict]]
