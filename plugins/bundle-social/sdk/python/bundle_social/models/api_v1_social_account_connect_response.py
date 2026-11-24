from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SocialAccountConnectResponse(SdkBaseModel):
    url: str
    """OAuth URL - Redirect user to this URL to connect social account"""


class ApiV1SocialAccountConnectResponseDict(TypedDict):
    url: str
