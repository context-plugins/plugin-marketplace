from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """The type of content of the QR code."""

    URL = "url"
    TEXT = "text"
    EMAIL = "email"
    WIFI = "wifi"
    PHONE = "phone"
    VCARD = "vcard"
    CRYPTO = "crypto"
    SMS = "sms"
    FACETIME = "facetime"
    GEO = "geo"
    LATLOG = "latlog"
    PIX = "pix"
    WHATSAPP = "whatsapp"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
