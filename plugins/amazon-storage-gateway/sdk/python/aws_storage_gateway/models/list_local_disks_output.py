from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .disk import Disk, DiskDict


class ListLocalDisksOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    disks: Optional[list[Disk]] = Field(default=UNSET, alias="Disks")
    """A JSON object containing the following fields: ListLocalDisksOutput$Disks"""


class ListLocalDisksOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    disks: NotRequired[list[DiskDict]]
