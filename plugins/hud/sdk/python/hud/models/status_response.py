from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StatusResponse(SdkBaseModel):
    status: str


class StatusResponseDict(TypedDict):
    status: str
