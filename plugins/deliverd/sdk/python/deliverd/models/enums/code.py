from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    AGENT_NOT_PERMITTED = "agent_not_permitted"
    NOT_PERMITTED = "not_permitted"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
