from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdditionalIndustry(SdkBaseModel):
    industry: Optional[str] = UNSET
    sub_industry: Optional[str] = Field(default=UNSET, alias="subIndustry")


class AdditionalIndustryDict(TypedDict):
    industry: NotRequired[str]
    sub_industry: NotRequired[str]
