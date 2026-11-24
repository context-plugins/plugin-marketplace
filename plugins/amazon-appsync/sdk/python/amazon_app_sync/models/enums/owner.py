from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Owner(str, Enum):
    CURRENT_ACCOUNT = "CURRENT_ACCOUNT"
    OTHER_ACCOUNTS = "OTHER_ACCOUNTS"

    __str__ = str.__str__


OwnerOrStr: TypeAlias = Annotated[Owner | str, open_enum_validator(Owner)]
