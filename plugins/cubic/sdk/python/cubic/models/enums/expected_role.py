from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExpectedRole(str, Enum):
    """Current role from your latest read; send only with role."""

    MEMBER = "member"
    ADMIN = "admin"
    VIEWER = "viewer"

    __str__ = str.__str__


ExpectedRoleOrStr: TypeAlias = Annotated[ExpectedRole | str, open_enum_validator(ExpectedRole)]
