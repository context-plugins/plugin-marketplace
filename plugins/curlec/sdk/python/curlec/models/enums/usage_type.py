from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UsageType(str, Enum):
    SINGLE_USE = "single_use"
    MULTIPLE_USE = "multiple_use"

    __str__ = str.__str__


UsageTypeOrStr: TypeAlias = Annotated[UsageType | str, open_enum_validator(UsageType)]
