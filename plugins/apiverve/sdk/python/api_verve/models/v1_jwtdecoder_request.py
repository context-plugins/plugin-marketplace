from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1JwtdecoderRequest(SdkBaseModel):
    token: str
    """JWT token to decode"""


class V1JwtdecoderRequestDict(TypedDict):
    token: str
