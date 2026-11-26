from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VoidType(str, Enum):
    """Void type enum."""

    VOID_AND_CREDIT = "VOID_AND_CREDIT"
    VOID_AND_REISSUE = "VOID_AND_REISSUE"
    VOID_ONLY = "VOID_ONLY"
    VOID_AND_REISSUE_VCARD = "VOID_AND_REISSUE_VCARD"

    __str__ = str.__str__


VoidTypeOrStr: TypeAlias = Annotated[VoidType | str, open_enum_validator(VoidType)]
