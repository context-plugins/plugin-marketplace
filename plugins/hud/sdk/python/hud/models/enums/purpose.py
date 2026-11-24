from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Purpose(str, Enum):
    EVAL = "EVAL"
    TRAINING = "TRAINING"

    __str__ = str.__str__


PurposeOrStr: TypeAlias = Annotated[Purpose | str, open_enum_validator(Purpose)]
