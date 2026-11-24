from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1UploadRequest(SdkBaseModel):
    ids: list[str]


class ApiV1UploadRequestDict(TypedDict):
    ids: list[str]
