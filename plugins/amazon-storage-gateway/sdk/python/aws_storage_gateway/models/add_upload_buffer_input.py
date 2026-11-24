from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AddUploadBufferInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    disk_ids: list[str] = Field(alias="DiskIds")
    """An array of strings that identify disks that are to be configured as working storage. Each string has a minimum
    length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API."""


class AddUploadBufferInputDict(TypedDict):
    gateway_arn: str
    disk_ids: list[str]
