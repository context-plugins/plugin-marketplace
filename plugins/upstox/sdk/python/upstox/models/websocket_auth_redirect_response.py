from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .websocket_auth_redirect_response_data2 import (
    WebsocketAuthRedirectResponseData2,
    WebsocketAuthRedirectResponseData2Dict,
)


class WebsocketAuthRedirectResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[WebsocketAuthRedirectResponseData2] = UNSET
    """Response data for WebsocketAuthRedirectResponse"""


class WebsocketAuthRedirectResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[WebsocketAuthRedirectResponseData2Dict]
