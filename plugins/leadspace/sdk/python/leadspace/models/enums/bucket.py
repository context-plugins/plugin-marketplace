from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Bucket(str, Enum):
    A = "A"
    B = "B"
    C = "C"
    D = "D"

    __str__ = str.__str__


BucketOrStr: TypeAlias = Annotated[Bucket | str, open_enum_validator(Bucket)]
