from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sub_industry import SubIndustry, SubIndustryDict


class IndustryLabel(SdkBaseModel):
    main_industry: Optional[str] = UNSET
    main_industry_id: Optional[float] = UNSET
    sub_industries: Optional[list[SubIndustry]] = UNSET


class IndustryLabelDict(TypedDict):
    main_industry: NotRequired[str]
    main_industry_id: NotRequired[float]
    sub_industries: NotRequired[list[SubIndustryDict]]
