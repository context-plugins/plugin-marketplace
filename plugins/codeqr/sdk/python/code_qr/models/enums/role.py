from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role(str, Enum):
    """The role of the authenticated user in the project."""

    OWNER = "owner"
    MEMBER = "member"

    __str__ = str.__str__


RoleOrStr: TypeAlias = Annotated[Role | str, open_enum_validator(Role)]
