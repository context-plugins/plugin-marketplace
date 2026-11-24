from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Path(SdkBaseModel):
    id: UUID
    title: str
    kind: str


class PathDict(TypedDict):
    id: UUID
    title: str
    kind: str
