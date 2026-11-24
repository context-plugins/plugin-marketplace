from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.otp_channel_juri_sign_sign_requests_api import OtpChannelJuriSignSignRequestsApiOrStr


class Signer(SdkBaseModel):
    prenom: str
    """First name"""

    nom: str
    """Last name"""

    email: EmailStr
    """Email address"""

    otp_channel: OtpChannelJuriSignSignRequestsApiOrStr
    """OTP verification channel"""

    telephone: Optional[str] = UNSET
    """Required when otp_channel is 'sms'"""


class SignerDict(TypedDict):
    prenom: str
    nom: str
    email: EmailStr
    otp_channel: OtpChannelJuriSignSignRequestsApiOrStr
    telephone: NotRequired[str]
