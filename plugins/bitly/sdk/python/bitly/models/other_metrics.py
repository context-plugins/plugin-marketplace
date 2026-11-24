from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OtherMetrics(SdkBaseModel):
    other_city_clicks: Optional[int] = UNSET
    no_city_clicks: Optional[int] = UNSET


class OtherMetricsDict(TypedDict):
    other_city_clicks: NotRequired[int]
    no_city_clicks: NotRequired[int]
