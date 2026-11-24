from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClickMetric(SdkBaseModel):
    clicks: Optional[int] = UNSET
    value: Optional[str] = UNSET


class ClickMetricDict(TypedDict):
    clicks: NotRequired[int]
    value: NotRequired[str]
