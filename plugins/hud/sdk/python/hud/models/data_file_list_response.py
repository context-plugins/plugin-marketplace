from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_file_response import DataFileResponse, DataFileResponseDict


class DataFileListResponse(SdkBaseModel):
    files: list[DataFileResponse]
    total: int


class DataFileListResponseDict(TypedDict):
    files: list[DataFileResponseDict]
    total: int
