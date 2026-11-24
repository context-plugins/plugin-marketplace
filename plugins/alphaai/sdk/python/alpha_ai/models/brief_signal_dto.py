from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BriefSignalDto(SdkBaseModel):
    ticker: str
    sentiment: Optional[str] = UNSET


class BriefSignalDtoDict(TypedDict):
    ticker: str
    sentiment: NotRequired[str]
