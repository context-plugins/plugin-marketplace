from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .executor_resource_request import ExecutorResourceRequest, ExecutorResourceRequestDict
from .task_resource_request import TaskResourceRequest, TaskResourceRequestDict


class ResourceProfileInfo(SdkBaseModel):
    """Resource profile that contains information about all the resources required by executors and tasks."""

    task_resources: Optional[dict[str, TaskResourceRequest]] = Field(default=UNSET, alias="taskResources")
    resource_profile_id: Optional[int] = Field(default=UNSET, alias="resourceProfileId")
    executor_resources: Optional[dict[str, ExecutorResourceRequest]] = Field(default=UNSET, alias="executorResources")


class ResourceProfileInfoDict(TypedDict):
    task_resources: NotRequired[dict[str, TaskResourceRequestDict]]
    resource_profile_id: NotRequired[int]
    executor_resources: NotRequired[dict[str, ExecutorResourceRequestDict]]
