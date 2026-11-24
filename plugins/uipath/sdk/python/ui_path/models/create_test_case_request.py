from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateTestCaseRequest(SdkBaseModel):
    """Request payload for creating a new test case"""

    name: str
    """Display name for the new test case"""

    description: Optional[str] = UNSET
    """Description of the test scenario"""

    labels: Optional[list[str]] = UNSET
    """Labels to apply to the test case"""


class CreateTestCaseRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    labels: NotRequired[list[str]]
