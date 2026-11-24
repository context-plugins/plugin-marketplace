from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Quantiles(SdkBaseModel):
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    sum: Optional[str] = UNSET
    maximum: Optional[str] = UNSET
    percentile25: Optional[str] = UNSET
    minimum: Optional[str] = UNSET
    percentile50: Optional[str] = UNSET
    count: Optional[str] = UNSET
    percentile75: Optional[str] = UNSET


class QuantilesDict(TypedDict):
    sum: NotRequired[str]
    maximum: NotRequired[str]
    percentile25: NotRequired[str]
    minimum: NotRequired[str]
    percentile50: NotRequired[str]
    count: NotRequired[str]
    percentile75: NotRequired[str]
