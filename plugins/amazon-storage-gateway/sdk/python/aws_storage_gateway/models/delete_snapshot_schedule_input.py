from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteSnapshotScheduleInput(SdkBaseModel):
    volume_arn: str = Field(alias="VolumeARN")
    """The volume which snapshot schedule to delete."""


class DeleteSnapshotScheduleInputDict(TypedDict):
    volume_arn: str
