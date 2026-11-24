from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DataFileUpdateRequest(SdkBaseModel):
    filename: str


class DataFileUpdateRequestDict(TypedDict):
    filename: str
