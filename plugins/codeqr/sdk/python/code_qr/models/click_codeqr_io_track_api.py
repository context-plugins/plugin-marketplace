from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ClickCodeqrIoTrackApi(SdkBaseModel):
    id: str


class ClickCodeqrIoTrackApiDict(TypedDict):
    id: str
