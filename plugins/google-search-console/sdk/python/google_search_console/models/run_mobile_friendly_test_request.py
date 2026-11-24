from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RunMobileFriendlyTestRequest(SdkBaseModel):
    """Mobile-friendly test request."""

    url: Optional[str] = UNSET
    """URL for inspection."""

    request_screenshot: Optional[bool] = Field(default=UNSET, alias="requestScreenshot")
    """Whether or not screenshot is requested. Default is false."""


class RunMobileFriendlyTestRequestDict(TypedDict):
    url: NotRequired[str]
    request_screenshot: NotRequired[bool]
