from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeWorkingStorageOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    disk_ids: Optional[list[str]] = Field(default=UNSET, alias="DiskIds")
    """An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified
    as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage,
    then the DiskIds array is empty."""

    working_storage_used_in_bytes: Optional[int] = Field(default=UNSET, alias="WorkingStorageUsedInBytes")
    """The total working storage in bytes in use by the gateway. If no working storage is configured for the gateway,
    this field returns 0."""

    working_storage_allocated_in_bytes: Optional[int] = Field(default=UNSET, alias="WorkingStorageAllocatedInBytes")
    """The total working storage in bytes allocated for the gateway. If no working storage is configured for the
    gateway, this field returns 0."""


class DescribeWorkingStorageOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    disk_ids: NotRequired[list[str]]
    working_storage_used_in_bytes: NotRequired[int]
    working_storage_allocated_in_bytes: NotRequired[int]
