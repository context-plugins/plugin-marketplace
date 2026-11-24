from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class ImportUploadRequest(SdkBaseModel):
    """A bundle upload, reserved in the caller's data folder under the format's size limit.

    Publish the uploaded file with ``POST /data/{file_id}/complete`` before importing it."""

    filename: str
    size_bytes: int
    content_type: str = "application/octet-stream"
    format: Literal["harbor"] = "harbor"


class ImportUploadRequestDict(TypedDict):
    filename: str
    size_bytes: int
    content_type: NotRequired[str]
    format: Literal["harbor"]
