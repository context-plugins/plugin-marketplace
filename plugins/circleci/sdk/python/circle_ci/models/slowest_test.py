from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SlowestTest(SdkBaseModel):
    test_name: Optional[str] = UNSET
    """Name of the test"""

    classname: Optional[str] = UNSET
    """Class name of the test"""

    p95_duration: Optional[float] = UNSET
    """95th percentile duration"""


class SlowestTestDict(TypedDict):
    test_name: NotRequired[str]
    classname: NotRequired[str]
    p95_duration: NotRequired[float]
