from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubjectType(str, Enum):
    """The type of entity. Set to either ``repository`` or ``workspace`` based on where the subscription is defined."""

    REPOSITORY = "repository"
    WORKSPACE = "workspace"

    __str__ = str.__str__


SubjectTypeOrStr: TypeAlias = Annotated[SubjectType | str, open_enum_validator(SubjectType)]
