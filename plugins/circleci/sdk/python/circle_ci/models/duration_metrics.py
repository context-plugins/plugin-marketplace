from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DurationMetrics(SdkBaseModel):
    """Duration statistics"""

    min: Optional[int] = UNSET
    """Minimum duration"""

    mean: Optional[int] = UNSET
    """Mean duration"""

    median: Optional[int] = UNSET
    """Median duration"""

    p95: Optional[int] = UNSET
    """95th percentile duration"""

    max: Optional[int] = UNSET
    """Maximum duration"""


class DurationMetricsDict(TypedDict):
    min: NotRequired[int]
    mean: NotRequired[int]
    median: NotRequired[int]
    p95: NotRequired[int]
    max: NotRequired[int]
