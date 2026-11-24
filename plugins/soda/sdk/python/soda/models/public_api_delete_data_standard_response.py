from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiDeleteDataStandardResponse(SdkBaseModel):
    message: str


class PublicApiDeleteDataStandardResponseDict(TypedDict):
    message: str
