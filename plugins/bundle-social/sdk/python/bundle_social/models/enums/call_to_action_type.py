from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CallToActionType(str, Enum):
    BOOK = "BOOK"
    ORDER = "ORDER"
    SHOP = "SHOP"
    LEARN_MORE = "LEARN_MORE"
    SIGN_UP = "SIGN_UP"
    CALL = "CALL"

    __str__ = str.__str__


CallToActionTypeOrStr: TypeAlias = Annotated[CallToActionType | str, open_enum_validator(CallToActionType)]
