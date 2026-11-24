from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TasksetTaskRef(SdkBaseModel):
    id: UUID
    name: str


class TasksetTaskRefDict(TypedDict):
    id: UUID
    name: str
