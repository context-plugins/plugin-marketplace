from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetricValue(SdkBaseModel):
    """The value of a metric."""

    value: Optional[str] = UNSET
    """Measurement value. See MetricHeader for type."""


class MetricValueDict(TypedDict):
    value: NotRequired[str]
