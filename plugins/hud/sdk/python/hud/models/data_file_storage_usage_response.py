from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_file_storage_usage import DataFileStorageUsage, DataFileStorageUsageDict
from .unions.limits_hud_platform_data_api import LimitsHudPlatformDataApi, LimitsHudPlatformDataApiDict


class DataFileStorageUsageResponse(SdkBaseModel):
    """Current storage use and effective limits for the caller's team and folder."""

    usage: DataFileStorageUsage
    limits: LimitsHudPlatformDataApi


class DataFileStorageUsageResponseDict(TypedDict):
    usage: DataFileStorageUsageDict
    limits: LimitsHudPlatformDataApiDict
