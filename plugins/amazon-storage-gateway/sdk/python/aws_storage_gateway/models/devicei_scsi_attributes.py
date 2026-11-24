from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeviceiScsiAttributes(SdkBaseModel):
    target_arn: Optional[str] = Field(default=UNSET, alias="TargetARN")
    """Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a tape drive or
    media changer target."""

    network_interface_id: Optional[str] = Field(default=UNSET, alias="NetworkInterfaceId")
    """The network interface identifier of the VTL device."""

    network_interface_port: Optional[int] = Field(default=UNSET, alias="NetworkInterfacePort")
    """The port used to communicate with iSCSI VTL device targets."""

    chap_enabled: Optional[bool] = Field(default=UNSET, alias="ChapEnabled")
    """Indicates whether mutual CHAP is enabled for the iSCSI target."""


class DeviceiScsiAttributesDict(TypedDict):
    target_arn: NotRequired[str]
    network_interface_id: NotRequired[str]
    network_interface_port: NotRequired[int]
    chap_enabled: NotRequired[bool]
