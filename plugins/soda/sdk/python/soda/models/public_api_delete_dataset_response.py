from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiDeleteDatasetResponse(SdkBaseModel):
    message: str


class PublicApiDeleteDatasetResponseDict(TypedDict):
    message: str
