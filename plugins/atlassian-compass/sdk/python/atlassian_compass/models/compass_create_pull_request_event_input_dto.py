from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .compass_pull_request_input_properties_dto1 import (
    CompassPullRequestInputPropertiesDto1,
    CompassPullRequestInputPropertiesDto1Dict,
)


class CompassCreatePullRequestEventInputDto(SdkBaseModel):
    """A pull request event. Warning: This option is currently only usable by Forge apps and does not add events to the
    Activity Feed."""

    last_updated: RFC3339DateTime = Field(alias="lastUpdated")
    """The last time this event was updated."""

    cloud_id: OptionalNullable[str] = Field(default=UNSET, alias="cloudId")
    """The cloud ID of the event."""

    pull_request_properties: CompassPullRequestInputPropertiesDto1 = Field(alias="pullRequestProperties")
    """The list of properties of the pull request event."""


class CompassCreatePullRequestEventInputDtoDict(TypedDict):
    last_updated: RFC3339DateTime
    cloud_id: NotRequired[str | None]
    pull_request_properties: CompassPullRequestInputPropertiesDto1Dict
