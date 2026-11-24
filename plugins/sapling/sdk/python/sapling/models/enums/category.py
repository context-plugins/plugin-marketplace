from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    GENDER = "gender"
    RACE_ETHNICITY = "race_ethnicity"
    DISABILITY = "disability"
    AGE = "age"
    LGBTQ = "lgbtq"
    RELIGION = "religion"
    SOCIOECONOMIC = "socioeconomic"
    APPEARANCE = "appearance"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
