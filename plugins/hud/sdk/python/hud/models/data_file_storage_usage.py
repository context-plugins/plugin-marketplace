from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_file_storage_scope_usage import DataFileStorageScopeUsage, DataFileStorageScopeUsageDict


class DataFileStorageUsage(SdkBaseModel):
    team: DataFileStorageScopeUsage
    shared: DataFileStorageScopeUsage
    member: DataFileStorageScopeUsage


class DataFileStorageUsageDict(TypedDict):
    team: DataFileStorageScopeUsageDict
    shared: DataFileStorageScopeUsageDict
    member: DataFileStorageScopeUsageDict
