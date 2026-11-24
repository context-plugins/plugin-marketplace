from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscSlackMessageResponse(SdkBaseModel):
    success: bool
    permalink: str


class ApiV1MiscSlackMessageResponseDict(TypedDict):
    success: bool
    permalink: str
