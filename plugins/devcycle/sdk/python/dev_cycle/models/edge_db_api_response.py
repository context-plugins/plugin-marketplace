from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EdgeDbApiResponse(SdkBaseModel):
    message: str
    """Response message of the request"""


class EdgeDbApiResponseDict(TypedDict):
    message: str
