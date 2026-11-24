from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cachedi_scsi_volume import CachediScsiVolume, CachediScsiVolumeDict


class DescribeCachediScsiVolumesOutput(SdkBaseModel):
    cachedi_scsi_volumes: Optional[list[CachediScsiVolume]] = Field(default=UNSET, alias="CachediSCSIVolumes")
    """An array of objects where each object contains metadata about one cached volume."""


class DescribeCachediScsiVolumesOutputDict(TypedDict):
    cachedi_scsi_volumes: NotRequired[list[CachediScsiVolumeDict]]
