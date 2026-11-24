from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetachVolumeInput(SdkBaseModel):
    volume_arn: str = Field(alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume to detach from the gateway."""

    force_detach: Optional[bool] = Field(default=UNSET, alias="ForceDetach")
    """Set to true to forcibly remove the iSCSI connection of the target volume and detach the volume. The default is
    false. If this value is set to false, you must manually disconnect the iSCSI connection from the target volume.
    Valid Values: true | false"""


class DetachVolumeInputDict(TypedDict):
    volume_arn: str
    force_detach: NotRequired[bool]
