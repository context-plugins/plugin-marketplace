from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DoiTUsersApi(str, Enum):
    """The status of the user (invited)"""

    INVITED = "invited"

    __str__ = str.__str__


Status1DoiTUsersApiOrStr: TypeAlias = Annotated[Status1DoiTUsersApi | str, open_enum_validator(Status1DoiTUsersApi)]
