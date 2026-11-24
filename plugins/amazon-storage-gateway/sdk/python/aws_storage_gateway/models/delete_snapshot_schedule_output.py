from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteSnapshotScheduleOutput(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The volume which snapshot schedule was deleted."""


class DeleteSnapshotScheduleOutputDict(TypedDict):
    volume_arn: NotRequired[str]
