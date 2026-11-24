from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TestCounts(SdkBaseModel):
    """Test counts by result"""

    error: Optional[int] = UNSET
    """Number of errored tests"""

    failure: Optional[int] = UNSET
    """Number of failed tests"""

    success: Optional[int] = UNSET
    """Number of successful tests"""

    skipped: Optional[int] = UNSET
    """Number of skipped tests"""


class TestCountsDict(TypedDict):
    error: NotRequired[int]
    failure: NotRequired[int]
    success: NotRequired[int]
    skipped: NotRequired[int]
