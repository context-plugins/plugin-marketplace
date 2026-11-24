from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Deepdata(str, Enum):
    _1 = "1"

    __str__ = str.__str__


DeepdataOrStr: TypeAlias = Annotated[Deepdata | str, open_enum_validator(Deepdata)]
