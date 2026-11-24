from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    OTHER = "other"

    __str__ = str.__str__


GenderEnumOrStr: TypeAlias = Annotated[GenderEnum | str, open_enum_validator(GenderEnum)]
