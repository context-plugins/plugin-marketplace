from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.otp_channel import OtpChannelOrStr


class SignerJuriSignTemplatesApi(SdkBaseModel):
    prenom: Optional[str] = UNSET
    nom: Optional[str] = UNSET
    email: Optional[str] = UNSET
    telephone: OptionalNullable[str] = UNSET
    otp_channel: Optional[OtpChannelOrStr] = UNSET


class SignerJuriSignTemplatesApiDict(TypedDict):
    prenom: NotRequired[str]
    nom: NotRequired[str]
    email: NotRequired[str]
    telephone: NotRequired[str | None]
    otp_channel: NotRequired[OtpChannelOrStr]
