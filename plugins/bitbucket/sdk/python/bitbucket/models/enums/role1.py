from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role1(str, Enum):
    ADMIN = "admin"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"
    OWNER = "owner"

    __str__ = str.__str__


Role1OrStr: TypeAlias = Annotated[Role1 | str, open_enum_validator(Role1)]
