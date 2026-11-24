from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .home_info import HomeInfo, HomeInfoDict


class HdpData(SdkBaseModel):
    home_info: Optional[HomeInfo] = Field(default=UNSET, alias="homeInfo")


class HdpDataDict(TypedDict):
    home_info: NotRequired[HomeInfoDict]
