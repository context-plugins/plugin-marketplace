from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubjectType1(str, Enum):
    REPOSITORY = "repository"
    WORKSPACE = "workspace"

    __str__ = str.__str__


SubjectType1OrStr: TypeAlias = Annotated[SubjectType1 | str, open_enum_validator(SubjectType1)]
