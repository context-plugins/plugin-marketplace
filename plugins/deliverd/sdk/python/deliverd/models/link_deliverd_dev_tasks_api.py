from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinkDeliverdDevTasksApi(SdkBaseModel):
    source_task_id: UUID = Field(alias="sourceTaskId")
    target_task_id: UUID = Field(alias="targetTaskId")
    kind: str


class LinkDeliverdDevTasksApiDict(TypedDict):
    source_task_id: UUID
    target_task_id: UUID
    kind: str
