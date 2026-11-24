from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .storedi_scsi_volume import StorediScsiVolume, StorediScsiVolumeDict


class DescribeStorediScsiVolumesOutput(SdkBaseModel):
    storedi_scsi_volumes: Optional[list[StorediScsiVolume]] = Field(default=UNSET, alias="StorediSCSIVolumes")
    """Describes a single unit of output from DescribeStorediSCSIVolumes. The following fields are returned:
    ChapEnabled: Indicates whether mutual CHAP is enabled for the iSCSI target. LunNumber: The logical disk number.
    NetworkInterfaceId: The network interface ID of the stored volume that initiator use to map the stored volume as an
    iSCSI target. NetworkInterfacePort: The port used to communicate with iSCSI targets. PreservedExistingData:
    Indicates when the stored volume was created, existing data on the underlying local disk was preserved.
    SourceSnapshotId: If the stored volume was created from a"""


class DescribeStorediScsiVolumesOutputDict(TypedDict):
    storedi_scsi_volumes: NotRequired[list[StorediScsiVolumeDict]]
