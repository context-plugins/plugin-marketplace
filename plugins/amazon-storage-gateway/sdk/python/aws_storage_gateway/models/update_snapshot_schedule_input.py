from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class UpdateSnapshotScheduleInput(SdkBaseModel):
    volume_arn: str = Field(alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway
    volumes."""

    start_at: int = Field(alias="StartAt")
    """The hour of the day at which the snapshot schedule begins represented as hh, where hh is the hour (0 to 23). The
    hour of the day is in the time zone of the gateway."""

    recurrence_in_hours: int = Field(alias="RecurrenceInHours")
    """Frequency of snapshots. Specify the number of hours between snapshots."""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Optional description of the snapshot that overwrites the existing description."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair. Valid characters for
    key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters:
    + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is
    256."""


class UpdateSnapshotScheduleInputDict(TypedDict):
    volume_arn: str
    start_at: int
    recurrence_in_hours: int
    description: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
