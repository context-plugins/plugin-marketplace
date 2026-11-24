from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mobile_friendliness import MobileFriendlinessOrStr
from .image1 import Image1, Image1Dict
from .mobile_friendly_issue import MobileFriendlyIssue, MobileFriendlyIssueDict
from .resource_issue import ResourceIssue, ResourceIssueDict
from .test_status1 import TestStatus1, TestStatus1Dict


class RunMobileFriendlyTestResponse(SdkBaseModel):
    """Mobile-friendly test response, including mobile-friendly issues and resource issues."""

    mobile_friendly_issues: Optional[list[MobileFriendlyIssue]] = Field(default=UNSET, alias="mobileFriendlyIssues")
    """List of mobile-usability issues."""

    resource_issues: Optional[list[ResourceIssue]] = Field(default=UNSET, alias="resourceIssues")
    """Information about embedded resources issues."""

    mobile_friendliness: Optional[MobileFriendlinessOrStr] = Field(default=UNSET, alias="mobileFriendliness")
    """Test verdict, whether the page is mobile friendly or not."""

    test_status: Optional[TestStatus1] = Field(default=UNSET, alias="testStatus")
    """Final state of the test, can be either complete or an error."""

    screenshot: Optional[Image1] = UNSET
    """Screenshot of the requested URL."""


class RunMobileFriendlyTestResponseDict(TypedDict):
    mobile_friendly_issues: NotRequired[list[MobileFriendlyIssueDict]]
    resource_issues: NotRequired[list[ResourceIssueDict]]
    mobile_friendliness: NotRequired[MobileFriendlinessOrStr]
    test_status: NotRequired[TestStatus1Dict]
    screenshot: NotRequired[Image1Dict]
