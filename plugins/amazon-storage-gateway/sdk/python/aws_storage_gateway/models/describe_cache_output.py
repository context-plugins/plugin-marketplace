from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeCacheOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    disk_ids: Optional[list[str]] = Field(default=UNSET, alias="DiskIds")
    """An array of strings that identify disks that are to be configured as working storage. Each string has a minimum
    length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API."""

    cache_allocated_in_bytes: Optional[int] = Field(default=UNSET, alias="CacheAllocatedInBytes")
    """The amount of cache in bytes allocated to a gateway."""

    cache_used_percentage: Optional[float] = Field(default=UNSET, alias="CacheUsedPercentage")
    """Percent use of the gateway's cache storage. This metric applies only to the gateway-cached volume setup. The
    sample is taken at the end of the reporting period."""

    cache_dirty_percentage: Optional[float] = Field(default=UNSET, alias="CacheDirtyPercentage")
    """The file share's contribution to the overall percentage of the gateway's cache that has not been persisted to
    Amazon Web Services. The sample is taken at the end of the reporting period."""

    cache_hit_percentage: Optional[float] = Field(default=UNSET, alias="CacheHitPercentage")
    """Percent of application read operations from the file shares that are served from cache. The sample is taken at
    the end of the reporting period."""

    cache_miss_percentage: Optional[float] = Field(default=UNSET, alias="CacheMissPercentage")
    """Percent of application read operations from the file shares that are not served from cache. The sample is taken
    at the end of the reporting period."""


class DescribeCacheOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    disk_ids: NotRequired[list[str]]
    cache_allocated_in_bytes: NotRequired[int]
    cache_used_percentage: NotRequired[float]
    cache_dirty_percentage: NotRequired[float]
    cache_hit_percentage: NotRequired[float]
    cache_miss_percentage: NotRequired[float]
