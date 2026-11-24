from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .file import File, FileDict


class ApiV1ReportsVersionsRequest(SdkBaseModel):
    upload_id: Optional[UUID] = Field(default=UNSET, alias="uploadId")
    content: Optional[str] = UNSET
    files: Optional[list[File]] = UNSET
    title: Optional[str] = UNSET
    description: Optional[str] = UNSET
    source_tool: Optional[str] = Field(default=UNSET, alias="sourceTool")
    source_model: Optional[str] = Field(default=UNSET, alias="sourceModel")
    change_summary: Optional[str] = Field(default=UNSET, alias="changeSummary")
    expected_version: Optional[int] = Field(default=UNSET, alias="expectedVersion")
    stage: Optional[bool] = UNSET
    task_id: Optional[UUID] = Field(default=UNSET, alias="taskId")


class ApiV1ReportsVersionsRequestDict(TypedDict):
    upload_id: NotRequired[UUID]
    content: NotRequired[str]
    files: NotRequired[list[FileDict]]
    title: NotRequired[str]
    description: NotRequired[str]
    source_tool: NotRequired[str]
    source_model: NotRequired[str]
    change_summary: NotRequired[str]
    expected_version: NotRequired[int]
    stage: NotRequired[bool]
    task_id: NotRequired[UUID]
