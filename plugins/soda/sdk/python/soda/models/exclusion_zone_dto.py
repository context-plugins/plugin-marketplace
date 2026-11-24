from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExclusionZoneDto(SdkBaseModel):
    lower_limit: float = Field(alias="lowerLimit")
    single_value: Optional[bool] = Field(default=UNSET, alias="singleValue")
    upper_limit: float = Field(alias="upperLimit")


class ExclusionZoneDtoDict(TypedDict):
    lower_limit: float
    single_value: NotRequired[bool]
    upper_limit: float
