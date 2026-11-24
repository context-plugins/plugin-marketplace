from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MostFailedTest(SdkBaseModel):
    test_name: Optional[str] = UNSET
    """Name of the test"""

    classname: Optional[str] = UNSET
    """Class name of the test"""

    failed_runs: Optional[int] = UNSET
    """Number of failed runs"""

    total_runs: Optional[int] = UNSET
    """Total runs of this test"""


class MostFailedTestDict(TypedDict):
    test_name: NotRequired[str]
    classname: NotRequired[str]
    failed_runs: NotRequired[int]
    total_runs: NotRequired[int]
