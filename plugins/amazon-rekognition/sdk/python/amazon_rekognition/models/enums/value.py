from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Value(str, Enum):
    """The predicted gender of the face."""

    MALE = "Male"
    FEMALE = "Female"

    __str__ = str.__str__


ValueOrStr: TypeAlias = Annotated[Value | str, open_enum_validator(Value)]
