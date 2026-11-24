from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BucketWidth(str, Enum):
    _1H = "1h"
    _1D = "1d"

    __str__ = str.__str__


BucketWidthOrStr: TypeAlias = Annotated[BucketWidth | str, open_enum_validator(BucketWidth)]
