from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectBadge(SdkBaseModel):
    badge_enabled: Optional[bool] = Field(default=UNSET, alias="badgeEnabled")
    """Set this to true to generate a publicly accessible URL for your project's build badge."""

    badge_request_url: Optional[str] = Field(default=UNSET, alias="badgeRequestUrl")
    """The publicly-accessible URL through which you can access the build badge for your project."""


class ProjectBadgeDict(TypedDict):
    badge_enabled: NotRequired[bool]
    badge_request_url: NotRequired[str]
