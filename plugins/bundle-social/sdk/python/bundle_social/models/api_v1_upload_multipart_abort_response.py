from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1UploadMultipartAbortResponse(SdkBaseModel):
    success: bool


class ApiV1UploadMultipartAbortResponseDict(TypedDict):
    success: bool
