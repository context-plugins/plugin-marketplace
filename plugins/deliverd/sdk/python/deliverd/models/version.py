from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Version(SdkBaseModel):
    id: UUID
    version: float
    active: bool


class VersionDict(TypedDict):
    id: UUID
    version: float
    active: bool
