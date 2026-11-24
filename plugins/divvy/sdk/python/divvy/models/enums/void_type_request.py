from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VoidTypeRequest(str, Enum):
    """Void type request enum."""

    VOID_AND_CREDIT = "VOID_AND_CREDIT"
    VOID_AND_REISSUE = "VOID_AND_REISSUE"

    __str__ = str.__str__


VoidTypeRequestOrStr: TypeAlias = Annotated[VoidTypeRequest | str, open_enum_validator(VoidTypeRequest)]
