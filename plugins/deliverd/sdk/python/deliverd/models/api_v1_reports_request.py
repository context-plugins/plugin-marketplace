from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.classification_deliverd_dev_reports_api import ClassificationDeliverdDevReportsApiOrStr
from .file import File, FileDict
from .unions.audience1 import Audience1, Audience1Dict


class ApiV1ReportsRequest(SdkBaseModel):
    title: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    description: Optional[str] = UNSET
    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    audience: Optional[list[Audience1]] = UNSET
    classification: Optional[ClassificationDeliverdDevReportsApiOrStr] = UNSET
    living: Optional[bool] = UNSET
    source_tool: Optional[str] = Field(default=UNSET, alias="sourceTool")
    source_model: Optional[str] = Field(default=UNSET, alias="sourceModel")
    change_summary: Optional[str] = Field(default=UNSET, alias="changeSummary")
    expected_version: Optional[int] = Field(default=UNSET, alias="expectedVersion")
    flow_id: Optional[UUID] = Field(default=UNSET, alias="flowId")
    task_id: Optional[UUID] = Field(default=UNSET, alias="taskId")
    stage: Optional[bool] = UNSET
    upload_id: Optional[UUID] = Field(default=UNSET, alias="uploadId")
    content: Optional[str] = UNSET
    files: Optional[list[File]] = UNSET


class ApiV1ReportsRequestDict(TypedDict):
    title: NotRequired[str]
    slug: NotRequired[str]
    description: NotRequired[str]
    workspace_id: NotRequired[UUID]
    audience: NotRequired[list[Audience1Dict]]
    classification: NotRequired[ClassificationDeliverdDevReportsApiOrStr]
    living: NotRequired[bool]
    source_tool: NotRequired[str]
    source_model: NotRequired[str]
    change_summary: NotRequired[str]
    expected_version: NotRequired[int]
    flow_id: NotRequired[UUID]
    task_id: NotRequired[UUID]
    stage: NotRequired[bool]
    upload_id: NotRequired[UUID]
    content: NotRequired[str]
    files: NotRequired[list[FileDict]]
