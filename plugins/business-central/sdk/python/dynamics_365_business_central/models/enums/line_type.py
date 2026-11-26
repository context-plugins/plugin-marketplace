from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LineType(str, Enum):
    COMMENT = "Comment"
    ACCOUNT = "Account"
    ITEM = "Item"
    FIXED_ASSET = "Fixed Asset"
    CHARGE = "Charge"

    __str__ = str.__str__


LineTypeOrStr: TypeAlias = Annotated[LineType | str, open_enum_validator(LineType)]
