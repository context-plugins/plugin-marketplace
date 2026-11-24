from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class CompassPullRequestInputPropertiesDto(SdkBaseModel):
    """The list of properties of the pull event."""

    id: str
    """The ID of the pull request event."""

    repo_url: str = Field(alias="repoUrl")
    """The URL of the repository of the pull request."""

    pull_request_url: str = Field(alias="pullRequestUrl")
    """The URL of the pull request."""

    status: StatusOrStr
    """The status of the pull request."""


class CompassPullRequestInputPropertiesDtoDict(TypedDict):
    id: str
    repo_url: str
    pull_request_url: str
    status: StatusOrStr
