from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IndieUserTokenRequest(SdkBaseModel):
    client_id: Optional[str] = UNSET
    """OAuth API key that is a public identifier for app"""

    client_secret: Optional[str] = UNSET
    """OAuth client secret that is a private secret known only to app and authorization server"""

    otp_verification_disabled: Optional[bool] = UNSET
    """To enable/disable otp auth flow"""


class IndieUserTokenRequestDict(TypedDict):
    client_id: NotRequired[str]
    client_secret: NotRequired[str]
    otp_verification_disabled: NotRequired[bool]
