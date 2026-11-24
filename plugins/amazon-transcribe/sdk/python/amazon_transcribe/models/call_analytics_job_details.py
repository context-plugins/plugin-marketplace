from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .call_analytics_skipped_feature import CallAnalyticsSkippedFeature, CallAnalyticsSkippedFeatureDict


class CallAnalyticsJobDetails(SdkBaseModel):
    skipped: Optional[list[CallAnalyticsSkippedFeature]] = Field(default=UNSET, alias="Skipped")
    """Contains information about any skipped analytics features during the analysis of a call analytics job. This array
    lists all the analytics features that were skipped, along with their corresponding reason code and message."""


class CallAnalyticsJobDetailsDict(TypedDict):
    skipped: NotRequired[list[CallAnalyticsSkippedFeatureDict]]
