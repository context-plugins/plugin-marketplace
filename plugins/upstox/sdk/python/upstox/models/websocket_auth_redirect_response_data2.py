from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebsocketAuthRedirectResponseData2(SdkBaseModel):
    """Response data for WebsocketAuthRedirectResponse"""

    authorized_redirect_uri: Optional[str] = Field(default=UNSET, alias="authorizedRedirectUri")
    authorized_redirect_uri2: Optional[str] = Field(default=UNSET, alias="authorized_redirect_uri")


class WebsocketAuthRedirectResponseData2Dict(TypedDict):
    authorized_redirect_uri: NotRequired[str]
    authorized_redirect_uri2: NotRequired[str]
