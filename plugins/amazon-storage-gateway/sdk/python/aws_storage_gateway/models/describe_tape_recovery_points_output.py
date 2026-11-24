from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tape_recovery_point_info import TapeRecoveryPointInfo, TapeRecoveryPointInfoDict


class DescribeTapeRecoveryPointsOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    tape_recovery_point_infos: Optional[list[TapeRecoveryPointInfo]] = Field(
        default=UNSET, alias="TapeRecoveryPointInfos"
    )
    """An array of TapeRecoveryPointInfos that are available for the specified gateway."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which the virtual tape recovery points that were listed for
    description ended. Use this marker in your next request to list the next set of virtual tape recovery points in the
    list. If there are no more recovery points to describe, this field does not appear in the response."""


class DescribeTapeRecoveryPointsOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    tape_recovery_point_infos: NotRequired[list[TapeRecoveryPointInfoDict]]
    marker: NotRequired[str]
