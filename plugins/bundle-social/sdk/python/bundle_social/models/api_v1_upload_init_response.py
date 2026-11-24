from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1UploadInitResponse(SdkBaseModel):
    url: str
    path: str


class ApiV1UploadInitResponseDict(TypedDict):
    url: str
    path: str
