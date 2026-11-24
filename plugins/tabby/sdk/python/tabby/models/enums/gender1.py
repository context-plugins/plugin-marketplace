from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Gender1(str, Enum):
    """Who the goods are designed to."""

    MALE = "Male"
    FEMALE = "Female"
    KIDS = "Kids"
    OTHER = "Other"

    __str__ = str.__str__


Gender1OrStr: TypeAlias = Annotated[Gender1 | str, open_enum_validator(Gender1)]
