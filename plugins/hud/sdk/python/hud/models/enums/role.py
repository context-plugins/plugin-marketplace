from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role(str, Enum):
    ADMIN = "admin"
    MEMBER = "member"
    EXTERNAL = "external"

    __str__ = str.__str__


RoleOrStr: TypeAlias = Annotated[Role | str, open_enum_validator(Role)]
