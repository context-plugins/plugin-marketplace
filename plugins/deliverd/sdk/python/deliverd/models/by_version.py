from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ByVersion(SdkBaseModel):
    version_number: float = Field(alias="versionNumber")
    views: float
    unique_viewers: float = Field(alias="uniqueViewers")
    last_viewed_at: str | None = Field(alias="lastViewedAt")


class ByVersionDict(TypedDict):
    version_number: float
    views: float
    unique_viewers: float
    last_viewed_at: str | None
