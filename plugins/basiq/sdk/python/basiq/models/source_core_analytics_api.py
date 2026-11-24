from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceCoreAnalyticsApi(SdkBaseModel):
    parameter: Optional[str] = UNSET


class SourceCoreAnalyticsApiDict(TypedDict):
    parameter: NotRequired[str]
