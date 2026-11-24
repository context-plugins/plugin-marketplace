from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisableIntVinDecoding(str, Enum):
    _1 = "1"

    __str__ = str.__str__


DisableIntVinDecodingOrStr: TypeAlias = Annotated[
    DisableIntVinDecoding | str, open_enum_validator(DisableIntVinDecoding)
]
