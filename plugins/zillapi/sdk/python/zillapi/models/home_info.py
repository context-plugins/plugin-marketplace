from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HomeInfo(SdkBaseModel):
    home_status: Optional[str] = Field(default=UNSET, alias="homeStatus")
    days_on_zillow: Optional[int] = Field(default=UNSET, alias="daysOnZillow")
    listing_sub_type: Optional[Any] = UNSET


class HomeInfoDict(TypedDict):
    home_status: NotRequired[str]
    days_on_zillow: NotRequired[int]
    listing_sub_type: NotRequired[Any]
