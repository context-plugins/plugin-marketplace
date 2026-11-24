from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnalyticsMeta(SdkBaseModel):
    """Analytics metadata"""

    product_event_uuid: Optional[str] = UNSET
    """UUID for product analytics event"""


class AnalyticsMetaDict(TypedDict):
    product_event_uuid: NotRequired[str]
