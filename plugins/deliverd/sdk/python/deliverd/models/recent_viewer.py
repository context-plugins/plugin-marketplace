from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecentViewer(SdkBaseModel):
    display_name: str = Field(alias="displayName")
    principal_type: str = Field(alias="principalType")
    view_count: float = Field(alias="viewCount")
    last_viewed_at: str = Field(alias="lastViewedAt")


class RecentViewerDict(TypedDict):
    display_name: str
    principal_type: str
    view_count: float
    last_viewed_at: str
