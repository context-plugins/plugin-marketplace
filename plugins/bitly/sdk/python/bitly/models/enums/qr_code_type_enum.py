from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QrCodeTypeEnum(str, Enum):
    """The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink, email, text, Wifi,
    etc."""

    BITLINK = "bitlink"
    LONG_URL = "long_url"
    LINK_IN_BIO = "link_in_bio"
    V_CARD = "v_card"
    WIFI = "wifi"
    EMAIL = "email"
    PHONE = "phone"
    TEXT = "text"

    __str__ = str.__str__


QrCodeTypeEnumOrStr: TypeAlias = Annotated[QrCodeTypeEnum | str, open_enum_validator(QrCodeTypeEnum)]
