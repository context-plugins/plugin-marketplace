from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListVolumesInput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """A string that indicates the position at which to begin the returned list of volumes. Obtain the marker from the
    response of a previous List iSCSI Volumes request."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """Specifies that the list of volumes returned be limited to the specified number of items."""


class ListVolumesInputDict(TypedDict):
    gateway_arn: NotRequired[str]
    marker: NotRequired[str]
    limit: NotRequired[int]
