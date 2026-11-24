from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeUploadBufferOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    disk_ids: Optional[list[str]] = Field(default=UNSET, alias="DiskIds")
    """An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified
    as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage,
    then the DiskIds array is empty."""

    upload_buffer_used_in_bytes: Optional[int] = Field(default=UNSET, alias="UploadBufferUsedInBytes")
    """The total number of bytes being used in the gateway's upload buffer."""

    upload_buffer_allocated_in_bytes: Optional[int] = Field(default=UNSET, alias="UploadBufferAllocatedInBytes")
    """The total number of bytes allocated in the gateway's as upload buffer."""


class DescribeUploadBufferOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    disk_ids: NotRequired[list[str]]
    upload_buffer_used_in_bytes: NotRequired[int]
    upload_buffer_allocated_in_bytes: NotRequired[int]
