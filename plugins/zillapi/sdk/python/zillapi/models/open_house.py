from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class OpenHouse(SdkBaseModel):
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")


class OpenHouseDict(TypedDict):
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
