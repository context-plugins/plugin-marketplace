from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscGoogleBusinessPostResponse(SdkBaseModel):
    success: bool


class ApiV1MiscGoogleBusinessPostResponseDict(TypedDict):
    success: bool
