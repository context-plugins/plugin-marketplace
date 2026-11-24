from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceInsightsApi(SdkBaseModel):
    pointer: Optional[str] = UNSET
    parameter: Optional[str] = UNSET


class SourceInsightsApiDict(TypedDict):
    pointer: NotRequired[str]
    parameter: NotRequired[str]
