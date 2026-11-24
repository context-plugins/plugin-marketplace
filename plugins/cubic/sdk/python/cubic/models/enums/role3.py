from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role3(str, Enum):
    """Desired role. Send with expectedRole."""

    MEMBER = "member"
    ADMIN = "admin"
    VIEWER = "viewer"

    __str__ = str.__str__


Role3OrStr: TypeAlias = Annotated[Role3 | str, open_enum_validator(Role3)]
