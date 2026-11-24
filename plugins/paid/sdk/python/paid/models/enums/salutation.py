from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Salutation(str, Enum):
    MR = "Mr."
    MRS = "Mrs."
    MISS = "Miss"
    MS = "Ms."
    DR = "Dr."
    PROF = "Prof."

    __str__ = str.__str__


SalutationOrStr: TypeAlias = Annotated[Salutation | str, open_enum_validator(Salutation)]
