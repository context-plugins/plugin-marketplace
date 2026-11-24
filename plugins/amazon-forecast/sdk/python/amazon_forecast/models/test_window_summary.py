from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TestWindowSummary(SdkBaseModel):
    test_window_start: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TestWindowStart")
    """The time at which the test began."""

    test_window_end: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TestWindowEnd")
    """The time at which the test ended."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the test. Possible status values are: ACTIVE CREATE_IN_PROGRESS CREATE_FAILED"""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If the test failed, the reason why it failed."""


class TestWindowSummaryDict(TypedDict):
    test_window_start: NotRequired[RFC3339DateTime]
    test_window_end: NotRequired[RFC3339DateTime]
    status: NotRequired[str]
    message: NotRequired[str]
