from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InstagramConnectionMethod(str, Enum):
    FACEBOOK = "FACEBOOK"
    INSTAGRAM = "INSTAGRAM"

    __str__ = str.__str__


InstagramConnectionMethodOrStr: TypeAlias = Annotated[
    InstagramConnectionMethod | str, open_enum_validator(InstagramConnectionMethod)
]
