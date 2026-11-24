from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AttachVolumeOutput(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume that was attached to the gateway."""

    target_arn: Optional[str] = Field(default=UNSET, alias="TargetARN")
    """The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for the initiator that was
    used to connect to the target."""


class AttachVolumeOutputDict(TypedDict):
    volume_arn: NotRequired[str]
    target_arn: NotRequired[str]
