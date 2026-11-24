from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VolumeiScsiAttributes(SdkBaseModel):
    target_arn: Optional[str] = Field(default=UNSET, alias="TargetARN")
    """The Amazon Resource Name (ARN) of the volume target."""

    network_interface_id: Optional[str] = Field(default=UNSET, alias="NetworkInterfaceId")
    """The network interface identifier."""

    network_interface_port: Optional[int] = Field(default=UNSET, alias="NetworkInterfacePort")
    """The port used to communicate with iSCSI targets."""

    lun_number: Optional[int] = Field(default=UNSET, alias="LunNumber")
    """The logical disk number."""

    chap_enabled: Optional[bool] = Field(default=UNSET, alias="ChapEnabled")
    """Indicates whether mutual CHAP is enabled for the iSCSI target."""


class VolumeiScsiAttributesDict(TypedDict):
    target_arn: NotRequired[str]
    network_interface_id: NotRequired[str]
    network_interface_port: NotRequired[int]
    lun_number: NotRequired[int]
    chap_enabled: NotRequired[bool]
