from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class DescribeSnapshotScheduleOutput(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume that was specified in the request."""

    start_at: Optional[int] = Field(default=UNSET, alias="StartAt")
    """The hour of the day at which the snapshot schedule begins represented as hh, where hh is the hour (0 to 23). The
    hour of the day is in the time zone of the gateway."""

    recurrence_in_hours: Optional[int] = Field(default=UNSET, alias="RecurrenceInHours")
    """The number of hours between snapshots."""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """The snapshot description."""

    timezone: Optional[str] = Field(default=UNSET, alias="Timezone")
    """A value that indicates the time zone of the gateway."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key name. Each tag is a
    key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource
    API operation."""


class DescribeSnapshotScheduleOutputDict(TypedDict):
    volume_arn: NotRequired[str]
    start_at: NotRequired[int]
    recurrence_in_hours: NotRequired[int]
    description: NotRequired[str]
    timezone: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
