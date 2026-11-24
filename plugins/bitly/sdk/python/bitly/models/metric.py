from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Metric(SdkBaseModel):
    key: Optional[str] = UNSET
    value: Optional[int] = UNSET


class MetricDict(TypedDict):
    key: NotRequired[str]
    value: NotRequired[int]
