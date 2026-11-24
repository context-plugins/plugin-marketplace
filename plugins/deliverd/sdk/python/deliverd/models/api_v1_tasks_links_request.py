from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind12 import Kind12OrStr


class ApiV1TasksLinksRequest(SdkBaseModel):
    target_task_id: UUID = Field(alias="targetTaskId")
    kind: Kind12OrStr


class ApiV1TasksLinksRequestDict(TypedDict):
    target_task_id: UUID
    kind: Kind12OrStr
