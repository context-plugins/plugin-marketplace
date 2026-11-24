from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SocialAccountCreatePortalLinkResponse(SdkBaseModel):
    url: str


class ApiV1SocialAccountCreatePortalLinkResponseDict(TypedDict):
    url: str
