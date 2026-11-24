from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DurationMetrics1(SdkBaseModel):
    """Duration statistics"""

    min: Optional[int] = UNSET
    """Minimum duration in seconds"""

    mean: Optional[int] = UNSET
    """Mean duration in seconds"""

    median: Optional[int] = UNSET
    """Median duration in seconds"""

    p95: Optional[int] = UNSET
    """95th percentile duration"""

    max: Optional[int] = UNSET
    """Maximum duration in seconds"""


class DurationMetrics1Dict(TypedDict):
    min: NotRequired[int]
    mean: NotRequired[int]
    median: NotRequired[int]
    p95: NotRequired[int]
    max: NotRequired[int]
