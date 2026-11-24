from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MongodbChangeStreamPosition(SdkBaseModel):
    """MongoDB change stream position"""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Required. The timestamp to start change stream from."""


class MongodbChangeStreamPositionDict(TypedDict):
    start_time: NotRequired[str]
