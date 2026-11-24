from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .volume_recovery_point_info import VolumeRecoveryPointInfo, VolumeRecoveryPointInfoDict


class ListVolumeRecoveryPointsOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    volume_recovery_point_infos: Optional[list[VolumeRecoveryPointInfo]] = Field(
        default=UNSET, alias="VolumeRecoveryPointInfos"
    )
    """An array of VolumeRecoveryPointInfo objects."""


class ListVolumeRecoveryPointsOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    volume_recovery_point_infos: NotRequired[list[VolumeRecoveryPointInfoDict]]
