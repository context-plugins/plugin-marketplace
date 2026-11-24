from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type9(str, Enum):
    FACEBOOK = "FACEBOOK"
    INSTAGRAM = "INSTAGRAM"

    __str__ = str.__str__


Type9OrStr: TypeAlias = Annotated[Type9 | str, open_enum_validator(Type9)]
