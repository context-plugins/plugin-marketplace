from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Detail(str, Enum):
    FULL = "full"
    SLIM = "slim"

    __str__ = str.__str__


DetailOrStr: TypeAlias = Annotated[Detail | str, open_enum_validator(Detail)]
