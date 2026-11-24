from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeCodeqrIoQrCodesApi(str, Enum):
    """The type of the QR code."""

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


TypeCodeqrIoQrCodesApiOrStr: TypeAlias = Annotated[
    TypeCodeqrIoQrCodesApi | str, open_enum_validator(TypeCodeqrIoQrCodesApi)
]
