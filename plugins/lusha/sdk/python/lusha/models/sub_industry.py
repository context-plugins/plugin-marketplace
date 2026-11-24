from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubIndustry(SdkBaseModel):
    value: Optional[str] = UNSET
    id: Optional[float] = UNSET


class SubIndustryDict(TypedDict):
    value: NotRequired[str]
    id: NotRequired[float]
