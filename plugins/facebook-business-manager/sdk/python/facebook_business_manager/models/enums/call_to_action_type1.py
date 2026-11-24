from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CallToActionType1(str, Enum):
    """The call-to-action button type"""

    LEARN_MORE = "LEARN_MORE"
    SHOP_NOW = "SHOP_NOW"
    SIGN_UP = "SIGN_UP"
    BOOK_NOW = "BOOK_NOW"
    DOWNLOAD = "DOWNLOAD"
    GET_OFFER = "GET_OFFER"
    CONTACT_US = "CONTACT_US"
    SUBSCRIBE = "SUBSCRIBE"

    __str__ = str.__str__


CallToActionType1OrStr: TypeAlias = Annotated[CallToActionType1 | str, open_enum_validator(CallToActionType1)]
