from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteChapCredentialsInput(SdkBaseModel):
    target_arn: str = Field(alias="TargetARN")
    """The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return
    to retrieve the TargetARN for specified VolumeARN."""

    initiator_name: str = Field(alias="InitiatorName")
    """The iSCSI initiator that connects to the target."""


class DeleteChapCredentialsInputDict(TypedDict):
    target_arn: str
    initiator_name: str
