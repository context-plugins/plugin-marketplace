from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.feature import FeatureOrStr
from .enums.reason_code import ReasonCodeOrStr


class CallAnalyticsSkippedFeature(SdkBaseModel):
    feature: Optional[FeatureOrStr] = Field(default=UNSET, alias="Feature")
    """Indicates the type of analytics feature that was skipped during the analysis of a call analytics job."""

    reason_code: Optional[ReasonCodeOrStr] = Field(default=UNSET, alias="ReasonCode")
    """Provides a code indicating the reason why a specific analytics feature was skipped during the analysis of a call
    analytics job."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """Contains additional information or a message explaining why a specific analytics feature was skipped during the
    analysis of a call analytics job."""


class CallAnalyticsSkippedFeatureDict(TypedDict):
    feature: NotRequired[FeatureOrStr]
    reason_code: NotRequired[ReasonCodeOrStr]
    message: NotRequired[str]
