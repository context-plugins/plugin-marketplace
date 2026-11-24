from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .volume_info import VolumeInfo, VolumeInfoDict


class ListVolumesOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """Use the marker in your next request to continue pagination of iSCSI volumes. If there are no more volumes to
    list, this field does not appear in the response body."""

    volume_infos: Optional[list[VolumeInfo]] = Field(default=UNSET, alias="VolumeInfos")
    """An array of VolumeInfo objects, where each object describes an iSCSI volume. If no volumes are defined for the
    gateway, then VolumeInfos is an empty array "[]"."""


class ListVolumesOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    marker: NotRequired[str]
    volume_infos: NotRequired[list[VolumeInfoDict]]
