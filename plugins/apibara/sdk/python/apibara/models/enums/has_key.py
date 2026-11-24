from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HasKey(str, Enum):
    NO = "No"
    ALL = "All"
    WITH = "With"

    __str__ = str.__str__


HasKeyOrStr: TypeAlias = Annotated[HasKey | str, open_enum_validator(HasKey)]
