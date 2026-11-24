from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .cloudflow_run_node import CloudflowRunNode, CloudflowRunNodeDict
from .enums.status_doi_t_cloud_flow_api import StatusDoiTCloudFlowApiOrStr


class CloudflowRun(SdkBaseModel):
    """A run plus what each of its nodes consumed and produced."""

    id: str
    flow_id: str = Field(alias="flowId")
    flow_name: Optional[str] = Field(default=UNSET, alias="flowName")
    status: StatusDoiTCloudFlowApiOrStr
    is_test: bool = Field(alias="isTest")
    """True when the run was started through ``actions/test-run``."""

    triggered_by: str = Field(alias="triggeredBy")
    trigger_time: RFC3339DateTime = Field(alias="triggerTime")
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    error: OptionalNullable[str] = UNSET
    stopped_by: OptionalNullable[str] = Field(default=UNSET, alias="stoppedBy")
    nodes: list[CloudflowRunNode]
    """One entry per node, in execution order."""


class CloudflowRunDict(TypedDict):
    id: str
    flow_id: str
    flow_name: NotRequired[str]
    status: StatusDoiTCloudFlowApiOrStr
    is_test: bool
    triggered_by: str
    trigger_time: RFC3339DateTime
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    error: NotRequired[str | None]
    stopped_by: NotRequired[str | None]
    nodes: list[CloudflowRunNodeDict]
