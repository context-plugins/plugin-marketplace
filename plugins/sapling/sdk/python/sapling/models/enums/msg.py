from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Msg(str, Enum):
    ALIVE = "alive"

    __str__ = str.__str__


MsgOrStr: TypeAlias = Annotated[Msg | str, open_enum_validator(Msg)]
