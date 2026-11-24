from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DecodeVin(str, Enum):
    TRUE = "true"
    _1 = "1"

    __str__ = str.__str__


DecodeVinOrStr: TypeAlias = Annotated[DecodeVin | str, open_enum_validator(DecodeVin)]
