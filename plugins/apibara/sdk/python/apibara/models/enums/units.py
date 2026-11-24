from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Units(str, Enum):
    KM = "km"
    MI = "mi"

    __str__ = str.__str__


UnitsOrStr: TypeAlias = Annotated[Units | str, open_enum_validator(Units)]
