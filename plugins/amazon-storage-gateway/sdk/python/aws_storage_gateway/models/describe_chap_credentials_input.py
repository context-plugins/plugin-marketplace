from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeChapCredentialsInput(SdkBaseModel):
    target_arn: str = Field(alias="TargetARN")
    """The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return
    to retrieve the TargetARN for specified VolumeARN."""


class DescribeChapCredentialsInputDict(TypedDict):
    target_arn: str
