from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyLocationFilter(SdkBaseModel):
    country: Optional[str] = UNSET
    continent: Optional[str] = UNSET
    country_grouping: Optional[str] = UNSET


class CompanyLocationFilterDict(TypedDict):
    country: NotRequired[str]
    continent: NotRequired[str]
    country_grouping: NotRequired[str]
