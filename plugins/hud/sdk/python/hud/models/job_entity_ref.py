from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class JobEntityRef(SdkBaseModel):
    id: UUID
    name: str


class JobEntityRefDict(TypedDict):
    id: UUID
    name: str
