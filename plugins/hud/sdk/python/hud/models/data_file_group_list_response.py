from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_file_group import DataFileGroup, DataFileGroupDict


class DataFileGroupListResponse(SdkBaseModel):
    groups: list[DataFileGroup]


class DataFileGroupListResponseDict(TypedDict):
    groups: list[DataFileGroupDict]
