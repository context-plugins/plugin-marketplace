from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class FilterByLocation(SdkBaseModel):
    country: Optional[str] = UNSET
    state: Optional[str] = UNSET
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")


class FilterByLocationDict(TypedDict):
    country: NotRequired[str]
    state: NotRequired[str]
    start_date: NotRequired[Date]
