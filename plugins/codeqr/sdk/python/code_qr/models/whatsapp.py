from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Whatsapp(SdkBaseModel):
    """The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message."""

    number: str
    message: Optional[str] = UNSET


class WhatsappDict(TypedDict):
    number: str
    message: NotRequired[str]
