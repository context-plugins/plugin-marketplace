from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind_deliverd_dev_tasks_api import KindDeliverdDevTasksApiOrStr
from .enums.origin import OriginOrStr
from .enums.outcome_deliverd_dev_tasks_api import OutcomeDeliverdDevTasksApiOrStr
from .enums.status_deliverd_dev_tasks_api import StatusDeliverdDevTasksApiOrStr
from .link_deliverd_dev_tasks_api import LinkDeliverdDevTasksApi, LinkDeliverdDevTasksApiDict
from .path import Path, PathDict
from .side_tasks import SideTasks, SideTasksDict
from .state1 import State1, State1Dict


class ApiV1TasksCompleteResponse(SdkBaseModel):
    id: UUID
    kind: KindDeliverdDevTasksApiOrStr
    status: StatusDeliverdDevTasksApiOrStr
    url: str
    title: str
    objective: str
    root_task_id: UUID = Field(alias="rootTaskId")
    parent_task_id: UUID | None = Field(alias="parentTaskId")
    depth: float
    workspace_id: UUID | None = Field(alias="workspaceId")
    flow_id: UUID | None = Field(alias="flowId")
    state: State1
    snapshot: dict[str, Any] | None
    result: dict[str, Any] | None
    previous_results: list[Any] = Field(alias="previousResults")
    outcome: OutcomeDeliverdDevTasksApiOrStr | None
    origin: OriginOrStr
    external_id: str | None = Field(alias="externalId")
    session_url: str | None = Field(alias="sessionUrl")
    version: float
    started_by: str = Field(alias="startedBy")
    created_at: str = Field(alias="createdAt")
    updated_at: str = Field(alias="updatedAt")
    completed_at: str | None = Field(alias="completedAt")
    side_tasks: Optional[SideTasks] = Field(default=UNSET, alias="sideTasks")
    path: Optional[list[Path]] = UNSET
    children: Optional[list[Any]] = UNSET
    findings: Optional[list[Any]] = UNSET
    links: Optional[list[LinkDeliverdDevTasksApi]] = UNSET


class ApiV1TasksCompleteResponseDict(TypedDict):
    id: UUID
    kind: KindDeliverdDevTasksApiOrStr
    status: StatusDeliverdDevTasksApiOrStr
    url: str
    title: str
    objective: str
    root_task_id: UUID
    parent_task_id: UUID | None
    depth: float
    workspace_id: UUID | None
    flow_id: UUID | None
    state: State1Dict
    snapshot: dict[str, Any] | None
    result: dict[str, Any] | None
    previous_results: list[Any]
    outcome: OutcomeDeliverdDevTasksApiOrStr | None
    origin: OriginOrStr
    external_id: str | None
    session_url: str | None
    version: float
    started_by: str
    created_at: str
    updated_at: str
    completed_at: str | None
    side_tasks: NotRequired[SideTasksDict]
    path: NotRequired[list[PathDict]]
    children: NotRequired[list[Any]]
    findings: NotRequired[list[Any]]
    links: NotRequired[list[LinkDeliverdDevTasksApiDict]]
