from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Example3(str, Enum):
    _1 = "1"
    TRIAL = "trial"
    UNSUPPORTED = "unsupported"
    LIST = "list"

    __str__ = str.__str__


Example3OrStr: TypeAlias = Annotated[Example3 | str, open_enum_validator(Example3)]
