from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .platforms import Platforms, PlatformsDict


class ApiV1Response(SdkBaseModel):
    status: str
    created_at: str = Field(alias="createdAt")
    note: str
    platforms: Platforms


class ApiV1ResponseDict(TypedDict):
    status: str
    created_at: str
    note: str
    platforms: PlatformsDict
