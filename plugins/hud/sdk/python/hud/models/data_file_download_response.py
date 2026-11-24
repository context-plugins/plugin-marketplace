from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DataFileDownloadResponse(SdkBaseModel):
    """Short-lived links to a ready file: ``url`` renders in place, ``download_url`` saves."""

    url: str
    download_url: str


class DataFileDownloadResponseDict(TypedDict):
    url: str
    download_url: str
