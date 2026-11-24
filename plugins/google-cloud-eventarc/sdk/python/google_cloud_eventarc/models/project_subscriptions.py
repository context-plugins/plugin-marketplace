from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectSubscriptions(SdkBaseModel):
    """Config to enable subscribing to all events from a list of projects."""

    list_: Optional[list[str]] = Field(default=UNSET, alias="list")
    """Required. A list of projects to receive events from. All the projects must be in the same org. The listed
    projects should have the format project/{identifier} where identifier can be either the project id for project
    number. A single list may contain both formats. At most 100 projects can be listed."""


class ProjectSubscriptionsDict(TypedDict):
    list_: NotRequired[list[str]]
