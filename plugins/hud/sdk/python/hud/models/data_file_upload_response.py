from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_file_response import DataFileResponse, DataFileResponseDict


class DataFileUploadResponse(SdkBaseModel):
    """A reserved data file and the presigned PUT that fills it."""

    file: DataFileResponse
    """Size is reserved up front and verified against the stored object on completion."""

    upload_url: str


class DataFileUploadResponseDict(TypedDict):
    file: DataFileResponseDict
    upload_url: str
