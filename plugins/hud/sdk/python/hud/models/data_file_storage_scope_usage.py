from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DataFileStorageScopeUsage(SdkBaseModel):
    file_count: int
    size_bytes: int


class DataFileStorageScopeUsageDict(TypedDict):
    file_count: int
    size_bytes: int
